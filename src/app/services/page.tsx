import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { ServiceBento } from "@/components/home/service-bento";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Services",
  description: "Websites, Google search, online ads, outreach, client dashboards, a marketing review and ongoing support.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Services" intro="Pick one, or combine them. Unsure? Start with the marketing review." crumbs={[{ label: "Services" }]} />
      <section className="section wash-stages" aria-label="All services">
        <div className="container-wide">
          <ServiceBento />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
