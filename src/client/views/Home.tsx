import React from "react";
import Section from "../components/Section/Section";
import ProductSplitScreen from "../components/ProductSplitScreen/ProductSplitScreen";
import NewsletterSignup from "../components/NewsletterSignup/NewsletterSignup";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import InstagramPostEmbedded from "../components/InstagramPostEmbedded/InstagramPostEmbedded";
import { useProductDetail } from "../hooks/useProductDetail";
import VideoSection from "../sections/VideoSection";

const Home = () => {

    const counterpoint = useProductDetail('counterpoint', ['shortDescription', 'thumbnail', 'price']);
    const degree = useProductDetail('degree', ['shortDescription', 'thumbnail', 'price']);

    return (
        <>
            {/* Hero Banner */}
            <HeroBanner 
                backgroundColor="bg-onyx"
                backgroundImage={require('../media/hero-banner.png')}
                heading="Performable eurorack modules"
            />
            
            {/* Products Section */}
            <Section>            
                { counterpoint.product && (
                <ProductSplitScreen
                    bannerImage={require('../media/counterpoint/counterpoint-banner.png')}
                    price={counterpoint.product.price as unknown as string}
                    bodyText={counterpoint.product.shortDescription as unknown as string}
                    ctaText="Details →"
                    ctaAction={() => window.location.assign('/modules/counterpoint')}
                    rightImage={counterpoint.product.thumbnail?.fields?.file?.url as unknown as string}
                    className="pt-8"
                    />
                )}

                { degree.product && (
                    <ProductSplitScreen
                        reversed
                        bannerImage={require('../media/DEGREE/degree-banner.png')}
                        price={degree.product.price as unknown as string}
                        bodyText={degree.product.shortDescription as unknown as string}
                        ctaText="Details →"
                        ctaAction={() => window.location.assign('/modules/degree')}
                        rightImage={degree.product.thumbnail?.fields?.file?.url as unknown as string}
                        className="pt-8"
                    />
                )}
            </Section>

            {/* Video Section */}
            <VideoSection videoId="Uh_s-r6_d4g?si=pcOLuslAvlDnpjxS" backgroundColor="bg-onyx" />

            {/* Newsletter Signup */}
            <div className="bg-lime">
                <Section>
                    <NewsletterSignup />
                </Section>
            </div>

            <div className="container mx-auto">
                <InstagramPostEmbedded
                    permalink="https://www.instagram.com/p/ChkVwHouHEZ/"
                    className="flex justify-center py-8"
                />
            </div>
        </>
    );
}

export default Home;