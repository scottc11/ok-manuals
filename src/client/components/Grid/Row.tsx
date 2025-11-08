import React from 'react';
import './Grid.scss';

type RowProps = {
    children: React.ReactNode;
    classNames?: string;
}

const Row = ({ children, classNames }: RowProps) => {
    return (
        <div className={`grid__row ${classNames ? classNames : ''}`}>
            {children}
        </div>
    )
}

export default Row;