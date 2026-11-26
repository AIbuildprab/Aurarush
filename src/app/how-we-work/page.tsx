import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { FaqList } from "@/components/ui/faq-list";
import { commitments, engagements, howWeWork, howWeWorkFaqs } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "How we work",
  description: "A clear scope, a pilot with human review, and a cost agreed in writing before work starts. How AuraRush engagements run.",
  path: "/how-we-work",
});

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        title="A clear scope, then the work."
        intro="Every engagement starts with a written scope and ends with something you can run without us. Here is how that happens."
        crumbs={[{ label: "How we work" }]}
      />

      <section className="section" aria-labelledby="steps-title">
        <div className="container-wide">
          <h2 id="steps-title" className="h2">Four steps</h2>
          <ol className="mt-10 grid gap-8 border-t border-line-strong pt-8 md:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((step, index) => (
              <li key={step.title}>
                <p className="font-display text-3xl text-muted" aria-hidden="true">{index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section border-y border-line bg-surface" aria-labelledby="engagements-title">
        <div className="container-wide">
          <h2 id="engagements-title" className="h2">Three ways to work together</h2>
          <ul className="mt-10 border-t border-line-strong">
            {engagements.map((engagement) => (
              <li key={engagement.id} className="grid gap-6 border-b border-line py-8 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="label">{engagement.audience}</p>
                  <h3 className="h3 mt-2">{engagement.name}</h3>
                  <p className="mt-3 text-muted">{engagement.summary}</p>
                </div>
                <ul className="grid gap-2 lg:col-span-6 lg:col-start-7">
                  {engagement.included.map((item) => (
                    <li key={item} className="flex gap-3"><span className="stage-dot mt-2.5" aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-muted">All three are quoted after a short conversation. We do not publish day rates.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="commit-title">
        <div className="container-wide grid gap-10 lg:grid-cols-12">
          <h2 id="commit-title" className="h2 lg:col-span-4">What we commit to</h2>
          <ul className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
            {commitments.map((item) => (
              <li key={item.title}>
                <p className="font-semibold">{item.title}</p>
                <p className="mt-1 text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section border-t border-line" aria-labelledby="faq-title">
        <div className="container-wide grid gap-10 lg:grid-cols-12">
          <h2 id="faq-title" className="h2 lg:col-span-4">Questions</h2>
          <div className="lg:col-span-8"><FaqList items={howWeWorkFaqs} /></div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
