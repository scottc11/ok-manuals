"use client";

import Image from "next/image";
import type { Document } from "@contentful/rich-text-types";
import RichTextRenderer from "./RichTextRenderer";
import YouTubeVideo from "./YouTubeVideo";
import { mergeContentfulStyles } from "../../lib/contentful-styles";

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
      const maxWidth: string = fields.maxWidth || "100%";
      const fixedHeight: string | undefined = fields.height || undefined;
      const objectPosition: string = fields.objectPosition || "center";
      if (!imageUrl) return null;

      if (fixedHeight) {
        return (
          <div
            className="relative overflow-hidden rounded-lg"
            style={{ maxWidth, height: fixedHeight, ...mergeContentfulStyles(fields.styles) }}
          >
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              style={{ objectFit: "cover", objectPosition}}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        );
      }

      const intrinsicWidth: number = asset?.fields?.file?.details?.image?.width || 800;
      const intrinsicHeight: number = asset?.fields?.file?.details?.image?.height || 600;
      return (
        <div style={{ maxWidth, ...mergeContentfulStyles(fields.styles) }}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={intrinsicWidth}
            height={intrinsicHeight}
            className="w-full h-auto rounded-lg"
          />
        </div>
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
