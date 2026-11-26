import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { site, team } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description: "AuraRush is a websites and marketing agency in Leicester. We work across the UK and with clients in Canada.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="A small agency with a named person on every job."
        intro="We are based in Leicester, in the East Midlands. We build websites and run marketing for local businesses across the UK and in Canada, and we explain everything in plain English."
        crumbs={[{ label: "About" }]}
      />

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
          <h2 id="facts-title" className="h2 lg:col-span-4">Company</h2>
          <dl className="grid gap-4 lg:col-span-7">
            <div className="grid gap-1 border-b border-line pb-3 sm:grid-cols-[180px_1fr]"><dt className="text-muted">Based in</dt><dd>{site.location}</dd></div>
            <div className="grid gap-1 border-b border-line pb-3 sm:grid-cols-[180px_1fr]"><dt className="text-muted">Where we work</dt><dd>Across the UK. Clients in Canada too: Ninh Studio, Green Lotus Landscape and Raindrops Beauty Salon.</dd></div>
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
