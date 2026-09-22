interface IconProps {
    size?: number | string;
    color?: string;
    className?: string;
}

export function IconArpeggiator({ size = 24, color = "currentColor", className }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M3.5 20.5 C6.5 17 10 14 12.5 11.5 C15 9 18.5 7 21 5"
                stroke={color}
                strokeWidth="1.4"
                strokeLinecap="round"
                fill="none"
            />
            <circle cx="3.5" cy="20.5" r="2" fill={color} />
            <circle cx="9.5" cy="14.5" r="2" fill={color} />
            <circle cx="15.5" cy="10" r="2" fill={color} />
            <circle cx="21" cy="5" r="2" fill={color} />
            <circle cx="3.5" cy="23" r="0.65" fill={color} opacity={0.4} />
            <circle cx="9.5" cy="23" r="0.65" fill={color} opacity={0.4} />
            <circle cx="15.5" cy="23" r="0.65" fill={color} opacity={0.4} />
            <circle cx="21" cy="23" r="0.65" fill={color} opacity={0.4} />
        </svg>
    );
}
