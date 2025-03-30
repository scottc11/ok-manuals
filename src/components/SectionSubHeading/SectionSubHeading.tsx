import React from "react";

type SectionSubheadingProps = {
    title?: string;
    children?: React.ReactNode;
}   

const SectionSubheading = ({ title, children }: SectionSubheadingProps) => {
    return (
        <div className="font-bungee bg-onyx/10 -mx-2 px-2 mt-6 rounded-sm">
            <h3 className="text-xl py-2">{title || children}</h3>
        </div>
    )
}

export default SectionSubheading;