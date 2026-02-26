import Link from "next/link";

export const metadata = {
  title: "ScotiTech Workspace | Pradeep Dahiya",
  description:
    "Private AI execution environment for regulated organisations. AI assistance with complete data sovereignty and on-premise processing.",
  openGraph: {
    title: "ScotiTech Workspace | Pradeep Dahiya",
    description:
      "Private AI execution environment for regulated organisations. AI assistance with complete data sovereignty and on-premise processing.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "ScotiTech Workspace | Pradeep Dahiya",
    description:
      "Private AI execution environment for regulated organisations. AI assistance with complete data sovereignty and on-premise processing."
  }
};

const metrics = [
  { value: "2", label: "Regulated Organisations", detail: "Finance and legal" },
  { value: "100K+", label: "AI Interactions", detail: "Processed with complete data sovereignty" },
  { value: "100%", label: "On-Premise Processing", detail: "Zero external data transmission" },
  { value: "100%", label: "Platform Availability", detail: "Uptime over 8 months of production use" }
];

const differentiation = [
  {
    category: "vs. Cloud AI (ChatGPT, Claude API)",
    ours: "All processing on-premise. Data never leaves infrastructure boundary.",
    theirs: "Data transmitted to external servers. Compliance concerns. Training risks."
  },
  {
    category: "vs. Enterprise AI Platforms",
    ours: "Self-hosted. Cryptographic audit trails. Full organisational control.",
    theirs: "Vendor-dependent. Limited audit capabilities. Data residency questions."
  },
  {
    category: "vs. Custom LLM Deployments",
    ours: "Turnkey platform with workflow engine, prompt management, and governance built-in.",
    theirs: "Requires significant ML engineering. Lacks enterprise features."
  },
  {
    category: "vs. No AI Adoption",
    ours: "Enables AI benefits while maintaining compliance posture.",
    theirs: "Teams lose productivity. Competitors gain AI advantages."
  }
];

const technicalArchitecture = [
  {
    layer: "Local Inference Engine",
    description: "Containerized LLM execution running entirely within organisational infrastructure. Supports multiple model sizes based on hardware constraints.",
    technologies: ["Docker", "Local LLMs", "GPU acceleration", "Model versioning"]
  },
  {
    layer: "Workflow Engine",
    description: "Stateful workflow orchestration for multi-step AI interactions. Human oversight integration at configurable checkpoints.",
    technologies: ["State machines", "Approval workflows", "Task queuing", "Redis"]
  },
  {
    layer: "Prompt Management",
    description: "Git-like system for prompt libraries with branching, peer review, and automated testing before production deployment.",
    technologies: ["Version control", "A/B testing", "Quality gates", "Rollback"]
  },
  {
    layer: "Cryptographic Audit",
    description: "Tamper-proof logging with Merkle tree verification. Complete interaction history for compliance and forensics.",
    technologies: ["Merkle trees", "Timestamping", "Immutable storage", "Compliance export"]
  }
];

const useCases = [
  {
    sector: "Healthcare",
    challenge: "Clinical teams want AI assistance but patient data cannot leave hospital infrastructure. HIPAA prohibits cloud AI.",
    solution: "ScotiTech Workspace runs AI locally, enabling clinical documentation assistance while maintaining complete data sovereignty."
  },
  {
    sector: "Legal Services",
    challenge: "Lawyers need AI for contract review and research but client confidentiality is non-negotiable.",
    solution: "On-premise AI enables document analysis without exposing client materials to external systems."
  },
  {
    sector: "Financial Services",
    challenge: "Regulatory requirements mandate data residency. External AI processing creates compliance risks.",
    solution: "Local execution with cryptographic audit trails satisfies regulatory requirements while enabling AI adoption."
  }
];

