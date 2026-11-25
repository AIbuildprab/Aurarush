import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { SampleMock } from "@/components/mock/sample-mock";
import { getWork, workItems } from "@/data/work";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) return {};
  return pageMetadata({
    title: item.title,
    description: item.summary,
    path: `/work/${item.slug}`,
  });
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) notFound();
  const index = workItems.findIndex((entry) => entry.slug === item.slug);
  const previous = workItems[(index - 1 + workItems.length) % workItems.length];
  const next = workItems[(index + 1) % workItems.length];

  return (
    <>
      <PageHero
        eyebrow={item.sector}
        title={item.title}
        intro={item.sample ? "This is a sample build with invented interface data. It is not a client story and it does not report results." : item.summary}
        crumbs={[{ href: "/work", label: "Work" }, { label: item.title }]}
      />
      <section className="section" aria-labelledby="challenge-title">
        <div className="container-site grid gap-12">
          <SampleMock type={item.mock} hue={item.hue} />
          <div className="grid gap-10 lg:grid-cols-3">
            <article>
              <h2 id="challenge-title" className="h3">The challenge</h2>
              <p className="mt-3 text-muted">{item.challenge}</p>
            </article>
            <article>
              <h2 className="h3">What we did</h2>
              <p className="mt-3 text-muted">{item.whatWeDid}</p>
            </article>
            <article>
              <h2 className="h3">The result</h2>
              <p className="mt-3 text-muted">{item.result}</p>
            </article>
          </div>
          <dl className="grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
            {item.figures.map((figure) => (
              <div key={figure.label}>
                <dt className="font-display text-4xl font-light">{figure.value}</dt>
                <dd className="mt-2 text-muted">{figure.label}</dd>
              </div>
            ))}
          </dl>
          {item.quote ? <blockquote className="max-w-[48ch] border-l border-white/20 pl-6 text-2xl font-light">“{item.quote}”</blockquote> : null}
          <p className="font-mono text-xs tracking-[0.08em] text-muted uppercase">Services — {item.tags.join(" / ")}</p>
          <nav className="flex justify-between gap-6 border-t border-white/10 pt-6" aria-label="More work">
            <Link href={`/work/${previous.slug}`}>Previous: {previous.title}</Link>
            <Link href={`/work/${next.slug}`}>Next: {next.title}</Link>
          </nav>
        </div>
      </section>
    </>
  );
}
