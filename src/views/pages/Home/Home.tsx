import React from "react";
import Rack from "../../../components/Rack/Rack";
import RackModule from "../../../components/RackModule/RackModule";
import { BendAndRatch, Counterpoint, QuadDCO, SuperSeq } from "../../../content/modules";

const Home = () => {
    return (
        <div>
            <Rack>
                <RackModule module={Counterpoint} />
                <RackModule module={BendAndRatch} />
                <RackModule module={QuadDCO} />
                <RackModule module={SuperSeq} />
            </Rack>
        </div>
    );
}

export default Home;