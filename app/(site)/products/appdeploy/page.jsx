import Image from "next/image";
import Link from "next/link";
import ExternalLinkButton from "../../../../components/ExternalLinkButton";

export const metadata = {
  title: "AppDeploy | Pradeep Dahiya",
  description:
    "ScotiTech product led and developed by me for internal application distribution without MDM dependency or private hosting.",
  openGraph: {
    title: "AppDeploy | Pradeep Dahiya",
    description:
      "ScotiTech product led and developed by me for internal application distribution without MDM dependency or private hosting.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AppDeploy | Pradeep Dahiya",
    description:
      "ScotiTech product led and developed by me for internal application distribution without MDM dependency or private hosting."
  }
};

const metrics = [
  { value: "4+", label: "Organisations", detail: "Across healthcare, finance, and gambling/private sectors" },
  { value: "50+", label: "App Deployments", detail: "Production deployments managed through the platform" },
  { value: "80%", label: "Cost Reduction", detail: "Compared to traditional MDM deployment approaches" },
  { value: "100%", label: "Availability", detail: "Distribution platform uptime over 18 months" }
];

const differentiation = [
  {
    category: "vs. Traditional MDM",
    ours: "No device enrollment required. Users maintain personal device privacy.",
    theirs: "Requires full device control. Invasive for BYOD environments."
  },
  {
    category: "vs. App Store Distribution",
    ours: "Instant deployment. No review delays. Full control over app lifecycle.",
    theirs: "Review delays. Limited to consumer apps. No enterprise governance."
  },
  {
    category: "vs. Manual Installation",
    ours: "Automated distribution with entitlement management at scale.",
    theirs: "Doesn't scale. Error-prone. No audit trail or access control."
  },
  {
    category: "vs. Private Hosting Solutions",
    ours: "Turnkey platform. No infrastructure management required.",
    theirs: "Requires DevOps expertise. Ongoing maintenance burden."
  }
];

const technicalArchitecture = [
  {
    layer: "Entitlement Layer",
    description: "Organisational access control separated from device ownership. Users are entitled to apps based on role, not device status.",
    technologies: ["Custom entitlement protocol", "Certificate-based identity", "Role-based access"]
  },
  {
    layer: "Distribution Layer",
    description: "Secure app delivery leveraging Apple Business Manager and custom APK hosting without requiring device enrollment.",
    technologies: ["Apple Business Manager integration", "Private APK hosting", "CDN distribution"]
  },
  {
    layer: "Security Layer",
    description: "Enterprise-grade security without MDM dependency. Code signing, certificate pinning, and tamper detection.",
    technologies: ["Code signing", "Certificate pinning", "Integrity verification"]
  },
  {
    layer: "Governance Layer",
    description: "Complete audit trail and lifecycle management. Track who has access to what, when, and why.",
    technologies: ["Audit logging", "Version management", "Access analytics"]
  }
];

const useCases = [
  {
    sector: "Healthcare",
    challenge: "Clinical staff use personal devices but hospital apps contain patient data. MDM is invasive; manual installs don't scale.",
    solution: "AppDeploy enables secure distribution to personal devices without enrollment, maintaining HIPAA compliance through app-level controls."
  },
  {
    sector: "Financial Services",
    challenge: "Field advisors need mobile apps but resist MDM on personal phones. Compliance requires controlled distribution.",
    solution: "Entitlement-based access lets advisors use personal devices while maintaining regulatory audit trails."
  },
  {
    sector: "Government & Public Sector",
    challenge: "Mixed device environments with strict security requirements. Traditional MDM creates procurement and privacy barriers.",
    solution: "Zero-enrollment distribution meets security requirements while respecting device ownership boundaries."
  }
];

const appDeployLinks = {
  website: "https://appdeploy.scotitech.com",
  scotitech: "https://scotitech.com",
  logo: "/images/products/AppdeployLogoBlack.png"
};

export default function AppDeployPage() {
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
              src={appDeployLinks.logo}
              alt="AppDeploy logo"
              width={48}
              height={48}
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
            <ExternalLinkButton
              href={appDeployLinks.website}
              className="inline-flex items-center text-sm font-semibold text-accent hover:underline"
            >
              Visit website →
            </ExternalLinkButton>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            Mobile Distribution
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Production since 2024
          </span>
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          <a
            href={appDeployLinks.scotitech}
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent"
          >
            By ScotiTech
          </a>
        </p>
        <h1 className="font-display text-4xl text-neutral-950 md:text-5xl">
          AppDeploy
        </h1>
        <p className="text-xl text-neutral-600">
          AppDeploy is a ScotiTech product led and developed by me for controlled internal app distribution.
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
          First production implementation of zero-touch enterprise distribution
        </h2>
        <p className="text-base leading-7 text-neutral-700">
          Led and developed by me through ScotiTech, AppDeploy is the first production system to
          achieve MDM-equivalent security for enterprise app distribution without requiring device
          enrollment. The architecture leverages Apple Business Manager and custom distribution
          protocols to separate device ownership from operational access, solving a fundamental
          tension in BYOD environments where security and privacy have historically been in
          conflict.
        </p>
      </section>

      {/* Problem & Solution */}
      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-red-500 mb-4">
            The Problem
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            Enterprise app distribution requires compromise
          </h3>
          <ul className="space-y-3 text-sm text-neutral-600">
            <li className="flex gap-3">
              <span className="text-red-500">✗</span>
              MDM requires invasive device control that users resist
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">✗</span>
              App stores don't support internal enterprise apps
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">✗</span>
              Manual installation doesn't scale and lacks audit trails
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">✗</span>
              Private hosting requires ongoing infrastructure management
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
            The Solution
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            Entitlement-led distribution architecture
          </h3>
          <ul className="space-y-3 text-sm text-neutral-600">
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              No device enrollment—users keep control of their devices
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              Full enterprise governance with role-based entitlements
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              Automated deployment with complete audit trail
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              Turnkey platform—no infrastructure to manage
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
            How AppDeploy Works
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
            Why AppDeploy is Different
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="py-4 pr-4 text-left font-semibold text-neutral-900">Comparison</th>
                <th className="py-4 px-4 text-left font-semibold text-accent">AppDeploy</th>
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
            Where AppDeploy Excels
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
          {["Swift", "Kotlin", "Apple Business Manager", "Certificate Pinning", "Custom CDN", "PostgreSQL", "Redis", "Docker"].map((tech) => (
            <span key={tech} className="rounded-full bg-white border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-neutral-200 bg-white p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
          Product Access
        </p>
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">
          Live distribution platform
        </h3>
        <p className="text-sm leading-7 text-neutral-600">
          AppDeploy is available as a live platform for organisations that need controlled internal
          application distribution without relying on device enrollment or public app store workflows.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <ExternalLinkButton
            href={appDeployLinks.website}
            className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Visit AppDeploy
          </ExternalLinkButton>
        </div>
      </section>

      {/* Navigation */}
      <section className="flex justify-between items-center pt-8 border-t border-neutral-200">
        <Link href="/products" className="text-sm font-semibold text-neutral-600 hover:text-accent">
          ← All Products
        </Link>
        <Link href="/products/scotitech-workspace" className="text-sm font-semibold text-accent hover:underline">
          Next: AXOS - Private AI Workspace →
        </Link>
      </section>
    </div>
  );
}
