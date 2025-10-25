import React, { useMemo } from 'react';
import { useContentStore } from '../../hooks/useContentStore';
import EditableText from '../../components/Editable/EditableText';

const EditableContentTest = () => {
	const isEdit = useMemo(() => {
		try {
			// Support both search (?edit=1) and hash-bang (#/path?edit=1)
			const raw = window.location.search && window.location.search.length > 1
				? window.location.search.slice(1)
				: (window.location.hash.split('?')[1] || '');
			const params = new URLSearchParams(raw);
			return params.get('edit') === '1';
		} catch {
			return false;
		}
	}, []);

	const store = useContentStore({ type: 'news', slug: 'editable-content-test' });

	return (
		<div className="text-black font-body">
			<article className="bg-white p-4 md:p-6 rounded-lg shadow-onyx/30 shadow-md">
				<header className="mb-6">
					<EditableText
						tag="h1"
						k="header.title"
						className="text-4xl md:text-6xl font-bungee font-bold mb-1"
						fallback="Inline CMS Test"
						edit={isEdit}
						value={store.get('header.title')}
						onChange={(v) => store.set('header.title', v)}
						onBlurSave={store.save}
					/>
					<EditableText
						tag="p"
						k="header.date"
						className="text-onyx/60"
						fallback="01-01-2025"
						edit={isEdit}
						value={store.get('header.date')}
						onChange={(v) => store.set('header.date', v)}
						onBlurSave={store.save}
					/>
				</header>

				<section className="space-y-4 text-lg leading-relaxed">
					<EditableText
						tag="p"
						k="intro.0"
						className=""
						fallback="Start editing this paragraph..."
						edit={isEdit}
						value={store.get('intro.0')}
						onChange={(v) => store.set('intro.0', v)}
						onBlurSave={store.save}
					/>
					<EditableText
						tag="p"
						k="intro.1"
						className=""
						fallback="Add more content here."
						edit={isEdit}
						value={store.get('intro.1')}
						onChange={(v) => store.set('intro.1', v)}
						onBlurSave={store.save}
					/>
				</section>

				<section className="mt-8">
					<EditableText
						tag="h2"
						k="section1.title"
						className="text-2xl md:text-3xl font-unica mb-3"
						fallback="Section Title"
						edit={isEdit}
						value={store.get('section1.title')}
						onChange={(v) => store.set('section1.title', v)}
						onBlurSave={store.save}
					/>
					<EditableText
						tag="p"
						k="section1.body"
						className="text-lg leading-relaxed"
						fallback="Section body content..."
						edit={isEdit}
						value={store.get('section1.body')}
						onChange={(v) => store.set('section1.body', v)}
						onBlurSave={store.save}
					/>
				</section>
			</article>
		</div>
	);
};

export default EditableContentTest;


