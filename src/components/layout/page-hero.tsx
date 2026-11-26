import Link from "next/link";

export function PageHero({
  title,
  intro,
  crumbs,
  children,
}: {
  title: string;
  intro?: string;
  crumbs: { href?: string; label: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-line" aria-labelledby="page-title">
      <div className="container-wide pt-10 pb-14 lg:pt-14 lg:pb-20">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
            <li><Link className="link" href="/">Home</Link></li>
            {crumbs.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                {crumb.href ? <Link className="link" href={crumb.href}>{crumb.label}</Link> : <span aria-current="page" className="text-ink">{crumb.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 id="page-title" className="h1">{title}</h1>
            {intro ? <p className="lead mt-6">{intro}</p> : null}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
