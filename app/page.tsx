import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OK200 — Performable Eurorack Modules",
  description:
    "OK200 designs performance-oriented Eurorack synthesizer modules including the Counterpoint and DEGREE VCO sequencer/controllers.",
};

export default function HomePage() {
  return (
    <main className="container mx-auto py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">OK200</h1>
      <p className="text-xl text-gray-300">
        Performable Eurorack Modules
      </p>
      <p className="text-gray-400 mt-8">
        Next.js migration scaffold — this page will be replaced with the full
        home page once components are ported.
      </p>
    </main>
  );
}
