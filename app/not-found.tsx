"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const asciiArt = `
  +-+-+-+-+ +-+-+-+-+-+-+-+-+
  |P|A|G|E| |N|O|T|F|O|U|N|D|
  +-+-+-+-+ +-+-+-+-+-+-+-+-+
`;

export default function NotFound() {
  const [counter, setCounter] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log(
      "%c 🐛 You found a bug! Just kidding, this 404 page is intentional.",
      "color: #00ffaa; font-size: 14px; font-weight: bold;",
    );
    console.log(
      "%c Try clicking on the ASCII art for an easter egg!",
      "color: #ff00aa; font-size: 12px;",
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-black to-gray-900 py-16">
      <div className="bg-panel rounded-lg shadow-lg p-8 max-w-2xl w-full text-center border-2 border-azure">
        <h1 className="text-lime text-6xl font-bungee mb-4">404</h1>

        <pre
          className="font-mono text-white bg-black p-4 rounded-md cursor-pointer text-xs sm:text-sm my-4 overflow-x-auto"
          onClick={() => setShowEasterEgg(!showEasterEgg)}
        >
          {asciiArt}
        </pre>

        {showEasterEgg && (
          <div className="bg-black/50 p-4 rounded-md text-lime mb-6 font-mono text-sm animate-pulse">
            <p>// Easter egg activated!</p>
            <p>
              // You&apos;ve been staring at this error for {counter} seconds.
            </p>
            <p>// Life is too short to debug 404s.</p>
          </div>
        )}

        <Link
          href="/"
          className="bg-azure text-white font-bold py-2 px-6 rounded-md inline-block hover:bg-azure/80 transition-colors"
        >
          return home
        </Link>
      </div>
    </div>
  );
}
