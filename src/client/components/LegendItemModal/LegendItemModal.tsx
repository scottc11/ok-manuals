import React from 'react';
import { LegendItem } from '../../types';

type LegendItemModalProps = {
    legendItem: LegendItem;
}

const LegendItemModal = ({ legendItem }: LegendItemModalProps) => {
    return (
        <div>
            <h4>{legendItem.label}</h4>
            <p>{legendItem.description}</p>
            <p>{legendItem.altDescription}</p>
            <p>{legendItem.type}</p>
        </div>
    )
}

export default LegendItemModal;