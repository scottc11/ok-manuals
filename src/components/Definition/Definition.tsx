import React from "react";
import { LegendDefinition, LegendItem } from "../../types";

type DefinitionProps = {
    item: LegendDefinition | LegendItem;
    plural?: boolean;
    owner?: boolean;
}

const Definition = ({ item, plural, owner }: DefinitionProps) => {
    return (
        <span className="definition__label">{item.label}{plural ? owner ? `'s` : `s` : null}</span>
    )
}

export default Definition;