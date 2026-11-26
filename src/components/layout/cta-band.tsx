import Link from "next/link";
import { BookCall } from "@/components/layout/book-call";
import { site } from "@/data/site";

export function CtaBand({
  title = "Let’s find where your growth is leaking.",
  text = "Tell us about the business. We will reply with where we would look first and what a sensible next step is.",
  secondary,
}: {
  title?: string;
  text?: string;
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="theme-ink bg-paper text-ink" aria-labelledby="cta-title">
      <div className="container-wide grid gap-10 py-20 lg:grid-cols-12 lg:items-end lg:py-24">
        <div className="lg:col-span-7">
          <h2 id="cta-title" className="h2">{title}</h2>
          <p className="lead mt-5">{text}</p>
        </div>
        <div className="lg:col-span-5 lg:justify-self-end">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <BookCall className="!bg-ink !text-paper hover:!bg-accent hover:!text-paper" />
            {secondary ? (
              <Link href={secondary.href} className="btn btn-secondary">{secondary.label}</Link>
            ) : null}
          </div>
          <p className="mt-5 text-muted">
            Or email <a className="link text-ink" href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
