import React, { useState } from "react";
import "./RackModule.scss";

type RackModuleProps = {
    image: string
};

const RackModule = ({ image }: RackModuleProps) => {
    const [isHovered, setHovered] = useState(false);

    return (
        <div className="rack-module" onMouseEnter={(e) => setHovered(true)} onMouseLeave={(e) => setHovered(false)}>
            <img src={image} />
            {isHovered && <div className="rack-module__overlay">hovering</div>}
        </div>
    );
}

export default RackModule;