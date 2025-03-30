import React from 'react';

const Button = ({ children, onClick, disabled }: { children: React.ReactNode, onClick: () => void, disabled?: boolean }) => {
    return (
        <button onClick={onClick} disabled={disabled} className="bg-lavender text-white px-4 py-2 rounded-md hover:bg-lavender/70">{children}</button>
    )
}

export default Button;