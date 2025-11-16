import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import Divider from "../components/Divider/Divider";
import NewsletterSignup from "../components/NewsletterSignup/NewsletterSignup";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-white text-onyx">
        <div className="container mx-auto py-8 max-w-2xl">
            <h1 className="text-4xl font-bungee mb-8 text-left">About</h1>
            <p className="text-onyx text-opacity-75">
                <b>OK200</b> is a self-run Canadian boutique electronic instrument company founded by myself, <b>Scott Campbell</b>. I mainly focus my designs towards being "hands-on" and performative to enhance the playability of a eurorack system during live performance. I use a variety of custom-manufactured components to provide more intuitive and expressive control within a modular synthesizer system.
            </p>

            <div className="flex items-center justify-center gap-4 mt-6">
                <a
                    href="https://www.instagram.com/ok200.instruments/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full flex items-center justify-center bg-gray-100 text-onyx hover:bg-gray-200 active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-lime transition"
                >
                    <FaInstagram className="text-4xl" />
                </a>
                <a
                    href="https://www.youtube.com/@ok200-instruments"
                    aria-label="YouTube"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full flex items-center justify-center bg-gray-100 text-onyx hover:bg-gray-200 active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-lime transition"
                >
                    <FaYoutube className="text-4xl" />
                </a>
            </div>

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