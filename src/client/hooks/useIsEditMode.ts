import { useEffect, useState } from 'react';

function parseEditFlag(): boolean {
	try {
		const hasSearch = typeof window !== 'undefined' && window.location.search && window.location.search.length > 1;
		const raw = hasSearch ? window.location.search.slice(1) : (window.location.hash.split('?')[1] || '');
		const params = new URLSearchParams(raw);
		return params.get('edit') === '1';
	} catch {
		return false;
	}
}

export function useIsEditMode(): boolean {
	const [isEdit, setIsEdit] = useState<boolean>(parseEditFlag());

	useEffect(() => {
		const onChange = () => setIsEdit(parseEditFlag());
		window.addEventListener('hashchange', onChange);
		window.addEventListener('popstate', onChange);
		return () => {
			window.removeEventListener('hashchange', onChange);
			window.removeEventListener('popstate', onChange);
		};
	}, []);

	return isEdit;
}

export default useIsEditMode;


