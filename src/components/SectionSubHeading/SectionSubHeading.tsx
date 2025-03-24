import React from "react";

const SectionSubheading = ({ title }: { title: string }) => {
    return (
        <div className="bg-onyx/10 -mx-2 px-2 mt-6 rounded-sm">
            <h3 className="text-2xl py-2">{title}</h3>
        </div>
    )
}

export default SectionSubheading;