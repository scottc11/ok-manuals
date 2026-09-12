interface IconProps {
    size?: number | string;
    color?: string;
    className?: string;
}

export function IconMIDI({ size = 24, color = "currentColor", className }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 712 266"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M0 0H233C252.6 0 264 16.9 264 37V266H199V67H161V266H102V67H65V266H0V0Z" fill={color} />
            <path d="M361 0H296V266H361V0Z" fill={color} />
            <path d="M392 0H585C604.6 0 616 16.9 616 37V233C616 257.9 605.6 266 583 266H392V97H458V201H551V60H392V0Z" fill={color} />
            <path d="M712 0H646V266H712V0Z" fill={color} />
        </svg>
    );
}
