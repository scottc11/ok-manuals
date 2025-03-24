import React, { useContext, useRef, useState } from "react";
import { ContentsContext } from "../../context";
import Col from "../Grid/Col";
import Grid from "../Grid/Grid";
import Link from "../Link/Link";
import Section from "../Section/Section";
import './TableOfContents.scss';
import { BiChevronsUp, BiChevronRight } from "react-icons/bi";

const TableOfContents = () => {
    const { contents, updateContents } = useContext(ContentsContext);
    console.log(contents);
    const [backToTop, showBackToTop] = useState(true);
    const myRef = useRef(null);

    const handleScrollToTop = (e: React.MouseEvent) => {
        const el = document.getElementById("table-of-contents");
        if (el) {
            el.scrollIntoView({ behavior: "instant", block: 'start' });
        }
    }

    return (
        <div id="table-of-contents">
            <div ref={myRef} className="border-onyx border-2 -mx-4 px-4 py-4 rounded-sm">
                {contents.map((anchor) => {
                    return (
                        <div key={anchor.id} className="hover:text-azure">
                            <Link anchor href={`#${anchor.id}`}>{anchor.label}</Link>
                            <BiChevronRight className="inline-block ml-1" />
                        </div>
                    )
                })}
            </div>
            {backToTop && 
                <div className="table_of_contents__back_to_top" onClick={handleScrollToTop}>
                    <BiChevronsUp />
                </div>
            }
        </div>
    )
}

export default TableOfContents;