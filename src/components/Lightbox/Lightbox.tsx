import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import useClickOutside from "../../hooks/useClickOutside";
import './Lightbox.scss';

type LightboxProps = {
    source: string;
    onClose: () => void;
};

const Lightbox = ({ source, onClose }: LightboxProps) => {
    const targetRef = useRef(null);
    const [opened, setOpened] = useState(false);
    
    const handleClickOutside = () => {
        if (opened) {
            onClose();
        }
    }

    useEffect(() => {
        setOpened(true);
    }, [])

    useClickOutside(targetRef, handleClickOutside);

    return (
        <div className="lightbox">
            <div ref={targetRef} className="lightbox__window">
                <img src={source} />
                <div className="lightbox__window__close">
                    <AiOutlineCloseSquare size={60} onClick={() => onClose()} />
                </div>
            </div>
        </div>
    )
}

export default Lightbox;