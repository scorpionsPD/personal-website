const paragraphs = [
  "I build systems for environments where reliability, governance, and accountability matter as much as functionality.",
  "My work sits at the intersection of product architecture, operational reliability, and responsible AI adoption. I am particularly interested in the point where technical possibility meets regulatory expectation, and where organisations need deployable systems rather than abstract policy discussion.",
  "Through ScotiTech, I focus on a structural problem many organisations are now facing: AI adoption is accelerating faster than internal governance capability. Teams want the benefits of AI, but they also need traceability, risk visibility, documentation, and clear operational control.",
  "Rather than treating governance as a legal afterthought, I design it into system architecture itself. That means building products where oversight, auditability, data sovereignty, and accountability checkpoints are part of the workflow from the beginning.",
  "Over the past decade I have worked across mobile infrastructure, private collaboration environments, internal distribution systems, and digital support platforms. Across those domains, the consistent theme has been the same: important processes fail when organisations depend on external control or weak operational structure.",
  "My products therefore follow a consistent principle — control should exist closest to the people who depend on the system.",
  "Organisations should retain direct access to internal applications through controlled distribution channels.",
  "Teams should keep knowledge and AI workflows inside governance boundaries they can actually manage.",
  "Families and communities should be able to rely on digital coordination systems that reduce fragility rather than add complexity.",
  "This is less about novelty for its own sake and more about deployable architecture that continues to work under real-world constraints.",
  "I am especially interested in healthcare, finance, public-sector, and contract-bound environments where data exposure, audit readiness, and operational trust are non-negotiable.",
  "The direction remains ongoing: building UK-origin products and technical systems that make advanced technology usable, governable, and trustworthy in practice."
];

export const metadata = {
  title: "About | Pradeep Dahiya",
  description:
    "Founder biography focused on governance-first AI systems, operational software, and regulated-environment architecture.",
  openGraph: {
    title: "About | Pradeep Dahiya",
    description:
      "Founder biography focused on governance-first AI systems, operational software, and regulated-environment architecture.",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Pradeep Dahiya",
    description:
      "Founder biography focused on governance-first AI systems, operational software, and regulated-environment architecture."
  }
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          About
        </p>
        <h1 className="font-display text-4xl text-neutral-950 md:text-5xl">
          Building AI systems that organisations can trust.
        </h1>
      </section>

      <section className="max-w-3xl text-[17px] leading-8 text-neutral-700 md:text-[18px]">
        {paragraphs.map((text, index) => (
          <p key={index} className={index > 0 ? "mt-6" : ""}>{text}</p>
        ))}
      </section>

      <section className="grid gap-3 text-sm text-neutral-600 md:grid-cols-3">
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
          <p className="text-sm text-neutral-800">
            14+ years designing production software, platform architecture, and regulated-environment systems.
          </p>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
          <p className="text-sm text-neutral-800">Founder of ScotiTech, focused on governance-first AI adoption.</p>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
          <p className="text-sm text-neutral-800">
            Internationally recognised for innovation, mentorship, and operational system design.
          </p>
        </div>
      </section>

    </div>
  );
}
