import React from "react";
import Section from "../components/Section/Section";
import Button from "../components/Button/Button";
import ProductSplitScreen from "../components/ProductSplitScreen/ProductSplitScreen";
import NewsletterSignup from "../components/NewsletterSignup/NewsletterSignup";
import HeroBanner from "../components/HeroBanner/HeroBanner";

const Home = () => {
    return (
        <>
            {/* Hero Banner */}
            <HeroBanner 
                backgroundColor="bg-black"
                backgroundImage={require('../media/hero-banner.png')}
                heading="Performable eurorack modules"
            />
            
            {/* Products Section */}
            <Section>            
                <ProductSplitScreen
                    bannerImage={require('../media/counterpoint/counterpoint-banner.png')}
                    price="$899"
                    bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                    ctaText="Details →"
                    ctaAction={() => window.location.assign('#/modules/counterpoint')}
                    rightImage={require('../media/counterpoint/panel.svg')}
                />

                <ProductSplitScreen
                    reversed
                    bannerImage={require('../media/DEGREE/degree-banner.png')}
                    price="$1,299"
                    bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
                    ctaText="Details →"
                    ctaAction={() => window.location.assign('#/modules/degree')}
                    rightImage={require('../media/DEGREE/DEGREE.png')}
                />
            </Section>
            
            {/* Newsletter Signup */}
            <div className="bg-lavender">
                <Section>
                    <NewsletterSignup />
                </Section>
            </div>
        </>
    );
}

export default Home;