import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counterpoint Manual",
  description:
    "Complete user manual for the OK200 Counterpoint — a Eurorack performance sequencer with 4-channel polyphony, arpeggiator, and CV quantization.",
};

export default function CounterpointManualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
