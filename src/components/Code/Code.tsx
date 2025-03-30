import React from 'react';

const Code = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="font-mono bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded border border-gray-200">{children}</span>
    )
}

export default Code;