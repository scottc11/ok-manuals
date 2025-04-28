import React, { useState } from 'react';

const Button = ({ children, onClick, disabled }: { children: React.ReactNode, onClick: () => void, disabled?: boolean }) => {
    
    const [buttonClicked, setButtonClicked] = useState(false);
    
    return (
        <button 
            onClick={onClick}
            disabled={disabled}
            onMouseDown={() => setButtonClicked(true)}
            onMouseUp={() => setButtonClicked(false)}
            className={`inline-block border-2 border-slate-500 bg-slate-900 text-lavender rounded-md p-2 ${buttonClicked ? 'border-b-2' : 'border-b-4'}`}>
            {children}
        </button>
    )
}

export default Button;