"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/work", label: "Work" },
  { href: "/impact", label: "Impact" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-[#e6e6e3] bg-[#f7f7f5]/95 backdrop-blur">
      <div className="mx-auto max-w-[840px] px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <Link href="/" className="text-lg font-semibold tracking-tight text-[#1c1c1c]">
            Pradeep Dahiya
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6 text-sm md:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${
                    isActive
                      ? "text-[#1c1c1c] font-medium"
                      : "text-[#6b6b6b] hover:text-[#1c1c1c]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
