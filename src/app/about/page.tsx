import { PageHero } from "@/components/layout/page-hero";
import { PhilosophyList } from "@/components/sections/philosophy-list";
import { site, team } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description: "AuraRush is a UK IT services and consulting business. We build websites, funnels and dashboards that turn visits into enquiries.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We build value into the way a business gets customers."
        intro="AuraRush is UK-based. We design the path from a visit to an enquiry, then the system that lets you manage what comes in."
        crumbs={[{ label: "About" }]}
      />
      <section className="section" aria-labelledby="story-title">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <h2 id="story-title" className="h2">The story is the system.</h2>
          <div className="grid gap-4 text-muted">
            <p>A website that looks finished but does not ask for the next step is a cost. A form that nobody finishes is a cost. A dashboard nobody opens is a cost.</p>
            <p>AuraRush starts with the enquiry. The site, the form and the dashboard are one path, with IT advice and support behind them.</p>
            <p>We are based in the {site.location}. The address for a conversation is {site.email}.</p>
          </div>
        </div>
      </section>
      <section className="section border-t border-white/10" aria-labelledby="values-title">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="values-title" className="h2">What we hold to.</h2>
          </div>
          <PhilosophyList />
        </div>
      </section>
      <section className="section" aria-labelledby="team-title">
        <div className="container-site">
          <h2 id="team-title" className="h2">Team</h2>
          <p className="lead mt-4">Names and portraits will be added when they are confirmed. These places are held open.</p>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {team.map((person, index) => (
              <li key={`${person.role}-${index}`} className="border-t border-white/10 pt-4">
                <div className="flex aspect-square items-end rounded-lg border border-white/10 bg-surface p-4 text-sm text-muted" aria-hidden="true">Portrait to be added</div>
                <h3 className="mt-4 text-xl">{person.name}</h3>
                <p className="text-muted">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
