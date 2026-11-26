import Link from "next/link";
import { BookCall } from "@/components/layout/book-call";
import { BorderBeam } from "@/components/magic/border-beam";
import { Aurora } from "@/components/ui/aurora";
import { LogoMark } from "@/components/ui/logo";
import { WordReveal } from "@/components/ui/word-reveal";
import { site } from "@/data/site";

export function CtaBand({
  title = "Where is your growth leaking?",
  text = "Tell us about the business. We reply with where we would look first.",
  secondary,
}: {
  title?: string;
  text?: string;
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="theme-ink relative overflow-hidden bg-paper text-ink" aria-labelledby="cta-title">
      <Aurora variant="bottom" />
      <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-1/2 w-[min(70vw,560px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]">
        <div className="flower-spin"><LogoMark className="size-full" /></div>
      </div>
      <div className="container-wide relative grid gap-10 py-20 lg:grid-cols-12 lg:items-end lg:py-24">
        <div className="lg:col-span-7">
          <WordReveal id="cta-title" text={title} className="h2" />
          <p className="lead mt-5">{text}</p>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-line bg-surface/50 p-6 lg:col-span-5 lg:justify-self-end">
          <BorderBeam colorFrom="var(--attention-fill)" colorTo="var(--monetisation-fill)" duration={9} />
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <BookCall className="!bg-ink !text-paper hover:!bg-accent hover:!text-paper" />
            {secondary ? (
              <Link href={secondary.href} className="btn btn-secondary">{secondary.label}</Link>
            ) : null}
          </div>
          <p className="mt-4 text-muted">
            <a className="link text-ink" href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
