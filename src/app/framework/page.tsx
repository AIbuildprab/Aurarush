import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { FunnelEngine } from "@/components/framework/funnel-engine";
import { JsonLd, breadcrumbLd } from "@/components/seo/json-ld";
import { channels, directionCopy, stages } from "@/data/framework";
import { getService } from "@/data/services";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Framework",
  description: "Attention, conversion, monetisation: the three jobs of a growth system, seven attention channels, and where AI automation fits.",
  path: "/framework",
});

export default function FrameworkPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Framework", path: "/framework" }], site.url)} />
      <PageHero
        title="A growth system has three jobs."
        intro="Win attention, convert it, turn it into revenue. AI automation can build or support each."
        crumbs={[{ label: "Framework" }]}
      >
        <Link href="/funnel-check" className="btn btn-text mt-4">
          Find your weakest stage <ArrowRight className="arrow-x size-4" aria-hidden="true" />
        </Link>
      </PageHero>

      <section className="section" aria-label="Interactive funnel">
        <div className="container-wide">
          <FunnelEngine />
        </div>
      </section>

      <section className="section border-t border-line" aria-labelledby="stages-title">
        <div className="container-wide">
          <h2 id="stages-title" className="h2">The three stages</h2>
          <div className="mt-10 border-t border-line-strong">
            {stages.map((stage) => (
              <div key={stage.id} id={stage.id} data-stage={stage.id} className="grid scroll-mt-24 gap-3 border-b border-line py-6 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <p className="flex items-center gap-2 font-semibold"><span className="stage-dot" aria-hidden="true" />{stage.name}</p>
                  <p className="mt-1 font-display text-2xl">{stage.question}</p>
                </div>
                <ul className="grid gap-1 lg:col-span-7">
                  {stage.steps.length > 0 ? (
                    stage.steps.map((step) => (
                      <li key={step.id} className="flex flex-wrap gap-x-3">
                        <span className="font-medium">{step.name}</span>
                        <span className="text-muted">{step.text}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-muted">Seven channels, below.</li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="channels" className="section scroll-mt-24 border-t border-line bg-surface" aria-labelledby="channels-title">
        <div className="container-wide">
          <h2 id="channels-title" className="h2">Seven attention channels</h2>
          <p className="lead mt-4">Most businesses do best with one or two, run consistently.</p>
          {(["inbound", "outbound"] as const).map((direction) => (
            <div key={direction} className="mt-10">
              <h3 className="font-semibold">{directionCopy[direction].name} <span className="font-normal text-muted">· {directionCopy[direction].text}</span></h3>
              <ul className="mt-3 border-t border-line-strong">
                {channels.filter((channel) => channel.direction === direction).map((channel) => (
                  <li key={channel.id} id={channel.id} className="grid scroll-mt-24 gap-1 border-b border-line py-4 md:grid-cols-12 md:gap-6">
                    <p className="font-medium md:col-span-3">
                      {channel.name}
                      {channel.status === "advisory" ? <span className="ml-2 text-sm font-normal text-muted">Advisory</span> : null}
                    </p>
                    <p className="text-muted md:col-span-5">{channel.primarySkill}</p>
                    <p className="text-sm md:col-span-4">
                      {channel.serviceSlugs.map((slug, index) => {
                        const service = getService(slug);
                        return service ? (
                          <span key={slug}>{index > 0 ? ", " : ""}<Link className="link" href={`/services/${slug}`}>{service.name}</Link></span>
                        ) : null;
                      })}
                    </p>
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
