import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { BookCall } from "@/components/layout/book-call";
import { CtaBand } from "@/components/layout/cta-band";
import { FunnelEngine } from "@/components/framework/funnel-engine";
import { JsonLd } from "@/components/seo/json-ld";
import { Aurora } from "@/components/ui/aurora";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { WordReveal } from "@/components/ui/word-reveal";
import { BrowserFrame } from "@/components/work/browser-frame";
import { stages } from "@/data/framework";
import { services } from "@/data/services";
import { howWeWork, site } from "@/data/site";
import { getPublishedWork } from "@/data/work";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: `AuraRush | ${site.tagline}`,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  const work = getPublishedWork();
  const groups = [
    ...stages.map((stage) => ({ key: stage.id, name: stage.name })),
    { key: "cross-stage", name: "Across every stage" },
  ];

  return (
    <>
      <JsonLd
        data={[
          { "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url, email: site.email, description: site.description, areaServed: "GB" },
          { "@context": "https://schema.org", "@type": "WebSite", name: site.name, url: site.url, inLanguage: "en-GB" },
        ]}
      />

      <section className="relative overflow-hidden border-b border-line" aria-labelledby="hero-title">
        <Aurora />
        <div className="container-wide relative grid gap-12 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-5">
            <WordReveal as="h1" id="hero-title" text="AI automation for growth." className="h1" />
            <p className="lead mt-6">We build the systems that win attention, convert it and turn it into revenue.</p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <BookCall />
              <Link href="/framework" className="btn btn-secondary">See the framework</Link>
            </div>
            <ul className="mt-10 grid gap-1 border-t border-line pt-5 text-[0.9375rem] text-muted">
              <li>Five live client builds</li>
              <li>A person reviews every output</li>
              <li>Scope and cost in writing</li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <FunnelEngine />
          </div>
        </div>
      </section>

      <div className="border-b border-line py-5" role="group" aria-label="Clients we have built for">
        <div className="marquee">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <ul key={copy} className="marquee-group" aria-hidden={copy === 1 ? "true" : undefined}>
                {work.map((study) => (
                  <li key={study.slug} className="mr-12 flex items-center gap-12 whitespace-nowrap font-display text-xl text-muted">
                    {study.client}
                    <span className="stage-dot" data-stage="conversion" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      <section className="section" aria-labelledby="services-title">
        <div className="container-wide">
          <SectionHeader
            id="services-title"
            title="Services"
            aside={<Link className="btn btn-text" href="/funnel-check">Not sure? Take the funnel check <ArrowRight className="arrow-x size-4" aria-hidden="true" /></Link>}
          />
          <Reveal className="mt-10 border-t border-line-strong">
            {groups.map((group) => (
              <div key={group.key} data-stage={group.key} className="grid gap-2 border-b border-line py-6 lg:grid-cols-12">
                <p className="flex items-start gap-2 font-semibold lg:col-span-3">
                  <span className="stage-dot mt-2" aria-hidden="true" />
                  {group.name}
                </p>
                <ul className="grid gap-1 lg:col-span-9">
                  {services.filter((service) => service.stage === group.key).map((service) => (
                    <li key={service.slug}>
                      <Link href={`/services/${service.slug}`} className="row-link group -mx-3 flex items-baseline justify-between gap-6 rounded-md px-3 py-2">
                        <span className="flex flex-wrap items-baseline gap-x-4">
                          <span className="font-display text-xl">{service.name}</span>
                          <span className="text-muted">{service.menu}</span>
                          {service.startHere ? <span className="rounded-full bg-ink px-2.5 py-0.5 text-xs font-semibold text-paper">Start here</span> : null}
                        </span>
                        <ArrowUpRight className="card-arrow size-4 shrink-0 text-muted" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section border-y border-line bg-surface" aria-labelledby="work-title">
        <div className="container-wide">
          <SectionHeader
            id="work-title"
            title="Selected work"
            aside={<Link className="btn btn-text" href="/work">All work <ArrowRight className="arrow-x size-4" aria-hidden="true" /></Link>}
          />
          <Reveal>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {work.map((study) => (
              <li key={study.slug}>
                <Link href={`/work/${study.slug}`} className="lift block">
                  <BrowserFrame src={study.frames.desktop} alt={study.frames.alt} url={study.liveUrl} sizes="(min-width: 1024px) 400px, 100vw" />
                  <p className="mt-4 font-semibold">{study.client}</p>
                  <p className="text-muted">{study.headline}{study.status === "in-progress" ? " · In progress" : ""}</p>
                </Link>
              </li>
            ))}
          </ul>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="how-title">
        <div className="container-wide">
          <SectionHeader
            id="how-title"
            title="How we work"
            aside={<Link className="btn btn-text" href="/how-we-work">Details <ArrowRight className="arrow-x size-4" aria-hidden="true" /></Link>}
          />
          <Reveal>
          <ol className="mt-10 grid gap-8 border-t border-line-strong pt-8 md:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((step, index) => (
              <li key={step.title}>
                <p className="font-display text-3xl text-muted" aria-hidden="true">{index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
