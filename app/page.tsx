import type { Metadata } from "next";
import { getProduct } from "../lib/contentful";
import HeroBanner from "./components/HeroBanner";
import ProductSplitScreen from "./components/ProductSplitScreen";
import Section from "./components/Section";
import VideoSection from "./components/VideoSection";
import NewsletterSignup from "./components/NewsletterSignup";
import InstagramPostEmbedded from "./components/InstagramPostEmbedded";

export const metadata: Metadata = {
  title: "OK200 — Performable Eurorack Modules",
  description:
    "OK200 designs performance-oriented Eurorack synthesizer modules including the Counterpoint and DEGREE VCO sequencer/controllers.",
  openGraph: {
    title: "OK200 — Performable Eurorack Modules",
    description:
      "Performance-oriented Eurorack synthesizer modules — Counterpoint & DEGREE sequencer/controllers.",
  },
};

export default async function HomePage() {
  const [counterpoint, degree] = await Promise.all([
    getProduct("counterpoint", ["shortDescription", "thumbnail", "price"]),
    getProduct("degree", ["shortDescription", "thumbnail", "price"]),
  ]);

  const thumbnailUrl = (product: any) => {
    const url = product?.thumbnail?.fields?.file?.url;
    return url ? (url.startsWith("//") ? `https:${url}` : url) : "";
  };

  return (
    <>
      <HeroBanner
        backgroundColor="bg-onyx"
        backgroundImage="/images/hero-banner.png"
        heading="Performable eurorack modules"
      />

      <Section>
        {counterpoint && (
          <ProductSplitScreen
            bannerImage="/images/counterpoint-banner.png"
            price={String(counterpoint.price ?? "")}
            bodyText={String(counterpoint.shortDescription ?? "")}
            ctaText="Details →"
            ctaHref="/modules/counterpoint"
            rightImage={thumbnailUrl(counterpoint)}
            className="pt-8"
          />
        )}

        {degree && (
          <ProductSplitScreen
            reversed
            bannerImage="/images/degree-banner.png"
            price={String(degree.price ?? "")}
            bodyText={String(degree.shortDescription ?? "")}
            ctaText="Details →"
            ctaHref="/modules/degree"
            rightImage={thumbnailUrl(degree)}
            className="pt-8"
          />
        )}
      </Section>

      <VideoSection
        videoId="Uh_s-r6_d4g?si=pcOLuslAvlDnpjxS"
        backgroundColor="bg-onyx"
      />

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
