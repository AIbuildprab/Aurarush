import { LegalDocument } from "@/components/layout/legal-document";
import { legalPages } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Draft privacy notice for AuraRush enquiry details and cookie choices. To be reviewed before launch.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalDocument title={legalPages.privacy.title} pathLabel="Privacy" sections={legalPages.privacy.sections} />;
}
