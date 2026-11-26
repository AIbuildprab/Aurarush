"use client";

/**
 * Counts up to a number when it scrolls into view.
 * Adapted from Magic UI (MIT, https://magicui.design). The final value is always in the
 * accessible text, and under reduced motion it is shown immediately.
 */
import { useInView, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function NumberTicker({ value, className, delay = 0 }: { value: number; className?: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 60, stiffness: 100 });
  const inView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      if (ref.current) ref.current.textContent = String(value);
      return;
    }
    const timer = setTimeout(() => motionValue.set(value), delay * 1000);
    return () => clearTimeout(timer);
  }, [inView, reduced, motionValue, value, delay]);

  useEffect(
    () =>
      spring.on("change", (latest) => {
        if (ref.current) ref.current.textContent = String(Math.round(latest));
      }),
    [spring],
  );

  return (
    <>
      <span className="sr-only">{value}</span>
      <span ref={ref} aria-hidden="true" className={cn("inline-block tabular-nums", className)}>
        0
      </span>
    </>
  );
}
