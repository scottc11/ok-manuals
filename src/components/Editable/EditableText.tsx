import React, { useCallback, useEffect, useRef } from 'react';

type AllowedTags = 'h1' | 'h2' | 'h3' | 'p';

type Props = {
	tag: AllowedTags;
	k: string;
	className?: string;
	fallback?: string;
	edit?: boolean;
	value?: string;
	onChange?: (value: string) => void;
	onBlurSave?: () => void;
};

export const EditableText: React.FC<Props> = ({ tag, k, className, fallback, edit = false, value = '', onChange, onBlurSave }) => {
	const ref = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (!ref.current) return;
		const currentText = ref.current.textContent ?? '';
		if (value !== currentText) {
			ref.current.textContent = value || fallback || '';
		}
	}, [value, fallback]);

	const handleInput = useCallback(() => {
		if (!ref.current) return;
		onChange?.(ref.current.textContent || '');
	}, [onChange]);

	const handleBlur = useCallback(() => {
		onBlurSave?.();
	}, [onBlurSave]);

	const Tag = tag as any;

	return (
		<Tag
			ref={ref as any}
			className={className}
			contentEditable={edit}
			suppressContentEditableWarning
			role={edit ? 'textbox' : undefined}
			aria-label={edit ? k : undefined}
			onInput={edit ? handleInput : undefined}
			onBlur={edit ? handleBlur : undefined}
		>
			{!edit ? (value || fallback || '') : null}
		</Tag>
	);
};

export default EditableText;


