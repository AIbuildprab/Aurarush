import { BOOKING_URL } from "@/data/site";

export function bookingHref() {
  return BOOKING_URL || "/contact#enquiry";
}

export function bookingIsExternal() {
  return BOOKING_URL.length > 0;
}
