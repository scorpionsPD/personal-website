export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://pradeepdahiya.com"
).replace(/\/$/, "");

export const defaultOgImage = "/images/about/pradeep.jpg";

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
  publishedTime = undefined
}) {
  const url = absoluteUrl(path);
  const images = [
    {
      url: absoluteUrl(image),
      width: 896,
      height: 1195,
      alt: "Pradeep Dahiya"
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
    name: "Pradeep Dahiya",
    url: siteUrl,
    image: absoluteUrl(defaultOgImage),
    jobTitle: "Founder and Systems Architect",
    description:
      "Founder and systems architect building governance-first AI platforms, private infrastructure, and operational software for regulated environments.",
    sameAs: ["https://www.linkedin.com/in/pradeepkumar2411/"],
    worksFor: {
      "@type": "Organization",
      name: "ScotiTech",
      url: "https://scotitech.com"
    },
    knowsAbout: [
      "AI governance",
      "Private AI infrastructure",
      "Operational software",
      "Mobile application distribution",
      "Regulated environment architecture"
    ]
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Pradeep Dahiya",
    url: siteUrl,
    description:
      "Operational software platforms, private infrastructure, and AI systems built for reliability and control.",
    publisher: {
      "@id": `${siteUrl}/#person`
    }
  };
}
