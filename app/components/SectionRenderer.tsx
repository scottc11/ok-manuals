import ContentBlockContainer from "./ContentBlockContainer";
import MarqueeBar from "./MarqueeBar";

interface SectionRendererProps {
  entry: any;
}

function getContentTypeId(entry: any): string {
  return entry?.sys?.contentType?.sys?.id || "";
}

export default function SectionRenderer({ entry }: SectionRendererProps) {
  const contentType = getContentTypeId(entry);

  switch (contentType) {
    case "marqueeBar":
      return <MarqueeBar entry={entry} />;
    case "contentBlockContainer":
    default:
      return <ContentBlockContainer entry={entry} />;
  }
}
