import { FeaturedSolutions, Hero, HowWeWorkPreview, IndustriesMarquee, LatestInsights, Philosophy, ServicesGrid, ValueTicker } from "@/components/sections/home-sections";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "AuraRush | UK IT services and consulting",
  description: site.description,
  path: "/",
});

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AuraRush",
    email: site.email,
    url: site.url,
    areaServed: "GB",
    address: { "@type": "PostalAddress", addressCountry: "GB" },
    serviceType: services.map((service) => service.name),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <IndustriesMarquee />
      <ValueTicker />
      <ServicesGrid />
      <FeaturedSolutions />
      <Philosophy />
      <HowWeWorkPreview />
      <LatestInsights />
    </>
  );
}
