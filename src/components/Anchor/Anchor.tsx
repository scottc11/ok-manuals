import React from "react";

type AnchorProps = {
    text: string;
    children?: React.ReactNode;
};

const Anchor = ({ text, children }: AnchorProps) => {
    return (
        <span id={`anchor-${text}`} className="anchor">
            {text}
        </span>
    )
}

export default Anchor;