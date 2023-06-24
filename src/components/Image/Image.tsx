import React, { useState } from "react";
import Lightbox from "../Lightbox/Lightbox";
import './Image.scss';

type ImageProps = {
    source: string;
    width?: string;
    height?: string;
    paddingTop?: number,
    paddingBottom?: number,
};

const Image = ({ source, width, height, paddingTop, paddingBottom }: ImageProps) => {

    const [lightbox, showLightbox ] = useState(false);

    return (
        <div className="image" style={{ height, paddingTop, paddingBottom }}>
            <img onClick={() => showLightbox(true)} style={{width: width}} src={source} />
            {lightbox && <Lightbox source={source} onClose={() => showLightbox(false)} />}
        </div>
    )
}

export default Image;