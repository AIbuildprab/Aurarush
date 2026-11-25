import { PageHero } from "@/components/layout/page-hero";
import { InsightList } from "@/components/sections/insight-list";
import { insights } from "@/data/insights";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Insights",
  description: "Short notes on enquiry forms, dashboards for personal trainers, and where IT consulting should start.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Thinking, briefly."
        intro="Short notes on forms, dashboards and plain-English technology advice. These are AuraRush articles, not client case studies."
        crumbs={[{ label: "Insights" }]}
      />
      <section className="section" aria-labelledby="article-list">
        <div className="container-site">
          <h2 id="article-list" className="sr-only">Articles</h2>
          <InsightList articles={insights} />
        </div>
      </section>
    </>
  );
}
