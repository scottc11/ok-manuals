import React from 'react';
import { LegendItem } from '../../types';

type LegendContainerProps = {
    items: LegendItem[];
}

const LegendContainer = ({ items }: LegendContainerProps) => {
    return (
        <div className='legend_container'>
            {items.sort((a, b) => a.imageRef - b.imageRef).map(item => {
                return (
                    <div key={item.label} className="py-2">
                        <b className="text-bold">{item.label}: </b>
                        <span>{item.description}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default LegendContainer;