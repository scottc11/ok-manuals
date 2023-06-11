import React from 'react';
import { LegendItem } from '../../types';
import './LegendContainer.scss';

type LegendContainerProps = {
    items: LegendItem[];
}

const LegendContainer = ({ items }: LegendContainerProps) => {
    return (
        <ol className='legend_container'>
            {items.sort((a, b) => a.imageRef - b.imageRef).map( item => {
                return (
                    <li className='legend_container__item'>
                        <p className='legend_container__item__label'>
                            <b>{item.label}: </b>
                            <span className='legend_container__item__description'>{item.description}</span>
                        </p>
                    </li>
                )
            })}
        </ol>
    )
}

export default LegendContainer;