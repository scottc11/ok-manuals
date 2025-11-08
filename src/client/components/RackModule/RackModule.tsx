import React, { useState } from "react";
import "./RackModule.scss";
import { EurorackModule } from "../../types";
import { Link } from "react-router-dom";

type RackModuleProps = {
    name: string,
    image: string,
    path: string
};

const RackModule = ({ name, image, path }: RackModuleProps) => {
    const [isHovered, setHovered] = useState(false);
    
    return (
        <div className="rack-module w-full" onMouseEnter={(e) => setHovered(true)} onMouseLeave={(e) => setHovered(false)}>
            <Link to={path}>
                <img src={image} />
            </Link>
            {/* <h2 className="text-center text-sm text-white hover:text-lime transition-all duration-300">{name}</h2> */}
        </div>
    );
}

export default RackModule;