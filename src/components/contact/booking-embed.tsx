"use client";

import { useConsent } from "@/hooks/useConsent";
import { BOOKING_URL } from "@/data/site";

export function BookingEmbed() {
  const { embeds } = useConsent();
  if (!BOOKING_URL || !embeds) return null;

  return (
    <iframe
      title="Book a call"
      src={BOOKING_URL}
      className="mt-8 h-[640px] w-full rounded-[10px] border border-line"
    />
  );
}
