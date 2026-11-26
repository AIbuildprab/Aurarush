"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

export const CONSENT_KEY = "aurarush-consent";
const CONSENT_EVENT = "aurarush-consent-change";

export type Consent = {
  necessary: true;
  embeds: boolean;
  updated: string;
};

function subscribe(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

/** The stored choice as a string, or null when none. */
function getSnapshot(): string | null {
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

/** `undefined` on the server, so `ready` is false until the browser has been checked. */
function getServerSnapshot(): string | null | undefined {
  return undefined;
}

/** Reads the visitor's cookie choice. `ready` is false until the browser has been checked. */
export function useConsent() {
  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const consent = useMemo<Consent | null>(() => {
    if (!raw) return null;
    try {
      return JSON.parse(raw) as Consent;
    } catch {
      return null;
    }
  }, [raw]);

  const save = useCallback((embeds: boolean) => {
    const next: Consent = { necessary: true, embeds, updated: new Date().toISOString() };
    try {
      window.localStorage.setItem(CONSENT_KEY, JSON.stringify(next));
    } catch {
      /* storage unavailable: the choice applies to this visit only */
    }
    window.dispatchEvent(new Event(CONSENT_EVENT));
  }, []);

  return { consent, ready: raw !== undefined, embeds: consent?.embeds === true, save };
}
