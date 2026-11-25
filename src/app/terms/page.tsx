import { LegalDocument } from "@/components/layout/legal-document";
import { legalPages } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Terms",
  description: "Draft website terms for AuraRush. To be reviewed by a qualified professional before launch.",
  path: "/terms",
});

export default function TermsPage() {
  return <LegalDocument title={legalPages.terms.title} pathLabel="Terms" sections={legalPages.terms.sections} />;
}