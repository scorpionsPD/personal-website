const products = [
  {
    title: "AppDeploy",
    summary: "Internal application distribution without device management",
    detail:
      "Most enterprise deployment models assume control over the user device. In practice this often creates more operational resistance than technical benefit, especially with contractors, partner organisations, or bring-your-own-device policies.\n\nAppDeploy takes a different route: instead of managing hardware, it manages entitlement. Access to software is controlled at the distribution layer rather than the device layer.\n\nUnder the hood this relies on Apple Business Manager redemption tracking, permission-scoped distribution, and an auditable installation lifecycle. The intention was simple — deployments should behave predictably without forcing organisations to own the devices they run on.\n\nTeams use it to roll out internal apps while keeping governance intact and user friction low.",
    innovation: "Entitlement-led distribution architecture without device management",
    metrics: {
      approach: "Apple Business Manager redemption tracking",
      focus: "Permission-scoped distribution, auditable installs",
      deployment: "Predictable rollout without device control",
      security: "Access governance at the distribution layer",
      deploymentContext:
        "Used in BYOD, contractor, and partner-device environments where device control isn’t necessary but app access must still be governed."
    },
    impact: "Lets teams ship internal apps without taking over employee devices"
  },
  {
    title: "ScotiTech Workspace",
    summary: "A private environment for AI-assisted work",
    detail:
      "Smart Workspace ensures organisational knowledge remains accessible regardless of vendor, subscription, or platform changes.\n\nModern teams operate across fragmented SaaS systems where communication and documents live inside services they do not control. When accounts close, pricing changes, vendors pivot, or access is restricted, institutional knowledge becomes fragmented or inaccessible.\n\nIncreasingly, organisations are also uploading sensitive operational data into external AI systems — effectively training and enriching third-party models while paying recurring subscription fees to access their own processed information.\n\nSmart Workspace provides a self-controlled digital environment where communication, documents, and institutional knowledge remain continuously available under the organisation’s ownership. AI capabilities operate within infrastructure boundaries rather than outside them.\n\nAI is not the product — continuity of knowledge and control is.",
    innovation: "Private AI execution environment for regulated organisations",
    metrics: {
      architecture: "Local AI capability inside the org boundary",
      deployment: "On-prem or private infrastructure",
      focus: "Traceable activity, no external data export",
      model: "AI as infrastructure, not a hosted service",
      deploymentContext:
        "Used in regulated teams where data can’t leave infrastructure boundaries and AI must run inside internal networks."
    },
    impact: "Makes AI usable in regulated environments without exporting data"
  },
  {
    title: "ElderConnect+",
    summary: "Digital support for independent living",
    detail:
      "Many services for older adults focus on professional care delivery. In everyday life, most needs are smaller — remembering tasks, asking for help nearby, staying in touch, or knowing someone will notice if something changes.\n\nThe difficulty is coordination rather than capability. People willing to help exist, but the connection between them is informal and unreliable.\n\nElderConnect+ provides a shared layer where family members, neighbours, and helpers can see and respond to simple requests without turning the experience into a technical workflow.\n\nThe system keeps interactions explicit and predictable. Requests are clear, confirmations are visible, and activity remains understandable even after long gaps in use. Instead of navigating menus, users interact with intentions — asking, responding, acknowledging.\n\nRather than replacing human care, it supports the relationships that already provide it. Small issues surface earlier, routine help becomes easier to organise, and users remain confident managing daily life.\n\nThe aim is stability: technology that reduces dependence by making existing support networks usable.",
    innovation: "Coordinated, low-friction support without formal care workflows",
    metrics: {
      approach: "Shared requests and acknowledgements",
      focus: "Clear intent, predictable responses",
      deployment: "Designed for long gaps in use",
      model: "Support network layer, not a care system",
      deploymentContext:
        "Used where family, neighbours, and helpers coordinate informal support without structured care tooling."
    },
    impact: "Makes everyday support easier to coordinate while preserving independence"
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

      <section className="flex flex-col gap-10">
        {products.map((item, index) => (
          <article
            key={item.title}
            className="border-b border-neutral-200 pb-10"
          >
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                {(index + 1).toString().padStart(2, "0")}
              </p>
              <h2 className="font-display text-3xl text-neutral-950">{item.title}</h2>
              <p className="text-base leading-7 text-neutral-600">{item.summary}</p>
              <p className="text-sm font-semibold text-accent">{item.innovation}</p>
            </div>
            <details className="mt-4 text-sm text-neutral-600">
              <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                View details
              </summary>
              <div className="mt-4 flex flex-col gap-4">
                <p className="max-w-3xl text-sm leading-7 text-neutral-600">
                  {item.detail}
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Deployment & Scale</p>
                    <div className="mt-3 flex flex-col gap-2 text-sm text-neutral-700">
                      <p><span className="font-semibold">Deployment Context:</span> {item.metrics.deploymentContext}</p>
                      {item.metrics.devices && <p><span className="font-semibold">Scale:</span> {item.metrics.devices}</p>}
                      {item.metrics.users && <p><span className="font-semibold">Active Users:</span> {item.metrics.users}</p>}
                      {item.metrics.content && <p><span className="font-semibold">Volume:</span> {item.metrics.content}</p>}
                      {item.metrics.processing && <p><span className="font-semibold">Processing:</span> {item.metrics.processing}</p>}
                    </div>
                  </div>
                  {(item.metrics.compliance || item.metrics.privacy || item.metrics.uptime || item.metrics.efficiency || item.metrics.quality || item.metrics.dataResidency) && (
                    <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Impact & Compliance</p>
                      <div className="mt-3 flex flex-col gap-2 text-sm text-neutral-700">
                        {item.metrics.compliance && <p><span className="font-semibold">Compliance:</span> {item.metrics.compliance}</p>}
                        {item.metrics.privacy && <p><span className="font-semibold">Privacy:</span> {item.metrics.privacy}</p>}
                        {item.metrics.uptime && <p><span className="font-semibold">Reliability:</span> {item.metrics.uptime}</p>}
                        {item.metrics.efficiency && <p><span className="font-semibold">Efficiency:</span> {item.metrics.efficiency}</p>}
                        {item.metrics.quality && <p><span className="font-semibold">Quality:</span> {item.metrics.quality}</p>}
                        {item.metrics.dataResidency && <p><span className="font-semibold">Data:</span> {item.metrics.dataResidency}</p>}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </details>
          </article>
        ))}
      </section>
    </div>
  );
}
