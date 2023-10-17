import React from "react";
import "./Rack.scss";
import RackModule from "../RackModule/RackModule";
import counterpoint from "../../../public/media/Counterpoint.png";
import quadDCO from "../../../public/media/Quad_DCO.png";

const Rack = () => {
    const bucket = 'https://ok200-media.s3.amazonaws.com'
    return (
        <div className="rack">
            <RackModule image={`${bucket}/Counterpoint.png`} />
            <RackModule image={`${bucket}/Quad_DCO.png`} />
            <RackModule image={`${bucket}/Bender_v2.png`} />
            <RackModule image={`${bucket}/Super_Seq.png`} />
        </div>
    );
}

export default Rack;