import Image from "next/image";
import Link from "next/link";
import ExternalLinkButton from "../../../../components/ExternalLinkButton";
import { createMetadata } from "../../../../lib/seo";

export const metadata = createMetadata({
  title: "AppDeploy | Pradeep Dahiya",
  description:
    "ScotiTech product led and developed by me: Apple device management and private app distribution for iPhone, iPad and Mac, built on Apple Business.",
  path: "/products/appdeploy"
});

const metrics = [
  { value: "3", label: "Organisations", detail: "Across healthcare, finance, and gambling/private sectors" },
  { value: "50+", label: "App Deployments", detail: "Production deployments managed through the platform" },
  { value: "£1", label: "Per Device a Month", detail: "After the first 5 devices free, with every feature included" },
  { value: "100%", label: "Availability", detail: "Distribution platform uptime over 18 months" }
];

const differentiation = [
  {
    category: "vs. Separate Device and App Tools",
    ours: "Device management, a branded app store and release controls in one workspace, at one per-device price.",
    theirs: "Separate products and bills, with no shared view of devices and the apps on them."
  },
  {
    category: "vs. App Store Distribution",
    ours: "Private and Custom Apps reach the right people with no public listing and no review delay.",
    theirs: "Review delays, a public listing, and no control over who installs."
  },
  {
    category: "vs. Manual Device Setup",
    ours: "Zero-touch setup: company devices configure themselves out of the box.",
    theirs: "Hand-built devices, inconsistent settings, and no audit trail."
  },
  {
    category: "vs. Spreadsheet Audits",
    ours: "Owners, encryption, updates and daily history, ready for SOC 2 and ISO 27001 auditors and Vanta.",
    theirs: "Evidence assembled by hand the week before the audit."
  }
];

const technicalArchitecture = [
  {
    layer: "Device Layer",
    description: "Enrolment, configuration and remote actions for iPhone, iPad and Mac, from zero-touch setup to Return to Service.",
    technologies: ["Apple MDM", "Declarative Device Management", "Automated Device Enrollment", "APNs"]
  },
  {
    layer: "Distribution Layer",
    description: "Silent installs of Apple Business, Custom and App Store apps on company devices, plus a branded app store that needs no enrolment.",
    technologies: ["Apple Business integration", "Apps and Books", "Branded app store", "Release Guard"]
  },
  {
    layer: "Security Layer",
    description: "Tenant isolation enforced by the database, sealed secrets, FileVault and Activation Lock codes held in escrow, and step-up or two-person approval for destructive actions.",
    technologies: ["PostgreSQL row-level security", "AES-256-GCM", "Key escrow", "Step-up MFA"]
  },
  {
    layer: "Governance Layer",
    description: "Append-only audit trail, daily compliance history, an asset register and device evidence mapped to SOC 2, ISO 27001 and Cyber Essentials.",
    technologies: ["Audit logging", "Compliance history", "Evidence Packs", "Vanta integration"]
  }
];

const architectureOverview = [
  {
    title: "Apple Business",
    description: "Devices, apps and licences stay in Apple Business. AppDeploy syncs them on a schedule."
  },
  {
    title: "Policy Layer",
    description: "Admins set baselines, update deadlines and app access once, for every device."
  },
  {
    title: "Delivery Layer",
    description: "Apps install silently on company devices, or through the branded app store with no enrolment."
  },
  {
    title: "Evidence Layer",
    description: "Every device reports its owner, health, encryption and updates, kept as daily history."
  }
];

const architectureHighlights = [
  "Apple MDM and declarative management for iPhone, iPad and Mac",
  "Row-level security on every tenant table, enforced by the database",
  "FileVault recovery keys and Activation Lock codes held in escrow under their own keys",
  "Architecture led and developed by me through ScotiTech"
];

