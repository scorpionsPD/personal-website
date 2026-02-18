const highlights = [
  {
    title: "Private platforms",
    description: "Build internal distribution and collaboration systems without SaaS lock-in.",
    metric: "AppDeploy + ScotiTech Workspace in production"
  },
  {
    title: "Operational architecture",
    description: "Design systems for reliability, data sovereignty, and long-term ownership.",
    metric: "12+ years production systems experience"
  },
  {
    title: "Founder & mentor",
    description: "Founded ScotiTech and mentor emerging startups through NASSCOM program.",
    metric: "Revenue-generating business + mentorship impact"
  }
];

const featuredWork = [
  {
    title: "AppDeploy",
    focus: "Access-Controlled Mobile Distribution",
    result: "AppDeploy keeps organisations operational when traditional app distribution fails. Companies rely on mobile apps for daily operations, yet most distribution methods depend on external control — app stores, device management policies, or manual installations that break at scale. AppDeploy provides a controlled internal distribution layer where organisations retain direct authority over access, availability, and lifecycle of their applications. Instead of managing devices, organisations manage operational continuity."
  },
  {
    title: "ScotiTech Workspace",
    focus: "Private AI Execution Environment",
    result: "ScotiTech Workspace enables local AI execution, keeping sensitive data within infrastructure boundaries where compliance and operational control remain intact."
  },
  {
    title: "ElderConnect+",
    focus: "Technology for Assisted Independence",
    result: "When essential care depends on complex digital tools, continuity breaks for older adults and families. ElderConnect+ provides simplified systems that reduce support dependency while keeping routines stable."
  }
];

export const metadata = {
  title: "Pradeep Dahiya | Technology Architect & Founder",
  description:
    "Systems architect and founder building operational software platforms, private infrastructure, and AI systems for real-world environments.",
  openGraph: {
    title: "Pradeep Dahiya | Technology Architect & Founder",
    description:
      "Systems architect and founder building operational software platforms, private infrastructure, and AI systems for real-world environments.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pradeep Dahiya | Technology Architect & Founder",
    description:
      "Systems architect and founder building operational software platforms, private infrastructure, and AI systems for real-world environments."
  }
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-32">
      <section className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Founder, ScotiTech • Systems Architect
          </p>
          <h1 className="font-display text-4xl leading-tight text-neutral-950 md:text-5xl">
            Software designed to keep essential systems working.
          </h1>
          <p className="text-base leading-7 text-neutral-600 md:text-lg">
            I build continuity infrastructure for organisations and families where privacy,
            control, and long-term ownership are non-negotiable.
          </p>
          <div className="flex flex-wrap gap-6 text-sm font-semibold text-[#1c1c1c]">
            <a href="/impact" className="transition hover:underline">
              View Impact →
            </a>
            <a href="/work" className="transition hover:underline">
              View Work →
            </a>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-neutral-500">
          </div>
        </div>
        <div className="rounded-3xl border border-[#e6e6e3] bg-[#f7f7f5] p-8">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#1f3d2b]">
              CURRENT FOCUS
            </p>
            <h2 className="font-display text-2xl text-neutral-900">
              Making AI usable in environments where data cannot leave infrastructure boundaries.
            </h2>
            <p className="text-sm leading-7 text-neutral-600">
              I'm tackling a common constraint: teams want AI help but can’t let operational data
              leave their infrastructure. Most tools assume external processing, which doesn’t
              work in regulated or contract-bound environments.
            </p>
            <p className="text-sm leading-7 text-neutral-600">
              I’m especially interested in healthcare, finance, government, or legal teams where
              data sovereignty is non-negotiable but AI could still improve workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6b6b6b]">
            Selected products
          </p>
          <h2 className="font-display text-[28px] text-[#1c1c1c]">
            Continuity Systems in Practice
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredWork.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col justify-between rounded-2xl border border-[#e6e6e3] bg-[#f7f7f5] p-6"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b6b6b]">
                  {item.focus}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-[#1c1c1c]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6b6b6b]">{item.result}</p>
              </div>
              <a href="/work" className="mt-6 text-sm font-semibold text-[#1f3d2b]">
                Read technical rationale →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-10 rounded-3xl border border-[#e6e6e3] bg-[#f7f7f5] p-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6b6b6b]">
            Philosophy
          </p>
          <h2 className="font-display text-[28px] text-[#1c1c1c]">
            Software should survive operations, not demos.
          </h2>
          <p className="text-sm leading-7 text-neutral-600">
            I design platforms for environments where software cannot fail silently — regulated
            teams, long-lived deployments, and systems operated by non-developers.
          </p>
          <p className="text-sm leading-7 text-neutral-600">
            In these contexts, usability matters, but predictability matters more. The goal is
            infrastructure teams can depend on without constant supervision.
          </p>
          <p className="text-sm leading-7 text-neutral-600">
            My work focuses on making advanced technology usable where reliability is mandatory
            rather than optional.
          </p>
          <p className="text-sm leading-7 text-neutral-600">
            Technology should quietly prevent problems. The most valuable systems are not the
            ones people actively use, but the ones they stop worrying about.
          </p>
          <p className="text-sm leading-7 text-neutral-600">
            If the surrounding ecosystem changes — vendor, policy, device, or location —
            essential activity should continue uninterrupted.
          </p>
          <p className="text-sm leading-7 text-neutral-600">
            I build software that reduces dependence rather than increasing usage.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-neutral-600">
          <div className="rounded-2xl border border-neutral-200 p-4">
            <p className="font-semibold text-neutral-900">Design for constraints</p>
            <p className="mt-2">
              Compliance rules, deployment boundaries, and ownership requirements are not
              limitations — they define the system architecture.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-4">
            <p className="font-semibold text-neutral-900">Systems reduce effort</p>
            <p className="mt-2">
              A platform should remove operational decisions, not introduce new ones. If teams
              must constantly manage the software, the architecture is incomplete.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-4">
            <p className="font-semibold text-neutral-900">Production is the proof</p>
            <p className="mt-2">
              Software is validated only after long-term use in real environments.
              Demonstrations measure possibility; operations measure correctness.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
