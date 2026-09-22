interface IconProps {
    size?: number | string;
    color?: string;
    className?: string;
}

export function IconControl({ size = 24, color = "currentColor", className }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <line x1="6" y1="3" x2="6" y2="21" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="12" y1="3" x2="12" y2="21" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="18" y1="3" x2="18" y2="21" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <rect x="3.25" y="6" width="5.5" height="3" rx="1.5" fill={color} />
            <rect x="9.25" y="14" width="5.5" height="3" rx="1.5" fill={color} />
            <rect x="15.25" y="10" width="5.5" height="3" rx="1.5" fill={color} />
        </svg>
    );
}
