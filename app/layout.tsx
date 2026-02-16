import "./globals.css";
import type { ReactNode } from "react";
import { Fraunces, Sora } from "next/font/google";
import Header from "@/components/Header";

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-white text-neutral-950">
        <div className="min-h-screen bg-white">
          <Header />

          <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-16">
            {children}
          </main>

          <footer className="border-t border-neutral-200/80 bg-white">
            <div className="mx-auto grid max-w-5xl gap-10 px-6 py-12 text-sm text-neutral-600 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
              <div className="flex flex-col gap-2">
                <p>Independent software focused on operational and human continuity.</p>
              </div>
              <div className="flex flex-col gap-2">
                <a className="text-neutral-700 hover:text-neutral-900" href="mailto:pradeepdahiya@hotmail.com">pradeepdahiya@hotmail.com</a>
              </div>
              <div className="flex flex-col gap-1">
                <Link className="text-neutral-700 hover:text-neutral-900" href="/work">Work</Link>
                <Link className="text-neutral-700 hover:text-neutral-900" href="/">Philosophy</Link>
                <Link className="text-neutral-700 hover:text-neutral-900" href="/blog">Blog</Link>
                <Link className="text-neutral-700 hover:text-neutral-900" href="/contact">Contact</Link>
              </div>
              <div className="flex flex-col gap-2">
                <p>© 2026 All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
