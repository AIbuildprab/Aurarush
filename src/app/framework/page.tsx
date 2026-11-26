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
  title: "The AuraRush Growth Framework",
  description: "Attention, conversion and monetisation: the three jobs of a growth system, the seven channels that bring attention, and where AI automation fits.",
  path: "/framework",
});

export default function FrameworkPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Framework", path: "/framework" }], site.url)} />
      <PageHero
        title="A growth system has three jobs."
        intro="Win attention, convert it, and turn it into revenue. Every business does these three things well or badly. The framework shows where AI automation helps with each."
        crumbs={[{ label: "Framework" }]}
      />

      <section className="section" aria-label="Interactive funnel">
        <div className="container-wide">
          <FunnelEngine />
        </div>
      </section>

      {stages.map((stage) => (
        <section key={stage.id} id={stage.id} data-stage={stage.id} className="section scroll-mt-24 border-t border-line" aria-labelledby={`${stage.id}-title`}>
          <div className="container-wide grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="flex items-center gap-2 font-semibold">
                <span className="stage-dot" aria-hidden="true" />
                {stage.name}
              </p>
              <h2 id={`${stage.id}-title`} className="h2 mt-3">{stage.question}</h2>
              <p className="lead mt-5">{stage.summary}</p>
            </div>
            <div className="grid gap-8 lg:col-span-7 lg:grid-cols-2">
              <div>
                <h3 className="label">What good looks like</h3>
                <p className="mt-3">{stage.good}</p>
              </div>
              <div>
                <h3 className="label">What usually breaks</h3>
                <p className="mt-3 text-muted">{stage.breaks}</p>
              </div>
              <div className="lg:col-span-2">
                <h3 className="label">What we automate</h3>
                <ul className="mt-3 grid gap-3 border-t border-line">
                  {stage.steps.map((step) => (
                    <li key={step.id} className="grid gap-1 border-b border-line py-3 sm:grid-cols-[180px_1fr] sm:gap-6">
                      <span className="font-medium">{step.name}</span>
                      <span className="text-muted">{step.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section id="channels" className="section scroll-mt-24 border-t border-line bg-surface" aria-labelledby="channels-title">
        <div className="container-wide">
          <h2 id="channels-title" className="h2 max-w-3xl">The seven attention channels</h2>
          <p className="lead mt-5">
            Other people repackage these under different names, but every way of getting in front of customers is one of the seven. A business usually does best with one or two, run consistently.
          </p>
          {(["inbound", "outbound"] as const).map((direction) => (
            <div key={direction} className="mt-14">
              <h3 className="h3">{directionCopy[direction].name}</h3>
              <p className="mt-1 text-muted">{directionCopy[direction].text}</p>
              <ul className="mt-6 border-t border-line-strong">
                {channels.filter((channel) => channel.direction === direction).map((channel) => (
                  <li key={channel.id} id={channel.id} data-stage="attention" className="scroll-mt-24 grid gap-6 border-b border-line py-8 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                      <h4 className="font-display text-2xl">{channel.name}</h4>
                      <p className="mt-2 text-muted">{channel.summary}</p>
                      {channel.status === "advisory" ? <p className="mt-3 text-sm text-muted">We advise and support this channel. It is not one of our core builds.</p> : null}
                    </div>
                    <div className="lg:col-span-3">
                      <p className="label">Primary skill</p>
                      <p className="mt-2">{channel.primarySkill}</p>
                    </div>
                    <div className="lg:col-span-5">
                      <p className="label">What AI automation adds</p>
                      <ul className="mt-2 grid gap-1.5">
                        {channel.aiRole.map((line) => (
                          <li key={line} className="flex gap-3">
                            <span className="stage-dot mt-2.5" aria-hidden="true" />
                            {line}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm">
                        {channel.serviceSlugs.map((slug, index) => {
                          const service = getService(slug);
                          return service ? (
                            <span key={slug}>
                              {index > 0 ? ", " : "Service: "}
                              <Link className="link" href={`/services/${slug}`}>{service.name}</Link>
                            </span>
                          ) : null;
                        })}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="mt-8 max-w-[68ch] text-muted">
            Paid advertising is listed as inbound, but it sits in a grey area: you are paying to reach people who did not ask to hear from you.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="skill-title">
        <div className="container-wide grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="skill-title" className="h2">AI automation is a skill, not a service.</h2>
            <p className="lead mt-5">
              Each channel has its own craft. Someone who is excellent at search cannot edit video, and a video editor does not run outbound. AI automation sits across them: it can build or support the repetitive part of every channel.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="border-t border-line-strong">
              {channels.map((channel) => (
                <li key={channel.id} className="grid gap-1 border-b border-line py-3 sm:grid-cols-[200px_1fr] sm:gap-6">
                  <span className="font-medium">{channel.name}</span>
                  <span className="text-muted">{channel.primarySkill}, with AI automation around it</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-tight border-y border-line bg-surface" aria-labelledby="start-title">
        <div className="container-wide flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 id="start-title" className="h3">Where to start</h2>
            <p className="mt-2 text-muted">Fix the weakest stage first. The funnel check takes two minutes and suggests where.</p>
          </div>
          <Link href="/funnel-check" className="btn btn-primary">Take the funnel check <ArrowRight className="arrow-x size-4" aria-hidden="true" /></Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
