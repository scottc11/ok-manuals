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
      const fillContainer: boolean = fields.fillContainer === true;
      if (!imageUrl) return null;

      if (fillContainer) {
        return (
          <div
            className="relative overflow-hidden h-full"
            style={mergeContentfulStyles(fields.styles)}
          >
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              style={{ objectFit: "cover", objectPosition }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        );
      }

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
              style={{ objectFit: "cover", objectPosition }}
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

    case "heading": {
      const text: string = fields.text || "";
      const level: string = fields.level || "h2";
      const alignment: string = fields.alignment || "left";
      const headingClassName: string = fields.className || "";
      const size: string = fields.size || "";
      const bold: boolean = fields.bold === true;
      const underline: boolean = fields.underline === true;
      const highlights: Array<{ match: string; className: string }> =
        Array.isArray(fields.highlights) ? fields.highlights : [];

      const SIZE_MAP: Record<string, string> = {
        sm: "text-xl lg:text-2xl",
        md: "text-2xl lg:text-3xl",
        lg: "text-3xl lg:text-4xl",
        xl: "text-4xl lg:text-5xl",
        "2xl": "text-5xl lg:text-6xl",
      };

      const Tag = (["h1", "h2", "h3", "h4", "h5", "h6"].includes(level) ? level : "h2") as
        "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

      const alignmentClass =
        alignment === "center" ? "text-center" :
        alignment === "right" ? "text-right" : "text-left";

      const sizeClass = SIZE_MAP[size] || "";
      const boldClass = bold ? "font-bold" : "";
      const underlineClass = underline ? "underline" : "";

      let content: React.ReactNode;
      if (highlights.length > 0) {
        const parts: React.ReactNode[] = [];
        let remaining = text;
        let keyIndex = 0;

        while (remaining.length > 0) {
          let earliestIndex = remaining.length;
          let earliestHighlight: { match: string; className: string } | null = null;

          for (const hl of highlights) {
            const idx = remaining.indexOf(hl.match);
            if (idx !== -1 && idx < earliestIndex) {
              earliestIndex = idx;
              earliestHighlight = hl;
            }
          }

          if (!earliestHighlight) {
            parts.push(remaining);
            break;
          }

          if (earliestIndex > 0) {
            parts.push(remaining.slice(0, earliestIndex));
          }
          parts.push(
            <span key={keyIndex++} className={earliestHighlight.className}>
              {earliestHighlight.match}
            </span>
          );
          remaining = remaining.slice(earliestIndex + earliestHighlight.match.length);
        }
        content = parts;
      } else {
        content = text;
      }

      return (
        <Tag className={`${alignmentClass} ${sizeClass} ${boldClass} ${underlineClass} ${headingClassName}`.trim()}>
          {content}
        </Tag>
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
  top: "justify-start",
  center: "justify-center",
  bottom: "justify-end",
};

export default function ContentBlock({ entry }: ContentBlockProps) {
  const fields = entry?.fields ?? {};
  const blocks: any[] = fields.blocks ?? [];
  const verticalAlign: string = fields.verticalAlign || "top";
  const alignClass = ALIGN_MAP[verticalAlign] || "";

  if (!blocks.length) return null;

  return (
    <div className={`flex flex-col gap-6 h-full ${alignClass}`}>
      {blocks.map((block: any, index: number) => (
        <BlockRenderer key={block?.sys?.id || index} block={block} />
      ))}
    </div>
  );
}
