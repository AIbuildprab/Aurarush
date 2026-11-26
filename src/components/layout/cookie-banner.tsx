"use client";

import Link from "next/link";
import { useState } from "react";
import { useConsent } from "@/hooks/useConsent";

export function CookieBanner() {
  const { consent, ready, save } = useConsent();
  const [manage, setManage] = useState(false);
  const [embeds, setEmbeds] = useState(false);

  if (!ready || consent) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4" role="region" aria-label="Cookie choices">
      <div className="mx-auto max-w-3xl rounded-[10px] border border-line-strong bg-paper p-5 shadow-[0_12px_40px_-12px_rgba(23,20,31,0.35)]">
        <p className="text-[0.9375rem] text-muted">
          We store one choice on this device so we know whether you allow third-party embeds. We do not load analytics. Read the{" "}
          <Link className="link text-ink" href="/cookies">Cookie Policy</Link>.
        </p>
        {manage ? (
          <label className="mt-4 flex min-h-11 items-center gap-3 text-[0.9375rem]">
            <input type="checkbox" className="size-4" checked={embeds} onChange={(event) => setEmbeds(event.target.checked)} />
            Allow booking embeds and other third-party content
          </label>
        ) : null}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button type="button" className="btn btn-primary" onClick={() => save(true)}>Accept all</button>
          <button type="button" className="btn btn-secondary" onClick={() => save(false)}>Reject all</button>
          {manage ? (
            <button type="button" className="btn btn-secondary" onClick={() => save(embeds)}>Save choices</button>
          ) : (
            <button type="button" className="btn btn-text" onClick={() => setManage(true)}>Manage choices</button>
          )}
        </div>
      </div>
    </div>
  );
}
