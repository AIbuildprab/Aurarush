import type { Metadata } from "next";
import { site } from "@/data/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

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
      images: [
        {
          url: "/brand/og.png",
          width: 1200,
          height: 630,
          alt: "AuraRush",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/brand/og.png"],
    },
  };
}
