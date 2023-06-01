import React from "react";

type ManualHeaderProps = {
    text: string
};

const ManualHeader = ({ text }: ManualHeaderProps) => {
    return (
        <h1>
            {text}
        </h1>
    )
}

export default ManualHeader;