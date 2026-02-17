const products = [
  {
    title: "AppDeploy",
    summary: "Internal application distribution without MDM dependency or private hosting",
    casestudy: {
      dependency:
        "Internal mobile apps were delivered through app stores, MDM policies, or manual installs, all of which depend on external control and device ownership.",
      breaks:
        "Organisations invest in internal applications to control operations, yet depend on external distribution systems that introduce fragility.",
      system:
        "AppDeploy creates a controlled entitlement layer between the organisation and its applications — separating device ownership from operational access and restoring governance over distribution.",
      outcome:
        "Teams can roll out internal apps predictably without taking over devices, restoring operational continuity while keeping governance intact and user friction low."
    },
    innovation: "Entitlement-led distribution architecture without device management"
  },
  {
    title: "ScotiTech Workspace",
    summary: "A private environment for AI-assisted work",
    casestudy: {
      dependency:
        "Institutional knowledge lives inside SaaS tools and external AI platforms that organisations do not control.",
      breaks:
        "Teams are forced to push confidential documents into external SaaS and AI tools to get value, which trains third-party models and compromises data control. Critical knowledge leaves the organisation instead of staying on-premise.",
      system:
        "ScotiTech Workspace creates a self‑controlled environment where communication, documents, and knowledge remain under organisational ownership. AI runs inside infrastructure boundaries rather than outside them.",
      outcome:
        "Knowledge stays continuously accessible regardless of vendor shifts, and AI assistance is available without exporting operational data. AI becomes a capability inside the system, not the product itself."
    },
    innovation: "Private AI execution environment for regulated organisations"
  },
  {
    title: "ElderConnect+",
    summary: "Digital support for independent living",
    casestudy: {
      dependency:
        "Everyday support for older adults depends on informal, inconsistent coordination between family, neighbours, and helpers.",
      breaks:
        "Small needs are missed, check‑ins are irregular, and help becomes unreliable, especially after gaps in use or when people are distributed across locations.",
      system:
        "ElderConnect+ provides a shared, low‑friction layer for requests and acknowledgements, keeping interactions explicit and predictable without forcing users into complex workflows.",
      outcome:
        "Routine support becomes easier to organise, issues surface earlier, and users maintain confidence in daily life while existing support networks become reliable."
    },
    innovation: "Coordinated, low-friction support without formal care workflows"
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
          Products
        </p>
        <h1 className="font-display text-4xl text-neutral-950 md:text-5xl">
          Platforms designed for control and long-term ownership
        </h1>
        <p className="text-base leading-7 text-neutral-600 md:text-lg">
          These projects grew out of situations where standard software assumptions didn’t
          hold — mixed device ownership, regulatory limits, and environments where systems
          must keep running for years rather than weeks.
        </p>
      </section>

      <section className="flex flex-col gap-12">
        {products.map((item, index) => (
          <article
            key={item.title}
            className="border-b border-neutral-200 pb-12"
          >
            <div className="flex flex-col gap-3 mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                {(index + 1).toString().padStart(2, "0")} — {item.title}
              </p>
              <h2 className="font-display text-3xl text-neutral-950">{item.summary}</h2>
              <p className="text-sm font-semibold text-accent">{item.innovation}</p>
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
                    3. The System I Designed
                  </p>
                  <p className="text-sm leading-7 text-neutral-700">
                    {item.casestudy.system}
                  </p>
                </div>

                <div className="border-l-2 border-accent pl-6 bg-neutral-50/50 py-4 -mx-6 px-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">
                    4. What Changed After Implementation
                  </p>
                  <p className="text-sm leading-7 text-neutral-800 font-medium">
                    {item.casestudy.outcome}
                  </p>
                </div>

              </div>
            </details>
          </article>
        ))}
      </section>
    </div>
  );
}
