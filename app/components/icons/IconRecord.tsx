interface IconProps {
    size?: number | string;
    color?: string;
    className?: string;
}

export function IconRecord({ size = 24, color = "currentColor", className }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M3 9V3H9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 3H21V9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 15V21H15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 21H3V15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="4.5" fill={color} />
        </svg>
    );
}
