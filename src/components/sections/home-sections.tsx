import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Aurora } from "@/components/ui/aurora";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { WordReveal } from "@/components/ui/word-reveal";
import { BookCall } from "@/components/layout/book-call";
import { SampleMock } from "@/components/mock/sample-mock";
import { benefits, industries, industryHues, ticker } from "@/data/site";
import { insights } from "@/data/insights";
import { principleHues, principles } from "@/data/principles";
import { serviceHues, services } from "@/data/services";
import { SHOW_CLIENT_WORK, workItems } from "@/data/work";
import { PhilosophyList } from "@/components/sections/philosophy-list";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-36 lg:pb-32" aria-labelledby="hero-title">
      <Aurora />
      <div className="container-site relative">
        <p className="eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          UK IT services and consulting
        </p>
        <WordReveal
          as="h1"
          id="hero-title"
          mode="load"
          highlight="into customers"
          className="h1 mt-5 max-w-[min(14ch,100%)]"
          text="We build the websites and systems that turn visitors into customers."
        />
        <p className="mt-6 max-w-[560px] text-white/75">
          AuraRush helps businesses grow by building value. We create websites that funnel the right customers into your enquiry form, and dashboards that let personal trainers and salons run their business from the same system. Practical IT consulting and support sit behind every build.
        </p>
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <BookCall />
          <a className="btn btn-text" href="#solutions">
            See what we build
            <ArrowRight className="arrow-x size-4" aria-hidden="true" />
          </a>
        </div>
        <div className="mt-16 flex items-end justify-between gap-6">
          <p className="max-w-[36ch] text-sm text-muted">UK-based IT services and IT consulting for growing businesses.</p>
          <p className="flex items-center gap-3 font-mono text-xs tracking-[0.14em] text-muted uppercase">
            Scroll
            <span className="scroll-line" aria-hidden="true" />
          </p>
        </div>
      </div>
    </section>
  );
}

export function IndustriesMarquee() {
  const row = industries.map((label, index) => (
    <span key={label} className="mr-16 inline-flex items-center gap-4 font-display text-2xl font-light text-white/70">
      <span className="size-1.5 rounded-full" style={{ background: industryHues[index] }} aria-hidden="true" />
      {label}
    </span>
  ));

  return (
    <section className="border-y border-white/10 py-8" aria-labelledby="industries-title">
      <div className="container-site">
        <h2 id="industries-title" className="h3">Built for businesses that live on enquiries</h2>
        <p className="mt-2 text-muted">Personal trainers, salons and local service businesses, plus any business that needs sound IT advice.</p>
      </div>
      <div className="marquee mt-6" style={{ "--shift": "-50%" } as React.CSSProperties}>
        <div className="marquee-track" style={{ animationDuration: "40s" }}>
          <div className="marquee-group">{row}</div>
          <div className="marquee-group" aria-hidden="true">{row}</div>
        </div>
      </div>
    </section>
  );
}

export function ValueTicker() {
  const row = ticker.map((line, index) => (
    <span key={line} className="mr-10 inline-flex items-center gap-10 font-display text-2xl font-light">
      {line}
      <span style={{ color: industryHues[index] }} aria-hidden="true">*</span>
    </span>
  ));

  return (
    <div className="border-b border-white/10 py-5" aria-hidden="true">
      <div className="h-px bg-[image:var(--gradient-spectrum)]" />
      <div className="marquee py-4" style={{ "--shift": "-33.333%" } as React.CSSProperties}>
        <div className="marquee-track" style={{ animationDuration: "60s", animationDirection: "reverse" }}>
          <div className="marquee-group">{row}</div>
          <div className="marquee-group">{row}</div>
          <div className="marquee-group">{row}</div>
        </div>
      </div>
    </div>
  );
}

