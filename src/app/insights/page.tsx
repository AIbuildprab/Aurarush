import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { insights } from "@/data/insights";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Insights",
  description: "Plain-English tips for getting more customers.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <PageHero
        title="Insights"
        intro="Short, practical tips for getting more customers."
        crumbs={[{ label: "Insights" }]}
      />
      <section className="section" aria-label="Articles">
        <div className="container-wide">
          <ul className="border-t border-line-strong">
            {insights.map((article) => (
              <li key={article.slug} className="border-b border-line">
                <Link href={`/insights/${article.slug}`} className="row-link group grid gap-3 py-6 md:grid-cols-[200px_1fr_auto] md:items-center md:gap-8">
                  <span className="text-sm text-muted">{article.date}</span>
                  <span>
                    <span className="block font-display text-2xl group-hover:underline">{article.title}</span>
                    <span className="mt-1 block max-w-[62ch] text-muted">{article.excerpt}</span>
                  </span>
                  <span className="flex items-center gap-3 text-sm text-muted">
                    {article.readTime}
                    <ArrowUpRight className="card-arrow size-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
