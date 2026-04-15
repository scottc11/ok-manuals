"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export interface AnchorData {
  id: string;
  level: number;
  label: string;
}

interface ContentsContextType {
  contents: AnchorData[];
  updateContents: (contents: AnchorData[], anchor: AnchorData) => void;
}

const defaultState: ContentsContextType = {
  contents: [],
  updateContents: () => {},
};

export const ContentsContext =
  createContext<ContentsContextType>(defaultState);

export default function ContentsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [contents, setContents] = useState<AnchorData[]>([]);

  const ctx: ContentsContextType = {
    contents,
    updateContents: (prev, anchor) => {
      setContents([anchor, ...prev]);
    },
  };

  return (
    <ContentsContext.Provider value={ctx}>
      {children}
    </ContentsContext.Provider>
  );
}

export function Anchor({
  text,
  nestLevel = 1,
  addToContents = true,
}: {
  text: string;
  nestLevel?: number;
  addToContents?: boolean;
}) {
  const { contents, updateContents } = useContext(ContentsContext);

  const data: AnchorData = {
    id: `anchor-${text}`,
    level: nestLevel,
    label: text,
  };

  useEffect(() => {
    if (addToContents && !contents.some((a) => a.id === data.id)) {
      updateContents(contents, data);
    }
  }, [contents]);

  return (
    <span id={`anchor-${text}`} className="anchor">
      {text}
    </span>
  );
}

export function TableOfContents() {
  const { contents } = useContext(ContentsContext);

  const handleScrollToTop = () => {
    document
      .getElementById("table-of-contents")
      ?.scrollIntoView({ behavior: "instant", block: "start" });
  };

  return (
    <div id="table-of-contents">
      <div className="border-onyx border-2 -mx-4 px-4 py-4 rounded-sm">
        {contents.map((anchor) => (
          <div key={anchor.id} className="hover:text-azure">
            <ManualLink anchor href={`#${anchor.id}`}>
              {anchor.label}
            </ManualLink>
            <span className="inline-block ml-1">›</span>
          </div>
        ))}
      </div>
      <div
        className="fixed bottom-4 right-4 z-40 bg-onyx text-white p-2 rounded-full cursor-pointer shadow-lg hover:bg-onyx/80"
        onClick={handleScrollToTop}
      >
        ⬆
      </div>
    </div>
  );
}

export function ManualLink({
  href,
  external,
  anchor,
  children,
}: {
  href: string;
  external?: boolean;
  anchor?: boolean;
  children?: ReactNode;
}) {
  const handleScrollTo = (e: React.MouseEvent) => {
    if (anchor) {
      const id = href.split("#")[1];
      e.preventDefault();
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <a
      className="text-lavender hover:underline"
      href={href}
      onClick={handleScrollTo}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
