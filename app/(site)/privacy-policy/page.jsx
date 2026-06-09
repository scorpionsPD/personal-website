import { createMetadata } from "../../../lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy | Pradeep Dahiya",
  description:
    "Privacy information covering contact data, basic website operation, and how this website currently handles cookies.",
  path: "/privacy-policy"
});

const sections = [
  {
    title: "What this site collects",
    body:
      "This site only collects personal information that you choose to provide directly, such as when you contact me by email. There is no newsletter signup, advertising profile, or analytics account connected to your visit at this time."
  },
  {
    title: "How this site currently uses cookies",
    body:
      "The website itself is not currently designed to set analytics, advertising, or preference cookies in your browser. Because no non-essential cookies are being used by the site code, there is no consent popup active at the moment."
  },
  {
    title: "Technical delivery and security",
    body:
      "Like most websites, the hosting and delivery infrastructure may still process basic technical information such as IP addresses, request logs, caching, and security events in order to serve pages safely and reliably. That is separate from advertising or analytics profiling."
  },
  {
    title: "If this changes later",
    body:
      "If non-essential cookies, analytics tools, embedded third-party media, or marketing technologies are added in future, this policy and the cookie policy will be updated first, and any consent mechanism required under UK law will be introduced before those tools are activated."
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          Privacy Policy
        </p>
        <h1 className="font-display text-4xl text-neutral-950 md:text-5xl">
          Privacy information for this website.
        </h1>
        <p className="max-w-3xl text-base leading-7 text-neutral-600 md:text-lg">
          This policy explains what personal information this website currently handles, what it
          does not currently do, and how that would change if non-essential tracking tools were
          introduced later.
        </p>
      </section>

      <section className="flex flex-col gap-6">
        {sections.map((section) => (
          <div key={section.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="font-display text-2xl text-neutral-950">{section.title}</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-600">{section.body}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Contact
        </p>
        <p className="mt-3 text-sm leading-7 text-neutral-600">
          Privacy enquiries can be sent to{" "}
          <a
            href="mailto:pradeepdahiya@hotmail.com"
            className="font-semibold text-accent hover:underline"
          >
            pradeepdahiya@hotmail.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}
