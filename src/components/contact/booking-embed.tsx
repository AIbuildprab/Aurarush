"use client";

import { useEffect, useState } from "react";
import { CONSENT_KEY, type Consent } from "@/components/layout/cookie-banner";
import { BOOKING_URL } from "@/data/site";

export function BookingEmbed() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw || !BOOKING_URL) return;
    try {
      const consent = JSON.parse(raw) as Consent;
      setAllowed(consent.embeds);
    } catch {
      setAllowed(false);
    }
  }, []);

  if (!BOOKING_URL || !allowed) return null;

  return (
    <iframe
      title="Book a call"
      src={BOOKING_URL}
      className="mt-8 h-[640px] w-full rounded-lg border border-white/10"
    />
  );
}
