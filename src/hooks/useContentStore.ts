import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type ContentMap = Record<string, string>;

type UseContentStoreArgs = {
	type: string;
	slug: string;
};

type UseContentStore = (args: UseContentStoreArgs) => {
	content: ContentMap;
	get: (key: string) => string;
	set: (key: string, value: string) => void;
	save: () => Promise<void>;
	isSaving: boolean;
};

export const useContentStore: UseContentStore = ({ type, slug }) => {
	const [content, setContent] = useState<ContentMap>({});
	const [isSaving, setIsSaving] = useState(false);
	const pendingRef = useRef<ContentMap>({});

	// Load once
	useEffect(() => {
		let cancelled = false;
		(async () => {
			try {
				const res = await fetch(`${process.env.API_DOMAIN}/api/content?type=${encodeURIComponent(type)}&slug=${encodeURIComponent(slug)}`);
				if (!res.ok) throw new Error('Failed to load content');
				const data = await res.json();
				if (!cancelled) setContent((data?.content as ContentMap) || {});
			} catch (e) {
				// noop for now
			}
		})();
		return () => {
			cancelled = true;
		};
	}, [type, slug]);

	const get = useCallback(
		(key: string) => {
			return content[key] ?? '';
		},
		[content]
	);

	const set = useCallback((key: string, value: string) => {
		pendingRef.current = { ...pendingRef.current, [key]: value };
		setContent(prev => ({ ...prev, [key]: value }));
	}, []);

	const save = useCallback(async () => {
		const toSave = { ...content };
		setIsSaving(true);
		try {
			await fetch(`${process.env.API_DOMAIN}/api/content?type=${encodeURIComponent(type)}&slug=${encodeURIComponent(slug)}`,
				{
					method: 'PUT',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ content: toSave }),
				}
			);
		} finally {
			setIsSaving(false);
		}
	}, [content, type, slug]);

	return useMemo(
		() => ({ content, get, set, save, isSaving }),
		[content, get, set, save, isSaving]
	);
};


