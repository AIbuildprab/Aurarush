import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceBento } from "@/components/home/service-bento";
import { BookCall } from "@/components/layout/book-call";
import { CtaBand } from "@/components/layout/cta-band";
import { FunnelEngine } from "@/components/framework/funnel-engine";
import { DotPattern } from "@/components/magic/dot-pattern";
import { HeroMesh } from "@/components/magic/hero-mesh";
import { HeroSpotlight } from "@/components/magic/hero-spotlight";
import { MagicCard } from "@/components/magic/magic-card";
import { NumberTicker } from "@/components/magic/number-ticker";
import { JsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { WordReveal } from "@/components/ui/word-reveal";
import { BrowserFrame } from "@/components/work/browser-frame";
import { channels, stages } from "@/data/framework";
import { howWeWork, site } from "@/data/site";
import { getPublishedWork } from "@/data/work";
import logoSizes from "@/data/logo-sizes.json";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: `AuraRush | ${site.tagline}`,
  description: site.description,
  path: "/",
});

const stepColours = ["var(--attention)", "var(--conversion)", "var(--monetisation)", "var(--ink)"];

export default function HomePage() {
  const work = getPublishedWork();
  const stats = [
    { value: work.length, label: "Live client builds" },
    { value: channels.length, label: "Attention channels" },
    { value: stages.length, label: "Stages of growth" },
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
        <HeroMesh />
        <DotPattern className="z-[1] opacity-70" />
        <HeroSpotlight />
        <div className="container-wide relative z-10 grid gap-12 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-5">
            <WordReveal as="h1" id="hero-title" text="The growth agency for local businesses." className="h1" />
            <p className="lead mt-6">Websites, search, outreach and client systems, built to work together.</p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <BookCall />
              <Link href="/framework" className="btn btn-secondary">See the framework</Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <dd className="order-first font-display text-5xl leading-none text-ink">
                    <NumberTicker value={stat.value} />
                  </dd>
                  <dt className="mt-2 text-sm text-muted">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-7">
            <FunnelEngine />
          </div>
        </div>
      </section>

      <div className="border-b border-line bg-paper py-5" role="group" aria-label="Clients we have built for">
        <div className="marquee">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <ul key={copy} className="marquee-group" aria-hidden={copy === 1 ? "true" : undefined}>
                {work.map((study) => (
                  <li key={study.slug} className="mr-14 flex items-center">
                    <Image
                      src={`/work/${study.slug}/logo.webp`}
                      alt={copy === 0 ? study.client : ""}
                      width={(logoSizes as Record<string, number[]>)[study.slug][0]}
                      height={(logoSizes as Record<string, number[]>)[study.slug][1]}
                      unoptimized
                      className="h-11 w-auto rounded-md"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      <section className="section wash-stages" aria-labelledby="services-title">
        <div className="container-wide">
          <SectionHeader
            id="services-title"
            title="Services"
            intro="Start with one, or build the whole system. We tell you honestly what to do first."
            aside={<Link className="btn btn-text" href="/funnel-check">Not sure? Take the funnel check <ArrowRight className="arrow-x size-4" aria-hidden="true" /></Link>}
          />
          <Reveal className="mt-10">
            <ServiceBento />
          </Reveal>
        </div>
      </section>

      <section className="section wash-soft relative overflow-hidden border-y border-line" aria-labelledby="work-title">
        <DotPattern className="opacity-60" />
        <div className="container-wide relative">
          <SectionHeader
            id="work-title"
            title="Selected work"
            aside={<Link className="btn btn-text" href="/work">All work <ArrowRight className="arrow-x size-4" aria-hidden="true" /></Link>}
          />
          <Reveal>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {work.map((study) => (
                <li key={study.slug} data-stage={study.stages[0]}>
                  <MagicCard className="h-full shadow-[0_1px_2px_rgba(23,20,31,0.04),0_18px_36px_-22px_rgba(23,20,31,0.32)]" glow="color-mix(in srgb, var(--stage-fill) 14%, transparent)">
                    <Link href={`/work/${study.slug}`} className="block p-4">
                      <BrowserFrame src={study.frames.desktop} alt={study.frames.alt} url={study.liveUrl} sizes="(min-width: 1024px) 400px, 100vw" />
                      <p className="mt-5 px-1 font-display text-2xl">{study.client}</p>
                      <p className="mt-1 px-1 pb-1 text-muted">{study.summary}</p>
                    </Link>
                  </MagicCard>
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
            <ol className="relative mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              <div aria-hidden="true" className="absolute top-5 right-10 left-10 hidden h-px bg-line-strong lg:block" />
              {howWeWork.map((step, index) => (
                <li key={step.title} className="relative">
                  <span
                    className="relative grid size-10 place-items-center rounded-full font-display text-xl text-paper shadow-[0_8px_18px_-8px_var(--c)]"
                    style={{ background: stepColours[index], ["--c" as string]: stepColours[index] }}
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
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
