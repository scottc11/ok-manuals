interface IconProps {
    size?: number | string;
    color?: string;
    className?: string;
}

export function IconSequencing({ size = 24, color = "currentColor", className }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <rect x="2" y="5" width="4" height="5.5" rx="0.75" fill={color} />
            <rect x="7" y="5" width="4" height="5.5" rx="0.75" stroke={color} strokeWidth="1" fill="none" opacity={0.3} />
            <rect x="12" y="5" width="4" height="5.5" rx="0.75" fill={color} />
            <rect x="17" y="5" width="4" height="5.5" rx="0.75" stroke={color} strokeWidth="1" fill="none" opacity={0.3} />
            <rect x="2" y="12" width="4" height="5.5" rx="0.75" stroke={color} strokeWidth="1" fill="none" opacity={0.3} />
            <rect x="7" y="12" width="4" height="5.5" rx="0.75" fill={color} />
            <rect x="12" y="12" width="4" height="5.5" rx="0.75" stroke={color} strokeWidth="1" fill="none" opacity={0.3} />
            <rect x="17" y="12" width="4" height="5.5" rx="0.75" fill={color} />
            <line x1="2" y1="20.5" x2="22" y2="20.5" stroke={color} strokeWidth="0.75" strokeLinecap="round" opacity={0.25} />
            <line x1="9" y1="19.5" x2="9" y2="21.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}
