import { ButtonLink, Container } from "../components/ui";

export const metadata = {
  title: "Page not found | Pradeep Dahiya",
  robots: { index: false, follow: true }
};

export default function NotFound() {
  return (
    <Container className="pb-28 pt-20 md:pt-28">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 max-w-2xl font-display text-[44px] leading-[1.08] text-strong md:text-[60px]">
        That page has moved, or never existed.
      </h1>
      <p className="mt-5 max-w-xl text-[18px] leading-8">
        Everything I build is on the work page, and the stories are under writing.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <ButtonLink href="/work">See my work</ButtonLink>
        <ButtonLink href="/" variant="secondary">
          Home
        </ButtonLink>
      </div>
    </Container>
  );
}
