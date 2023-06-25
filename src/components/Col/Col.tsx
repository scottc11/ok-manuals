import React, { useEffect, useState } from 'react';
import useBreakpoint from '../../hooks/useBreakpoint';
import { Breakpoint } from '../../types';

type ColProps = {
    children?: React.ReactNode;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
};

const Col = ({xs, sm, md, lg, xl, children }: ColProps) => {
    const breakpoint: Breakpoint = useBreakpoint();
    const [column, setColumn] = useState('col');
    
    const determineClassName = (arr: Array<number>) => {
        let str = 'col';
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if (element) {
                str = `col-${element}`;
                break;
            }
        }
        return str;
    }

    useEffect(() => {
        if (breakpoint == Breakpoint.XSMALL) {
            setColumn(determineClassName([xs, sm, md, lg, xl]));
        } else if (breakpoint == Breakpoint.SMALL) {
            setColumn(determineClassName([sm, md, lg, xl]));
        } else if (breakpoint == Breakpoint.MEDIUM) {
            setColumn(determineClassName([md, lg, xl]));
        } else if (breakpoint == Breakpoint.LARGE) {
            setColumn(determineClassName([lg, xl]));
        } else if (breakpoint == Breakpoint.XLARGE) {
            setColumn(determineClassName([xl]));
        } else {
            setColumn('col');
        }        
    }, [breakpoint])

    return (
        <div className={`column ${column}`}>
            {children}
        </div>
    )
}

export default Col;