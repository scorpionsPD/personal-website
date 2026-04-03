import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "AppDeploy",
    slug: "appdeploy",
    tagline: "Internal application distribution without MDM dependency",
    description: "Enterprise app distribution that maintains security without requiring device enrollment or MDM control.",
    metrics: {
      primary: "4+ organisations",
      secondary: "50+ app deployments"
    },
    usp: "First production implementation of zero-touch enterprise distribution maintaining security equivalent to MDM while eliminating device control requirements.",
    category: "Mobile Distribution",
    logo: "/images/products/AppdeployLogoBlack.png"
  },
  {
    title: "AXOS - Private AI Workspace",
    slug: "scotitech-workspace",
    tagline: "Secure local AI execution with complete data sovereignty",
    description: "AI platform enabling local inference with complete data sovereignty for compliance-bound teams.",
    metrics: {
      primary: "2 regulated organisations",
      secondary: "100,000+ AI interactions"
    },
    usp: "Novel architecture combining containerized LLM inference with stateful workflow engine and cryptographic audit trails—enabling AI in air-gapped environments.",
    category: "AI Architecture",
    logo: "/images/products/AXOS.png"
  },
  {
    title: "ElderConnect+",
    slug: "elderconnect-plus",
    tagline: "Digital support for independent living",
    description: "Coordination platform for family networks supporting older adults with lightweight, predictable interactions.",
    metrics: {
      primary: "15+ family networks",
      secondary: "200+ check-ins coordinated"
    },
    usp: "Coordinated, low-friction support through lightweight shared visibility—replacing informal coordination with structured, predictable interactions.",
    category: "Care Technology",
    logo: "/images/products/brand-logo.PNG"
  }
];

export const metadata = {
  title: "Products | Pradeep Dahiya",
  description:
    "Original software products designed for operational reliability, data sovereignty, and long-term deployment in regulated environments.",
  openGraph: {
    title: "Products | Pradeep Dahiya",
    description:
      "Original software products designed for operational reliability, data sovereignty, and long-term deployment in regulated environments.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | Pradeep Dahiya",
    description:
      "Original software products designed for operational reliability, data sovereignty, and long-term deployment in regulated environments."
  }
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          Products
        </p>
        <h1 className="font-display text-4xl text-neutral-950 md:text-5xl">
          Original platforms built for operational reliability.
        </h1>
        <p className="text-base leading-7 text-neutral-600 md:text-lg">
          Each product addresses a gap where standard software assumptions fail—environments 
          with mixed device ownership, regulatory constraints, and systems that must operate 
          reliably for years. These are production platforms with real adoption, not prototypes.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-1">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group rounded-2xl border border-neutral-200 bg-white p-8 transition hover:border-accent/50 hover:shadow-lg"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  {product.category}
                </span>
                {product.logo && (
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl p-2">
                    <Image
                      src={product.logo}
                      alt={`${product.title} logo`}
                      width={40}
                      height={40}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                )}
              </div>
              
              <div>
                <h2 className="font-display text-2xl text-neutral-950 group-hover:text-accent transition">
                  {product.title}
                </h2>
                <p className="mt-2 text-lg text-neutral-600">{product.tagline}</p>
              </div>

              <p className="text-sm leading-7 text-neutral-600">{product.description}</p>

              <div className="rounded-xl border-l-4 border-accent bg-accent/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                  Technical Differentiation
                </p>
                <p className="text-sm text-neutral-700">{product.usp}</p>
              </div>

              <div className="flex gap-6">
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                  <p className="text-lg font-semibold text-accent">{product.metrics.primary}</p>
                  <p className="text-xs text-neutral-500">Adoption</p>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                  <p className="text-lg font-semibold text-accent">{product.metrics.secondary}</p>
                  <p className="text-xs text-neutral-500">Activity</p>
                </div>
              </div>

              <span className="text-sm font-semibold text-accent group-hover:underline">
                View full product details →
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
