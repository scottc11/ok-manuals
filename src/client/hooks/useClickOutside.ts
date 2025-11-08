import { Ref, useEffect, useRef } from 'react';

const useClickOutside = (ref: React.RefObject<HTMLElement>, handleClickOutside: () => void) => {
    const handleClick = (event: MouseEvent | TouchEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            handleClickOutside();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [handleClick]);
};

export default useClickOutside;