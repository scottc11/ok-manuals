import React from "react";
import Rack from "../components/Rack/Rack";
import RackModule from "../components/RackModule/RackModule";
import Section from "../components/Section/Section";
import Button from "../components/Button/Button";

const Home = () => {
    return (
        <Section>
            <Rack>
                <div className="flex flex-col gap-8">
                    <RackModule name="Counterpoint" image={require('../media/counterpoint/panel.svg')} path="/manuals/counterpoint" />
                    <RackModule name="DEGREE" image={require('../media/DEGREE/DEGREE.svg')} path="/manuals/degree" />
                </div>
            </Rack>
            
            {/* E-commerce Section */}
            <div className="mt-16 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Shop Products</h2>
                <p className="text-gray-300 mb-8">Browse and purchase our eurorack modules and accessories</p>
                <Button onClick={() => window.location.href = '/#/shop'}>
                    Visit Shop
                </Button>
            </div>
        </Section>
    );
}

export default Home;