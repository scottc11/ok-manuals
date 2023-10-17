import React from "react";

type ManualHeaderProps = {
    text: string
};

const ManualHeader = ({ text }: ManualHeaderProps) => {
    return (
        <h1 style={{textAlign: 'center'}}>
            {text}
        </h1>
    )
}

export default ManualHeader;