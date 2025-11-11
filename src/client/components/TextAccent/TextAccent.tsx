import React from "react";

const TextAccent = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <span className={`text-azure font-unica p-1 rounded-sm ${className}`}>
            {children}
        </span>
    )
}

export default TextAccent;