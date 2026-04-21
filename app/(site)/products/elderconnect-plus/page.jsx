import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "ElderConnect+ | Pradeep Dahiya",
  description:
    "Community-focused digital support for independent living. Coordination platform for family networks supporting older adults.",
  openGraph: {
    title: "ElderConnect+ | Pradeep Dahiya",
    description:
      "Community-focused digital support for independent living. Coordination platform for family networks supporting older adults.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "ElderConnect+ | Pradeep Dahiya",
    description:
      "Community-focused digital support for independent living. Coordination platform for family networks supporting older adults."
  }
};

const metrics = [
  { value: "15+", label: "Family Networks", detail: "Active users coordinating care" },
  { value: "200+", label: "Check-ins Coordinated", detail: "Support interactions facilitated" },
  { value: "4x", label: "Faster Response", detail: "Issue resolution compared to informal coordination" },
  { value: "85%", label: "Sustained Engagement", detail: "Users active after 6 months" }
];

const differentiation = [
  {
    category: "vs. Group Chat (WhatsApp, etc.)",
    ours: "Structured requests with clear acknowledgements. Nothing gets lost in message noise.",
    theirs: "Unstructured. Messages get buried. No accountability for follow-through."
  },
  {
    category: "vs. Care Management Apps",
    ours: "Low-friction design for non-technical users. Works for everyday coordination, not medical care.",
    theirs: "Complex. Designed for professional caregivers. Overkill for family support."
  },
  {
    category: "vs. Calendar Sharing",
    ours: "Request-and-acknowledge model creates explicit commitment and visibility.",
    theirs: "Passive visibility. No mechanism for requests or accountability."
  },
  {
    category: "vs. No Digital Coordination",
    ours: "Issues surface earlier. Support becomes reliable. Families have peace of mind.",
    theirs: "Small needs missed. Check-ins irregular. Support unpredictable."
  }
];

const technicalArchitecture = [
  {
    layer: "Request Layer",
    description: "Simple, explicit requests for everyday needs. Low cognitive load for older adults. Clear call-to-action for helpers.",
    technologies: ["Progressive Web App", "Accessible UI", "Push notifications"]
  },
  {
    layer: "Acknowledgement Layer",
    description: "Explicit confirmation when support is provided. Creates accountability and visibility without complex workflows.",
    technologies: ["State management", "Real-time sync", "Notification system"]
  },
  {
    layer: "Visibility Layer",
    description: "Shared view across the support network. Family members see what's needed, what's handled, and what's outstanding.",
    technologies: ["Dashboard", "Activity feed", "Status indicators"]
  },
  {
    layer: "Resilience Layer",
    description: "Designed for gaps in use. Works after weeks of inactivity. No training required to resume.",
    technologies: ["Stateless interactions", "Self-describing UI", "Offline support"]
  }
];

const useCases = [
  {
    persona: "Adult Children",
    challenge: "Living far from aging parents, worried about missed needs, uncertain if neighbours are checking in.",
    solution: "Shared visibility into daily support. See requests and acknowledgements. Peace of mind without micromanagement."
  },
  {
    persona: "Older Adults",
    challenge: "Want to maintain independence but need occasional help. Reluctant to ask. Don't want to be a burden.",
    solution: "Low-friction requests. Simple interface. Dignity preserved while getting needed support."
  },
  {
    persona: "Local Helpers",
    challenge: "Want to help neighbours but unsure what's needed or if someone else is handling it.",
    solution: "Clear visibility into open requests. No duplication. Credit for help provided."
  }
];

const designPrinciples = [
  {
    title: "Low Friction Above Features",
    description: "Every interaction designed for minimum cognitive load. Older adults can use it without training. Helpers can respond in seconds."
  },
  {
    title: "Explicit Over Implicit",
    description: "No assumptions about who's handling what. Requests and acknowledgements create clear accountability."
  },
  {
    title: "Resilience Over Engagement",
    description: "Works after gaps in use. No streaks or gamification. The goal is reliable support, not daily usage."
  },
  {
    title: "Structure Without Complexity",
    description: "Enough structure to replace informal coordination, simple enough that non-technical users succeed."
  }
];

const elderConnectLinks = {
  website: "https://www.elderconnect.co.uk/welcome",
  appStore: "https://apps.apple.com/gb/app/elderconnect/id6720757966",
  logo: "/images/products/brand-logo.PNG"
};

