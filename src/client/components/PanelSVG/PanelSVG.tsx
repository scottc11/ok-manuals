import React, { useEffect, useRef } from 'react';
import SVGS from '../../media/DEGREE/DEGREE.svg';
import './PanelSVG.scss';
import SvgComponent from '../../manuals/Degree/DegreeSVG';

const PanelSVG = () => {
    // note: SVG doesn’t have backwards browser support, which means most older browser versions won’t support SVG. 
    // const svg = useRef(null);
    // useEffect(() => {
    //     console.log(svg.current);
    // }, [svg])

    return (
        <div className='panel-svg container'>
            <SvgComponent />
        </div>
    )
}

export default PanelSVG;