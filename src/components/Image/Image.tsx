import React from "react";

type ImageProps = {
    source: string;
    width?: string;
    height?: string;
};

const Image = ({ source, width, height }: ImageProps) => {
    return (
        <div style={{width: width, height: height}}>
            <img style={{width: width}} src={source} />
        </div>
    )
}

export default Image;