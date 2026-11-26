import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { FaqList } from "@/components/ui/faq-list";
import { Reveal } from "@/components/ui/reveal";
import { engagements, howWeWork, howWeWorkFaqs } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "How we work",
  description: "A written scope, a pilot with every output reviewed, and a cost agreed before work starts.",
  path: "/how-we-work",
});

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero title="A clear scope, then the work." intro="Written scope first. Something you can run without us at the end." crumbs={[{ label: "How we work" }]} />

      <section className="section" aria-labelledby="steps-title">
        <div className="container-wide">
          <h2 id="steps-title" className="h2">Four steps</h2>
          <Reveal>
            <ol className="mt-10 grid gap-8 border-t border-line-strong pt-8 md:grid-cols-2 lg:grid-cols-4">
              {howWeWork.map((step, index) => (
                <li key={step.title}>
                  <p className="font-display text-3xl text-muted" aria-hidden="true">{index + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="section border-y border-line bg-surface" aria-labelledby="engagements-title">
        <div className="container-wide grid gap-10 lg:grid-cols-12">
          <h2 id="engagements-title" className="h2 lg:col-span-4">Three ways to start</h2>
          <ul className="border-t border-line-strong lg:col-span-8">
            {engagements.map((engagement) => (
              <li key={engagement.name} className="grid gap-1 border-b border-line py-4 sm:grid-cols-[240px_1fr] sm:gap-6">
                <span className="font-display text-xl">{engagement.name}</span>
                <span className="text-muted">{engagement.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title">
        <div className="container-wide grid gap-10 lg:grid-cols-12">
          <h2 id="faq-title" className="h2 lg:col-span-4">Questions</h2>
          <div className="lg:col-span-8"><FaqList items={howWeWorkFaqs} /></div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
