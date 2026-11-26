import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PhoneShowcase } from "@/components/home/phone-showcase";
import { ServiceBento } from "@/components/home/service-bento";
import { BookCall } from "@/components/layout/book-call";
import { CtaBand } from "@/components/layout/cta-band";
import { DotPattern } from "@/components/magic/dot-pattern";
import { HeroMesh } from "@/components/magic/hero-mesh";
import { HeroSpotlight } from "@/components/magic/hero-spotlight";
import { MagicCard } from "@/components/magic/magic-card";
import { JsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { BrowserFrame } from "@/components/work/browser-frame";
import { howWeWork, site } from "@/data/site";
import logoSizes from "@/data/logo-sizes.json";
import { getPublishedWork } from "@/data/work";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: `AuraRush | ${site.tagline}`,
  description: site.description,
  path: "/",
});

const words = [
  { text: "Websites", colour: "#3a82c0" },
  { text: "Google", colour: "#5baa47" },
  { text: "Ads", colour: "#f08a2a" },
  { text: "Outreach", colour: "#de2f4b" },
  { text: "Dashboards", colour: "#a23b8c" },
];

const threeSteps = [
  { title: "Get found", text: "People searching for what you do see your business first.", colour: "#3a82c0" },
  { title: "Get chosen", text: "Your website is clear, fast and easy to trust, so they pick you.", colour: "#f08a2a" },
  { title: "Get paid", text: "Every enquiry gets a reply, and nothing is forgotten.", colour: "#de2f4b" },
];

const stepColours = ["#3a82c0", "#a23b8c", "#f08a2a", "#5baa47"];

