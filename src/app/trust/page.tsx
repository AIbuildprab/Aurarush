import Link from "next/link";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { commitments } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Our promises",
  description: "What you can hold AuraRush to: a named owner, your approval, your accounts and a written scope.",
  path: "/trust",
});

const limits = [
  "No promised results.",
  "No messages or posts in your name without your approval.",
  "No bought lists or bulk unsolicited email.",
  "No invented testimonials, logos or statistics.",
  "No sharing your data with other clients.",
];

export default function TrustPage() {
  return (
    <>
      <PageHero title="Our promises." intro="What you can hold us to." crumbs={[{ label: "Our promises" }]} />
      <section className="section" aria-labelledby="commit-title">
        <div className="container-wide grid gap-10 lg:grid-cols-12">
          <h2 id="commit-title" className="h2 lg:col-span-4">We commit to</h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
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
          <h2 id="limits-title" className="h2 lg:col-span-4">We will not</h2>
          <ul className="grid gap-3 lg:col-span-7">
            {limits.map((line) => (
              <li key={line} className="flex gap-3"><span className="mt-2.5 size-2 shrink-0 rounded-full bg-[#f5c518]" aria-hidden="true" />{line}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section-tight" aria-label="Your data">
        <div className="container-wide">
          <p className="measure text-muted">
            Tools, providers and where data is stored are named in each written scope. Enquiry details are used only to reply: see the{" "}
            <Link className="link text-ink" href="/privacy">Privacy Policy</Link>, a draft until reviewed.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
