import React from "react";
import { LegendDefinition, LegendItem } from "../../types";

type DefinitionProps = {
    item: LegendDefinition | LegendItem;
    plural?: boolean;
    owner?: boolean;
    e?: boolean; 
}

const Definition = ({ item, plural, owner, e }: DefinitionProps) => {
    return (
        <span className="font-bold">
            {item.label}
            {plural ? owner ? `'s` : e ? `es` : `s` : null}
        </span>
    )
}

export default Definition;