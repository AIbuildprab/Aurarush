import type { NextConfig } from "next";
import { legacyServiceRedirects } from "./src/data/services";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      ...legacyServiceRedirects.map(({ from, to }) => ({
        source: `/services/${from}`,
        destination: `/services/${to}`,
        permanent: true,
      })),
      { source: "/work/funnel-website", destination: "/work", permanent: true },
      { source: "/work/pt-dashboard", destination: "/work/stpt-coaching", permanent: true },
      { source: "/work/salon-dashboard", destination: "/work/raindrops-beauty-salon", permanent: true },
      { source: "/work/it-roadmap", destination: "/work", permanent: true },
    ];
  },
};

export default nextConfig;
