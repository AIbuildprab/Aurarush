import { PageHero } from "@/components/layout/page-hero";
import { FunnelCheck } from "@/components/tools/funnel-check";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Funnel check",
  description: "Six questions to find which stage of your growth system is costing you most: attention, conversion or monetisation.",
  path: "/funnel-check",
});

export default function FunnelCheckPage() {
  return (
    <>
      <PageHero
        title="Which stage is costing you most?"
        intro="Answer six questions about how your business wins and keeps customers. Nothing is stored or sent. You get a suggested place to start."
        crumbs={[{ label: "Funnel check" }]}
      />
      <section className="section" aria-label="Funnel check">
        <div className="container-wide max-w-4xl">
          <FunnelCheck />
        </div>
      </section>
    </>
  );
}
