import React from "react";

const SectionSubheading = ({ title }: { title: string }) => {
    return (
        <div className="bg-onyx/30 -mx-2 px-2 mt-6 rounded-sm">
            <h3 className="text-xl py-2">{title}</h3>
        </div>
    )
}

export default SectionSubheading;