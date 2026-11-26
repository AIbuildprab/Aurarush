import { Suspense } from "react";
import { BookCall } from "@/components/layout/book-call";
import { PageHero } from "@/components/layout/page-hero";
import { BookingEmbed } from "@/components/contact/booking-embed";
import { EnquiryForm } from "@/components/contact/enquiry-form";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Tell AuraRush about your business and what you want more of. Email admin@aurarush.org.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Tell us about your business."
        intro="A short note is enough. We reply from admin@aurarush.org, usually within one working day, with what we would do first."
        crumbs={[{ label: "Contact" }]}
      />
      <section className="section" aria-labelledby="enquiry-title">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="enquiry-title" className="h3">Prefer to talk?</h2>
            <p className="mt-4"><a className="link" href={`mailto:${site.email}`}>{site.email}</a></p>
            <p className="mt-1 text-muted">Based in the {site.location}</p>
            <BookCall className="mt-6" variant="secondary" />
            <BookingEmbed />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Suspense fallback={<p className="text-muted">Loading the form…</p>}>
              <EnquiryForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