export default function HomePage() {
  const work = getPublishedWork();
  const sizes = logoSizes as Record<string, number[]>;

  return (
    <>
      <JsonLd
        data={[
          { "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url, email: site.email, description: site.description, areaServed: ["GB", "CA"], address: { "@type": "PostalAddress", addressLocality: site.address.locality, addressRegion: site.address.region, addressCountry: site.address.country } },
          { "@context": "https://schema.org", "@type": "WebSite", name: site.name, url: site.url, inLanguage: "en-GB" },
        ]}
      />

      {/* Hero */}
      <section className="relative flex overflow-hidden lg:min-h-[calc(100svh-72px)] lg:items-center" aria-labelledby="hero-title">
        <HeroMesh />
        <DotPattern className="z-[1] opacity-40" />
        <HeroSpotlight />
        <div className="container-wide relative z-10 grid w-full items-center gap-10 pt-14 pb-20 lg:grid-cols-12 lg:py-10">
          <div className="lg:col-span-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[0.9375rem]">
              <span className="size-2 rounded-full bg-[#5baa47] shadow-[0_0_10px_#5baa47]" aria-hidden="true" />
              Leicester agency · Working across the UK and Canada
            </p>
            <h1 id="hero-title" className="h1 mt-6 lg:mt-[min(2rem,3svh)]">
              Get found.
              <br />
              <span className="serif-accent text-[#f5a53c]">Get chosen.</span>
              <br />
              Get paid.
            </h1>
            <p className="lead mt-6 max-w-[52ch] !text-[#e1dbee] lg:mt-[min(2rem,3svh)]">
              We build your website and run your marketing, then show you what it earns. In plain English.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center lg:mt-[min(2.5rem,4svh)]">
              <BookCall />
              <Link href="/work" className="btn btn-secondary">See our work</Link>
            </div>
          </div>
          <div className="lg:col-span-4">
            <PhoneShowcase />
          </div>
        </div>
      </section>

      {/* Giant words */}
      <div className="overflow-hidden border-y border-line bg-paper py-6" aria-hidden="true">
        <div className="words-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {words.map((word) => (
                <span key={`${copy}-${word.text}`} className="mr-10 flex items-center gap-10 font-display text-[clamp(3rem,7vw,6rem)] leading-none font-extrabold tracking-tight uppercase" style={{ color: word.colour }}>
                  {word.text}
                  <span className="size-3 rounded-full bg-white/70" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Three simple steps */}
      <section className="section" aria-labelledby="simple-title">
        <div className="container-wide">
          <SectionHeader id="simple-title" title="What we do, in three lines." />
          <Reveal>
            <ol className="mt-12 grid gap-5 md:grid-cols-3">
              {threeSteps.map((step, index) => (
                <li key={step.title}>
                  <MagicCard
                    className="h-full"
                    from={step.colour}
                    glow={`color-mix(in srgb, ${step.colour} 22%, transparent)`}
                    fill={`radial-gradient(120% 100% at 100% 100%, color-mix(in srgb, ${step.colour} 24%, transparent), transparent 62%), var(--surface)`}
                  >
                    <div className="flex h-full min-h-[240px] flex-col justify-between p-7">
                      <span className="font-display text-7xl leading-none font-extrabold" style={{ color: step.colour }} aria-hidden="true">{index + 1}</span>
                      <div>
                        <h3 className="h3">{step.title}</h3>
                        <p className="mt-3 text-muted">{step.text}</p>
                      </div>
                    </div>
                  </MagicCard>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Logo wall */}
      <section className="border-y border-line bg-surface py-10" aria-label="Businesses we have built for">
        <div className="container-wide">
          <p className="label text-center">Websites we have built</p>
          <div className="marquee mt-6">
            <div className="marquee-track" style={{ animationDuration: "32s" }}>
              {[0, 1].map((copy) => (
                <ul key={copy} className="marquee-group" aria-hidden={copy === 1 ? "true" : undefined}>
                  {work.map((study) => (
                    <li key={study.slug} className="mr-16 flex items-center">
                      <Image
                        src={`/work/${study.slug}/logo.webp`}
                        alt={copy === 0 ? study.client : ""}
                        width={sizes[study.slug][0]}
                        height={sizes[study.slug][1]}
                        unoptimized
                        className="h-12 w-auto opacity-80 brightness-0 invert"
                      />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section wash-stages" aria-labelledby="services-title">
        <div className="container-wide">
          <SectionHeader
            id="services-title"
            title="Services"
            intro="Start with one, or use them all. We tell you honestly what to do first."
            aside={<Link className="btn btn-text" href="/services">All services <ArrowRight className="arrow-x size-4" aria-hidden="true" /></Link>}
          />
          <Reveal className="mt-10">
            <ServiceBento />
          </Reveal>
        </div>
      </section>

      {/* Work */}
      <section className="section wash-soft relative overflow-hidden border-y border-line" aria-labelledby="work-title">
        <DotPattern className="opacity-40" />
        <div className="container-wide relative">
          <SectionHeader
            id="work-title"
            title="Our work"
            aside={<Link className="btn btn-text" href="/work">All work <ArrowRight className="arrow-x size-4" aria-hidden="true" /></Link>}
          />
          <Reveal>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {work.map((study) => (
                <li key={study.slug}>
                  <MagicCard className="h-full" glow="rgba(185, 163, 227, 0.16)">
                    <Link href={`/work/${study.slug}`} className="block p-4">
                      <BrowserFrame src={study.frames.desktop} alt={study.frames.alt} url={study.liveUrl} sizes="(min-width: 1024px) 400px, 100vw" />
                      <p className="mt-5 px-1 font-display text-2xl font-bold">{study.client}</p>
                      <p className="mt-1 px-1 pb-1 text-muted">{study.summary}</p>
                    </Link>
                  </MagicCard>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* How we work */}
      <section className="section" aria-labelledby="how-title">
        <div className="container-wide">
          <SectionHeader
            id="how-title"
            title="How it works"
            aside={<Link className="btn btn-text" href="/how-we-work">Details <ArrowRight className="arrow-x size-4" aria-hidden="true" /></Link>}
          />
          <Reveal>
            <ol className="relative mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              <div aria-hidden="true" className="absolute top-5 right-10 left-10 hidden h-px bg-line-strong lg:block" />
              {howWeWork.map((step, index) => (
                <li key={step.title} className="relative">
                  <span
                    className="relative grid size-10 place-items-center rounded-full font-display text-xl font-bold text-[#0b0910]"
                    style={{ background: stepColours[index], boxShadow: `0 0 24px ${stepColours[index]}88` }}
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