const governanceFeatures = [
  {
    title: "Human Oversight Integration",
    description: "Configurable approval workflows ensure human review at critical decision points. AI suggests, humans decide."
  },
  {
    title: "Prompt Version Control",
    description: "All prompt changes tracked with full history. Peer review required before production deployment. Instant rollback capability."
  },
  {
    title: "Cryptographic Audit Trail",
    description: "Every AI interaction logged with tamper-proof verification. Exportable for compliance audits and forensic investigation."
  },
  {
    title: "Access Control & RBAC",
    description: "Granular permissions control who can use AI features, review outputs, and modify system behaviour."
  }
];

export default function ScotiTechWorkspacePage() {
  return (
    <div className="flex flex-col gap-16">
      {/* Header */}
      <section className="flex flex-col gap-6">
        <Link href="/products" className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500 hover:text-accent">
          ← Products
        </Link>
        <div className="flex items-center gap-4">
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            AI Architecture
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Production since 2023
          </span>
        </div>
        <h1 className="font-display text-4xl text-neutral-950 md:text-5xl">
          ScotiTech Workspace
        </h1>
        <p className="text-xl text-neutral-600">
          Private AI execution environment for regulated organisations.
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
          Novel architecture enabling AI in air-gapped environments
        </h2>
        <p className="text-base leading-7 text-neutral-700">
          ScotiTech Workspace solves a fundamental constraint: teams want AI assistance but 
          cannot allow operational data to leave infrastructure boundaries. The platform combines 
          containerized LLM inference with a stateful workflow engine and cryptographic audit 
          trails—enabling AI adoption in environments where external processing is technically 
          impossible or legally prohibited. This is not a cloud API wrapper; it's a complete 
          governance framework for responsible AI deployment.
        </p>
      </section>

      {/* Problem & Solution */}
      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-red-500 mb-4">
            The Problem
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            AI adoption blocked by compliance requirements
          </h3>
          <ul className="space-y-3 text-sm text-neutral-600">
            <li className="flex gap-3">
              <span className="text-red-500">✗</span>
              Cloud AI requires sending confidential data to external servers
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">✗</span>
              Training data concerns with commercial AI providers
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">✗</span>
              Regulatory requirements mandate data residency
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">✗</span>
              No audit trail for AI-assisted decisions
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
            The Solution
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            Complete AI platform within infrastructure boundaries
          </h3>
          <ul className="space-y-3 text-sm text-neutral-600">
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              100% on-premise processing—data never leaves
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              Cryptographic audit trails for compliance
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              Human oversight workflows built-in
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              Version-controlled prompt management
            </li>
          </ul>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Technical Architecture
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
            How ScotiTech Workspace Works
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

      {/* Governance Features */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Responsible AI Governance
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
            Built-in Controls for Safe AI Deployment
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {governanceFeatures.map((feature) => (
            <div key={feature.title} className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-neutral-900">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{feature.description}</p>
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
            Why ScotiTech Workspace is Different
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="py-4 pr-4 text-left font-semibold text-neutral-900">Comparison</th>
                <th className="py-4 px-4 text-left font-semibold text-accent">ScotiTech Workspace</th>
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

      {/* Use Cases */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Use Cases
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
            Where ScotiTech Workspace Excels
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {useCases.map((useCase) => (
            <div key={useCase.sector} className="rounded-xl border border-neutral-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">{useCase.sector}</p>
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
          {["Local LLMs", "Docker", "Redis", "PostgreSQL", "Merkle Trees", "Workflow Engine", "Next.js", "TypeScript", "Cryptographic Hashing"].map((tech) => (
            <span key={tech} className="rounded-full bg-white border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="flex justify-between items-center pt-8 border-t border-neutral-200">
        <Link href="/products/appdeploy" className="text-sm font-semibold text-neutral-600 hover:text-accent">
          ← AppDeploy
        </Link>
        <Link href="/products/elderconnect-plus" className="text-sm font-semibold text-accent hover:underline">
          Next: ElderConnect+ →
        </Link>
      </section>
    </div>
  );
}
