import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { insights } from "@/data/insights";
import { services } from "@/data/services";
import { site } from "@/data/site";

const company = [
  { href: "/about", label: "About" },
  { href: "/how-we-work", label: "How we work" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
].filter((link) => link.href !== "/insights" || insights.length > 0);

function legalLine() {
  const { entity, companyNumber, address, vatNumber, icoNumber } = site.legal;
  if (!entity && !companyNumber && !address && !vatNumber && !icoNumber) return null;
  const parts = [
    entity ? `AuraRush is a trading name of ${entity}` : "",
    companyNumber ? `registered in England and Wales, company number ${companyNumber}` : "",
    address ? `Registered office: ${address}` : "",
    vatNumber ? `VAT number ${vatNumber}` : "",
    icoNumber ? `ICO registration ${icoNumber}` : "",
  ].filter(Boolean);
  return parts.join(". ") + ".";
}

export function Footer() {
  const details = legalLine();

  return (
    <footer className="bg-[#0a0a0a]">
      <div className="h-px bg-[image:var(--gradient-spectrum)]" />
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo kind="footer" />
          <p className="mt-6 max-w-[42ch] text-muted">
            AuraRush helps businesses grow by building value. We make websites that funnel customers into an enquiry, and dashboards that let personal trainers and salons run the same system.
          </p>
        </div>
        <div className="lg:col-span-2">
          <h2 className="font-mono text-xs tracking-[0.14em] text-muted uppercase">Services</h2>
          <ul className="mt-4 grid gap-2">
            <li><Link className="inline-flex min-h-11 items-center" href="/services">Overview</Link></li>
            {services.map((service) => (
              <li key={service.slug}><Link className="inline-flex min-h-11 items-center" href={`/services/${service.slug}`}>{service.number} {service.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h2 className="font-mono text-xs tracking-[0.14em] text-muted uppercase">Company</h2>
          <ul className="mt-4 grid gap-2">
            {company.map((link) => (
              <li key={link.href}><Link className="inline-flex min-h-11 items-center" href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h2 className="font-mono text-xs tracking-[0.14em] text-muted uppercase">Start a conversation</h2>
          <a className="mt-4 inline-flex min-h-11 items-center underline decoration-[var(--aura-magenta)]" href={`mailto:${site.email}`}>{site.email}</a>
          <p className="text-muted">Based in the United Kingdom</p>
        </div>
      </div>
      <div className="container-site border-t border-white/10 py-6 text-sm text-muted">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© 2026 AuraRush. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/cookies">Cookie Policy</Link>
            <Link href="/terms">Terms</Link>
            <a href="#top">Back to top</a>
          </div>
        </div>
        {details ? <p className="mt-4 max-w-[80ch] text-xs">{details}</p> : null}
      </div>
    </footer>
  );
}