export function ServicesGrid() {
  return (
    <section className="section" aria-labelledby="services-title">
      <div className="container-site">
        <SectionHeader
          id="services-title"
          eyebrow="What we do"
          title="Websites that win customers. Systems that run the business."
          intro="AuraRush combines lead-generation websites, funnel forms, dashboards and IT expertise, so the way customers arrive and the way you manage them are designed together."
        />
        <div className="mt-14 grid border-t border-l border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="service-card border-r border-b border-white/10"
              style={{ "--hue": serviceHues[service.hue].color } as React.CSSProperties}
            >
              <span className="flex items-center justify-between font-mono text-xs tracking-[0.08em] uppercase" style={{ color: serviceHues[service.hue].text }}>
                {service.number} / {service.name}
                <ArrowUpRight className="card-arrow size-4" aria-hidden="true" />
              </span>
              <h3 className="h3">{service.name}</h3>
              <p className="text-muted">{service.summary}</p>
              <span className="mt-auto block h-px bg-white/10" />
              <p><span className="font-mono text-xs tracking-[0.08em] text-muted uppercase">Outcome — </span>{service.outcome}</p>
              <p className="font-mono text-xs tracking-[0.06em] text-muted uppercase">{service.tags.join(" / ")}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedSolutions() {
  const items = SHOW_CLIENT_WORK ? workItems.filter((item) => !item.sample) : workItems;
  return (
    <section id="solutions" className="section scroll-mt-24" aria-labelledby="solutions-title">
      <div className="container-site">
        <SectionHeader
          id="solutions-title"
          eyebrow="Featured solutions"
          title="See how it fits together."
          intro="These sample builds show how a funnel, a dashboard and a technology plan work as one system. They are illustrative, not client work."
        />
        <div className="mt-20 grid gap-24">
          {items.map((item, index) => (
            <article key={item.slug} className="group grid items-center gap-8 lg:grid-cols-12">
              <div className={index % 2 === 1 ? "lg:col-span-7 lg:col-start-6 lg:row-start-1" : "lg:col-span-7"}>
                <SampleMock type={item.mock} hue={item.hue} />
              </div>
              <div className={index % 2 === 1 ? "lg:col-span-5 lg:col-start-1 lg:row-start-1" : "lg:col-span-5"}>
                <p className="font-mono text-xs tracking-[0.14em] text-muted uppercase">{item.sector}</p>
                <p className="mt-3 inline-flex rounded-full border border-white/20 px-3 py-1 text-xs">Sample build</p>
                <h3 className="h3 mt-4">{item.title}</h3>
                <p className="mt-3 text-muted">{item.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-white/15 px-3 py-1 font-mono text-[11px] tracking-[0.06em] uppercase">{tag}</li>
                  ))}
                </ul>
                <Link className="btn btn-text mt-6" href={`/services/${item.serviceSlug}`}>
                  Explore the service
                  <ArrowRight className="arrow-x size-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link className="btn btn-secondary" href="/work">
            View all work
            <ArrowRight className="arrow-x size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Philosophy() {
  return (
    <section className="section" aria-labelledby="philosophy-title">
      <div className="container-site grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-[120px]">
            <p className="eyebrow"><span className="eyebrow-dot" aria-hidden="true" />Why AuraRush</p>
            <WordReveal id="philosophy-title" text="Our philosophy." className="h2 mt-5" />
            <p className="lead mt-6">We build the path from a visit to a reply, then stay available after launch. The technology is there to make that path clearer.</p>
          </div>
        </div>
        <PhilosophyList />
      </div>
    </section>
  );
}

export function HowWeWorkPreview() {
  return (
    <section className="section" aria-labelledby="how-title">
      <div className="container-site">
        <SectionHeader
          id="how-title"
          eyebrow="How we work"
          title="Start with a build. Stay for the support."
          intro="Some businesses need one well-built website, funnel or dashboard. Others want a team that keeps improving it. Either way, you deal directly with the people doing the work."
        />
        <Link className="btn btn-text mt-6" href="/how-we-work">
          See how we work
          <ArrowRight className="arrow-x size-4" aria-hidden="true" />
        </Link>
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
          <Link href="/how-we-work" className="lift flex flex-col rounded-lg border border-white/15 p-8">
            <span className="font-mono text-xs tracking-[0.12em] text-muted uppercase">For a defined need</span>
            <h3 className="h3 mt-6">Focused builds</h3>
            <p className="mt-3 text-muted">A one-off website, funnel, dashboard or consulting engagement with a clear scope.</p>
            <ArrowUpRight className="card-arrow mt-10 ml-auto size-5" aria-hidden="true" />
          </Link>
          <Link href="/how-we-work" className="lift flex flex-col rounded-lg border border-transparent bg-surface-2 p-8 shadow-[0_0_40px_rgba(222,47,75,0.15)] lg:py-11" style={{ backgroundImage: "linear-gradient(var(--surface-2), var(--surface-2)), var(--gradient-spectrum)", backgroundOrigin: "border-box", backgroundClip: "padding-box, border-box", border: "1px solid transparent" }}>
            <span className="font-mono text-xs tracking-[0.12em] uppercase" style={{ color: "var(--aura-crimson-text)" }}>The AuraRush way</span>
            <h3 className="h3 mt-6">Build and ongoing support</h3>
            <p className="mt-3 text-muted">A build followed by hosting, maintenance, improvements and IT support.</p>
            <ArrowUpRight className="card-arrow mt-10 ml-auto size-5" aria-hidden="true" />
          </Link>
        </div>
        <dl className="mt-8 grid border-t border-l border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="border-r border-b border-white/10 p-6">
              <dt className="font-medium">{benefit.title}</dt>
              <dd className="mt-2 text-sm text-muted">{benefit.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function LatestInsights() {
  if (insights.length === 0) return null;
  return (
    <section className="section" aria-labelledby="insights-title">
      <div className="container-site">
        <SectionHeader
          id="insights-title"
          eyebrow="Insights"
          title="Thinking, briefly."
          aside={
            <Link className="btn btn-text" href="/insights">
              All insights
              <ArrowRight className="arrow-x size-4" aria-hidden="true" />
            </Link>
          }
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {insights.slice(0, 3).map((article, index) => (
            <Reveal key={article.slug} delay={index * 0.08}>
              <Link href={`/insights/${article.slug}`} className="insight-card flex h-full flex-col border-t border-white/15 pt-6">
                <p className="flex justify-between gap-4 font-mono text-xs tracking-[0.12em] text-muted uppercase">
                  <span>{article.category}</span>
                  <span>{article.date}</span>
                </p>
                <h3 className="h3 mt-4">{article.title}</h3>
                <span className="mt-8 flex items-center justify-between text-sm text-muted">
                  {article.readTime}
                  <ArrowUpRight className="card-arrow size-4" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
