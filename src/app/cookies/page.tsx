import { LegalDocument } from "@/components/layout/legal-document";
import { legalPages } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Cookie Policy",
  description: "Draft cookie notice for AuraRush. A preference is stored on your device. Analytics are not loaded.",
  path: "/cookies",
});

export default function CookiesPage() {
  return <LegalDocument title={legalPages.cookies.title} pathLabel="Cookies" sections={legalPages.cookies.sections} />;
}
