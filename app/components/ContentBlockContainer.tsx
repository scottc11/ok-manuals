"use client";

import ContentBlock from "./ContentBlock";
import ContentBlockFeatureCard from "./ContentBlockFeatureCard";
import ContentfulWrapper from "./ContentfulWrapper";
import { mergeContentfulStyles } from "../../lib/contentful-styles";

function getContentTypeId(entry: any): string {
  return entry?.sys?.contentType?.sys?.id || "";
}

interface ContentBlockContainerProps {
  entry: any;
}

const GRID_COLS: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
};

function BlockSwitch({ block }: { block: any }) {
  const contentType = getContentTypeId(block);

  switch (contentType) {
    case "featureCard":
      return <ContentBlockFeatureCard entry={block} />;
    default:
      return <ContentBlock entry={block} />;
  }
}

export default function ContentBlockContainer({ entry }: ContentBlockContainerProps) {
  const fields = entry?.fields ?? {};
  const blocks: any[] = fields.blocks ?? [];
  const columns: number = fields.columns ?? blocks.length;
  const gap: string = fields.gap ?? "6";
  const styles: any[] = fields.styles ?? [];

  const gridClass = GRID_COLS[columns] || GRID_COLS[3];
  const gapRem = `${Number(gap) * 0.25}rem`;
  const inlineStyles = { gap: gapRem, ...mergeContentfulStyles(styles) };

  if (!blocks.length) return null;

  return (
    <div className="py-6" style={inlineStyles}>
      <div className="container">
        <div className={`grid ${gridClass}`} style={{ gap: gapRem }}>
          {blocks.map((block: any, index: number) => (
            <ContentfulWrapper
              key={index}
              entry={block}
              className="h-full"
            >
              <BlockSwitch block={block} />
            </ContentfulWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}
