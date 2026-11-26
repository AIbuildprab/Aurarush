import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { BookCall } from "@/components/layout/book-call";
import { CtaBand } from "@/components/layout/cta-band";
import { FunnelEngine } from "@/components/framework/funnel-engine";
import { JsonLd } from "@/components/seo/json-ld";
import { BrowserFrame } from "@/components/work/browser-frame";
import { SectionHeader } from "@/components/ui/section-header";
import { channels, directionCopy, stages } from "@/data/framework";
import { insights } from "@/data/insights";
import { services } from "@/data/services";
import { commitments, howWeWork, site } from "@/data/site";
import { getPublishedWork } from "@/data/work";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: `AuraRush | ${site.tagline}`,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  const work = getPublishedWork();
  const featured = work[0];
  const others = work.slice(1);
  const groups = [
    { id: "inbound" as const, items: channels.filter((channel) => channel.direction === "inbound") },
    { id: "outbound" as const, items: channels.filter((channel) => channel.direction === "outbound") },
  ];

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: site.name,
            url: site.url,
            email: site.email,
            description: site.description,
            areaServed: "GB",
          },
          { "@context": "https://schema.org", "@type": "WebSite", name: site.name, url: site.url, inLanguage: "en-GB" },
        ]}
      />

      {/* Hero */}
      <section className="border-b border-line" aria-labelledby="hero-title">
        <div className="container-wide grid gap-12 py-14 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <h1 id="hero-title" className="h1">AI automation for growth, from first click to repeat customer.</h1>
            <p className="lead mt-6">
              We build the systems that win attention, turn it into enquiries and turn those into revenue. People review everything before it reaches your customers.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <BookCall />
              <Link href="/framework" className="btn btn-secondary">See the framework</Link>
            </div>
            <ul className="mt-12 grid gap-4 border-t border-line pt-6 text-[0.9375rem]">
              <li><span className="font-semibold">Live client builds.</span> <span className="text-muted">Five websites and systems you can open and judge for yourself.</span></li>
              <li><span className="font-semibold">A person reviews the work.</span> <span className="text-muted">AI drafts and sorts. A named person checks it.</span></li>
              <li><span className="font-semibold">Scope and cost in writing.</span> <span className="text-muted">You see both before any work starts.</span></li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <FunnelEngine />
          </div>
        </div>
      </section>

      {/* Where growth leaks */}
      <section className="section" aria-labelledby="leaks-title">
        <div className="container-wide">
          <SectionHeader id="leaks-title" title="Growth has three jobs. Most businesses are weak at one." />
          <ol className="mt-12 grid gap-10 border-t border-line pt-10 lg:grid-cols-3">
            {stages.map((stage) => (
              <li key={stage.id} data-stage={stage.id}>
                <p className="flex items-center gap-2 text-lg font-semibold">
                  <span className="stage-dot" aria-hidden="true" />
                  {stage.name}
                </p>
                <p className="mt-3 font-display text-2xl leading-snug">{stage.question}</p>
                <p className="mt-3 text-muted">{stage.breaks}</p>
                <Link href={`/framework#${stage.id}`} className="btn btn-text mt-2">
                  How we approach it <ArrowRight className="arrow-x size-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Seven channels */}
      <section className="section border-y border-line bg-surface" aria-labelledby="channels-title">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="channels-title" className="h2">Seven channels. One skill behind them.</h2>
            <p className="lead mt-5">
              There are only seven ways to get in front of customers. AI automation is a skill that can build or support every one of them, so we start from what suits your business rather than from a tool.
            </p>
            <Link href="/framework#channels" className="btn btn-text mt-4">
              Read the framework <ArrowRight className="arrow-x size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="lg:col-span-8">
            {groups.map((group) => (
              <div key={group.id} className="mb-10 last:mb-0">
                <h3 className="font-semibold">{directionCopy[group.id].name}</h3>
                <p className="text-muted">{directionCopy[group.id].text}</p>
                <ul className="mt-4 border-t border-line">
                  {group.items.map((channel) => (
                    <li key={channel.id} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[200px_1fr] sm:gap-6">
                      <Link href={`/framework#${channel.id}`} className="link font-medium">{channel.name}</Link>
                      <p className="text-muted">
                        {channel.primarySkill}. <span className="text-ink">{channel.aiRole[0]}.</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services map */}
      <section className="section" aria-labelledby="services-title">
        <div className="container-wide">
          <SectionHeader
            id="services-title"
            title="Seven services, organised by the stage they improve."
            intro="Not sure where you fit? Start with the growth audit. It tells you which of the others, if any, is worth doing first."
          />
          <div className="mt-12 border-t border-line-strong">
            {[...stages.map((stage) => ({ key: stage.id, name: stage.name })), { key: "cross-stage", name: "Across every stage" }].map((group) => (
              <div key={group.key} data-stage={group.key} className="grid gap-4 border-b border-line py-8 lg:grid-cols-12">
                <p className="flex items-start gap-2 font-semibold lg:col-span-3">
                  <span className="stage-dot mt-2" aria-hidden="true" />
                  {group.name}
                </p>
                <ul className="grid gap-1 lg:col-span-9">
                  {services.filter((service) => service.stage === group.key).map((service) => (
                    <li key={service.slug}>
                      <Link href={`/services/${service.slug}`} className="row-link group -mx-3 flex items-start justify-between gap-6 rounded-md px-3 py-3">
                        <span>
                          <span className="font-display text-2xl">
                            {service.name}
                            {service.startHere ? <span className="ml-3 rounded-full bg-ink px-2.5 py-0.5 align-middle font-sans text-xs font-semibold text-paper">Start here</span> : null}
                          </span>
                          <span className="mt-1 block max-w-[62ch] text-muted">{service.summary}</span>
                        </span>
                        <ArrowUpRight className="card-arrow mt-2 size-5 shrink-0 text-muted" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      {featured ? (
        <section className="section border-t border-line bg-surface" aria-labelledby="work-title">
          <div className="container-wide">
            <SectionHeader
              id="work-title"
              title="Selected work"
              intro="Live websites and systems for small businesses. Open any of them and judge the work yourself."
              aside={<Link className="btn btn-text" href="/work">All work <ArrowRight className="arrow-x size-4" aria-hidden="true" /></Link>}
            />
            <article className="mt-12 grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Link href={`/work/${featured.slug}`} aria-label={`${featured.client} case study`}>
                  <BrowserFrame src={featured.frames.desktop} alt={featured.frames.alt} url={featured.liveUrl} />
                </Link>
              </div>
              <div className="lg:col-span-5">
                <p className="label">{featured.sector} · {featured.location}</p>
                <h3 className="h3 mt-3">{featured.headline}</h3>
                <p className="mt-3 text-muted">{featured.summary}</p>
                <Link className="btn btn-text mt-4" href={`/work/${featured.slug}`}>
                  Read the case study <ArrowRight className="arrow-x size-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
            <ul className="mt-14 grid gap-8 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((study) => (
                <li key={study.slug}>
                  <Link href={`/work/${study.slug}`} className="group block">
                    <BrowserFrame src={study.frames.desktop} alt={study.frames.alt} url={study.liveUrl} sizes="(min-width: 1024px) 300px, 100vw" />
                    <p className="mt-4 font-semibold">{study.client}</p>
                    <p className="text-sm text-muted">{study.sector}{study.status === "in-progress" ? " · In progress" : ""}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* How we work */}
      <section className="section" aria-labelledby="how-title">
        <div className="container-wide">
          <SectionHeader
            id="how-title"
            title="How we work"
            intro="Four steps, each with something you can review. Nothing is built before the scope and the cost are agreed in writing."
            aside={<Link className="btn btn-text" href="/how-we-work">The full approach <ArrowRight className="arrow-x size-4" aria-hidden="true" /></Link>}
          />
          <ol className="mt-12 grid gap-8 border-t border-line pt-8 md:grid-cols-2 lg:grid-cols-4">
            {howWork()}
          </ol>
          <div className="mt-16 grid gap-10 border-t border-line pt-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h3 className="h3">How we use AI</h3>
              <Link href="/trust" className="btn btn-text mt-2">Trust and AI use <ArrowRight className="arrow-x size-4" aria-hidden="true" /></Link>
            </div>
            <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
              {commitments.map((item) => (
                <li key={item.title}>
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-muted">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Funnel check */}
      <section className="section-tight border-y border-line bg-surface" aria-labelledby="check-title">
        <div className="container-wide flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 id="check-title" className="h3">Which stage is costing you most?</h2>
            <p className="mt-2 text-muted">Six questions, two minutes, no email address needed. You get a suggested place to start.</p>
          </div>
          <Link href="/funnel-check" className="btn btn-primary">Take the funnel check <ArrowRight className="arrow-x size-4" aria-hidden="true" /></Link>
        </div>
      </section>

      {/* Insights */}
      <section className="section" aria-labelledby="insights-title">
        <div className="container-wide">
          <SectionHeader
            id="insights-title"
            title="Insights"
            aside={<Link className="btn btn-text" href="/insights">All insights <ArrowRight className="arrow-x size-4" aria-hidden="true" /></Link>}
          />
          <ul className="mt-10 grid gap-8 lg:grid-cols-3">
            {insights.slice(0, 3).map((article) => (
              <li key={article.slug} data-stage={article.stage} className="border-t border-line-strong pt-5">
                <Link href={`/insights/${article.slug}`} className="group flex h-full flex-col">
                  <p className="flex items-center gap-2 text-sm text-muted">
                    <span className="stage-dot" aria-hidden="true" />
                    <span className="capitalize">{article.stage}</span> · {article.date}
                  </p>
                  <h3 className="h3 mt-3 group-hover:underline">{article.title}</h3>
                  <p className="mt-3 text-muted">{article.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function howWork() {
  return howWeWork.map((step, index) => (
    <li key={step.title}>
      <p className="font-display text-3xl text-muted" aria-hidden="true">{index + 1}</p>
      <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
      <p className="mt-2 text-muted">{step.text}</p>
    </li>
  ));
}