const useCases = [
  {
    sector: "Companies with Private Apps",
    challenge: "Staff need internal apps on company and personal phones, and IT needs to know who has which version.",
    solution: "A branded app store for any device, silent installs on company devices, and Release Guard checks on every new build."
  },
  {
    sector: "Startups",
    challenge: "A growing team of Macs and iPhones, no IT person, and a SOC 2 or ISO 27001 audit on the way.",
    solution: "Zero-touch setup, FileVault and update deadlines from day one, with device evidence sent straight to Vanta. Free for the first 5 devices."
  },
  {
    sector: "Agencies & Apple IT Firms",
    challenge: "Clients need their apps and devices managed, but a heavy tool eats the margin.",
    solution: "Refer clients to AppDeploy or resell it with your own support, from a free partner workspace."
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
        <Link href="/work" className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500 hover:text-accent">
          ← Work
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
            Apple Devices &amp; Private Apps
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
          AppDeploy is a ScotiTech product led and developed by me for Apple device management and
          private app distribution across iPhone, iPad and Mac.
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
          One workspace for Apple devices, private apps and release controls
        </h2>
        <p className="text-base leading-7 text-neutral-700">
          Led and developed by me through ScotiTech, AppDeploy brings device management, private app
          distribution and release controls together on top of Apple Business. Organisations manage
          iPhone, iPad and Mac, give staff their own branded app store, and keep audit-ready evidence of
          every device and every release, from one console and at one per-device price.
        </p>
      </section>

      {/* Problem & Solution */}
      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-red-500 mb-4">
            The Problem
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            Apple devices and private apps take too many tools
          </h3>
          <ul className="space-y-3 text-sm text-neutral-600">
            <li className="flex gap-3">
              <span className="text-red-500">✗</span>
              Company devices are set up by hand, one at a time
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">✗</span>
              Private apps reach staff through scattered links and codes
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">✗</span>
              Leavers keep devices, licences and access for too long
            </li>
            <li className="flex gap-3">
              <span className="text-red-500">✗</span>
              Audit evidence lives in spreadsheets
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
            The Solution
          </p>
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            One workspace on top of Apple Business
          </h3>
          <ul className="space-y-3 text-sm text-neutral-600">
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              Zero-touch setup for iPhone, iPad and Mac through Apple Business
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              A branded app store, with silent installs on company devices
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              Offboarding in one flow, with device secrets held in escrow
            </li>
            <li className="flex gap-3">
              <span className="text-accent">✓</span>
              SOC 2, ISO 27001 and Cyber Essentials device evidence, sent to Vanta
            </li>
          </ul>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Architecture Overview
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
            Public System Design
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-neutral-600">
            This is the simplified production architecture behind AppDeploy. It focuses on the
            control model that matters most: how organisations manage company Apple devices and
            private apps from one place, and prove it afterwards.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-4">
            {architectureOverview.map((item, index) => (
              <div key={item.title} className="flex flex-col gap-4 md:flex-row md:items-stretch">
                <div className="flex-1 rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    Step {(index + 1).toString().padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-base font-semibold text-neutral-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{item.description}</p>
                </div>
                {index < architectureOverview.length - 1 ? (
                  <div className="hidden items-center justify-center md:flex">
                    <span className="text-lg text-neutral-300">→</span>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {architectureHighlights.map((item) => (
              <div key={item} className="rounded-xl border border-accent/20 bg-accent/5 p-4">
                <p className="text-sm font-medium leading-6 text-neutral-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Technical Architecture
          </p>
          <h2 className="font-display text-3xl text-neutral-950">
            Core Architecture Layers
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
          {["Node.js", "React", "TypeScript", "PostgreSQL", "Redis", "Docker", "Apple MDM", "Declarative Device Management", "APNs", "Apple Business"].map((tech) => (
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
          Live platform
        </h3>
        <p className="text-sm leading-7 text-neutral-600">
          AppDeploy is live for organisations that manage company iPhones, iPads and Macs or distribute
          private apps. The first 5 devices are free, then £1 per device a month with every feature
          included; a branded app store with release controls is £29 a month.
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
        <Link href="/work" className="text-sm font-semibold text-neutral-600 hover:text-accent">
          ← All Work
        </Link>
        <Link href="/products/scotitech-workspace" className="text-sm font-semibold text-accent hover:underline">
          Next: AXOS - Private AI Workspace →
        </Link>
      </section>
    </div>
  );
}
