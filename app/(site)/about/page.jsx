const paragraphs = [
  "I design software that people rely on when important things cannot afford to stop working.",
  "Across organisations and everyday life, many critical activities now depend on external platforms — app stores, SaaS vendors, communication tools, or physical presence of a person. These dependencies are convenient until they fail. When access changes, services shut down, accounts expire, or distance increases, work slows down and care breaks down.",
  "My work focuses on reducing that fragility.",
  "Instead of building tools for productivity or engagement, I build continuity systems — environments that remain available regardless of platform restrictions, vendor lock-in, or location. The goal is simple: the system should keep functioning even when the surrounding conditions change.",
  "Over the past decade I have worked on mobile and cloud infrastructure used across enterprise operations, private collaboration environments, and assisted living support. While these areas appear different, they share the same underlying problem: important processes depend on layers outside the user’s control.",
  "My products therefore follow a consistent principle — control should exist closest to the people who depend on it.",
  "Organisations should retain direct access to internal applications through controlled distribution channels.",
  "Teams should keep institutional knowledge accessible under their own governance.",
  "Families should be able to support ageing members through reliable coordination systems.",
  "This is less about features and more about stability. If the surrounding ecosystem changes, the system should still continue.",
  "I am particularly interested in software that quietly prevents problems rather than visibly reacting to them — technology that becomes part of normal life rather than something users have to think about.",
  "The direction remains ongoing: building dependable digital environments that maintain essential activity across distance, changing conditions, and operational constraints."
];

export const metadata = {
  title: "About | Pradeep Dahiya",
  description:
    "Narrative biography of a software architect moving from mobile development to system design and operational platforms.",
  openGraph: {
    title: "About | Pradeep Dahiya",
    description:
      "Narrative biography of a software architect moving from mobile development to system design and operational platforms.",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Pradeep Dahiya",
    description:
      "Narrative biography of a software architect moving from mobile development to system design and operational platforms."
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
          From mobile development to system design.
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
            14+ years of experience in software development and architecture design.
          </p>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
          <p className="text-sm text-neutral-800">Mentor through the NASSCOM program.</p>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
          <p className="text-sm text-neutral-800">
            Internationally recognised for contributions to operational system design.
          </p>
        </div>
      </section>

    </div>
  );
}
