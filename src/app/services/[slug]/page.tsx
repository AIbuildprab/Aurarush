import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd, breadcrumbLd } from "@/components/seo/json-ld";
import { FaqList } from "@/components/ui/faq-list";
import { BrowserFrame } from "@/components/work/browser-frame";
import { getChannel, getStage } from "@/data/framework";
import { getService, services } from "@/data/services";
import { site } from "@/data/site";
import { getWork } from "@/data/work";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({ title: service.name, description: service.summary, path: `/services/${service.slug}` });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const stage = service.stage === "cross-stage" ? null : getStage(service.stage);
  const work = service.workSlugs.map((item) => getWork(item)).filter((item) => item !== undefined);
  const related = service.related.map((item) => getService(item)).filter((item) => item !== undefined);

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            description: service.summary,
            provider: { "@type": "Organization", name: site.name, url: site.url },
            areaServed: "GB",
          },
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: service.name, path: `/services/${service.slug}` }], site.url),
        ]}
      />
      <PageHero
        title={service.name}
        intro={service.summary}
        crumbs={[{ href: "/services", label: "Services" }, { label: service.name }]}
      >
        <p data-stage={service.stage} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.9375rem]">
          <span className="flex items-center gap-2 font-semibold">
            <span className="stage-dot" aria-hidden="true" />
            {stage ? stage.name : "Across every stage"}
          </span>
          {service.channels.length > 0 ? (
            <span className="text-muted">
              Channels:{" "}
              {service.channels.map((id, index) => (
                <span key={id}>
                  {index > 0 ? ", " : ""}
                  <Link className="link" href={`/framework#${id}`}>{getChannel(id)?.name}</Link>
                </span>
              ))}
            </span>
          ) : null}
        </p>
      </PageHero>

      <section className="section" aria-labelledby="problem-title">
        <div className="container-wide grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="problem-title" className="h2">The problem</h2>
            <p className="lead mt-5">{service.problem}</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="h3">Our approach</h2>
            <p className="mt-4 text-muted">{service.approach}</p>
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-surface" aria-labelledby="outputs-title">
        <div className="container-wide">
          <h2 id="outputs-title" className="h2">What you receive</h2>
          <ul className="mt-10 border-t border-line-strong">
            {service.outputs.map((output) => (
              <li key={output.title} className="grid gap-1 border-b border-line py-5 lg:grid-cols-12 lg:gap-6">
                <p className="font-display text-2xl lg:col-span-4">{output.title}</p>
                <p className="text-muted lg:col-span-8">{output.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="roles-title">
        <div className="container-wide">
          <h2 id="roles-title" className="h2">Who does what</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="label">What AI does</h3>
              <ul className="mt-4 grid gap-3 border-t border-line pt-4">
                {service.aiRole.map((line) => <li key={line}>{line}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="label">What people do</h3>
              <ul className="mt-4 grid gap-3 border-t border-line pt-4">
                {service.humanRole.map((line) => <li key={line}>{line}</li>)}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-muted">
            Read more about <Link className="link" href="/trust">how we use AI</Link>.
          </p>
        </div>
      </section>

      <section className="section border-t border-line" aria-labelledby="process-title">
        <div className="container-wide">
          <h2 id="process-title" className="h2">How it happens</h2>
          <ol className="mt-10 grid gap-8 border-t border-line-strong pt-8 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <li key={step.title}>
                <p className="font-display text-3xl text-muted" aria-hidden="true">{index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {work.length > 0 ? (
        <section className="section border-t border-line bg-surface" aria-labelledby="work-title">
          <div className="container-wide">
            <h2 id="work-title" className="h2">Related work</h2>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {work.map((study) => (
                <li key={study.slug}>
                  <Link href={`/work/${study.slug}`} className="block">
                    <BrowserFrame src={study.frames.desktop} alt={study.frames.alt} url={study.liveUrl} sizes="(min-width: 1024px) 380px, 100vw" />
                    <p className="mt-4 font-semibold">{study.client}</p>
                    <p className="text-muted">{study.headline}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="section" aria-labelledby="faq-title">
        <div className="container-wide grid gap-10 lg:grid-cols-12">
          <h2 id="faq-title" className="h2 lg:col-span-4">Questions</h2>
          <div className="lg:col-span-8">
            <FaqList items={service.faqs} />
            <p className="mt-6 text-sm text-muted">Pricing is agreed in writing after a short conversation. We do not publish day rates.</p>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="section-tight border-t border-line" aria-labelledby="related-title">
          <div className="container-wide">
            <h2 id="related-title" className="h3">Often combined with</h2>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link className="btn btn-text" href={`/services/${item.slug}`}>
                    {item.name} <ArrowRight className="arrow-x size-4" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <CtaBand />
    </>
  );
}
