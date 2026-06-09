import "./globals.css";
import type { ReactNode } from "react";
import Link from "next/link";
import { Inter, Source_Serif_4 } from "next/font/google";
import Header from "../components/Header";
import { createMetadata, personJsonLd, siteUrl, websiteJsonLd } from "../lib/seo";

const display = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-display"
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  ...createMetadata({
    title: "Pradeep Dahiya | Systems Architect",
    description:
      "Operational software platforms, private infrastructure, and AI systems built for reliability and control."
  }),
  applicationName: "Pradeep Dahiya",
  authors: [{ name: "Pradeep Dahiya", url: siteUrl }],
  creator: "Pradeep Dahiya",
  publisher: "Pradeep Dahiya",
  keywords: [
    "Pradeep Dahiya",
    "AI governance",
    "systems architect",
    "regulated AI",
    "private AI infrastructure",
    "operational software",
    "ScotiTech",
    "AppDeploy"
  ],
  category: "technology"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = [personJsonLd(), websiteJsonLd()];

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-[#f7f7f5] text-[#1c1c1c]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="min-h-screen bg-[#f7f7f5]">
          <Header />

          <main className="mx-auto flex w-full max-w-[840px] flex-1 flex-col px-6 py-24">
            {children}
          </main>

          <footer className="border-t border-[#e6e6e3] bg-[#f7f7f5]">
            <div className="mx-auto flex max-w-[840px] flex-col gap-4 px-6 py-6 text-xs text-[#6b6b6b] md:flex-row md:items-center md:justify-between">
              <p>Solving operational complexity through thoughtful systems design.</p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/privacy-policy" className="transition hover:text-[#1c1c1c]">
                  Privacy Policy
                </Link>
                <Link href="/cookie-policy" className="transition hover:text-[#1c1c1c]">
                  Cookie Policy
                </Link>
                <p>© 2026</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
