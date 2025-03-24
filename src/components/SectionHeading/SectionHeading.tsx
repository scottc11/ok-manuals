import React from "react";
import Anchor from "../Anchor/Anchor";

const SectionHeading = ({ title }: { title: string }) => {
    return (
        <div className="bg-lavender -mx-4 px-4 mb-2 rounded-sm font-unica">
            <h2 className="text-4xl py-4"><Anchor text={title} /></h2>
        </div>
    )
}

export default SectionHeading;