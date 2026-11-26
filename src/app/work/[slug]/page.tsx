import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { StageStrip } from "@/components/framework/funnel-engine";
import { JsonLd, breadcrumbLd } from "@/components/seo/json-ld";
import { BrowserFrame, PhoneFrame } from "@/components/work/browser-frame";
import { CaseVideo } from "@/components/work/case-video";
import { getService } from "@/data/services";
import { site } from "@/data/site";
import { contextNote, getPublishedWork, getWork } from "@/data/work";
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

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getWork(slug);
  if (!study) notFound();

  const all = getPublishedWork();
  const next = all[(all.findIndex((item) => item.slug === study.slug) + 1) % all.length];
  const services = study.serviceSlugs.map((item) => getService(item)).filter((item) => item !== undefined);

  return (
    <>
      <JsonLd
        data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Work", path: "/work" }, { name: study.client, path: `/work/${study.slug}` }], site.url)}
      />
      <PageHero title={study.headline} intro={study.summary} crumbs={[{ href: "/work", label: "Work" }, { label: study.client }]}>
        <dl className="mt-10 grid gap-6 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4">
          <div><dt className="label">Client</dt><dd className="mt-1 font-medium">{study.client}</dd></div>
          <div><dt className="label">Sector</dt><dd className="mt-1">{study.sector}</dd></div>
          <div><dt className="label">Location</dt><dd className="mt-1">{study.location}</dd></div>
          <div>
            <dt className="label">Status</dt>
            <dd className="mt-1">{study.status === "live" ? "Live" : "In progress"}</dd>
          </div>
        </dl>
        <p className="mt-6">
          <a className="btn btn-secondary" href={study.liveUrl} target="_blank" rel="noopener noreferrer">
            Visit the live site <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      </PageHero>

      <section className="section" aria-label="Screenshots">
        <div className="container-wide grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <BrowserFrame src={study.frames.desktop} alt={study.frames.alt} url={study.liveUrl} priority sizes="(min-width: 1024px) 900px, 100vw" />
          </div>
          <div className="lg:col-span-3">
            <PhoneFrame src={study.frames.mobile} alt={`${study.client} on a phone`} />
          </div>
        </div>
        <p className="container-wide mt-4 text-sm text-muted">Screenshots captured from the live site. The site may have changed since.</p>
      </section>

      <section className="section border-y border-line bg-surface" aria-label="Problem, solution and result">
        <div className="container-wide grid gap-10 lg:grid-cols-3">
          <div>
            <h2 className="h3">The problem</h2>
            <p className="mt-4 text-muted">{study.problem}</p>
          </div>
          <div>
            <h2 className="h3">What we built</h2>
            <p className="mt-4 text-muted">{study.solution}</p>
          </div>
          <div>
            <h2 className="h3">The result</h2>
            <p className="mt-4 text-muted">{study.result}</p>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Deliverables and context">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="h3">Deliverables</h2>
            <ul className="mt-4 border-t border-line">
              {study.deliverables.map((item) => <li key={item} className="border-b border-line py-3">{item}</li>)}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <h2 className="h3">Where this fits in the framework</h2>
            <div className="mt-4"><StageStrip active={study.stages} /></div>
            {study.context ? (
              <div className="mt-8">
                <h3 className="label">Published by the client</h3>
                <dl className="mt-3 grid gap-2">
                  {study.context.map((item) => (
                    <div key={item.label} className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line py-2">
                      <dt className="text-muted">{item.label}</dt>
                      <dd className="font-medium">{item.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-2 text-sm text-muted">{contextNote}</p>
              </div>
            ) : null}
            <p className="mt-8 text-sm text-muted">
              Services used:{" "}
              {services.map((service, index) => (
                <span key={service.slug}>
                  {index > 0 ? ", " : ""}
                  <Link className="link" href={`/services/${service.slug}`}>{service.name}</Link>
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {study.video ? (
        <section className="section border-t border-line" aria-labelledby="video-title">
          <div className="container-wide">
            <h2 id="video-title" className="h2">See the dashboard</h2>
            <div className="mt-8 max-w-4xl">
              <CaseVideo video={study.video} title={study.client} />
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-tight border-t border-line" aria-label="Next case study">
        <div className="container-wide flex items-center justify-between gap-6">
          <p className="text-muted">Next case study</p>
          <Link className="btn btn-text font-display text-2xl" href={`/work/${next.slug}`}>
            {next.client} <ArrowRight className="arrow-x size-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
