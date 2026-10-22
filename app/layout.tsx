import "./globals.css";
import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createMetadata, personJsonLd, SITE_DESCRIPTION, siteUrl, websiteJsonLd } from "../lib/seo";

export const metadata = {
  metadataBase: new URL(siteUrl),
  ...createMetadata({
    title: "Pradeep Dahiya | Founder of ScotiTech, building Vamiq, OnQ and AXOS",
    description: SITE_DESCRIPTION
  }),
  applicationName: "Pradeep Dahiya",
  authors: [{ name: "Pradeep Dahiya", url: siteUrl }],
  creator: "Pradeep Dahiya",
  publisher: "Pradeep Dahiya",
  keywords: [
    "Pradeep Dahiya",
    "ScotiTech",
    "Vamiq",
    "OnQ",
    "AXOS",
    "Apple device management",
    "private app store",
    "private AI"
  ],
  category: "technology"
};

export const viewport = {
  themeColor: "#0b1514"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = [personJsonLd(), websiteJsonLd()];

  return (
    <html lang="en-GB">
      <body className="bg-canvas text-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-on-ink"
        >
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
