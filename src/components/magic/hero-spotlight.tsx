"use client";

import { useEffect, useRef } from "react";

/**
 * A soft coloured light that follows the pointer across the section it sits in.
 * Inspired by the spotlight effects in Aceternity UI and Magic UI. No state: it only writes CSS variables.
 */
export function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const parent = node?.parentElement;
    if (!node || !parent) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    const onMove = (event: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      node.style.setProperty("--my", `${event.clientY - rect.top}px`);
      node.style.opacity = "1";
    };
    const onLeave = () => {
      node.style.opacity = "0";
    };
    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);
    return () => {
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500"
      style={{ background: "radial-gradient(520px circle at var(--mx, 50%) var(--my, 50%), rgba(107, 78, 158, 0.16), rgba(58, 130, 192, 0.08) 45%, transparent 70%)" }}
    />
  );
}
