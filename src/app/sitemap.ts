import type { MetadataRoute } from "next";
import { insights } from "@/data/insights";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { workItems } from "@/data/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/services",
    "/how-we-work",
    "/work",
    "/about",
    "/insights",
    "/contact",
    "/privacy",
    "/cookies",
    "/terms",
    ...services.map((service) => `/services/${service.slug}`),
    ...workItems.map((item) => `/work/${item.slug}`),
    ...insights.map((article) => `/insights/${article.slug}`),
  ];

  return paths.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