export default function ElderConnectPlusPage() {
  return (
    <div className="flex flex-col gap-16">
      {/* Header */}
      <section className="flex flex-col gap-6">
        <Link href="/products" className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500 hover:text-accent">
          ← Products
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl p-2">
            <Image
              src={elderConnectLinks.logo}
              alt="ElderConnect+ logo"
              width={48}
              height={48}
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={elderConnectLinks.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm font-semibold text-accent hover:underline"
            >
              Visit website →
            </a>
            <a
              href={elderConnectLinks.appStore}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm font-semibold text-accent hover:underline"
            >
              View on App Store →
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            Care Technology
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Production since 2023
          </span>
        </div>
        <h1 className="font-display text-4xl text-neutral-950 md:text-5xl">
          ElderConnect+
        </h1>
        <p className="text-xl text-neutral-600">
          Community-focused digital support for independent living.
        </p>
      </section>

      {/* Key Metrics */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <p className="text-3xl font-semibold text-accent">{metric.value}</p>
            <p className="mt-2 text-sm font-semibold text-neutral-900">{metric.label}</p>
            <p className="mt-1 text-xs text-neutral-500">{metric.detail}</p>
          </div>
        ))}
      </section>

      {/* Technical USP */}
      <section className="rounded-2xl border-l-4 border-accent bg-accent/5 p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-4">
          Technical Differentiation (USP)
        </p>
        <h2 className="font-display text-2xl text-neutral-950 mb-4">
          Coordinated support through lightweight shared visibility
        </h2>
        <p className="text-base leading-7 text-neutral-700">
          ElderConnect+ solves a coordination problem that existing tools don't address: everyday 
          support for older adults happens informally through family, neighbours, and local helpers, 
          but this informal coordination is fragile. Small needs get missed, check-ins become irregular, 
          and help becomes unreliable. The platform provides just enough structure to make informal 
          support networks reliable—without the complexity of care management software designed for 
          professional caregivers. It is an example of applied social innovation through digital
          infrastructure that strengthens community support rather than replacing it.
        </p>
      </section>

      {/* Problem & Solution */}
      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-red-500 mb-4">
            The Problem
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            Informal support networks are fragile
          </h3>
          <ul className="space-y-3 text-sm text-neutral-600">
            <li className="flex gap-3">
              <span className="text-red-500">✗</span>
              Small needs get lost in group chat noise
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">✗</span>
              No clear accountability for who's helping
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">✗</span>
              Check-ins become irregular after initial enthusiasm
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">✗</span>
              Family members far away can't see what's happening
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
            The Solution
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            Structure without complexity
          </h3>
          <ul className="space-y-3 text-sm text-neutral-600">
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              Explicit requests that don't get buried
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              Clear acknowledgements create accountability
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              Shared visibility keeps everyone informed
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              Works after gaps—no momentum required
            </li>
          </ul>
        </div>
      </section>

      {/* Design Principles */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Design Philosophy
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
            Principles Behind ElderConnect+
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {designPrinciples.map((principle) => (
            <div key={principle.title} className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-neutral-900">{principle.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Technical Architecture
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
            How ElderConnect+ Works
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {technicalArchitecture.map((layer) => (
            <div key={layer.layer} className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-neutral-900">{layer.layer}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{layer.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {layer.technologies.map((tech) => (
                  <span key={tech} className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Competitive Differentiation */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Competitive Differentiation
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
            Why ElderConnect+ is Different
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="py-4 pr-4 text-left font-semibold text-neutral-900">Comparison</th>
                <th className="py-4 px-4 text-left font-semibold text-accent">ElderConnect+</th>
                <th className="py-4 pl-4 text-left font-semibold text-neutral-500">Alternative</th>
              </tr>
            </thead>
            <tbody>
              {differentiation.map((row) => (
                <tr key={row.category} className="border-b border-neutral-100">
                  <td className="py-4 pr-4 font-medium text-neutral-900">{row.category}</td>
                  <td className="py-4 px-4 text-neutral-700">{row.ours}</td>
                  <td className="py-4 pl-4 text-neutral-500">{row.theirs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* User Personas */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            User Personas
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
            Who ElderConnect+ Serves
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {useCases.map((useCase) => (
            <div key={useCase.persona} className="rounded-xl border border-neutral-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">{useCase.persona}</p>
              <h3 className="mt-3 text-sm font-semibold text-neutral-900">Challenge</h3>
              <p className="mt-2 text-sm text-neutral-600">{useCase.challenge}</p>
              <h3 className="mt-4 text-sm font-semibold text-neutral-900">Solution</h3>
              <p className="mt-2 text-sm text-neutral-600">{useCase.solution}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-4">
          Technology Stack
        </p>
        <div className="flex flex-wrap gap-3">
          {["React Native", "Progressive Web App", "Node.js", "PostgreSQL", "Push Notifications", "Real-time Sync", "Accessible Design"].map((tech) => (
            <span key={tech} className="rounded-full bg-white border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Social Impact */}
      <section className="rounded-2xl border border-neutral-200 bg-white p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
          Social Impact
        </p>
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">
          Technology for dignity in aging
        </h3>
        <p className="text-sm leading-7 text-neutral-600">
          ElderConnect+ is designed around a simple principle: older adults should be able to 
          maintain independence while getting the support they need. The platform respects 
          autonomy—users request help rather than having it imposed. It works with existing 
          relationships rather than replacing them with professional care. And it's built for 
          the long term, recognising that support needs evolve and technology should adapt to 
          users, not the other way around.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={elderConnectLinks.website}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-800 transition hover:border-accent hover:text-accent"
          >
            Live website
          </a>
          <a
            href={elderConnectLinks.appStore}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Download on the App Store
          </a>
        </div>
      </section>

      {/* Navigation */}
      <section className="flex justify-between items-center pt-8 border-t border-neutral-200">
        <Link href="/products/scotitech-workspace" className="text-sm font-semibold text-neutral-600 hover:text-accent">
          ← AXOS - Private AI Workspace
        </Link>
        <Link href="/products" className="text-sm font-semibold text-accent hover:underline">
          All Products →
        </Link>
      </section>
    </div>
  );
}
