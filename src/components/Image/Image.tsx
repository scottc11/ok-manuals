import React from "react";
import './Image.scss';

type ImageProps = {
    source: string;
    width?: string;
    height?: string;
    paddingTop?: number,
    paddingBottom?: number,
};

const Image = ({ source, width, height, paddingTop, paddingBottom }: ImageProps) => {
    return (
        <div className="image" style={{ height, paddingTop, paddingBottom }}>
            <img style={{width: width}} src={source} />
        </div>
    )
}

export default Image;