import React from 'react';
import { LegendItem } from '../../types';
import './LegendContainer.scss';

type LegendContainerProps = {
    items: LegendItem[];
}

const LegendContainer = ({ items }: LegendContainerProps) => {
    return (
        <div className='legend_container'>
            <h1>Legend:</h1>
            <p>todo: you gotta alternate the bg color of each item to make it more legible</p>
            <ol>
                {items.sort((a, b) => a.imageRef - b.imageRef).map(item => {
                    return (
                        <li key={item.label} className='legend_container__item'>
                            <div className='legend_container__item__label'>
                                <b>{item.label}: </b>
                                <span className='legend_container__item__description'>{item.description}</span>
                            </div>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default LegendContainer;