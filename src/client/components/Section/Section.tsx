import React from "react";
import Anchor from "../Anchor/Anchor";
import './Section.scss';

type SectionProps = {
    id?: string;
    collapsable?: boolean;
    children: React.ReactNode;
}

const Section = ({id, collapsable, children}: SectionProps) => {
    return (
        <div id={id} className="section py-6">
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default Section;