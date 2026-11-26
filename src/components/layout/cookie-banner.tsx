"use client";

import Link from "next/link";
import { useState } from "react";
import { useConsent } from "@/hooks/useConsent";

/**
 * A small notice in the bottom corner (full width, short, on phones). It never covers the page's main buttons:
 * on desktop it sits at the right edge, below the hero's call to action.
 */
export function CookieBanner() {
  const { consent, ready, save } = useConsent();
  const [manage, setManage] = useState(false);
  const [embeds, setEmbeds] = useState(false);

  if (!ready || consent) return null;

  return (
    <div
      className="fixed right-3 bottom-3 left-3 z-50 sm:right-6 sm:bottom-6 sm:left-auto sm:w-[400px]"
      role="region"
      aria-label="Cookie choices"
    >
      <div className="rounded-2xl border border-line-strong bg-surface/95 p-4 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.8)] backdrop-blur-md sm:p-5">
        <p className="text-[0.8125rem] leading-snug text-muted sm:text-[0.875rem]">
          We save one choice on your device: whether to allow third-party embeds. No analytics.{" "}
          <Link className="link text-ink" href="/cookies">Cookie Policy</Link>
        </p>
        {manage ? (
          <label className="mt-3 flex min-h-11 items-center gap-3 text-[0.875rem]">
            <input type="checkbox" className="size-4" checked={embeds} onChange={(event) => setEmbeds(event.target.checked)} />
            Allow third-party embeds
          </label>
        ) : null}
        <div className="mt-3 flex items-center gap-2">
          <button type="button" className="btn btn-primary !min-h-11 flex-1 !px-3 !py-2 !text-[0.9375rem]" onClick={() => save(true)}>
            Accept all
          </button>
          <button type="button" className="btn btn-secondary !min-h-11 flex-1 !px-3 !py-2 !text-[0.9375rem]" onClick={() => save(false)}>
            Reject all
          </button>
        </div>
        <div className="mt-1 flex justify-center">
          {manage ? (
            <button type="button" className="btn btn-text !min-h-11 !text-[0.875rem]" onClick={() => save(embeds)}>
              Save my choices
            </button>
          ) : (
            <button type="button" className="btn btn-text !min-h-11 !text-[0.875rem]" onClick={() => setManage(true)}>
              Manage choices
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
