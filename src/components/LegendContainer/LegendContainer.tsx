import React from 'react';
import { LegendItem } from '../../types';
import Anchor from '../Anchor/Anchor';
import './LegendContainer.scss';

type LegendContainerProps = {
    items: LegendItem[];
}

const LegendContainer = ({ items }: LegendContainerProps) => {
    return (
        <div className='legend_container'>
            <h1><Anchor text='Legend' /></h1>
            <div>
                {items.sort((a, b) => a.imageRef - b.imageRef).map(item => {
                    return (
                        <div key={item.label} className='legend_container__item'>
                            <div className='legend_container__item__number'>
                                <span>{item.imageRef}. </span>
                            </div>
                            <div className='legend_container__item__label'>
                                <b className='accent--gold'>{item.label}: </b>
                                <span className='legend_container__item__description accent--white'>{item.description}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default LegendContainer;