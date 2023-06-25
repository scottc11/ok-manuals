import { useState, useEffect } from 'react';
import { Breakpoint } from '../types';

const useBreakpoint = (): ReturnType<() => Breakpoint> => {
    const [breakpoint, setBreakpoint] = useState(Breakpoint.XSMALL);

    const calculateBreakpoint = (windowWidth: number) => {
        if (windowWidth < 320) {
            return Breakpoint.XSMALL;
        } else if (windowWidth < 480) {
            return Breakpoint.SMALL;
        } else if (windowWidth < 768) {
            return Breakpoint.MEDIUM;
        } else if (windowWidth < 1024) {
            return Breakpoint.LARGE;
        } else {
            return Breakpoint.XLARGE;
        }
    };

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            const calculatedBreakpoint = calculateBreakpoint(windowWidth);
            setBreakpoint(calculatedBreakpoint);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return breakpoint;
};

export default useBreakpoint;
