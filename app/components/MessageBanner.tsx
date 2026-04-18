"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { IoClose } from "react-icons/io5";

interface MessageBannerProps {
  message: string;
  dismissible?: boolean;
  id?: string;
}

export default function MessageBanner({
  message,
  dismissible = true,
  id,
}: MessageBannerProps) {
  const storageKey = id ? `message-banner-dismissed:${id}` : null;
  const [isVisible, setIsVisible] = useState(!dismissible);

  useEffect(() => {
    if (!dismissible) {
      setIsVisible(true);
      return;
    }
    if (!storageKey) {
      setIsVisible(true);
      return;
    }
    try {
      const dismissed = window.localStorage.getItem(storageKey) === "1";
      setIsVisible(!dismissed);
    } catch {
      setIsVisible(true);
    }
  }, [dismissible, storageKey]);

  const handleDismiss = () => {
    setIsVisible(false);
    if (storageKey) {
      try {
        window.localStorage.setItem(storageKey, "1");
      } catch {
        // ignore storage failures (private mode, etc.)
      }
    }
  };

  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="relative w-full text-xs sm:text-sm bg-lime text-onyx"
    >
      <div className="container mx-auto px-10 py-1.5 text-center">
        <div className="leading-tight [&_p]:inline [&_p]:m-0 [&_p]:p-0">
          <ReactMarkdown
            components={{
              a: ({ href, children, ...props }) => {
                const url = String(href ?? "");
                const isExternal = /^https?:\/\//i.test(url);
                const className =
                  "font-semibold text-onyx underline underline-offset-2 hover:opacity-70 transition-opacity";
                if (isExternal) {
                  return (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                      {...props}
                    >
                      {children}
                    </a>
                  );
                }
                return (
                  <Link href={url} className={className}>
                    {children}
                  </Link>
                );
              },
              strong: ({ children }) => (
                <strong className="font-semibold">{children}</strong>
              ),
              em: ({ children }) => <em className="italic">{children}</em>,
            }}
          >
            {message}
          </ReactMarkdown>
        </div>
        {dismissible && (
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss announcement"
            className="absolute right-2 top-1/2 -translate-y-1/2 shrink-0 rounded p-1 text-onyx hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-onyx transition-opacity"
          >
            <IoClose className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
