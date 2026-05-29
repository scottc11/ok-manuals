"use client";

import ContentBlock from "./ContentBlock";
import { mergeContentfulStyles } from "../../lib/contentful-styles";

interface ContentBlockContainerProps {
  entry: any;
}

const GRID_COLS: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

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
            <ContentBlock key={index} entry={block} />
          ))}
        </div>
      </div>
    </div>
  );
}
