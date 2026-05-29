"use client";

import Image from "next/image";
import type { Document } from "@contentful/rich-text-types";
import RichTextRenderer from "./RichTextRenderer";
import YouTubeVideo from "./YouTubeVideo";

interface ContentBlockProps {
  entry: any;
}

function getContentTypeId(entry: any): string {
  return entry?.sys?.contentType?.sys?.id || "";
}

function BlockRenderer({ block }: { block: any }) {
  const contentType = getContentTypeId(block);
  const fields = block?.fields ?? {};

  switch (contentType) {
    case "richText":
      return (
        <RichTextRenderer
          document={fields.content as Document}
          className="text-gray-300"
        />
      );

    case "youTubeVideo":
      return (
        <YouTubeVideo
          videoId={fields.videoId || ""}
          title={fields.title || "YouTube Video"}
        />
      );

    case "image": {
      const asset = fields.image;
      const rawUrl: string = asset?.fields?.file?.url || "";
      const imageUrl = rawUrl.startsWith("//") ? `https:${rawUrl}` : rawUrl;
      const imageAlt: string = asset?.fields?.title || fields.label || "Image";
      const intrinsicWidth: number = asset?.fields?.file?.details?.image?.width || 800;
      const intrinsicHeight: number = asset?.fields?.file?.details?.image?.height || 600;
      if (!imageUrl) return null;
      return (
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={intrinsicWidth}
          height={intrinsicHeight}
          className="w-full h-auto rounded-lg"
        />
      );
    }

    case "button":
      return (
        <button
          type="button"
          className="inline-block px-8 py-3 text-lg border-2 border-white text-white hover:bg-white hover:text-black rounded transition-colors duration-200"
        >
          {fields.label || "Button"}
        </button>
      );

    default:
      return null;
  }
}

const ALIGN_MAP: Record<string, string> = {
  top: "self-start",
  center: "self-center",
  bottom: "self-end",
};

export default function ContentBlock({ entry }: ContentBlockProps) {
  const fields = entry?.fields ?? {};
  const blocks: any[] = fields.blocks ?? [];
  const verticalAlign: string = fields.verticalAlign || "top";
  const alignClass = ALIGN_MAP[verticalAlign] || "";

  if (!blocks.length) return null;

  return (
    <div className={`flex flex-col gap-6 ${alignClass}`}>
      {blocks.map((block: any, index: number) => (
        <BlockRenderer key={block?.sys?.id || index} block={block} />
      ))}
    </div>
  );
}
