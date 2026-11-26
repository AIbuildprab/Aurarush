import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { ServiceBento } from "@/components/home/service-bento";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Services",
  description: "Seven agency services organised by the growth stage they improve, plus an audit and managed support.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Services" intro="Organised by the stage they improve. Unsure? Start with the growth audit." crumbs={[{ label: "Services" }]} />
      <section className="section wash-stages" aria-label="All services">
        <div className="container-wide">
          <ServiceBento />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
