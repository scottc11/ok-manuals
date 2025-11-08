import React from 'react';
import { LegendItem } from '../../types';


type LegendContainerProps = {
    items: LegendItem[];
}

const LegendContainer = ({ items }: LegendContainerProps) => {
    return (
        <table className="w-full border-collapse">
            <thead>
                <tr className="border-b-2 border-black">
                    <th className="text-left w-32">Label</th>
                    <th className="text-left">Description</th>
                </tr>
            </thead>
            <tbody>
                {items.sort((a, b) => a.imageRef - b.imageRef).map(item => {
                return (
                    <tr key={item.label} className="border-b-2 border-onyx/10 border-dotted">
                        <td className="font-bold pr-4 py-2"><span className="text-azure font-unica">{item.label}</span></td>
                        <td>{item.description}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default LegendContainer;