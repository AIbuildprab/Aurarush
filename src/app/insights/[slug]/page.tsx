import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
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
  return pageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${article.slug}`,
  });
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) notFound();
  const related = insights.filter((item) => item.slug !== article.slug).slice(0, 2);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: article.dateIso,
    author: { "@type": "Organization", name: "AuraRush" },
    publisher: { "@type": "Organization", name: "AuraRush", email: site.email },
    description: article.excerpt,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow={article.category}
        title={article.title}
        intro={`${article.date} · ${article.readTime}`}
        crumbs={[{ href: "/insights", label: "Insights" }, { label: article.title }]}
      />
      <article className="section">
        <div className="container-site max-w-[68ch]">
          {article.blocks.map((block, index) => {
            if (block.type === "h2") return <h2 key={index} className="mt-10 font-display text-3xl font-light">{block.text}</h2>;
            if (block.type === "h3") return <h3 key={index} className="mt-8 text-xl">{block.text}</h3>;
            if (block.type === "quote") return <blockquote key={index} className="my-8 border-l border-white/20 pl-6 font-display text-2xl font-light">“{block.text}”</blockquote>;
            return <p key={index} className="mt-4 text-muted">{block.text}</p>;
          })}
        </div>
        <div className="container-site mt-16">
          <h2 className="font-mono text-xs tracking-[0.14em] text-muted uppercase">Related</h2>
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {related.map((item) => (
              <li key={item.slug}>
                <Link className="block border-t border-white/10 py-4" href={`/insights/${item.slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </>
  );
}
