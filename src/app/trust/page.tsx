import Link from "next/link";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { commitments, site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Trust and AI use",
  description: "How AuraRush uses AI responsibly: human review, your approval, your data and written scope.",
  path: "/trust",
});

const limits = [
  "We do not promise specific results. Outcomes depend on your offer, market and effort.",
  "We do not send messages or publish content in your name without your approval of the approach and a person reviewing the output.",
  "We do not buy lists of personal data, or send bulk unsolicited email.",
  "We do not present AI-generated material as the work of a named customer or invent testimonials, logos or statistics.",
  "We do not use your data to train models or share it with other clients.",
];

export default function TrustPage() {
  return (
    <>
      <PageHero
        title="Trust and how we use AI."
        intro="Automation is only useful if you can trust what it does in your name. These are the rules we work to."
        crumbs={[{ label: "Trust and AI use" }]}
      />
      <section className="section" aria-labelledby="commit-title">
        <div className="container-wide grid gap-10 lg:grid-cols-12">
          <h2 id="commit-title" className="h2 lg:col-span-4">Our commitments</h2>
          <ul className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
            {commitments.map((item) => (
              <li key={item.title}>
                <p className="font-semibold">{item.title}</p>
                <p className="mt-1 text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section border-y border-line bg-surface" aria-labelledby="limits-title">
        <div className="container-wide grid gap-10 lg:grid-cols-12">
          <h2 id="limits-title" className="h2 lg:col-span-4">What we will not do</h2>
          <ul className="grid gap-4 lg:col-span-7">
            {limits.map((line) => (
              <li key={line} className="flex gap-3"><span className="stage-dot mt-2.5" aria-hidden="true" />{line}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section" aria-labelledby="data-title">
        <div className="container-wide grid gap-10 lg:grid-cols-12">
          <h2 id="data-title" className="h2 lg:col-span-4">Your data</h2>
          <div className="prose-body lg:col-span-7">
            <p>We name the tools and providers we use for each project in the written scope, and where data is stored. Accounts, lists and content stay in your name.</p>
            <p>Enquiry details submitted on this site are used only to reply. See the <Link className="link" href="/privacy">Privacy Policy</Link>, which is a draft until a qualified person has reviewed it. Questions: <a className="link" href={`mailto:${site.email}`}>{site.email}</a>.</p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
