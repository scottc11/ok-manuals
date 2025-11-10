import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import Divider from "../components/Divider/Divider";
import NewsletterSignup from "../components/NewsletterSignup/NewsletterSignup";

const About = () => {
  return (
    <div className="bg-white text-onyx">
        <div className="container mx-auto py-8 max-w-3xl">
            <h1 className="text-4xl font-bungee mb-8 text-left">About</h1>
            <p className="text-onyx text-opacity-75">
                <b>OK200</b> is a self-run Canadian boutique electronic instrument company founded by me, <b>Scott Campbell</b>. I mainly focus my designs towards being "hands-on" and performative to enhance the playability of a eurorack system during live performance. I use a variety of custom-manufactured components to provide more intuitive and expressive control within a modular synthesizer system.
            </p>

            <Divider />

            <div className="mt-8">
                <h1 className="text-4xl font-bungee mb-8 text-left">Contact</h1>

                <ContactForm />
            </div>

            <Divider />

            <NewsletterSignup />

        </div>
    </div>
  );
};


export default About;