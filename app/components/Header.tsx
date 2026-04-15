"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "./CartProvider";

const NAV_LINKS = [
  { href: "/", label: "Home", exact: true },
  { href: "/modules/counterpoint", label: "Counterpoint" },
  { href: "/modules/degree", label: "DEGREE" },
  { href: "/news", label: "News" },
  { href: "/about", label: "About" },
] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { getItemCount } = useCart();
  const pathname = usePathname();

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  const highlight = (active: boolean) =>
    active ? "text-lime" : "text-white hover:text-lime";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <div id="header" className="border-b border-b-gray-600">
      <div className="container py-8">
        <div className="flex flex-row justify-between items-center">
          <div>
            <Link href="/">
              <Image
                src="/images/logo-white.svg"
                alt="ok200-logo"
                width={120}
                height={48}
                className="max-h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Hamburger */}
          <button
            ref={buttonRef}
            className="md:hidden text-white z-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Nav */}
          <div
            ref={menuRef}
            className={`${isMenuOpen ? "flex" : "hidden"} md:flex absolute md:relative top-20 md:top-0 right-0 md:right-0 w-full md:w-auto 
              bg-gray-900/95 md:bg-gray-800/50 backdrop-blur-sm
              md:rounded-2xl md:px-6 md:py-3
              z-20
              md:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),inset_0_-1px_2px_rgba(255,255,255,0.1)]
              md:border md:border-gray-300/50
              flex-col md:flex-row justify-start md:justify-center place-items-center gap-6 p-4 md:p-0
              before:md:content-[''] before:md:absolute before:md:inset-0 before:md:rounded-2xl 
              before:md:bg-gradient-to-b before:md:from-gray-700/20 before:md:to-gray-900/20 before:md:pointer-events-none`}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={highlight(isActive(link.href, "exact" in link ? link.exact : undefined))}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cart"
              className={highlight(isActive("/cart", true))}
              onClick={() => setIsMenuOpen(false)}
              style={{ position: "relative" }}
            >
              <IoCartOutline className="text-lime" size={30} />
              {getItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
