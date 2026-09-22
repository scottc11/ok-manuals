interface IconProps {
    size?: number | string;
    color?: string;
    className?: string;
}

export function IconScales({ size = 24, color = "currentColor", className }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <line x1="1.5" y1="8" x2="22.5" y2="8" stroke={color} strokeWidth="0.75" strokeLinecap="round" opacity={0.28} />
            <line x1="1.5" y1="11.5" x2="22.5" y2="11.5" stroke={color} strokeWidth="0.75" strokeLinecap="round" opacity={0.28} />
            <line x1="1.5" y1="15" x2="22.5" y2="15" stroke={color} strokeWidth="0.75" strokeLinecap="round" opacity={0.28} />
            <line x1="1.5" y1="18.5" x2="22.5" y2="18.5" stroke={color} strokeWidth="0.75" strokeLinecap="round" opacity={0.28} />
            <circle cx="3" cy="18.5" r="1.5" fill={color} />
            <circle cx="5.75" cy="17" r="1.5" fill={color} />
            <circle cx="8.5" cy="15" r="1.5" fill={color} />
            <circle cx="11.25" cy="13.5" r="1.5" fill={color} />
            <circle cx="14" cy="11.5" r="1.5" fill={color} />
            <circle cx="16.75" cy="10" r="1.5" fill={color} />
            <circle cx="19.5" cy="8" r="1.5" fill={color} />
            <circle cx="22" cy="6.5" r="1.5" fill={color} />
        </svg>
    );
}
