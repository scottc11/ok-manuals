import React, { useState } from 'react';

type ButtonVariant = 'light' | 'dark' | 'auto';

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    variant?: ButtonVariant;
}

const Button = ({ children, onClick, disabled, className, variant = 'dark' }: ButtonProps) => {
    const [buttonClicked, setButtonClicked] = useState(false);
    
    // Define color schemes for different backgrounds
    const getButtonClasses = () => {
        const baseClasses = 'px-3 py-2 rounded disabled:opacity-50 border-2 transition-colors duration-200';
        
        switch (variant) {
            case 'light':
                // For light backgrounds - dark button
                return `${baseClasses} border-black text-black hover:bg-black hover:text-white`;
            case 'dark':
                // For dark backgrounds - light button  
                return `${baseClasses} border-white text-white hover:bg-white hover:text-black`;
            case 'auto':
                // Uses CSS mix-blend-mode for automatic contrast
                return `${baseClasses} border-current text-current mix-blend-difference`;
            default:
                return `${baseClasses} border-white text-white`;
        }
    };
    
    return (
        <button 
            onClick={onClick}
            disabled={disabled}
            onMouseDown={() => setButtonClicked(true)}
            onMouseUp={() => setButtonClicked(false)}
            className={`${getButtonClasses()} ${className || ''}`}>
            {children}
        </button>
    )
}

export default Button;