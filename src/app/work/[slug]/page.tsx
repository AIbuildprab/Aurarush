import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd, breadcrumbLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/ui/reveal";
import { SiteTour } from "@/components/work/site-tour";
import { CaseVideo } from "@/components/work/case-video";
import { getStage } from "@/data/framework";
import { getService } from "@/data/services";
import { site } from "@/data/site";
import { contextNote, getPublishedWork, getTour, getWork } from "@/data/work";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return getPublishedWork().map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getWork(slug);
  if (!study) return {};
  return pageMetadata({ title: `${study.client}: ${study.headline}`, description: study.summary, path: `/work/${study.slug}` });
}

async function WorkDetailContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getWork(slug);
  if (!study) notFound();

  const all = getPublishedWork();
  const next = all[(all.findIndex((item) => item.slug === study.slug) + 1) % all.length];
  const tour = getTour(study.slug);
  const host = study.liveUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  const services = study.serviceSlugs.map((item) => getService(item)).filter((item) => item !== undefined);

  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Work", path: "/work" }, { name: study.client, path: `/work/${study.slug}` }], site.url)} />
      <PageHero title={study.headline} intro={study.summary} crumbs={[{ href: "/work", label: "Work" }, { label: study.client }]}>
        <p className="mt-6 text-muted">
          {study.client} · {study.sector} · {study.location}
          {study.status === "in-progress" ? " · In progress" : ""}
        </p>
        <p className="mt-4">
          <a className="btn btn-secondary" href={study.liveUrl} target="_blank" rel="noopener noreferrer">
            Visit the live site <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      </PageHero>

      {tour ? (
        <section className="section" aria-label="Walkthrough of the live site">
          <div className="container-wide">
            <SiteTour client={study.client} host={host} desktop={tour.desktop} phone={tour.phone} />
          </div>
        </section>
      ) : null}

      <section className="section border-y border-line bg-surface" aria-label="Problem, solution and result">
        <Reveal className="container-wide grid gap-10 lg:grid-cols-3">
          <div>
            <h2 className="h3">Problem</h2>
            <p className="mt-3 text-muted">{study.problem}</p>
          </div>
          <div>
            <h2 className="h3">What we built</h2>
            <p className="mt-3 text-muted">{study.solution}</p>
          </div>
          <div>
            <h2 className="h3">Result</h2>
            <p className="mt-3 text-muted">{study.result}</p>
          </div>
        </Reveal>
      </section>

      <section className="section" aria-label="Deliverables and context">
        <div className="container-wide grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="h3">Deliverables</h2>
            <ul className="mt-4 border-t border-line">
              {study.deliverables.map((item) => <li key={item} className="border-b border-line py-3">{item}</li>)}
            </ul>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="h3">Stages supported</h2>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {study.stages.map((id) => (
                <li key={id} data-stage={id} className="flex items-center gap-2"><span className="stage-dot" aria-hidden="true" />{getStage(id)?.name}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-muted">
              {services.map((service, index) => (
                <span key={service.slug}>{index > 0 ? ", " : ""}<Link className="link" href={`/services/${service.slug}`}>{service.name}</Link></span>
              ))}
            </p>
            {study.context ? (
              <div className="mt-8">
                {study.context.map((item) => (
                  <p key={item.label} className="flex flex-wrap items-baseline justify-between gap-2 border-y border-line py-2">
                    <span className="text-muted">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                  </p>
                ))}
                <p className="mt-2 text-sm text-muted">{contextNote}</p>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {study.video ? (
        <section className="section border-t border-line" aria-labelledby="video-title">
          <div className="container-wide">
            <h2 id="video-title" className="h2">Dashboard walkthrough</h2>
            <div className="mt-8 max-w-4xl">
              <CaseVideo video={study.video} title={study.client} />
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-tight border-t border-line" aria-label="Next case study">
        <div className="container-wide flex items-center justify-between gap-6">
          <p className="text-muted">Next</p>
          <Link className="btn btn-text font-display text-2xl" href={`/work/${next.slug}`}>
            {next.client} <ArrowRight className="arrow-x size-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

export default function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={null}>
      <WorkDetailContent params={params} />
    </Suspense>
  );
}
