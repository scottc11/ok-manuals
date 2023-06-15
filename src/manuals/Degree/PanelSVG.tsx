import React, { useEffect, useRef } from 'react';
import SVGS from '../../media/DEGREE/DEGREE.svg';
import SvgComponent from './DegreeSVG';

const PanelSVG = () => {
    // note: SVG doesn’t have backwards browser support, which means most older browser versions won’t support SVG. 
    // const svg = useRef(null);
    // useEffect(() => {
    //     console.log(svg.current);
    // }, [svg])

    return (
        <div>
            <SvgComponent />
        </div>
    )
}

export default PanelSVG;