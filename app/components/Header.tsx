"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { IoCartOutline, IoChevronDown } from "react-icons/io5";
import { useCart } from "./CartProvider";
import type { NavItem } from "../../lib/types";

interface HeaderProps {
  links: NavItem[];
}

export default function Header({ links }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { getItemCount } = useCart();
  const pathname = usePathname();

  const isActive = (href: string | undefined, exact?: boolean) => {
    if (!href) return false;
    return exact ? pathname === href : pathname.startsWith(href);
  };

  const isChildActive = (item: NavItem) =>
    item.children?.some((child) => isActive(child.href, child.exact)) ?? false;

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
      setOpenDropdown(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const closeAll = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <div id="header" className="border-b border-b-gray-600">
      <div className="container py-8">
        <div className="relative flex flex-row justify-between items-center">
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
            className={`${isMenuOpen ? "flex" : "hidden"} md:flex
              absolute md:relative
              top-[calc(100%+0.5rem)] md:top-0
              right-0 md:right-0
              left-0 md:left-auto
              w-auto md:w-auto
              bg-gray-800/80 md:bg-gray-800/50 backdrop-blur-md
              rounded-2xl px-6 py-4 md:py-3
              z-20
              shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),inset_0_-1px_2px_rgba(255,255,255,0.1)]
              border border-gray-300/50
              flex-col md:flex-row justify-center place-items-center gap-5 md:gap-6
              before:content-[''] before:absolute before:inset-0 before:rounded-2xl
              before:bg-gradient-to-b before:from-gray-700/20 before:to-gray-900/20 before:pointer-events-none`}
          >
            {links.map((item) =>
              item.children && item.children.length > 0 ? (
                <NavDropdown
                  key={item.label}
                  item={item}
                  isOpen={openDropdown === item.label}
                  onToggle={() =>
                    setOpenDropdown(
                      openDropdown === item.label ? null : item.label,
                    )
                  }
                  onNavigate={closeAll}
                  isActive={isActive}
                  isParentActive={
                    isActive(item.href, item.exact) || isChildActive(item)
                  }
                  highlight={highlight}
                />
              ) : item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative z-10 ${highlight(isActive(item.href, item.exact))}`}
                  onClick={closeAll}
                >
                  {item.label}
                </Link>
              ) : null,
            )}
            <Link
              href="/cart"
              className={`relative z-10 ${highlight(isActive("/cart", true))}`}
              onClick={closeAll}
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

function NavDropdown({
  item,
  isOpen,
  onToggle,
  onNavigate,
  isActive,
  isParentActive,
  highlight,
}: {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
  isActive: (href: string | undefined, exact?: boolean) => boolean;
  isParentActive: boolean;
  highlight: (active: boolean) => string;
}) {
  return (
    <div className="relative z-10">
      {/* Desktop: hover to reveal, click label to navigate */}
      <div className="hidden md:block group/dropdown">
        <button
          type="button"
          className={`flex items-center gap-1 ${highlight(isParentActive)}`}
          onClick={(e) => {
            if (item.href) {
              onNavigate();
              window.location.href = item.href;
            } else {
              e.preventDefault();
              onToggle();
            }
          }}
        >
          {item.label}
          <IoChevronDown size={14} className="opacity-50" />
        </button>

        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover/dropdown:block">
          <div className="bg-gray-800/95 backdrop-blur-md border border-gray-300/50 rounded-xl py-2 min-w-[180px] shadow-lg">
            {item.children!.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={`block px-4 py-2 text-sm whitespace-nowrap ${highlight(isActive(child.href, child.exact))} hover:bg-white/10 transition-colors`}
                onClick={onNavigate}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: tap to expand/collapse */}
      <div className="md:hidden flex flex-col items-center">
        <button
          type="button"
          className={`flex items-center gap-1 ${highlight(isParentActive)}`}
          onClick={onToggle}
        >
          {item.label}
          <IoChevronDown
            size={14}
            className={`opacity-50 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        {isOpen && (
          <div className="flex flex-col items-center gap-3 mt-3">
            {item.children!.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={`text-sm ${highlight(isActive(child.href, child.exact))}`}
                onClick={onNavigate}
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
