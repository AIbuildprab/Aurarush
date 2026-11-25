import { PageHero } from "@/components/layout/page-hero";

export function LegalDocument({
  title,
  pathLabel,
  sections,
}: {
  title: string;
  pathLabel: string;
  sections: readonly { heading: string; body: string }[];
}) {
  return (
    <>
      <PageHero
        eyebrow="Draft"
        title={title}
        intro="Draft: to be reviewed by a qualified professional before launch."
        crumbs={[{ label: pathLabel }]}
      />
      <article className="section">
        <div className="container-site max-w-[68ch]">
          {sections.map((section) => (
            <section key={section.heading} className="mt-10" aria-labelledby={section.heading}>
              <h2 id={section.heading} className="font-display text-3xl font-light">{section.heading}</h2>
              <p className="mt-4 text-muted">{section.body}</p>
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
