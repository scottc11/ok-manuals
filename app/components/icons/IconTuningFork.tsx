interface IconProps {
    size?: number | string;
    color?: string;
    className?: string;
}

export function IconTuningFork({ size = 24, color = "currentColor", className }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <line x1="9" y1="4" x2="9" y2="14" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
            <line x1="15" y1="4" x2="15" y2="14" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
            <path
                d="M9 14 Q9 17.5 12 17.5 Q15 17.5 15 14"
                stroke={color}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <line x1="12" y1="17.5" x2="12" y2="22" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    );
}
