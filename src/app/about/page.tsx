import Link from "next/link";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { commitments, site, team } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description: "AuraRush is a UK-based business that builds AI automation for growth, with a person reviewing every piece of work.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="We build growth systems, and we stay accountable for them."
        intro="AuraRush helps businesses win attention, convert it and turn it into revenue, using AI automation where it earns its place and people where judgement matters."
        crumbs={[{ label: "About" }]}
      />

      <section className="section" aria-labelledby="story-title">
        <div className="container-wide grid gap-10 lg:grid-cols-12">
          <h2 id="story-title" className="h2 lg:col-span-4">Why we exist</h2>
          <div className="prose-body lg:col-span-7">
            <p>Every business plays the same game. It needs attention from the right people, a way to convert that attention, and a way to turn conversions into revenue. How well it does each of those decides how fast it grows.</p>
            <p>AI automation can build or support all three. It is a skill, not a single service. The craft behind each channel is different, and automation lets one small team do the repetitive part of each, consistently, without losing the human judgement that makes the work good.</p>
            <p>We started by building websites and client systems for small businesses, and those live projects are on the <Link className="link" href="/work">work page</Link>. We now apply the same discipline to outreach, content, search and paid media.</p>
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-surface" aria-labelledby="hold-title">
        <div className="container-wide grid gap-10 lg:grid-cols-12">
          <h2 id="hold-title" className="h2 lg:col-span-4">What we hold to</h2>
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

      {team.length > 0 ? (
        <section className="section" aria-labelledby="team-title">
          <div className="container-wide">
            <h2 id="team-title" className="h2">Team</h2>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((person) => (
                <li key={person.name}>
                  <p className="font-display text-2xl">{person.name}</p>
                  <p className="text-muted">{person.role}</p>
                  <p className="mt-3">{person.bio}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="section" aria-labelledby="facts-title">
        <div className="container-wide grid gap-10 lg:grid-cols-12">
          <h2 id="facts-title" className="h2 lg:col-span-4">Company details</h2>
          <dl className="grid gap-4 lg:col-span-7">
            <div className="grid gap-1 border-b border-line pb-3 sm:grid-cols-[180px_1fr]"><dt className="text-muted">Based in</dt><dd>The {site.location}</dd></div>
            <div className="grid gap-1 border-b border-line pb-3 sm:grid-cols-[180px_1fr]"><dt className="text-muted">Contact</dt><dd><a className="link" href={`mailto:${site.email}`}>{site.email}</a></dd></div>
            {site.legal.entity ? <div className="grid gap-1 border-b border-line pb-3 sm:grid-cols-[180px_1fr]"><dt className="text-muted">Legal entity</dt><dd>{site.legal.entity}</dd></div> : null}
            {site.legal.companyNumber ? <div className="grid gap-1 border-b border-line pb-3 sm:grid-cols-[180px_1fr]"><dt className="text-muted">Company number</dt><dd>{site.legal.companyNumber}</dd></div> : null}
          </dl>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
