"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/impact", label: "Impact" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-neutral-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-display text-2xl font-semibold tracking-tight" onClick={closeMenu}>
            Pradeep Dahiya
          </Link>
          <button
            type="button"
            className="rounded-full border border-neutral-300 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-700 md:hidden"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
        <nav
          id="mobile-menu"
          className={`flex flex-col gap-4 text-sm font-medium text-neutral-700 md:flex md:flex-row md:items-center md:gap-8 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-neutral-950"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="self-start rounded-full border border-neutral-900 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-neutral-900 hover:text-white md:self-auto"
          onClick={closeMenu}
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
