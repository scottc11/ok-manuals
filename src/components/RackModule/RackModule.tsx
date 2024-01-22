import React, { useState } from "react";
import "./RackModule.scss";
import { EurorackModule } from "../../types";
import { Link } from "react-router-dom";

type RackModuleProps = {
    module: EurorackModule
};

const RackModule = ({ module }: RackModuleProps) => {
    const [isHovered, setHovered] = useState(false);
    const bucket = 'https://ok200-media.s3.amazonaws.com'
    
    return (
        <div className="rack-module" onMouseEnter={(e) => setHovered(true)} onMouseLeave={(e) => setHovered(false)}>
            <img src={`${bucket}/${module.image}`} />
            {isHovered && 
                <div className="rack-module__overlay">
                    <h3 className="rack-module__overlay__title">{module.name}</h3>
                    <Link to={module.path}>Details</Link>
                </div>
            }
        </div>
    );
}

export default RackModule;