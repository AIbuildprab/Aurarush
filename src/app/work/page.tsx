import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { BrowserFrame } from "@/components/work/browser-frame";
import { getStage } from "@/data/framework";
import { getPublishedWork } from "@/data/work";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Work",
  description: "Live websites and client systems built by AuraRush for small businesses: coaching, photography, landscaping and beauty.",
  path: "/work",
});

export default function WorkPage() {
  const work = getPublishedWork();
  return (
    <>
      <PageHero
        title="Work you can open and judge."
        intro="Every project here is live, or clearly marked as in progress. Results are described in words, because we only show numbers the client has published themselves."
        crumbs={[{ label: "Work" }]}
      />
      <section className="section" aria-label="Case studies">
        <div className="container-wide grid gap-16">
          {work.map((study, index) => (
            <article key={study.slug} className="grid items-center gap-8 lg:grid-cols-12">
              <div className={index % 2 === 1 ? "lg:col-span-7 lg:col-start-6 lg:row-start-1" : "lg:col-span-7"}>
                <Link href={`/work/${study.slug}`} aria-label={`${study.client} case study`}>
                  <BrowserFrame src={study.frames.desktop} alt={study.frames.alt} url={study.liveUrl} priority={index === 0} />
                </Link>
              </div>
              <div className={index % 2 === 1 ? "lg:col-span-5 lg:col-start-1 lg:row-start-1" : "lg:col-span-5"}>
                <p className="label">{study.sector} · {study.location}</p>
                <h2 className="h3 mt-3">{study.client}</h2>
                <p className="mt-2 font-display text-xl">{study.headline}</p>
                <p className="mt-3 text-muted">{study.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                  {study.stages.map((id) => (
                    <li key={id} data-stage={id} className="flex items-center gap-2">
                      <span className="stage-dot" aria-hidden="true" />
                      {getStage(id)?.name}
                    </li>
                  ))}
                  {study.status === "in-progress" ? <li className="font-semibold">In progress</li> : null}
                </ul>
                <Link className="btn btn-text mt-4" href={`/work/${study.slug}`}>
                  Read the case study <ArrowUpRight className="card-arrow size-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand title="Want a result like these?" text="Tell us about the business and where enquiries get lost. We will say plainly whether we can help." />
    </>
  );
}
