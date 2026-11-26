import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MagicCard } from "@/components/magic/magic-card";
import { ShineBorder } from "@/components/magic/shine-border";
import { services, type ServiceSlug } from "@/data/services";
import { cn } from "@/lib/utils";

/** Column spans on the six-column desktop grid. Three rows of six. */
const spans: Record<ServiceSlug, string> = {
  "websites-and-funnels": "lg:col-span-3",
  "content-and-seo": "lg:col-span-3",
  "paid-media": "lg:col-span-2",
  "outbound-outreach": "lg:col-span-2",
  "client-systems-and-dashboards": "lg:col-span-2",
  "growth-audit-and-roadmap": "lg:col-span-3",
  "managed-support": "lg:col-span-3",
};

/** Services as a bento grid. Each card glows in its own logo colour and lights up under the pointer. */
export function ServiceBento() {
  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
      {services.map((service, index) => (
        <li key={service.slug} className={cn("relative", spans[service.slug], service.startHere && "md:col-span-2")}>
          <MagicCard
            className="h-full"
            from={service.accent}
            to="var(--accent)"
            glow={`color-mix(in srgb, ${service.accent} 22%, transparent)`}
            fill={`radial-gradient(120% 100% at 100% 100%, color-mix(in srgb, ${service.accent} 26%, transparent), transparent 62%), var(--surface)`}
          >
            <Link href={`/services/${service.slug}`} className="group/card flex h-full min-h-[210px] flex-col justify-between gap-8 p-6 lg:min-h-[230px]">
              <div>
                <p className="flex items-center gap-3 text-sm font-semibold text-muted">
                  <span className="grid size-8 place-items-center rounded-full text-[0.8125rem] font-bold text-[#0b0910]" style={{ background: service.accent }} aria-hidden="true">
                    {index + 1}
                  </span>
                  {service.startHere ? <span className="rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-[#0b0910]">Start here</span> : null}
                </p>
                <h3 className="mt-5 font-display text-[1.875rem] leading-tight">{service.name}</h3>
                <p className="mt-2 max-w-[36ch] text-muted">{service.menu}</p>
              </div>
              <span className="flex items-center gap-2 text-[0.9375rem] font-medium">
                Find out more
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" aria-hidden="true" />
              </span>
            </Link>
          </MagicCard>
          {service.startHere ? <ShineBorder className="rounded-xl" colors={["#f5c518", "#de2f4b", "#3a82c0"]} /> : null}
        </li>
      ))}
    </ul>
  );
}
