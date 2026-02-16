"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/impact", label: "Impact" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" }
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-[#e6e6e3] bg-[#f7f7f5]/95 backdrop-blur">
      <div className="mx-auto max-w-5xl px-6 py-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <Link href="/" className="font-display text-2xl font-semibold tracking-tight">
            Pradeep Dahiya
          </Link>
          <div className="flex flex-col gap-3 md:ml-8 md:flex-row md:items-center md:gap-8">
            <nav className="flex flex-wrap gap-3 text-sm font-medium text-[#6b6b6b] md:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                    className={`relative text-[#6b6b6b] transition hover:text-[#1c1c1c] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-[#1f3d2b] after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                    isActive ? "after:scale-x-100" : "after:scale-x-0"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
              <Link
                href="/contact"
                className="relative text-[#6b6b6b] transition hover:text-[#1c1c1c] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-[#1f3d2b] after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
