import React, { useState } from 'react';

const Button = ({ children, onClick, disabled }: { children: React.ReactNode, onClick: () => void, disabled?: boolean }) => {
    
    const [buttonClicked, setButtonClicked] = useState(false);
    
    return (
        <button 
            onClick={onClick}
            disabled={disabled}
            onMouseDown={() => setButtonClicked(true)}
            onMouseUp={() => setButtonClicked(false)}
            className="inline-flex items-center gap-2 rounded border border-azure text-azure px-3 py-2 min-h-[44px] min-w-[44px] hover:bg-azure/10">
            {children}
        </button>
    )
}

export default Button;