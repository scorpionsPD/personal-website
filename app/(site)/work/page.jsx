import Image from "next/image";

const products = [
  {
    title: "AppDeploy",
    slug: "appdeploy",
    summary: "Internal application distribution without MDM dependency or private hosting",
    category: "Mobile Distribution",
    description:
      "ScotiTech product led and developed by me, maintaining enterprise app security without requiring device enrollment or MDM control.",
    metrics: {
      adoption: "3 organisations",
      deployments: "50+ app deployments",
      costSavings: "Up to 80% reduction in deployment costs",
      uptime: "100% distribution availability"
    },
    casestudy: {
      dependency:
        "Internal mobile apps were delivered through app stores, MDM policies, or manual installs, all of which depend on external control and device ownership.",
      breaks:
        "Organisations invest in internal applications to control operations, yet depend on external distribution systems that introduce fragility.",
      system:
        "Led and developed by me through ScotiTech, AppDeploy creates a controlled entitlement layer between the organisation and its applications — separating device ownership from operational access and restoring governance over distribution.",
      outcome:
        "Teams gain predictable app deployment with full governance control and minimal user friction, enabling operational continuity across the organisation."
    },
    innovation: "Entitlement-led distribution architecture with full organisational control",
    usp:
      "MDM-equivalent security for enterprise app distribution.",
    logo: "/images/products/AppdeployLogoBlack.png"
  },
  {
    title: "AXOS - Private AI Workspace",
    slug: "scotitech-workspace",
    summary: "A private AI workspace for regulated organisations",
    category: "AI Architecture",
    description:
      "ScotiTech product led and developed by me, enabling local AI execution with complete data sovereignty for compliance-bound teams.",
    metrics: {
      adoption: "2 regulated organisations",
      interactions: "100,000+ AI interactions",
      dataSovereignty: "100% on-premise processing",
      uptime: "100% platform availability"
    },
    casestudy: {
      dependency:
        "Institutional knowledge lives inside SaaS tools and external AI platforms that organisations do not control.",
      breaks:
        "Teams are forced to push confidential documents into external SaaS and AI tools to get value, which trains third-party models and compromises data control. Critical knowledge leaves the organisation instead of staying on-premise.",
      system:
        "Led and developed by me through ScotiTech, AXOS creates a self‑controlled environment where communication, documents, and knowledge remain under organisational ownership. AI runs inside infrastructure boundaries rather than outside them.",
      outcome:
        "Knowledge remains continuously accessible under organisational control, with AI assistance running on internal infrastructure. AI becomes a capability teams control, integrated into operations."
    },
    innovation: "Secure local AI execution with complete data sovereignty",
    usp:
      "Governance-first architecture combining local inference, workflow controls, and auditability for regulated AI adoption.",
    logo: "/images/products/AXOS.png"
  },
  {
    title: "ElderConnect+",
    slug: "elderconnect-plus",
    summary: "Community-focused digital support for independent living",
    category: "Care Technology",
    description:
      "Community-focused coordination platform helping family networks support older adults through lightweight, predictable interactions.",
    metrics: {
      users: "15+ active family networks",
      checkIns: "200+ coordinated check-ins",
      responseTime: "4x faster issue resolution",
      retention: "85% sustained engagement"
    },
    casestudy: {
      dependency:
        "Everyday support for older adults depends on informal, inconsistent coordination between family, neighbours, and helpers.",
      breaks:
        "Small needs are missed, check‑ins are irregular, and help becomes unreliable, especially after gaps in use or when people are distributed across locations.",
      system:
        "ElderConnect+ provides a shared, low‑friction layer for requests and acknowledgements, keeping interactions explicit and predictable without forcing users into complex workflows.",
      outcome:
        "Routine support becomes easier to organise, issues surface earlier, and users maintain confidence in daily life as support networks gain structure and reliability."
    },
    innovation: "Applied social innovation through lightweight, reliable care coordination",
    usp:
      "Coordinated, low-friction support through lightweight shared visibility, replacing informal coordination with structured, predictable interactions.",
    logo: "/images/products/brand-logo.PNG"
  }
];

