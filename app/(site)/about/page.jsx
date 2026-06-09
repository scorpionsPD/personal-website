import Image from "next/image";

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
      <section className="grid items-start gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-14">
        <div className="flex flex-col gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            About
          </p>
          <h1 className="font-display text-4xl text-neutral-950 md:text-5xl">
            Building AI systems that organisations can trust.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
            Founder, systems architect, and product builder focused on governance-first AI,
            operational resilience, and deployable architecture for regulated environments.
          </p>
        </div>

        <div className="md:justify-self-end">
          <div className="mx-auto aspect-[4/4.75] w-full max-w-[300px] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-sm md:mx-0 md:max-w-[400px]">
            <Image
              src="/images/about/pradeep.jpg"
              alt="Portrait of Pradeep Dahiya"
              width={960}
              height={1200}
              priority
              className="h-full w-full object-cover object-[58%_36%]"
            />
          </div>
          <div className="mx-auto mt-4 flex max-w-[300px] items-center gap-4 md:mx-0 md:max-w-[400px]">
            <span className="h-px flex-1 bg-neutral-300" />
            <div className="text-right">
              <p className="text-sm font-semibold text-neutral-950">Pradeep Dahiya</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-500">
                Founder / Systems Architect
              </p>
            </div>
          </div>
        </div>
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

      <section className="rounded-2xl border border-neutral-200 bg-white p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Professional Profile
            </p>
            <p className="mt-2 text-sm leading-7 text-neutral-600">
              For career history, public updates, and external professional verification, view my LinkedIn profile.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/pradeepkumar2411/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-sm font-semibold text-accent hover:underline"
          >
            Visit LinkedIn →
          </a>
        </div>
      </section>

    </div>
  );
}
