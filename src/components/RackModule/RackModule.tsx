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
        <div className="rack-module" onMouseEnter={(e) => setHovered(true)} onMouseLeave={(e) => setHovered(false)}>
            <Link to={path}>
                <img src={image} />
            </Link>
            {/* {isHovered && 
                <div className="rack-module__overlay">
                    <h3 className="rack-module__overlay__title">{name}</h3>
                    <Link to={path}>Details</Link>
                </div>
            } */}
        </div>
    );
}

export default RackModule;