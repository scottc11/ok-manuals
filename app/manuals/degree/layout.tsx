import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DEGREE Manual",
  description:
    "Complete user manual for the OK200 DEGREE — a performance oriented VCO controller with capacitive touch pads, bender components, and built-in sequencer.",
};

export default function DegreeManualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
