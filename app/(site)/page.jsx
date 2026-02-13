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
    result: "Replaces device-level management with access-level governance, allowing organisations to distribute internal apps without controlling employee devices."
  },
  {
    title: "ScotiTech Workspace",
    focus: "Private AI Execution Environment",
    result: "Introduces local AI processing where organisational data cannot leave infrastructure boundaries, making AI usable in regulated environments."
  },
  {
    title: "ElderConnect+",
    focus: "Technology for Assisted Independence",
    result: "Designing digital systems that elderly users can operate without requiring continuous technical support, prioritising clarity over feature complexity."
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
    <div className="flex flex-col gap-20">
      <section className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Founder, ScotiTech • Systems Architect
          </p>
          <h1 className="font-display text-4xl leading-tight text-neutral-950 md:text-5xl">
            I build operational software platforms for privacy, control, and long-term ownership.
          </h1>
          <p className="text-base leading-7 text-neutral-600 md:text-lg">
            From MDM-free mobile distribution to self-hosted collaboration systems, I focus on
            reliability and data sovereignty for teams that need full control.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/work"
              className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Explore the work
            </a>
            <a
              href="/contact"
              className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-800 transition hover:border-neutral-900"
            >
              Start a conversation
            </a>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-neutral-500">
            <span>Founder at ScotiTech • Award-winning innovator</span>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-neutral-400">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
              12+ years software architecture
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
              NASSCOM mentor
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
              International recognition
            </span>
          </div>
        </div>
        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              Current focus
            </p>
            <h2 className="font-display text-2xl text-neutral-900">
              AI you can run on‑prem, not in the cloud.
            </h2>
            <p className="text-sm leading-7 text-neutral-600">
              With ScotiTech Workspace, I'm tackling a common constraint: teams want AI help but
              can’t let operational data leave their infrastructure. Most tools assume external
              processing, which doesn’t work in regulated or contract-bound environments.
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
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Selected products
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
            Original systems solving operational constraints
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredWork.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col justify-between rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  {item.focus}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{item.result}</p>
              </div>
              <a href="/work" className="mt-6 text-sm font-semibold text-accent">
                Read technical rationale →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-10 rounded-3xl border border-neutral-200 bg-white p-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Philosophy
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
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
