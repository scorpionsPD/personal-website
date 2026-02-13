const collaborationAreas = [
  {
    title: "Speaking Engagements",
    description:
      "Talks and panels on platform architecture, privacy-first AI, and operational systems.",
    topics: [
      "Privacy-First AI Architectures",
      "MDM-Free Mobile Distribution",
      "Self-Hosted Platform Design",
      "Building for Regulated Environments"
    ]
  },
  {
    title: "Technical Advisory",
    description:
      "Architecture reviews, platform strategy, and delivery planning for teams building internal systems or moving off SaaS.",
    areas: [
      "Platform Architecture Design",
      "Security & Compliance Strategy",
      "Migration Planning & Execution",
      "Technical Due Diligence"
    ]
  },
  {
    title: "Innovation Partnerships",
    description:
      "Hands‑on collaboration on platforms for teams facing complex operational or compliance challenges.",
    focus: [
      "Regulated Industry Solutions",
      "Privacy-Preserving AI Systems",
      "Custom Distribution Platforms",
      "Governance-First Architecture"
    ]
  },
  {
    title: "Mentoring & Training",
    description:
      "Support for engineering leaders and technical founders through reviews, workshops, and guidance.",
    offerings: [
      "1:1 Architecture Mentoring",
      "Team Workshops & Training",
      "Code & Design Reviews",
      "Platform Strategy Sessions"
    ]
  }
];

export const metadata = {
  title: "Contact | Pradeep Dahiya",
  description:
    "Professional contact for Pradeep Dahiya, technology architect and founder building operational software platforms.",
  openGraph: {
    title: "Contact | Pradeep Dahiya",
    description:
      "Professional contact for Pradeep Dahiya, technology architect and founder building operational software platforms.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Pradeep Dahiya",
    description:
      "Professional contact for Pradeep Dahiya, technology architect and founder building operational software platforms."
  }
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          Contact
        </p>
        <h1 className="font-display text-4xl text-neutral-950 md:text-5xl">
          Let's discuss what you're building.
        </h1>
        <p className="text-base leading-7 text-neutral-600 md:text-lg">
          Open to speaking, advisory work, partnerships, and mentoring.
        </p>
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Collaboration Areas
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
            Ways we can work together.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {collaborationAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6"
            >
              <h3 className="text-lg font-semibold text-neutral-900">{area.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{area.description}</p>
              <div className="mt-4 flex flex-col gap-2">
                {(area.topics || area.areas || area.focus || area.offerings).map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"></span>
                    <span className="text-xs text-neutral-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-neutral-200 bg-white p-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Email
            </p>
            <a
              href="mailto:pradeepdahiya@hotmail.com"
              className="inline-flex text-lg font-semibold text-accent hover:underline"
            >
              pradeepdahiya@hotmail.com
            </a>
            <p className="text-sm leading-7 text-neutral-600">
              I typically respond within 2–3 business days with next steps.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              What to Include
            </p>
            <div className="flex flex-col gap-2 text-sm text-neutral-600">
              <p>• Your organization and role</p>
              <p>• Type of collaboration you're interested in</p>
              <p>• Brief context on your challenge or opportunity</p>
              <p>• Timeline and any specific constraints</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
