import { createMetadata } from "../../../lib/seo";

const innovations = [
  {
    category: "Mobile Distribution",
    title: "Entitlement-Led Private App Distribution",
    year: "2024",
    problem:
      "Traditional Mobile Device Management requires full device control, creating privacy concerns and deployment friction in regulated environments.",
    innovation:
      "Developed an architecture built around Apple Business Manager and signed app hosting: a branded portal where self-service installs need no enrolment, with optional MDM-based silent deployment for organisation-owned devices.",
    technicalBreakthrough:
      "Separates the two concerns most platforms couple — app entitlement (portal, no enrolment) and device management (optional, per-device) — so organisations buy control only where they need it.",
    impact:
      "Live in production as AppDeploy: 2 active customer workspaces, 450+ apps installed, 300+ devices reached, against a published 99.9% availability SLO.",
    technologies: ["Swift", "Kotlin", "Apple Business Manager", "Certificate Pinning", "Custom CDN"]
  },
  {
    category: "AI Architecture",
    title: "Privacy-First AI Governance Framework",
    year: "2023",
    problem:
      "AI systems typically require cloud API calls, creating data sovereignty issues and audit trail gaps for regulated organizations.",
    innovation:
      "Architected a governance-first AI platform with local inference, version-controlled prompt libraries, human oversight workflows, structured audit logging, and traceable deployment controls. Zero external data transmission.",
    technicalBreakthrough:
      "Novel architecture pattern combining containerized LLM inference with workflow orchestration, accountability checkpoints, and cryptographic audit trails—enabling regulation-aligned AI deployment in air-gapped and compliance-bound environments.",
    impact:
      "Shipping as AXOS, in private evaluation with enterprise teams in regulated sectors — 100% on-premise processing, with a published DPA and Trust Centre.",
    technologies: ["Local LLMs", "Docker", "Workflow Engine", "Cryptographic Audit", "Redis"]
  },
  {
    category: "Platform Architecture",
    title: "Unified Self-Hosted Collaboration Platform",
    year: "2022",
    problem:
      "Organizations rely on 5-8 separate SaaS tools for collaboration, creating data fragmentation, security gaps, and vendor lock-in.",
    innovation:
      "Designed unified platform architecture integrating messaging, file storage, knowledge management, and AI assistance within single security boundary and data model.",
    technicalBreakthrough:
      "Composable microservices architecture with shared identity layer, unified search index, and event-driven synchronization—all deployable on-premise.",
    impact:
      "Now shipping as the AXOS workspace: mail, drive, calendar, chat, video, tasks and knowledge inside one self-hosted security boundary, offered enterprise-only.",
    technologies: ["Microservices", "PostgreSQL", "Elasticsearch", "Message Queue", "Docker Swarm"]
  },
  {
    category: "Security & Compliance",
    title: "Cryptographic Audit Trail System",
    year: "2024",
    problem:
      "Standard logging can be modified post-facto, creating trust issues for compliance audits and forensic investigation.",
    innovation:
      "Implemented blockchain-inspired append-only audit system with cryptographic verification, enabling tamper-proof logs without blockchain overhead.",
    technicalBreakthrough:
      "Append-only design with checksummed export packs verifiable outside the platform — tamper-evidence without blockchain overhead.",
    impact:
      "Shipping in AppDeploy as org-scoped, append-only audit logs and checksummed Evidence Packs that an auditor can verify independently of the platform.",
    technologies: ["Merkle Trees", "Cryptographic Hashing", "Timestamping", "Immutable Storage"]
  },
  {
    category: "AI Systems",
    title: "Version-Controlled Prompt Management",
    year: "2023",
    problem:
      "AI outputs vary with prompt changes, but most systems lack versioning, approval workflows, or rollback capabilities.",
    innovation:
      "Built Git-like system for prompt libraries with branching, merging, peer review, and automated testing before production deployment.",
    technicalBreakthrough:
      "CI/CD discipline applied to AI prompts — automated quality testing, A/B comparison, and gradual rollout.",
    impact:
      "The pattern behind AXOS's approved knowledge sources: prompts reviewed and versioned before they reach production, so teams collaborate on AI behaviour safely.",
    technologies: ["Git Internals", "Testing Framework", "A/B Testing", "Analytics Pipeline"]
  },
  {
    category: "Performance",
    title: "Hybrid Sync Architecture for Offline-First Apps",
    year: "2021",
    problem:
      "Mobile apps need offline capability, but traditional sync approaches create conflicts and data inconsistencies.",
    innovation:
      "Developed CRDT-based synchronization with conflict-free merging and eventual consistency guarantees for mobile-first applications.",
    technicalBreakthrough:
      "Custom CRDT implementations optimized for mobile constraints—achieving sub-100ms sync resolution with predictable battery impact.",
    impact:
      "Built across mobile client work before ScotiTech; the offline-first patterns now inform how AppDeploy reconciles per-device state.",
    technologies: ["CRDTs", "Operational Transform", "SQLite", "Background Sync"]
  },
  {
    category: "Infrastructure",
    title: "Zero-Downtime Multi-Tenant Deployment System",
    year: "2023",
    problem:
      "Deploying updates across multi-tenant platforms typically requires maintenance windows or risks partial failures.",
    innovation:
      "Created deployment orchestration system with progressive rollout, automated health checks, and instant rollback per tenant.",
    technicalBreakthrough:
      "State machine-based orchestration enabling per-tenant canary deployment with automatic failure detection and rollback—zero customer impact.",
    impact:
      "The rollout pattern now shipping in AppDeploy as rollout rings: progressive per-tenant deployment with automatic failure-stop and one-click rollback.",
    technologies: ["Kubernetes", "Service Mesh", "Health Monitoring", "State Machines"]
  },
  {
    category: "Open Source",
    title: "Knowledge Platform: Enterprise Knowledge Management System",
    year: "2025",
    problem:
      "Organizations need secure, role-based knowledge sharing systems but most solutions lack granular permissions, proper audit trails, or self-hosting options.",
    innovation:
      "Built open-source full-stack platform with three-tier RBAC, OAuth2 authentication, automated user provisioning, session management, and comprehensive security features. Fully self-hostable with enterprise-grade architecture.",
    technicalBreakthrough:
      "Type-safe end-to-end implementation with PostgreSQL-backed sessions, flexible JSON schema for evolution without migrations, and multi-layer security including rate limiting, CSRF protection, and cryptographic audit trails.",
    impact:
      "Open sourced on GitHub demonstrating production-ready patterns. Complete with deployment guides, testing framework, and comprehensive documentation. Available at github.com/scorpionsPD/knowledge-platform",
    technologies: ["TypeScript", "Node.js", "Next.js 14", "PostgreSQL", "Prisma ORM", "OAuth2", "Docker"]
  },
  {
    category: "Open Source",
    title: "SwiftUIArchitecture: Real-World App Architecture",
    year: "2019",
    problem:
      "SwiftUI teams lacked a practical reference implementation for scalable state management, navigation, and modular composition in production apps.",
    innovation:
      "Published an open-source SwiftUI architecture reference that demonstrates modular feature boundaries, reusable view composition, and predictable state handling patterns.",
    technicalBreakthrough:
      "Codified a maintainable SwiftUI structure with clear separation between UI, state, and business logic, enabling onboarding and long-term evolution in real teams.",
    impact:
      "Shared as a public reference implementation for SwiftUI architecture patterns, with GitHub adoption signals from the community.",
    technologies: ["Swift", "SwiftUI", "Architecture Patterns", "iOS"]
  }
];

