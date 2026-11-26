"use client";

/**
 * Spotlight card: a soft glow and a gradient border follow the pointer.
 * Adapted from Magic UI (MIT, https://magicui.design) for this project's tokens.
 * Changes: theme variables, hooks called unconditionally, reduced-motion respected.
 */
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "motion/react";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

export function MagicCard({
  children,
  className,
  size = 260,
  glow = "rgba(107, 78, 158, 0.14)",
  from = "var(--stage-fill, #8a6bc0)",
  to = "var(--accent)",
  fill = "var(--card-fill, var(--paper))",
}: {
  children?: React.ReactNode;
  className?: string;
  /** Radius of the spotlight in pixels. */
  size?: number;
  /** Colour of the soft glow inside the card. */
  glow?: string;
  /** Border gradient colours near the pointer. */
  from?: string;
  to?: string;
  /** What fills the card behind the content. */
  fill?: string;
}) {
  const reduced = useReducedMotion();
  const mouseX = useMotionValue(-size);
  const mouseY = useMotionValue(-size);

  const onMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (reduced) return;
      const rect = event.currentTarget.getBoundingClientRect();
      mouseX.set(event.clientX - rect.left);
      mouseY.set(event.clientY - rect.top);
    },
    [mouseX, mouseY, reduced],
  );

  const onLeave = useCallback(() => {
    mouseX.set(-size);
    mouseY.set(-size);
  }, [mouseX, mouseY, size]);

  const border = useMotionTemplate`linear-gradient(${fill} 0 0) padding-box, radial-gradient(${size}px circle at ${mouseX}px ${mouseY}px, ${from}, ${to}, var(--line) 100%) border-box`;
  const light = useMotionTemplate`radial-gradient(${size}px circle at ${mouseX}px ${mouseY}px, ${glow}, transparent 100%)`;

  return (
    <motion.div
      className={cn("group relative isolate overflow-hidden rounded-xl border border-transparent", className)}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ background: border }}
    >
      <div className="absolute inset-px z-0 rounded-[inherit]" style={{ background: fill }} />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-px z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: light }}
      />
      <div className="relative z-20 h-full">{children}</div>
    </motion.div>
  );
}
