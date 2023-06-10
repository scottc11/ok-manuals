import React from 'react';

type ChangeLogContainerProps = {
    children: React.ReactNode;
}

const ChangeLogContainer = ({ children }: ChangeLogContainerProps) => {
    return (
        <div className='grid'>
            {children}
        </div>
    )
}

export default ChangeLogContainer;