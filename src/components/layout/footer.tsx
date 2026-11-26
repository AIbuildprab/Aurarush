import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { services } from "@/data/services";
import { navigation, site } from "@/data/site";

function legalLine() {
  const { entity, companyNumber, address, vatNumber, icoNumber } = site.legal;
  const parts = [
    entity ? `AuraRush is a trading name of ${entity}` : "",
    companyNumber ? `registered in England and Wales, company number ${companyNumber}` : "",
    address ? `Registered office: ${address}` : "",
    vatNumber ? `VAT number ${vatNumber}` : "",
    icoNumber ? `ICO registration ${icoNumber}` : "",
  ].filter(Boolean);
  return parts.length ? `${parts.join(". ")}.` : null;
}

export function Footer() {
  const details = legalLine();

  return (
    <footer className="theme-ink bg-paper text-ink">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-6 max-w-[40ch] text-muted">
            AI automation for growth. We build the systems that win attention, convert it into enquiries and turn those into revenue, with people reviewing the work.
          </p>
          <p className="mt-6">
            <a className="link" href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p className="text-muted">Based in the {site.location}</p>
        </div>
        <div className="lg:col-span-4">
          <h2 className="label">Services</h2>
          <ul className="mt-4 grid gap-1">
            {services.map((service) => (
              <li key={service.slug}>
                <Link className="inline-flex min-h-11 items-center hover:underline" href={`/services/${service.slug}`}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h2 className="label">Explore</h2>
          <ul className="mt-4 grid gap-1">
            {[...navigation.primary, ...navigation.tools].map((link) => (
              <li key={link.href}>
                <Link className="inline-flex min-h-11 items-center hover:underline" href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h2 className="label">Company</h2>
          <ul className="mt-4 grid gap-1">
            {navigation.company.map((link) => (
              <li key={link.href}>
                <Link className="inline-flex min-h-11 items-center hover:underline" href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-wide py-6 text-sm text-muted">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p>© 2026 AuraRush. All rights reserved.</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {navigation.legal.map((link) => (
                <li key={link.href}>
                  <Link className="inline-flex min-h-11 items-center hover:underline" href={link.href}>{link.label}</Link>
                </li>
              ))}
              <li>
                <a className="inline-flex min-h-11 items-center hover:underline" href="#top">Back to top</a>
              </li>
            </ul>
          </div>
          {details ? <p className="mt-2 max-w-[80ch] text-xs">{details}</p> : null}
        </div>
      </div>
    </footer>
  );
}
