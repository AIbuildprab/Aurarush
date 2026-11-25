"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (target) {
          target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    const frame = window.requestAnimationFrame(scroll);
    window.addEventListener("hashchange", scroll);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", scroll);
    };
  }, [pathname]);

  return null;
}
