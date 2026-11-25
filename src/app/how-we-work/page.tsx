import { BookCall } from "@/components/layout/book-call";
import { PageHero } from "@/components/layout/page-hero";
import { FaqList } from "@/components/ui/faq-list";
import { comparison, engagements, howWeWorkFaqs } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "How we work",
  description: "Focused builds, ongoing support, or a consulting engagement. Scope and cost are agreed before work starts.",
  path: "/how-we-work",
});

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="A clear scope, then the work."
        intro="Choose a focused build, a build with ongoing support, or a consulting engagement. You deal with the people doing the work."
        crumbs={[{ label: "How we work" }]}
      />
      <section className="section" aria-labelledby="options-title">
        <div className="container-site">
          <h2 id="options-title" className="h2">Three ways to start</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {engagements.map((option) => (
              <article key={option.id} className={cn("flex flex-col rounded-lg border border-white/15 p-8", option.highlighted && "bg-surface-2 shadow-[0_0_40px_rgba(222,47,75,0.15)]")}>
                <p className="font-mono text-xs tracking-[0.12em] text-muted uppercase">{option.audience}</p>
                <h3 className="h3 mt-4">{option.name}</h3>
                <p className="mt-3 text-muted">{option.summary}</p>
                <ul className="mt-6 grid gap-3">
                  {option.included.map((item) => (
                    <li key={item} className="border-t border-white/10 pt-3 text-sm">{item}</li>
                  ))}
                </ul>
                <p className="mt-6 font-mono text-sm">{option.priceLabel}</p>
                <BookCall className="mt-6" />
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section border-t border-white/10" aria-labelledby="compare-title">
        <div className="container-site">
          <h2 id="compare-title" className="h2">Compare the options</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[720px] text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 pr-4 font-mono text-xs tracking-[0.12em] text-muted uppercase"> </th>
                  {comparison.columns.map((column) => (
                    <th key={column} className="px-4 py-3 font-normal">{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row) => (
                  <tr key={row.label} className="border-b border-white/10">
                    <th className="py-4 pr-4 font-mono text-xs tracking-[0.08em] text-muted uppercase">{row.label}</th>
                    {row.values.map((value, index) => (
                      <td key={`${row.label}-${index}`} className="px-4 py-4 text-sm">{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="how-faq">
        <div className="container-site max-w-3xl">
          <h2 id="how-faq" className="h2">Questions</h2>
          <div className="mt-8">
            <FaqList items={howWeWorkFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}
