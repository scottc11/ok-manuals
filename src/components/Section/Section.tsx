import React from "react";
import Anchor from "../Anchor/Anchor";
import './Section.scss';

type SectionProps = {
    heading?: string;
    id?: string;
    collapsable?: boolean;
    children: React.ReactNode;
    ref?: React.RefObject<any>;
}

const Section = ({heading, id, collapsable, children}: SectionProps) => {
    return (
        <div id={id} className="section">
            <h1><Anchor text={heading} /></h1>
            {children}
        </div>
    )
}

export default Section;