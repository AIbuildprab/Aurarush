import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { SampleMock } from "@/components/mock/sample-mock";
import { FaqList } from "@/components/ui/faq-list";
import { getService, serviceHues, services } from "@/data/services";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.name,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const hue = serviceHues[service.hue];

  return (
    <>
      <PageHero
        eyebrow={`${service.number} / ${service.name}`}
        title={service.name}
        highlight={service.name.split(" ").at(-1)}
        intro={service.intro}
        crumbs={[{ href: "/services", label: "Services" }, { label: service.name }]}
      />
      <section className="section" aria-labelledby="included-title">
        <div className="container-site">
          <p className="font-mono text-sm" style={{ color: hue.text }}>Outcome — {service.outcome}</p>
          {service.price != null ? <p className="mt-3 text-lg">From £{service.price.toLocaleString("en-GB")}</p> : null}
          <h2 id="included-title" className="h2 mt-8">What’s included</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {service.included.map((item) => (
              <li key={item} className="border-t border-white/10 py-4">{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section border-t border-white/10" aria-labelledby="process-title">
        <div className="container-site">
          <h2 id="process-title" className="h2">How it happens</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {service.process.map((step, index) => (
              <li key={step.title} className="border-t border-white/10 pt-4">
                <p className="font-mono text-sm" style={{ color: hue.text }}>0{index + 1}</p>
                <h3 className="mt-3 text-xl">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-16">
            <SampleMock type={service.mock} hue={hue.color} />
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="faq-title">
        <div className="container-site max-w-3xl">
          <h2 id="faq-title" className="h2">Questions</h2>
          <div className="mt-8">
            <FaqList items={service.faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
