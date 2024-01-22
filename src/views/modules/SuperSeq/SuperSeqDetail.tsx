import React from "react";
import Grid from "../../../components/Grid/Grid";
import Col from "../../../components/Col/Col";

const SuperSeqDetail = () => {
    return (
        <Grid>
            <Col>
                <p>Super Seq is a what I am calling a "Quad Poly Step Sequencer".</p>
                <p>I use the word "Poly" because the module can generate both "Polyrhytmic" and "Polymeter" patterns.</p>
                <p>It uses 4 encoders to generate clock divisions / multuplications against a master clock, which <u>can</u> give you polythryms when combining them together.</p>
                <p>Each sequence row can have different step lengths, representing the "Polymeter" side of things.</p>
                <p>and thennnn</p>
            </Col>
        </Grid>
    );
}

export default SuperSeqDetail;