"use client";

import { useState, useEffect, useRef } from "react";

function Lightbox({
  source,
  onClose,
}: {
  source: string;
  onClose: () => void;
}) {
  const targetRef = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(false);

  useEffect(() => setOpened(true), []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "Escape" || e.key === "Esc") && opened) onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [opened, onClose]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        targetRef.current &&
        !targetRef.current.contains(e.target as Node) &&
        opened
      )
        onClose();
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [opened, onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center box-border bg-black p-[15px]">
      <div
        ref={targetRef}
        className="relative flex h-full w-full max-w-screen-lg items-center justify-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={source}
          alt=""
          className="max-h-full max-w-full object-contain"
        />
        <div className="absolute right-0 top-0 p-1 z-50 backdrop-blur-sm">
          <button
            onClick={() => onClose()}
            className="cursor-pointer text-white/40 hover:text-white/80 text-3xl"
            aria-label="Close lightbox"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ManualImage({
  source,
  width,
  height,
  alt,
}: {
  source: string;
  width?: string;
  height?: string;
  alt?: string;
}) {
  const [lightbox, showLightbox] = useState(false);

  return (
    <div style={{ height }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        onClick={() => showLightbox(true)}
        style={{ width }}
        src={source}
        alt={alt}
        className="cursor-pointer"
      />
      {lightbox && (
        <Lightbox source={source} onClose={() => showLightbox(false)} />
      )}
    </div>
  );
}