export const metadata = {
  title: "Work | Pradeep Dahiya",
  description:
    "Original platforms built by a technology architect and founder, designed for reliability, control, and long-term operations.",
  openGraph: {
    title: "Work | Pradeep Dahiya",
    description:
      "Original platforms built by a technology architect and founder, designed for reliability, control, and long-term operations.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Work | Pradeep Dahiya",
    description:
      "Original platforms built by a technology architect and founder, designed for reliability, control, and long-term operations."
  }
};

export default function WorkPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          Work
        </p>
        <h1 className="font-display text-4xl text-neutral-950 md:text-5xl">
          Original work built for reliability, control, and long-term use
        </h1>
        <p className="text-base leading-7 text-neutral-600 md:text-lg">
          This page is the core product work on the site. Each platform grew out of a real
          operational constraint rather than a portfolio exercise: mixed device ownership,
          regulated AI adoption, or fragile community coordination. The emphasis is practical
          systems architecture, technical differentiation, and production reliability.
        </p>
      </section>

      <section className="flex flex-col gap-12">
        {products.map((item, index) => (
          <article
            key={item.title}
            className="border-b border-neutral-200 pb-12"
          >
            <div className="flex flex-col gap-3 mb-8">
              {item.logo && (
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl p-2">
                  <Image
                    src={item.logo}
                    alt={`${item.title} logo`}
                    width={48}
                    height={48}
                    className="h-auto w-full object-contain"
                  />
                </div>
              )}
              <div className="flex items-center gap-4">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  {item.category}
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                {(index + 1).toString().padStart(2, "0")} — {item.title}
              </p>
              <h2 className="font-display text-3xl text-neutral-950">{item.summary}</h2>
              <p className="text-sm leading-7 text-neutral-600">{item.description}</p>
              <p className="text-sm font-semibold text-accent">{item.innovation}</p>
            </div>

            <div className="mb-8 rounded-xl border-l-4 border-accent bg-accent/5 p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Technical Differentiation
              </p>
              <p className="text-sm text-neutral-700">{item.usp}</p>
            </div>

            {/* Adoption Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {Object.entries(item.metrics).map(([key, value]) => (
                <div key={key} className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                  <p className="text-lg font-semibold text-accent">{value}</p>
                  <p className="text-xs text-neutral-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                </div>
              ))}
            </div>

            <details className="text-sm text-neutral-600">
              <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">
              View case study
            </summary>

              <div className="mt-6 space-y-8">
                <div className="border-l-2 border-neutral-200 pl-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-2">
                    1. The Fragile Dependency
                  </p>
                  <p className="text-sm leading-7 text-neutral-700">
                    {item.casestudy.dependency}
                  </p>
                </div>

                <div className="border-l-2 border-neutral-200 pl-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-2">
                    2. What Breaks in Real Life
                  </p>
                  <p className="text-sm leading-7 text-neutral-700">
                    {item.casestudy.breaks}
                  </p>
                </div>

                <div className="border-l-2 border-neutral-200 pl-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 mb-2">
                    3. System Architecture
                  </p>
                  <p className="text-sm leading-7 text-neutral-700">
                    {item.casestudy.system}
                  </p>
                </div>

                <div className="border-l-2 border-accent pl-6 bg-neutral-50/50 py-4 -mx-6 px-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">
                    4. Operational Outcome
                  </p>
                  <p className="text-sm leading-7 text-neutral-800 font-medium">
                    {item.casestudy.outcome}
                  </p>
                </div>

              </div>
            </details>

            <a
              href={`/products/${item.slug}`} 
              className="mt-6 inline-flex text-sm font-semibold text-accent hover:underline"
            >
              View full product details →
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}
