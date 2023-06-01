import React from 'react';

type ColProps = {
    size?: number;
    children?: React.ReactNode;
};

const Col = ({ size, children }: ColProps) => {
    const columnSize = size ? `col-${size}` : 'col';
    return (
        <div className={`column ${columnSize}`}>
            {children}
        </div>
    )
}

export default Col;