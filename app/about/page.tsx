import type { Metadata } from "next";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import NewsletterSignup from "../components/NewsletterSignup";

export const metadata: Metadata = {
  title: "About",
  description:
    "OK200 is a Canadian boutique electronic instrument company designing performance-oriented Eurorack synthesizer modules.",
};

export default function AboutPage() {
  return (
    <div className="bg-white text-onyx">
      <div className="container mx-auto py-8 max-w-2xl">
        <h1 className="text-4xl font-bungee mb-8 text-left">About</h1>
        <p className="text-onyx text-opacity-75">
          <b>OK200</b> is a self-run Canadian boutique electronic instrument
          company founded by myself, <b>Scott Campbell</b>. I mainly focus my
          designs towards being &quot;hands-on&quot; and performative to enhance
          the playability of a eurorack system during live performance. I use a
          variety of custom-manufactured components to provide more intuitive and
          expressive control within a modular synthesizer system.
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

        <div className="h-px bg-gray-200 my-8" />

        <div className="mt-8">
          <h1 className="text-4xl font-bungee mb-8 text-left">Contact</h1>
          <ContactForm />
        </div>

        <div className="h-px bg-gray-200 my-8" />

        <NewsletterSignup />
      </div>
    </div>
  );
}
