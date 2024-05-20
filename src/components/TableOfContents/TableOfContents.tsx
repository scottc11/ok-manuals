import React, { useContext, useRef, useState } from "react";
import { ContentsContext } from "../../context";
import Col from "../Grid/Col";
import Grid from "../Grid/Grid";
import Link from "../Link/Link";
import Section from "../Section/Section";
import './TableOfContents.scss';
import { BiChevronsUp } from "react-icons/bi";

const TableOfContents = () => {
    const { contents, updateContents } = useContext(ContentsContext);
    const [backToTop, showBackToTop] = useState(true);
    const myRef = useRef(null);

    const handleScrollToTop = (e: React.MouseEvent) => {
        const el = document.getElementById("table-of-contents");
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    return (
        <Section id="table-of-contents" collapsable heading="Table of Contents">
            <Grid>
                <Col>
                    <div ref={myRef} className="table_of_contents">
                        {contents.map((anchor) => {
                            return (
                                <div key={anchor.id}>
                                    <Link anchor href={`#${anchor.id}`}>{anchor.label}</Link>
                                </div>
                            )
                        })}
                    </div>
                </Col>
            </Grid>
            {backToTop && 
                <div className="table_of_contents__back_to_top" onClick={handleScrollToTop}>
                    <BiChevronsUp />
                </div>
            }
        </Section>
    )
}

export default TableOfContents;