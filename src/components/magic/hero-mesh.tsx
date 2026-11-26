"use client";

/**
 * Animated mesh-gradient background in the logo colours.
 * Uses Paper Shaders (https://shaders.paper.design, Apache-2.0), a WebGL gradient generator.
 * A paper-coloured veil keeps the headline readable; under reduced motion the gradient is still.
 */
import { MeshGradient } from "@paper-design/shaders-react";
import { useSyncExternalStore } from "react";

const LOGO_COLOURS = ["#3a82c0", "#6b4e9e", "#a23b8c", "#de2f4b", "#f08a2a", "#f5c518", "#5baa47", "#7fc8a9"];

function subscribe(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

export function HeroMesh() {
  const reduced = useSyncExternalStore(
    subscribe,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <MeshGradient
        colors={LOGO_COLOURS}
        distortion={0.9}
        swirl={0.25}
        grainMixer={0.1}
        grainOverlay={0.06}
        speed={reduced ? 0 : 0.35}
        className="absolute inset-0 size-full opacity-60"
        style={{ width: "100%", height: "100%" }}
      />
      {/* Veil: keeps the left (text) side calm and fades into the page below. */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--paper)_0%,color-mix(in_srgb,var(--paper)_82%,transparent)_34%,color-mix(in_srgb,var(--paper)_20%,transparent)_70%,transparent_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--paper)] to-transparent" />
    </div>
  );
}
