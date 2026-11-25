import Link from "next/link";
import { Aurora } from "@/components/ui/aurora";
import { WordReveal } from "@/components/ui/word-reveal";

export function PageHero({
  eyebrow,
  title,
  highlight,
  intro,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  intro: string;
  crumbs: { href?: string; label: string }[];
}) {
  return (
    <section className="relative flex min-h-[60svh] items-end overflow-hidden pt-28 pb-16" aria-labelledby="page-title">
      <Aurora variant="corner" />
      <div className="container-site relative">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-xs tracking-[0.14em] text-muted uppercase">
            <li><Link href="/">Home</Link></li>
            {crumbs.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <p className="eyebrow mt-8">
          <span className="eyebrow-dot" aria-hidden="true" />
          {eyebrow}
        </p>
        <WordReveal id="page-title" as="h1" text={title} highlight={highlight} className="h1 mt-4 max-w-[min(14ch,100%)]" />
        <p className="lead mt-6">{intro}</p>
      </div>
    </section>
  );
}
