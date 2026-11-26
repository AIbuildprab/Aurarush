import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd, breadcrumbLd } from "@/components/seo/json-ld";
import { FaqList } from "@/components/ui/faq-list";
import { BrowserFrame } from "@/components/work/browser-frame";
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

async function ServiceContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const work = service.workSlugs.map((item) => getWork(item)).filter((item) => item !== undefined);
  const related = service.related.map((item) => getService(item)).filter((item) => item !== undefined);

  return (
    <>
      <JsonLd
        data={[
          { "@context": "https://schema.org", "@type": "Service", name: service.name, description: service.summary, provider: { "@type": "Organization", name: site.name, url: site.url }, areaServed: ["GB", "CA"] },
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: service.name, path: `/services/${service.slug}` }], site.url),
        ]}
      />
      <div className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute -top-40 -right-40 size-[620px] rounded-full opacity-40 blur-[120px]" style={{ background: service.accent }} />
        <PageHero title={service.name} intro={service.summary} crumbs={[{ href: "/services", label: "Services" }, { label: service.name }]} />
      </div>

      <section className="section" aria-labelledby="outputs-title">
        <div className="container-wide grid gap-10 lg:grid-cols-12">
          <h2 id="outputs-title" className="h2 lg:col-span-4">What you get</h2>
          <ul className="border-t border-line-strong lg:col-span-8">
            {service.outputs.map((output) => (
              <li key={output.title} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[240px_1fr] sm:gap-6">
                <span className="flex items-center gap-3 font-medium">
                  <span className="size-2.5 rounded-full" style={{ background: service.accent, boxShadow: `0 0 12px ${service.accent}` }} aria-hidden="true" />
                  {output.title}
                </span>
                <span className="text-muted">{output.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section border-y border-line bg-surface" aria-labelledby="roles-title">
        <div className="container-wide grid gap-10 lg:grid-cols-12">
          <h2 id="roles-title" className="h2 lg:col-span-4">Who does what</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
            <div>
              <h3 className="label">We do</h3>
              <ul className="mt-3 grid gap-2">{service.weDo.map((line) => <li key={line}>{line}</li>)}</ul>
            </div>
            <div>
              <h3 className="label">You do</h3>
              <ul className="mt-3 grid gap-2">{service.youDo.map((line) => <li key={line}>{line}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="process-title">
        <div className="container-wide grid gap-10 lg:grid-cols-12">
          <h2 id="process-title" className="h2 lg:col-span-4">How it works</h2>
          <ol className="grid gap-4 sm:grid-cols-4 lg:col-span-8">
            {service.process.map((step, index) => (
              <li key={step} className="border-t pt-3" style={{ borderColor: service.accent }}>
                <span className="font-display text-2xl text-muted" aria-hidden="true">{index + 1}</span>
                <p className="mt-1 font-semibold">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {work.length > 0 ? (
        <section className="section border-y border-line bg-surface" aria-labelledby="work-title">
          <div className="container-wide">
            <h2 id="work-title" className="h2">Examples</h2>
            <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {work.map((study) => (
                <li key={study.slug}>
                  <Link href={`/work/${study.slug}`} className="lift block">
                    <BrowserFrame src={study.frames.desktop} alt={study.frames.alt} url={study.liveUrl} sizes="(min-width: 1024px) 380px, 100vw" />
                    <p className="mt-4 font-semibold">{study.client}</p>
                    <p className="text-muted">{study.summary}</p>
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
            {related.length > 0 ? (
              <p className="mt-6 text-muted">
                Often combined with{" "}
                {related.map((item, index) => (
                  <span key={item.slug}>{index > 0 ? " and " : ""}<Link className="link text-ink" href={`/services/${item.slug}`}>{item.name}</Link></span>
                ))}
                .
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={null}>
      <ServiceContent params={params} />
    </Suspense>
  );
}
