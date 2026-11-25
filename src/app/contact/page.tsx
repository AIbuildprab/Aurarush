import { BookCall } from "@/components/layout/book-call";
import { PageHero } from "@/components/layout/page-hero";
import { BookingEmbed } from "@/components/contact/booking-embed";
import { EnquiryForm } from "@/components/contact/enquiry-form";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Tell AuraRush about your business and where enquiries are getting lost. Email admin@aurarush.org.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us where enquiries get lost."
        intro="A short note is enough. We’ll reply from admin@aurarush.org and suggest what a better funnel, dashboard or plan could look like."
        crumbs={[{ label: "Contact" }]}
      />
      <section className="section" aria-labelledby="enquiry-title">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="enquiry-title" className="h2">Write to us.</h2>
            <p className="mt-6"><a className="underline" href={`mailto:${site.email}`}>{site.email}</a></p>
            <p className="mt-2 text-muted">Based in the United Kingdom</p>
            <BookCall className="mt-8" />
            <BookingEmbed />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
