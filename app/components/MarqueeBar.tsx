import ContentfulWrapper from "./ContentfulWrapper";

interface MarqueeBarProps {
  entry: any;
}

const REPEAT_COUNT = 4;
const SEPARATOR = "·";

function ItemSequence({ items }: { items: string[] }) {
  return (
    <span className="inline-flex items-center gap-6 mr-12 text-[10px] tracking-[0.2em] uppercase text-[#a0904570]">
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className="inline-flex items-center gap-6">
          <span>{item}</span>
          <span className="text-[#a0904530]">{SEPARATOR}</span>
        </span>
      ))}
    </span>
  );
}

export default function MarqueeBar({ entry }: MarqueeBarProps) {
  const fields = entry?.fields ?? {};
  const items: string[] = Array.isArray(fields.items)
    ? fields.items.filter(
        (item: unknown): item is string =>
          typeof item === "string" && item.trim().length > 0,
      )
    : [];

  if (!items.length) return null;

  const sequence = Array.from({ length: REPEAT_COUNT }, (_, index) => (
    <ItemSequence key={index} items={items} />
  ));

  return (
    <ContentfulWrapper entry={entry}>
      <div className="border-y border-[#ffffff08] bg-[#a0904508] py-3 overflow-hidden whitespace-nowrap">
        <div className="sr-only">{items.join(" · ")}</div>
        <div
          aria-hidden
          className="animate-marquee motion-reduce:animate-none inline-flex"
        >
          <span className="inline-flex">{sequence}</span>
          <span className="inline-flex">{sequence}</span>
        </div>
      </div>
    </ContentfulWrapper>
  );
}
