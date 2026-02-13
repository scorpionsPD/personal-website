const paragraphs = [
  "I started as a mobile developer, building apps where performance and stability showed up fast. That work taught me to respect constraints early: battery, bandwidth, offline behaviour, and devices I didn’t control. Shipping to production made reliability non‑negotiable.",
  "As those systems grew, I moved from client code into the architecture that kept everything running. Identity, distribution, deployment pipelines, and data integrity became my day‑to‑day. Over 12+ years, I’ve built infrastructure users never see but rely on every day. The work was less about screens and more about how the system actually runs.",
  "Earlier in my career, I led iOS teams in India, shipping production apps and owning core mobile architecture.",
  "That shift moved my focus from features to system design. I became interested in the gap between software that works in demos and software that holds up inside real organisations. It usually came down to governance, control, and long‑term maintainability.",
  "In 2024 I started ScotiTech to build platforms teams can actually own and run. The focus is on operational challenges SaaS tools don’t solve well: complete data sovereignty, MDM‑free mobile distribution, and self‑hosted collaboration environments. The work has been recognised with awards from Forttuna Global Excellence and the Indian Tech Society.",
  "Outside the build work, I mentor startups through NASSCOM, share knowledge with teams like PNB MetLife, and give university lectures on software architecture. I’ve also been invited to contribute to Cambridge Institute for Sustainability Leadership discussions on responsible technology design.",
  "Today I work as a software architect and founder, building platforms used in production settings. I care about composable systems, clear operational boundaries, and software that teams can own for years. My focus stays on problems where operational control and data sovereignty are non‑negotiable."
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

    </div>
  );
}
