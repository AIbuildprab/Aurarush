import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MagicCard } from "@/components/magic/magic-card";
import { ShineBorder } from "@/components/magic/shine-border";
import { getStage } from "@/data/framework";
import { services, type ServiceSlug } from "@/data/services";
import { cn } from "@/lib/utils";

/** Column spans on the six-column desktop grid. Three rows of six. */
const spans: Record<ServiceSlug, string> = {
  "outbound-outreach": "lg:col-span-3",
  "content-and-seo": "lg:col-span-3",
  "paid-media": "lg:col-span-2",
  "websites-and-funnels": "lg:col-span-2",
  "client-systems-and-dashboards": "lg:col-span-2",
  "growth-audit-and-roadmap": "lg:col-span-3",
  "managed-support": "lg:col-span-3",
};

/** Services as a bento grid. Each card is tinted by the funnel stage it improves and lights up under the pointer. */
export function ServiceBento() {
  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
      {services.map((service) => {
        const stage = service.stage === "cross-stage" ? null : getStage(service.stage);
        return (
          <li key={service.slug} data-stage={service.stage} className={cn("relative", spans[service.slug], service.startHere && "md:col-span-2")}>
            <MagicCard
              className="h-full shadow-[0_1px_2px_rgba(23,20,31,0.04),0_12px_28px_-18px_rgba(23,20,31,0.28)]"
              glow="color-mix(in srgb, var(--stage-fill) 16%, transparent)"
              fill="radial-gradient(120% 95% at 100% 100%, color-mix(in srgb, var(--stage-fill) 24%, transparent), transparent 64%), var(--paper)"
            >
              <Link href={`/services/${service.slug}`} className="group/card flex h-full min-h-[210px] flex-col justify-between gap-8 p-6 lg:min-h-[230px]">
                <div>
                  <p className="flex items-center gap-2 text-sm font-semibold">
                    <span className="stage-dot" aria-hidden="true" />
                    <span className="stage-text">{stage ? stage.name : "Every stage"}</span>
                    {service.startHere ? <span className="ml-1 rounded-full bg-ink px-2.5 py-0.5 text-xs font-semibold text-paper">Start here</span> : null}
                  </p>
                  <h3 className="mt-4 font-display text-[1.75rem] leading-tight">{service.name}</h3>
                  <p className="mt-2 max-w-[38ch] text-muted">{service.menu}</p>
                </div>
                <span className="flex items-center gap-2 text-[0.9375rem] font-medium">
                  See the service
                  <ArrowUpRight className="size-4 transition-transform duration-200 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" aria-hidden="true" />
                </span>
              </Link>
            </MagicCard>
            {service.startHere ? <ShineBorder className="rounded-xl" /> : null}
          </li>
        );
      })}
    </ul>
  );
}
