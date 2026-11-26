import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { stages } from "@/data/framework";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Services",
  description: "Seven AI automation services organised by the growth stage they improve: attention, conversion and monetisation, plus an audit and managed support.",
  path: "/services",
});

export default function ServicesPage() {
  const groups = [...stages.map((stage) => ({ key: stage.id, name: stage.name, question: stage.question })), { key: "cross-stage", name: "Across every stage", question: "Where to start, and keeping it running." }];

  return (
    <>
      <PageHero
        title="Services, organised by the stage they improve."
        intro="Each service builds or supports one part of the growth system. If you are unsure where to begin, start with the growth audit."
        crumbs={[{ label: "Services" }]}
      />
      <section className="section" aria-label="All services">
        <div className="container-wide border-t border-line-strong">
          {groups.map((group) => (
            <div key={group.key} data-stage={group.key} className="grid gap-4 border-b border-line py-10 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="flex items-center gap-2 font-semibold"><span className="stage-dot" aria-hidden="true" />{group.name}</p>
                <p className="mt-1 text-muted">{group.question}</p>
              </div>
              <ul className="grid gap-1 lg:col-span-9">
                {services.filter((service) => service.stage === group.key).map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="row-link -mx-3 flex items-start justify-between gap-6 rounded-md px-3 py-3">
                      <span>
                        <span className="font-display text-2xl">
                          {service.name}
                          {service.startHere ? <span className="ml-3 rounded-full bg-ink px-2.5 py-0.5 align-middle font-sans text-xs font-semibold text-paper">Start here</span> : null}
                        </span>
                        <span className="mt-1 block max-w-[62ch] text-muted">{service.summary}</span>
                        {service.availability === "on-request" ? <span className="mt-1 block text-sm text-muted">Scoped per project</span> : null}
                      </span>
                      <ArrowUpRight className="card-arrow mt-2 size-5 shrink-0 text-muted" aria-hidden="true" />
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
