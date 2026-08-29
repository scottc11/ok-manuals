"use client";

import { useEffect, useState, type ReactNode } from "react";
import { IoLink } from "react-icons/io5";

const IS_DEV = process.env.NODE_ENV === "development";

interface ContentfulWrapperProps {
  entry: any;
  children: ReactNode;
  className?: string;
}

export function getContentfulEntryUrl(entry: any): string | null {
  const entryId = entry?.sys?.id;
  const spaceId = entry?.sys?.space?.sys?.id;
  if (!entryId || !spaceId) return null;
  const environmentId = entry?.sys?.environment?.sys?.id || "master";
  return `https://app.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries/${entryId}`;
}

function ContentfulDevOverlay({ url }: { url: string }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Contentful entry"
      onClick={(e) => e.stopPropagation()}
      className="pointer-events-none absolute bottom-0 right-0 z-10 flex h-11 w-11 items-center justify-center rounded-sm bg-onyx/80 text-lime opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100"
    >
      <IoLink size={16} aria-hidden />
    </a>
  );
}

export default function ContentfulWrapper({
  entry,
  children,
  className,
}: ContentfulWrapperProps) {
  if (!IS_DEV) {
    return className ? <div className={className}>{children}</div> : <>{children}</>;
  }

  const url = getContentfulEntryUrl(entry);

  return (
    <div
      className={`group relative hover:outline hover:outline-1 hover:outline-lime ${className ?? ""}`.trim()}
    >
      {children}
      {url && <ContentfulDevOverlay url={url} />}
    </div>
  );
}
