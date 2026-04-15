"use client";

import { Anchor } from "./ContentsContext";

export default function SectionHeading({ title }: { title: string }) {
  return (
    <div className="bg-onyx text-gold -mx-4 px-4 mb-4 rounded-sm font-unica">
      <h2 className="text-4xl py-4">
        <Anchor text={title} />
      </h2>
    </div>
  );
}
