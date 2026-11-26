import Image from "next/image";
import { getPublishedWork } from "@/data/work";

/**
 * A tilted phone that cycles through our clients' real sites. Pure CSS crossfade (see `.phone-slide`),
 * so it needs no JavaScript and shows the first site under reduced motion.
 */
export function PhoneShowcase() {
  const work = getPublishedWork();
  const slide = 4; // seconds each site stays on screen
  const total = work.length * slide;

  return (
    <div className="relative mx-auto w-[min(76vw,300px)] lg:w-[min(320px,calc((100svh-13rem)*0.4737))]" style={{ "--cycle": `${total}s` } as React.CSSProperties}>
      <div aria-hidden="true" className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(222,47,75,0.45),rgba(107,78,158,0.3)_55%,transparent)] blur-2xl" />
      {/* A burst of logo colour rolls out from behind the phone each time the site changes. */}
      <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-0">
        {work.map((study, index) => (
          <span key={study.slug}>
            <span className="burst-ring" style={{ animationDelay: `${index * slide}s`, ["--rot" as string]: `${index * 72}deg` }} />
            <span className="burst-ring-2" style={{ animationDelay: `${index * slide}s`, ["--rot" as string]: `${index * 72 + 180}deg` }} />
            <span className="burst-flash" style={{ animationDelay: `${index * slide}s` }} />
          </span>
        ))}
      </div>
      <div className="phone-float rounded-[44px] border border-white/20 bg-[#1a1426] p-3 shadow-[0_50px_120px_-30px_rgba(162,59,140,0.7)]">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[34px] bg-black">
          {work.map((study, index) => (
            <Image
              key={study.slug}
              src={study.frames.mobile}
              alt={index === 0 ? `${study.client} website on a phone. The phone cycles through our clients' sites.` : ""}
              width={640}
              height={1386}
              sizes="320px"
              priority={index === 0}
              className="phone-slide absolute inset-0 size-full object-cover object-top"
              style={{ animationDelay: `${index * slide}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
