import "./globals.css";
import type { ReactNode } from "react";
import Link from "next/link";
import { Inter, Source_Serif_4 } from "next/font/google";
import Header from "../components/Header";
import CookiePreferencesButton from "../components/cookies/CookiePreferencesButton";
import { CookieConsentProvider } from "../components/cookies/CookieConsentProvider";

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
        <CookieConsentProvider>
          <div className="min-h-screen bg-[#f7f7f5]">
            <Header />

            <main className="mx-auto flex w-full max-w-[840px] flex-1 flex-col px-6 py-24">
              {children}
            </main>

            <footer className="border-t border-[#e6e6e3] bg-[#f7f7f5]">
              <div className="mx-auto flex max-w-[840px] flex-col gap-4 px-6 py-6 text-xs text-[#6b6b6b] md:flex-row md:items-center md:justify-between">
                <p>Solving operational complexity through thoughtful systems design.</p>
                <div className="flex flex-wrap items-center gap-4">
                  <CookiePreferencesButton />
                  <Link href="/privacy-policy" className="transition hover:text-[#1c1c1c]">
                    Privacy Policy
                  </Link>
                  <p>© 2026</p>
                </div>
              </div>
            </footer>
          </div>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
