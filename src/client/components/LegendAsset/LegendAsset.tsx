import React from 'react';
import { LegendItem, LegendDefinition } from '../../types';
import './LegendAsset.scss';

type LegendAssetProps = {
    asset: LegendItem | LegendDefinition;
    plural?: boolean;
}

const LegendAsset = ({ asset, plural }: LegendAssetProps) => {
    return (
        <span className='legend-asset'>{asset.label}{plural ? `'s` : null}</span>
    )
}

export default LegendAsset;