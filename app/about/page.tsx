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
    <div className="bg-onyx text-white">
      <div className="container mx-auto py-12 md:py-16 max-w-2xl">
        <h1 className="text-4xl font-bungee mb-8 text-left">About</h1>
        <p className="text-gray-400 leading-relaxed text-lg">
          <b className="text-gray-200">OK200</b> is a self-run Canadian boutique
          electronic instrument company founded by myself,{" "}
          <b className="text-gray-200">Scott Campbell</b>. I mainly focus my
          designs towards being &quot;hands-on&quot; and performative to enhance
          the playability of a eurorack system during live performance. I use a
          variety of custom-manufactured components to provide more intuitive and
          expressive control within a modular synthesizer system.
        </p>

        <div className="flex items-center justify-center gap-4 mt-8">
          <a
            href="https://www.instagram.com/ok200.instruments/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full flex items-center justify-center bg-neutral-800 text-white hover:bg-neutral-700 hover:text-lime active:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-lime transition"
          >
            <FaInstagram className="text-4xl" />
          </a>
          <a
            href="https://www.youtube.com/@ok200-instruments"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full flex items-center justify-center bg-neutral-800 text-white hover:bg-neutral-700 hover:text-lime active:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-lime transition"
          >
            <FaYoutube className="text-4xl" />
          </a>
        </div>

        <div className="h-px bg-neutral-800 my-10" />

        <div className="mt-8">
          <h1 className="text-4xl font-bungee mb-8 text-left">Contact</h1>
          <ContactForm />
        </div>

        <div className="h-px bg-neutral-800 my-10" />

        <NewsletterSignup />
      </div>
    </div>
  );
}
