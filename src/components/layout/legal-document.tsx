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
        title={title}
        intro="Draft: to be reviewed by a qualified professional before launch."
        crumbs={[{ label: pathLabel }]}
      />
      <article className="section">
        <div className="container-wide prose-body">
          {sections.map((section) => (
            <section key={section.heading} aria-labelledby={`legal-${section.heading}`}>
              <h2 id={`legal-${section.heading}`}>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
