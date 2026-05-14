export const metadata = {
  title: "Privacy Policy | Pradeep Dahiya",
  description:
    "Privacy information covering contact, analytics consent, and data handling for this website."
};

const sections = [
  {
    title: "What this site collects",
    body:
      "This site only collects personal information that you choose to provide directly, such as when you contact me by email. If analytics or marketing tools are added later, they will only load after you have explicitly opted into the relevant category through the consent controls."
  },
  {
    title: "How consent is handled",
    body:
      "Your consent choices are stored locally on your device using browser storage so the site can remember whether analytics or marketing categories may be enabled. Necessary storage is always active because it is required to remember your privacy choices."
  },
  {
    title: "Third-party services",
    body:
      "No optional third-party analytics or marketing scripts are loaded until you grant consent for the relevant category. Where such services are introduced, this policy and the cookie policy will be updated to reflect the tools in use."
  },
  {
    title: "Your choices",
    body:
      "You can update your preferences at any time using the Cookie Settings control in the site footer. You can also contact me directly if you want to ask about data handling related to a collaboration or email enquiry."
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
          This policy explains how this website handles contact information, consent preferences,
          and any optional categories that depend on your permission.
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
