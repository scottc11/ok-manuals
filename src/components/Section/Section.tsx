import React from "react";
import Anchor from "../Anchor/Anchor";
import './Section.scss';

type SectionProps = {
    heading?: string;
    collapsable?: boolean;
    children: React.ReactNode;
}

const Section = ({heading, collapsable, children}: SectionProps) => {
    return (
        <div className="section">
            <h1><Anchor text={heading} /></h1>
            {children}
        </div>
    )
}

export default Section;