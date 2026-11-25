import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SampleMock } from "@/components/mock/sample-mock";
import { SHOW_CLIENT_WORK, workItems } from "@/data/work";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Work",
  description: "Sample builds showing a funnel website, trainer and salon dashboards, and an IT roadmap. Illustrative, not client work.",
  path: "/work",
});

export default function WorkPage() {
  const items = SHOW_CLIENT_WORK ? workItems.filter((item) => !item.sample) : workItems;

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Sample builds, clearly labelled."
        intro="These screens show how a funnel, a dashboard and a technology plan fit together. They use sample data. They are not client results."
        crumbs={[{ label: "Work" }]}
      />
      <section className="section" aria-labelledby="work-list">
        <div className="container-site">
          <h2 id="work-list" className="sr-only">Sample builds</h2>
          <div className="grid gap-12 md:grid-cols-2">
            {items.map((item) => (
              <article key={item.slug}>
                <SampleMock type={item.mock} hue={item.hue} />
                <p className="mt-4 font-mono text-xs tracking-[0.14em] text-muted uppercase">{item.sector}</p>
                <h3 className="h3 mt-2">{item.title}</h3>
                <p className="mt-2 text-muted">{item.summary}</p>
                <Link className="btn btn-text mt-4" href={`/work/${item.slug}`}>
                  {SHOW_CLIENT_WORK ? "Read the story" : "View the sample"}
                  <ArrowRight className="arrow-x size-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
