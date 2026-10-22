import { awards, person } from "./site";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://pradeepdahiya.com"
).replace(/\/$/, "");

// Share cards are 1200x630 JPEGs rendered from scripts/og-cards.html.
export const defaultOgImage = "/og/pradeep-dahiya.jpg";

export const SITE_DESCRIPTION =
  "Pradeep Dahiya is the founder of ScotiTech. He builds Vamiq for Apple device management and private apps, OnQ for live queues, and AXOS, a private AI workspace.";

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalizedPath}`;
}

export function createMetadata({
  title,
  description,
  path = "/",
  type = "website",
  image = defaultOgImage,
  imageAlt = "Pradeep Dahiya, founder of ScotiTech",
  publishedTime = undefined
}) {
  const url = absoluteUrl(path);
  const images = [
    {
      url: absoluteUrl(image),
      width: 1200,
      height: 630,
      alt: imageAlt
    }
  ];

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Pradeep Dahiya",
      locale: "en_GB",
      type,
      images,
      publishedTime
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)]
    }
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: person.name,
    url: siteUrl,
    image: absoluteUrl("/images/about/pradeep-dahiya-portrait-760.webp"),
    jobTitle: "Founder",
    description: SITE_DESCRIPTION,
    email: `mailto:${person.email}`,
    sameAs: [person.linkedin, person.github],
    worksFor: {
      "@type": "Organization",
      "@id": "https://scotitech.com/#organization",
      name: person.company.legalName,
      url: person.company.url
    },
    award: awards
      .filter((item) => item.link && !item.company)
      .map((item) => `${item.title}, ${item.by} ${item.year}`),
    knowsAbout: [
      "Apple device management",
      "Private app distribution",
      "iOS development",
      "Private AI",
      "Product architecture"
    ]
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: person.name,
    url: siteUrl,
    inLanguage: "en-GB",
    description: SITE_DESCRIPTION,
    publisher: {
      "@id": `${siteUrl}/#person`
    }
  };
}

export function productJsonLd(product, extra = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    url: product.url,
    description: product.summary,
    applicationCategory: "BusinessApplication",
    creator: { "@id": `${siteUrl}/#person` },
    publisher: {
      "@type": "Organization",
      "@id": "https://scotitech.com/#organization",
      name: person.company.legalName,
      url: person.company.url
    },
    ...extra
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}
