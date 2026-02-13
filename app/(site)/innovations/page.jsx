const innovations = [
  {
    category: "Mobile Distribution",
    title: "MDM-Free Enterprise App Distribution",
    year: "2024",
    problem:
      "Traditional Mobile Device Management requires full device control, creating privacy concerns and deployment friction in regulated environments.",
    innovation:
      "Developed novel architecture leveraging Apple Business Manager and private APK hosting to enable secure enterprise app distribution without device enrollment. Combines code signing, certificate pinning, and custom distribution protocols.",
    technicalBreakthrough:
      "First production implementation of zero-touch enterprise distribution maintaining security equivalent to MDM while eliminating device control requirements.",
    impact:
      "Adopted by 12+ organizations across healthcare, finance, and government. Reduced deployment costs by 70% while improving security posture.",
    technologies: ["Swift", "Kotlin", "Apple Business Manager", "Certificate Pinning", "Custom CDN"]
  },
  {
    category: "AI Architecture",
    title: "Privacy-First AI Governance Framework",
    year: "2023",
    problem:
      "AI systems typically require cloud API calls, creating data sovereignty issues and audit trail gaps for regulated organizations.",
    innovation:
      "Architected complete AI platform with local inference, version-controlled prompt libraries, human oversight workflows, and comprehensive audit logging. Zero external data transmission.",
    technicalBreakthrough:
      "Novel architecture pattern combining containerized LLM inference with stateful workflow engine and cryptographic audit trails—enabling AI in air-gapped environments.",
    impact:
      "Enabled AI adoption in 8 organizations previously blocked by compliance requirements. Processing 100,000+ interactions with complete data sovereignty.",
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
      "Replaced multiple SaaS subscriptions for 6 organizations. 99.7% uptime over 18 months. Complete data residency compliance.",
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
      "Merkle tree-based verification with periodic commitment to external timestamping service—providing cryptographic proof without distributed consensus.",
    impact:
      "Integrated across all platforms. Enabled HIPAA and SOC2 compliance with verifiable audit trails. Used in forensic investigations.",
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
      "First implementation of CI/CD principles for AI prompts—including automated quality testing, A/B comparison, and gradual rollout.",
    impact:
      "Improved AI output consistency by 40%. Enabled teams to collaborate on prompts safely. 98% first-pass approval rate.",
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
      "Powered 15+ mobile applications. Eliminated sync conflicts entirely. Enabled true offline-first architecture.",
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
      "Deployed 200+ updates across multi-tenant platform with zero downtime incidents. Reduced deployment risk by 95%.",
    technologies: ["Kubernetes", "Service Mesh", "Health Monitoring", "State Machines"]
  }
];

export const metadata = {
  title: "Technical Innovations | Pradeep Dahiya",
  description:
    "Novel architectures, breakthrough solutions, and technical innovations that advance the practice of software engineering.",
  openGraph: {
    title: "Technical Innovations | Pradeep Dahiya",
    description:
      "Novel architectures, breakthrough solutions, and technical innovations that advance the practice of software engineering.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Innovations | Pradeep Dahiya",
    description:
      "Novel architectures, breakthrough solutions, and technical innovations that advance the practice of software engineering."
  }
};

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
          Specific technical innovations that advance the field—from novel distribution
          architectures to privacy-first AI systems and performance breakthroughs.
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
