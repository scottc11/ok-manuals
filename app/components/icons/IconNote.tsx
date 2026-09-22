interface IconProps {
    size?: number | string;
    color?: string;
    className?: string;
}

export function IconNote({ size = 24, color = "currentColor", className }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <ellipse cx="9" cy="19" rx="4" ry="2.75" transform="rotate(-15 9 19)" fill={color} />
            <line x1="12.6" y1="17.5" x2="12.6" y2="5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M12.6 5 C17 6.5 18 10 15.5 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
    );
}
