import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../../media/logo-white.svg";

const Footer: React.FC = () => {
  const instagramUrl = "https://instagram.com/ok200instruments"; // You'll need to provide your actual Instagram URL

  return (
    <footer className="border-t border-gray-600 py-8">
      <div className="container">
        <div className="flex flex-row justify-between items-center gap-6">
          
          {/* Logo and Instagram - Left side */}
          <div className="flex items-center gap-4">
            <img className="max-h-12" src={logo} alt="ok200-logo" />
          </div>

          <div className="flex items-center justify-center align-middle h-full gap-4">
            <a
              href="https://www.instagram.com/ok200.instruments/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-offwhite hover:text-lime transition"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.youtube.com/@ok200-instruments"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-offwhite hover:text-lime transition"
            >
              <FaYoutube className="text-2xl" />
            </a>
          </div>

          {/* Text section - Right side */}
          <div className="text-xs text-gray-300 text-left md:text-right">
            <div className="mb-1">Website development by Scott Campbell</div>
            <div>
              Website design by{" "}
              <a
                href="https://www.instagram.com/achala.ganesan/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime hover:underline"
              >
                Achala Ganasagn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 