import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ContentsContext } from "../../context";

type AnchorProps = {
    text: string;
    nestLevel?: number;
    addToContents?: boolean;
    children?: React.ReactNode;
};

export type Anchor = {
    id: string;
    level: number;
    label: string;
}

const Anchor = ({ text, nestLevel = 1, addToContents = true, children }: AnchorProps) => {
    
    const data: Anchor = {
        id: `anchor-${text}`,
        level: nestLevel,
        label: text
    }

    const { contents, updateContents } = useContext(ContentsContext);

    useEffect(() => {
        if (addToContents && !contents.some((anchor => anchor.id === data.id))) {
            updateContents(contents, data);
        }
    }, [contents])
    
    return (
        <span id={`anchor-${text}`} className="anchor">
            {text}
        </span>
    )
}

export default Anchor;