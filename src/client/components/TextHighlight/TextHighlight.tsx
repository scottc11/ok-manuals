import React from "react";

const TextHighlight = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <span className={`text-onyx bg-lime font-mono px-1 rounded-sm ${className}`}>
            {children}
        </span>
    )
}

export default TextHighlight;