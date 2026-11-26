"use client";

/**
 * A light that travels around the border of its parent.
 * Adapted from Magic UI (MIT, https://magicui.design). Hidden under reduced motion.
 */
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function BorderBeam({
  className,
  size = 80,
  duration = 7,
  delay = 0,
  colorFrom = "var(--attention-fill)",
  colorTo = "var(--monetisation-fill)",
  reverse = false,
  borderWidth = 1.5,
}: {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  reverse?: boolean;
  borderWidth?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-[inherit] border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] motion-reduce:hidden"
      style={{ borderWidth, borderStyle: "solid" }}
    >
      <motion.div
        className={cn("absolute aspect-square bg-gradient-to-l from-[var(--beam-from)] via-[var(--beam-to)] to-transparent", className)}
        style={
          {
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            "--beam-from": colorFrom,
            "--beam-to": colorTo,
          } as React.CSSProperties
        }
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: reverse ? ["100%", "0%"] : ["0%", "100%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration, delay: -delay }}
      />
    </div>
  );
}
