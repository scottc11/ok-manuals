import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import useClickOutside from "../../hooks/useClickOutside";

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

    // Close on Escape key
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' || e.key === 'Esc') {
                if (opened) {
                    onClose();
                }
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [opened, onClose]);

    useClickOutside(targetRef, handleClickOutside);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center box-border bg-black p-[15px]">
            <div ref={targetRef} className="relative flex h-full w-full max-w-screen-lg items-center justify-center">
                <img src={source} alt="" className="max-h-full max-w-full object-contain" />
                <div className="absolute right-0 top-0 p-1 z-50  backdrop-blur-sm">
                    <AiOutlineCloseSquare
                        size={40}
                        className="cursor-pointer text-white/40 hover:text-white/80"
                        onClick={() => onClose()}
                    />
                </div>
            </div>
        </div>
    )
}

export default Lightbox;