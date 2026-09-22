interface IconProps {
    size?: number | string;
    color?: string;
    className?: string;
}

export function IconTuner({ size = 24, color = "currentColor", className }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M4 20 A9 9 0 0 1 20 20" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <line x1="4" y1="20" x2="6" y2="19" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="5.7" y1="9.5" x2="7.6" y2="11.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="12" y1="7" x2="12" y2="9.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="18.3" y1="9.5" x2="16.4" y2="11.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="20" y1="20" x2="18" y2="19" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="12" y1="20" x2="12" y2="9.5" stroke={color} strokeWidth="1.75" strokeLinecap="round" />
            <circle cx="12" cy="20" r="1.75" fill={color} />
        </svg>
    );
}
