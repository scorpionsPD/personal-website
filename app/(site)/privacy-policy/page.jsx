import { createMetadata } from "../../../lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy | Pradeep Dahiya",
  description:
    "What this website collects: messages you choose to send, and cookieless visitor totals that cannot identify you. No cookies, adverts or profiles.",
  path: "/privacy-policy"
});

const sections = [
  {
    title: "What this site collects",
    body:
      "The only personal information this site receives is what you choose to send me, such as an email. There is no sign-up, newsletter, account or advertising on this site."
  },
  {
    title: "Visitor counts",
    body:
      "To see how many people visit and which pages are useful, this site uses Vercel Web Analytics, run by Vercel, the company that hosts the site. It counts page views and shows me totals only: which pages were viewed, which website or link a visit came from, the country, the type of device (phone, tablet or computer), the browser and the operating system. I use these totals to keep the site useful, and they cannot tell me who you are."
  },
  {
    title: "What the visitor counts do not do",
    body:
      "They use no cookies and store nothing on your device. They build no profile of you, do not follow you to other websites, and are never used for adverts. Your IP address is not kept with the counts. To count unique visitors without cookies, Vercel turns each visit's request into a one-way code that cannot be reversed, and throws that code away after 24 hours."
  },
  {
    title: "Links that name where they came from",
    body:
      "Some links to this site add a short label to the address, such as ?ref=example-site, to show which website the link was on. The label names the website, not the person who clicked it, and is only used to count how many visits came from there. Any other text added to a page address is removed before a visit is counted."
  },
  {
    title: "Opting out",
    body:
      "If your browser sends a Global Privacy Control or Do Not Track signal, your visit is not counted at all."
  },
  {
    title: "Technical delivery and security",
    body:
      "Like most websites, the hosting and delivery infrastructure may still process basic technical information such as IP addresses, request logs, caching, and security events in order to serve pages safely and reliably. That is separate from advertising or analytics profiling."
  },
  {
    title: "If this changes later",
    body:
      "If anything that uses cookies, tracks individual visitors, embeds third-party media or supports marketing is added in future, this policy and the cookie policy will be updated first, and any consent required under UK law will be asked for before it runs."
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto flex w-full max-w-[980px] flex-col gap-12 px-5 pb-24 pt-16 md:px-8 md:pt-24">
      <section className="flex flex-col gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          Privacy Policy
        </p>
        <h1 className="font-display text-4xl text-strong md:text-5xl">
          Privacy information for this website.
        </h1>
        <p className="max-w-3xl text-base leading-7 text-body md:text-lg">
          This policy explains what personal information this website handles, how visits are
          counted without cookies, and what would happen if that ever changed.
        </p>
        <p className="text-sm text-muted">Last updated 31 October 2026.</p>
      </section>

      <section className="flex flex-col gap-6">
        {sections.map((section) => (
          <div key={section.title} className="rounded-2xl border border-line bg-surface p-6">
            <h2 className="font-display text-2xl text-strong">{section.title}</h2>
            <p className="mt-3 text-sm leading-7 text-body">{section.body}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-line bg-surface p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
          Contact
        </p>
        <p className="mt-3 text-sm leading-7 text-body">
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