export const metadata = createMetadata({
  title: "Technical Innovations | Pradeep Dahiya",
  description:
    "Novel architectures, governance-first AI systems, and technical innovations for regulated and high-trust environments.",
  path: "/innovations"
});

export default function InnovationsPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          Technical Innovations
        </p>
        <h1 className="font-display text-4xl text-neutral-950 md:text-5xl">
          Novel architectures and breakthrough solutions.
        </h1>
        <p className="text-base leading-7 text-neutral-600 md:text-lg">
          Specific technical innovations that advance the field, from governance-first AI systems
          and privacy-preserving architectures to operational deployment breakthroughs.
        </p>
      </section>

      <section className="flex flex-col gap-12">
        {innovations.map((item, index) => (
          <article
            key={item.title}
            className="border-b border-neutral-200 pb-12 last:border-b-0"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  {item.category}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  {item.year}
                </span>
              </div>
              
              <h2 className="font-display text-3xl text-neutral-950">{item.title}</h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Problem
                  </p>
                  <p className="mt-3 text-sm leading-6 text-neutral-700">{item.problem}</p>
                </div>
                
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    Innovation
                  </p>
                  <p className="mt-3 text-sm leading-6 text-neutral-700">{item.innovation}</p>
                </div>
              </div>

              <div className="rounded-xl border-l-4 border-accent bg-accent/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
                  Technical Breakthrough
                </p>
                <p className="mt-3 text-sm leading-6 text-neutral-800">
                  {item.technicalBreakthrough}
                </p>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Measurable Impact
                </p>
                <p className="mt-3 text-sm leading-6 text-neutral-700">{item.impact}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-neutral-200 bg-neutral-50 p-10">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Innovation Methodology
          </p>
          <h2 className="font-display text-2xl text-neutral-950">
            Solving problems others find too complex.
          </h2>
          <p className="text-sm leading-7 text-neutral-600">
            Each innovation starts with a real operational constraint—compliance requirements,
            deployment friction, or architectural limitations. The goal is always production-ready
            solutions that teams can adopt, not research projects. Success is measured by
            adoption, reliability, and measurable outcomes.
          </p>
        </div>
      </section>
    </div>
  );
}
