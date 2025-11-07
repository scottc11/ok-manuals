import React, { useState } from "react";
import Lightbox from "../Lightbox/Lightbox";

type ImageProps = {
    source: string;
    width?: string;
    height?: string;
    paddingTop?: number,
    paddingBottom?: number,
    alt?: string;
};

const Image = ({ source, width, height, paddingTop, paddingBottom, alt }: ImageProps) => {

    const [lightbox, showLightbox ] = useState(false);

    return (
        <div style={{ height, paddingTop, paddingBottom }}>
            <img onClick={() => showLightbox(true)} style={{width: width}} src={source} alt={alt} />
            {lightbox && <Lightbox source={source} onClose={() => showLightbox(false)} />}
        </div>
    )
}

export default Image;