"use client";

import { Aurora } from "@/components/ui/aurora";
import { Logo } from "@/components/ui/logo";
import { WordReveal } from "@/components/ui/word-reveal";
import { BookCall } from "@/components/layout/book-call";
import { site } from "@/data/site";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ClosingCta() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-28 md:py-36" aria-labelledby="closing-title">
      <Aurora variant="bottom" />
      {reduced ? null : (
        <div className="pointer-events-none absolute top-1/2 left-1/2 w-[min(70vw,640px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]">
          <div className="flower-spin">
            <Logo kind="flower" decorative />
          </div>
        </div>
      )}
      <div className="container-site relative">
        <p className="eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          Start a conversation
        </p>
        <WordReveal id="closing-title" text="Let’s build value into your business." highlight="value" className="display mt-6 max-w-[min(12ch,100%)]" />
        <p className="mt-6 max-w-[56ch] text-lg text-white/80">
          Tell us where your business is going and where enquiries are getting lost. We’ll show you what a better funnel, dashboard or technology plan could look like.
        </p>
        <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <BookCall />
          <a className="btn btn-text" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </section>
  );
}
