import type { MetadataRoute } from "next";
import { insights } from "@/data/insights";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { getPublishedWork } from "@/data/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ["/", "/services", "/work", "/insights", "/how-we-work", "/about", "/trust", "/contact", "/privacy", "/cookies", "/terms"];

  return [
    ...fixed.map((path) => ({
      url: `${site.url}${path === "/" ? "" : path}`,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...services.map((service) => ({ url: `${site.url}/services/${service.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...getPublishedWork().map((study) => ({ url: `${site.url}/work/${study.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...insights.map((article) => ({
      url: `${site.url}/insights/${article.slug}`,
      lastModified: new Date(article.dateIso),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
