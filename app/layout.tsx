import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";
import { Fraunces, Sora } from "next/font/google";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display"
});

const body = Sora({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata = {
  title: "Pradeep Dahiya | Systems Architect",
  description:
    "Operational software platforms, private infrastructure, and AI systems built for reliability and control.",
  openGraph: {
    title: "Pradeep Dahiya | Systems Architect",
    description:
      "Operational software platforms, private infrastructure, and AI systems built for reliability and control.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pradeep Dahiya | Systems Architect",
    description:
      "Operational software platforms, private infrastructure, and AI systems built for reliability and control."
  }
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/impact", label: "Impact" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" }
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-white text-neutral-950">
        <div className="min-h-screen bg-white">
          <header className="sticky top-0 z-20 border-b border-neutral-200/80 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
              <Link href="/" className="font-display text-2xl font-semibold tracking-tight">
                Pradeep Dahiya
              </Link>
              <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-neutral-700">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/contact"
                className="self-start rounded-full border border-neutral-900 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-neutral-900 hover:text-white"
              >
                Contact
              </Link>
            </div>
          </header>

          <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-16">
            {children}
          </main>

          <footer className="border-t border-neutral-200/80 bg-white">
            <div className="mx-auto grid max-w-5xl gap-10 px-6 py-12 text-sm text-neutral-600 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">About</p>
                <p>Independent software focused on operational and human continuity.</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Contact</p>
                <a className="text-neutral-700 hover:text-neutral-900" href="mailto:pradeepdahiya@hotmail.com">pradeepdahiya@hotmail.com</a>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Sections</p>
                <div className="flex flex-col gap-1">
                  <Link className="text-neutral-700 hover:text-neutral-900" href="/work">Work</Link>
                  <Link className="text-neutral-700 hover:text-neutral-900" href="/">Philosophy</Link>
                  <Link className="text-neutral-700 hover:text-neutral-900" href="/blog">Blog</Link>
                  <Link className="text-neutral-700 hover:text-neutral-900" href="/contact">Contact</Link>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Legal</p>
                <p>© 2026 All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
