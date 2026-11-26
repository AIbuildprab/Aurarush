import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { stages } from "@/data/framework";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Services",
  description: "Seven agency services organised by the growth stage they improve, plus an audit and managed support.",
  path: "/services",
});

export default function ServicesPage() {
  const groups = [...stages.map((stage) => ({ key: stage.id, name: stage.name })), { key: "cross-stage", name: "Across every stage" }];

  return (
    <>
      <PageHero title="Services" intro="Organised by the stage they improve. Unsure? Start with the growth audit." crumbs={[{ label: "Services" }]} />
      <section className="section" aria-label="All services">
        <div className="container-wide border-t border-line-strong">
          {groups.map((group) => (
            <div key={group.key} data-stage={group.key} className="grid gap-2 border-b border-line py-8 lg:grid-cols-12">
              <p className="flex items-start gap-2 font-semibold lg:col-span-3"><span className="stage-dot mt-2" aria-hidden="true" />{group.name}</p>
              <ul className="grid gap-1 lg:col-span-9">
                {services.filter((service) => service.stage === group.key).map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="row-link -mx-3 flex items-baseline justify-between gap-6 rounded-md px-3 py-3">
                      <span>
                        <span className="font-display text-2xl">{service.name}</span>
                        {service.startHere ? <span className="ml-3 rounded-full bg-ink px-2.5 py-0.5 align-middle text-xs font-semibold text-paper">Start here</span> : null}
                        <span className="mt-1 block text-muted">{service.menu}{service.availability === "on-request" ? " Scoped per project." : ""}</span>
                      </span>
                      <ArrowUpRight className="card-arrow size-5 shrink-0 text-muted" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
