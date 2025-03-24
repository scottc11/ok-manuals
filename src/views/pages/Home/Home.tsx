import React from "react";
import Rack from "../../../components/Rack/Rack";
import RackModule from "../../../components/RackModule/RackModule";
import Section from "../../../components/Section/Section";

const Home = () => {
    return (
        <Section>
            <Rack>
                <RackModule name="Counterpoint" image={require('../../../media/counterpoint/panel.svg')} path="/manuals/counterpoint" />
                <RackModule name="DEGREE" image={require('../../../media/DEGREE/DEGREE.svg')} path="/manuals/degree" />
            </Rack>
        </Section>
    );
}

export default Home;