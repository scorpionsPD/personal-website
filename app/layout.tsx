import "./globals.css";
import type { ReactNode } from "react";
import Link from "next/link";
import { Inter, Source_Serif_4 } from "next/font/google";
import Header from "../components/Header";

const display = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-display"
});

const body = Inter({
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
      <body className="bg-[#f7f7f5] text-[#1c1c1c]">
        <div className="min-h-screen bg-[#f7f7f5]">
          <Header />

          <main className="mx-auto flex w-full max-w-[840px] flex-1 flex-col px-6 py-24">
            {children}
          </main>

          <footer className="border-t border-[#e6e6e3] bg-[#f7f7f5]">
            <div className="mx-auto grid max-w-[840px] gap-10 px-6 py-12 text-sm text-[#6b6b6b] text-center md:grid-cols-[1.4fr_1fr_1fr_1fr] md:text-left">
              <div className="flex flex-col gap-2">
                <p>Independent software focused on operational and human continuity.</p>
              </div>
              <div className="flex flex-col gap-2">
                <a className="text-[#1c1c1c] hover:underline" href="mailto:pradeepdahiya@hotmail.com">pradeepdahiya@hotmail.com</a>
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
