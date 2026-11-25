import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { engagementSteps } from "@/data/site";
import { serviceHues, services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Services",
  description: "Funnel websites, lead forms, dashboards for personal trainers and salons, plus IT consulting and support.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Six ways we build value."
        intro="Websites, forms, dashboards and IT advice, designed so the way customers arrive and the way you manage them belong together."
        crumbs={[{ label: "Services" }]}
      />
      <section className="section" aria-labelledby="service-list">
        <div className="container-site grid gap-16">
          <h2 id="service-list" className="sr-only">Service list</h2>
          {services.map((service, index) => (
            <article key={service.slug} className="grid items-center gap-8 border-t border-white/10 pt-10 lg:grid-cols-12">
              <p className="font-display text-6xl font-light lg:col-span-2" style={{ color: serviceHues[service.hue].text }}>{service.number}</p>
              <div className={index % 2 ? "lg:col-span-6 lg:col-start-7" : "lg:col-span-8"}>
                <h3 className="h3">{service.name}</h3>
                <p className="mt-3 max-w-[58ch] text-muted">{service.summary}</p>
                <p className="mt-4"><span className="font-mono text-xs tracking-[0.08em] text-muted uppercase">Outcome — </span>{service.outcome}</p>
                <p className="mt-3 font-mono text-xs tracking-[0.06em] text-muted uppercase">{service.tags.join(" / ")}</p>
                <Link className="btn btn-text mt-6" href={`/services/${service.slug}`}>
                  Explore the service
                  <ArrowRight className="arrow-x size-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section border-t border-white/10" aria-labelledby="engagement-title">
        <div className="container-site">
          <h2 id="engagement-title" className="h2">How an engagement works</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {engagementSteps.map((step) => (
              <li key={step.number} className="border-t border-white/10 pt-4">
                <p className="font-mono text-sm text-muted">{step.number}</p>
                <h3 className="mt-3 text-xl">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
