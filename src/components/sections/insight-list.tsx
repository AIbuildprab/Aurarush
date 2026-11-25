"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import type { Insight } from "@/data/insights";

export function InsightList({ articles }: { articles: Insight[] }) {
  const categories = ["All", ...Array.from(new Set(articles.map((article) => article.category)))];
  const [category, setCategory] = useState("All");
  const visible = category === "All" ? articles : articles.filter((article) => article.category === category);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            className="min-h-11 rounded-full border border-white/15 px-4 text-sm aria-pressed:bg-foreground aria-pressed:text-background"
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <ul className="mt-10 grid gap-8">
        {visible.map((article) => (
          <li key={article.slug} className="border-t border-white/10 pt-6">
            <Link href={`/insights/${article.slug}`} className="insight-card grid gap-3 md:grid-cols-[180px_1fr_auto] md:items-center">
              <span className="font-mono text-xs tracking-[0.12em] text-muted uppercase">{article.category}</span>
              <span>
                <span className="block text-sm text-muted">{article.date}</span>
                <span className="mt-1 block font-display text-2xl font-light">{article.title}</span>
              </span>
              <span className="flex items-center gap-3 text-sm text-muted">
                {article.readTime}
                <ArrowUpRight className="card-arrow size-4" aria-hidden="true" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
