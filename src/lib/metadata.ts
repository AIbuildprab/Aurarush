import type { Metadata } from "next";
import { site } from "@/data/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

/** Per-page metadata. The Open Graph image comes from the root `opengraph-image.tsx`. */
export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  const url = path === "/" ? site.url : `${site.url}${path}`;

  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
      languages: { "en-GB": path },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
