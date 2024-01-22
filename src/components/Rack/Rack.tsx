import React from "react";
import "./Rack.scss";
import RackModule from "../RackModule/RackModule";
import counterpoint from "../../../public/media/Counterpoint.png";
import quadDCO from "../../../public/media/Quad_DCO.png";

const Rack = (props: any) => {
    return (
        <div className="rack">
            {props.children}
        </div>
    );
}

export default Rack;