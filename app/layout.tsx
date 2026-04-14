import type { Metadata } from "next";
import { Bungee, Quicksand, Inconsolata, Unica_One } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["300", "400", "700"],
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  weight: ["200", "400", "700"],
});

const bungee = Bungee({
  subsets: ["latin"],
  variable: "--font-bungee",
  weight: "400",
});

const unicaOne = Unica_One({
  subsets: ["latin"],
  variable: "--font-unica",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ok200.vercel.app"),
  title: {
    default: "OK200 — Performable Eurorack Modules",
    template: "%s | OK200",
  },
  description:
    "OK200 designs performance-oriented Eurorack synthesizer modules including the Counterpoint and DEGREE sequencer/controllers.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "OK200",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${inconsolata.variable} ${bungee.variable} ${unicaOne.variable}`}
    >
      <body className="bg-onyx text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
