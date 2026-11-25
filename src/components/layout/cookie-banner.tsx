"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const CONSENT_KEY = "aurarush-consent";

export type Consent = {
  necessary: true;
  embeds: boolean;
  updated: string;
};

function readConsent(): Consent | null {
  const raw = localStorage.getItem(CONSENT_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Consent;
  } catch {
    return null;
  }
}

export function CookieBanner() {
  const [ready, setReady] = useState(false);
  const [consent, setConsent] = useState<Consent | null>(null);
  const [manage, setManage] = useState(false);
  const [embeds, setEmbeds] = useState(false);

  useEffect(() => {
    setConsent(readConsent());
    setReady(true);
  }, []);

  const save = (allowEmbeds: boolean) => {
    const next: Consent = { necessary: true, embeds: allowEmbeds, updated: new Date().toISOString() };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(next));
    setConsent(next);
    setManage(false);
  };

  if (!ready || consent) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      <div className="mx-auto max-w-3xl rounded-lg border border-white/15 bg-surface p-5 shadow-[0_0_40px_rgba(58,130,192,0.15)]">
        <p className="text-sm text-muted">
          We store one choice on this device so we know whether you allow booking embeds. We do not load analytics. Read the <Link className="underline" href="/cookies">Cookie Policy</Link>.
        </p>
        {manage ? (
          <label className="mt-4 flex min-h-11 items-center gap-3 text-sm">
            <input type="checkbox" checked={embeds} onChange={(event) => setEmbeds(event.target.checked)} />
            Allow booking embeds and other third-party content
          </label>
        ) : null}
        <div className="mt-4 flex flex-wrap gap-3">
          <button type="button" className="btn btn-primary !px-5 !py-3" onClick={() => save(true)}>Accept all</button>
          <button type="button" className="btn btn-secondary !px-5 !py-3" onClick={() => save(false)}>Reject all</button>
          {manage ? (
            <button type="button" className="btn btn-secondary !px-5 !py-3" onClick={() => save(embeds)}>Save choices</button>
          ) : (
            <button type="button" className="btn btn-text" onClick={() => setManage(true)}>Manage choices</button>
          )}
        </div>
      </div>
    </div>
  );
}
