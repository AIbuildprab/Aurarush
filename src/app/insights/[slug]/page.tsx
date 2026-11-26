import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd, breadcrumbLd } from "@/components/seo/json-ld";
import { getInsight, insights } from "@/data/insights";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return {};
  return pageMetadata({ title: article.title, description: article.excerpt, path: `/insights/${article.slug}` });
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) notFound();
  const related = insights.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            datePublished: article.dateIso,
            dateModified: article.dateIso,
            inLanguage: "en-GB",
            author: { "@type": "Organization", name: site.name },
            publisher: { "@type": "Organization", name: site.name },
            description: article.excerpt,
            mainEntityOfPage: `${site.url}/insights/${article.slug}`,
          },
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }, { name: article.title, path: `/insights/${article.slug}` }], site.url),
        ]}
      />
      <PageHero
        title={article.title}
        intro={`${article.date} · ${article.readTime}`}
        crumbs={[{ href: "/insights", label: "Insights" }, { label: article.title }]}
      />
      <article className="section">
        <div className="container-wide prose-body">
          {article.blocks.map((block, index) => {
            if (block.type === "h2") return <h2 key={index}>{block.text}</h2>;
            if (block.type === "h3") return <h3 key={index}>{block.text}</h3>;
            if (block.type === "quote") return <blockquote key={index}>{block.text}</blockquote>;
            return <p key={index}>{block.text}</p>;
          })}
        </div>
        <div className="container-wide mt-16">
          <h2 className="label">Keep reading</h2>
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {related.map((item) => (
              <li key={item.slug}>
                <Link className="link font-display text-xl" href={`/insights/${item.slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
      <CtaBand />
    </>
  );
}
