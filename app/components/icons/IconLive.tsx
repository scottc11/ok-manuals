interface IconProps {
    size?: number | string;
    color?: string;
    className?: string;
}

export function IconLive({ size = 24, color = "currentColor", className }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <rect x="9" y="2" width="6" height="11" rx="3" stroke={color} strokeWidth="1.5" />
            <path d="M5.5 6.5 Q3.5 9 5.5 11.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M18.5 6.5 Q20.5 9 18.5 11.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M3 4.5 Q0.5 9 3 13.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity={0.45} />
            <path d="M21 4.5 Q23.5 9 21 13.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity={0.45} />
            <line x1="12" y1="13" x2="12" y2="19" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="8.5" y1="19" x2="15.5" y2="19" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}
