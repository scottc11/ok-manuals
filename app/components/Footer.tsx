import Image from "next/image";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-600 py-8">
      <div className="container">
        <div className="flex flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo-white.svg"
              alt="ok200-logo"
              width={120}
              height={48}
              className="max-h-12 w-auto"
            />
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
}
