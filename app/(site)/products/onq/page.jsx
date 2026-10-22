import Image from "next/image";
import Link from "next/link";
import { Container, JsonLd, PhoneFrame, SectionHeading, StoreButtons, TextLink } from "../../../../components/ui";
import { onqLinks, onqScreens, products } from "../../../../lib/site";
import { absoluteUrl, breadcrumbJsonLd, createMetadata, productJsonLd } from "../../../../lib/seo";

const onq = products.find((item) => item.id === "onq");

export const metadata = createMetadata({
  title: "OnQ: see the wait, join from anywhere | Pradeep Dahiya",
  description:
    "OnQ shows live wait times at local businesses. Join the queue from your phone, keep your place and get an alert as your turn gets close. iPhone and Android.",
  path: "/products/onq",
  image: "/og/onq.jpg",
  imageAlt: "OnQ: see the wait, join from anywhere"
});

const steps = [
  { title: "Download OnQ", body: "Free to download on the App Store and Google Play, or use it in the browser." },
  { title: "Find the shop", body: "See participating shops nearby, each with its live queue." },
  { title: "Join with name and phone", body: "No account needed. Keep your place and get on with your day." }
];

const forCustomers = [
  { title: "Live wait times", body: "Each shop shows its real queue: how many are waiting and roughly how long, updated as it moves." },
  { title: "Join from anywhere", body: "Hold your place from home or work, or scan the code at the counter." },
  { title: "Alerts as your turn gets close", body: "OnQ tells you when to head over, so you arrive as the chair opens." }
];

const forShops = [
  { title: "One screen for the floor", body: "Call next, start, done. Walk-ins and app joins share one queue." },
  { title: "Records that help", body: "Served today, busy hours and repeat customers, without a notebook." },
  { title: "A page and a counter sign", body: "Logo, photos, opening hours and a printable code, set up from a phone." }
];

export default function OnQPage() {
  return (
    <>
      <JsonLd
        data={[
          productJsonLd(onq, {
            applicationCategory: "LifestyleApplication",
            operatingSystem: "iOS, Android",
            installUrl: [onqLinks.appStore, onqLinks.googlePlay],
            screenshot: onqScreens.map((screen) => absoluteUrl(screen.src)),
            offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" }
          }),
          breadcrumbJsonLd([
            { name: "Work", path: "/work" },
            { name: "OnQ", path: "/products/onq" }
          ])
        ]}
      />

      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-48 -top-24 h-[640px] w-[640px] rounded-full bg-[radial-gradient(closest-side,rgba(110,150,200,0.18),rgba(110,150,200,0))]"
        />
        <Container className="relative grid items-center gap-12 pb-20 pt-14 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:pb-28 md:pt-20">
          <div>
            <Link href="/work" className="text-[14px] text-muted hover:text-strong">
              ← Work
            </Link>
            <div className="mt-8 flex items-center gap-3">
              <Image src={onq.logo} alt="OnQ app icon" width={52} height={52} className="h-[52px] w-[52px] rounded-[13px] shadow-soft" />
              <span className="text-[20px] font-semibold text-strong">OnQ</span>
            </div>
            <h1 className="mt-6 font-display text-[44px] leading-[1.04] tracking-[-0.01em] text-strong md:text-[72px]">
              See the wait.
              <br />
              <span className="text-onq">Join from anywhere.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[18px] leading-8 md:text-[20px]">{onq.summary}</p>
            <StoreButtons className="mt-9" />
            <p className="mt-5 text-[15px] text-muted">
              No account needed to join. No install?{" "}
              <a href={onqLinks.site} className="font-medium text-brand hover:text-brand-strong">
                Use OnQ in the browser ↗
              </a>
            </p>
          </div>

          <figure className="mx-auto w-full max-w-[420px]">
            <div className="relative aspect-[420/540]">
              <PhoneFrame {...onqScreens[1]} className="absolute bottom-0 left-0 w-[46%]" />
              <PhoneFrame {...onqScreens[0]} className="absolute right-0 top-0 w-[54%]" priority />
            </div>
            <figcaption className="mt-4 text-[13px] text-muted">Real screens from the OnQ iPhone app.</figcaption>
          </figure>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="How it works" title="Three steps, then get on with your day." />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-[22px] border border-line bg-canvas p-7">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-onq text-[14px] font-semibold text-ink">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-[19px] font-semibold text-strong">{step.title}</h3>
                <p className="mt-2 text-[16px] leading-7">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-20 grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">For customers</p>
              <ul className="mt-5 space-y-6">
                {forCustomers.map((item) => (
                  <li key={item.title}>
                    <p className="text-[17px] font-semibold text-strong">{item.title}</p>
                    <p className="mt-1 text-[16px] leading-7">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">For shops</p>
              <ul className="mt-5 space-y-6">
                {forShops.map((item) => (
                  <li key={item.title}>
                    <p className="text-[17px] font-semibold text-strong">{item.title}</p>
                    <p className="mt-1 text-[16px] leading-7">{item.body}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <TextLink href={onqLinks.site}>OnQ for shop owners</TextLink>
              </div>
              <figure className="mt-10 flex items-end gap-5">
                <div className="w-[150px] shrink-0 overflow-hidden rounded-[12px] border border-line bg-surface shadow-soft">
                  <Image
                    src="/images/onq/onq-poster-1200.webp"
                    width={1200}
                    height={1697}
                    alt="The OnQ counter poster: see the wait, join from anywhere, with App Store and Google Play download codes"
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="text-[14px] leading-6 text-muted">
                  The counter poster shops put up, with codes for the App Store and Google Play.
                </figcaption>
              </figure>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container width="mid">
          <div className="rounded-[26px] border border-line bg-surface p-8 md:p-12">
            <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
              <div>
                <h2 className="font-display text-[32px] leading-[1.12] text-strong md:text-[40px]">Get OnQ</h2>
                <p className="mt-3 max-w-md text-[17px] leading-7">
                  Free to download on iPhone and Android. On a computer? Scan a code with your phone.
                </p>
                <StoreButtons className="mt-7" />
              </div>
              <div className="hidden gap-6 sm:flex">
                <figure className="text-center">
                  <Image
                    src="/images/onq/onq-qr-app-store.png"
                    width={150}
                    height={150}
                    alt="QR code: download OnQ on the App Store"
                    className="rounded-xl border border-line bg-white p-2"
                  />
                  <figcaption className="mt-2 text-[13px] text-muted">iPhone</figcaption>
                </figure>
                <figure className="text-center">
                  <Image
                    src="/images/onq/onq-qr-google-play.png"
                    width={150}
                    height={150}
                    alt="QR code: get OnQ on Google Play"
                    className="rounded-xl border border-line bg-white p-2"
                  />
                  <figcaption className="mt-2 text-[13px] text-muted">Android</figcaption>
                </figure>
              </div>
            </div>
          </div>
          <p className="mt-8 text-[16px] leading-7 text-body">
            I lead OnQ&apos;s product and architecture at ScotiTech. It brings the same idea as the rest
            of my work to the high street: people should be in control of their own time, not stuck on a
            bench waiting for it.
          </p>
        </Container>
      </section>
    </>
  );
}
