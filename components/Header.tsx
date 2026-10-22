"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/impact", label: "Recognition" }
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`) ||
    (href === "/work" && pathname.startsWith("/products"));
}

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-canvas/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="font-display text-[19px] font-medium tracking-tight text-strong"
          aria-label="Pradeep Dahiya, home"
        >
          Pradeep Dahiya
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
              className={`rounded-full px-3.5 py-2 text-[14px] transition-colors ${
                isActive(pathname, link.href)
                  ? "text-strong"
                  : "text-muted hover:text-strong"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-3 rounded-full bg-strong px-4 py-2 text-[14px] font-medium text-canvas transition hover:bg-white"
          >
            Get in touch
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-strong md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 6.5h14M3 13.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-line bg-canvas px-5 pb-6 pt-2 md:hidden"
        >
          {[...navLinks, { href: "/contact", label: "Contact" }].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-line py-4 text-[17px] text-strong"
            >
              {link.label}
              <span aria-hidden="true" className="text-muted">→</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
