"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

type Mode = "desktop" | "phone";
type Shot = { src: string; width: number; height: number };

const NARROW = "(max-width: 639px)";

function subscribeNarrow(callback: () => void) {
  const media = window.matchMedia(NARROW);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

const SPEED = { desktop: 90, phone: 120 } as const; // pixels per second
const HOLD_AT_END = 1.6; // seconds

/**
 * A scrolling walkthrough of a live site, in a browser frame or a phone frame.
 * It plays on its own once in view, like a GIF, and stops the moment you scroll or touch it.
 * Play and pause are always available, and nothing autoplays under reduced motion.
 */
export function SiteTour({ client, host, desktop, phone }: { client: string; host: string; desktop: Shot; phone: Shot }) {
  const narrow = useSyncExternalStore(
    subscribeNarrow,
    () => window.matchMedia(NARROW).matches,
    () => false,
  );
  const [chosen, setChosen] = useState<Mode | null>(null);
  const mode: Mode = chosen ?? (narrow ? "phone" : "desktop");
  const [playing, setPlaying] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Start when the frame is mostly on screen (unless the visitor prefers reduced motion).
  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!started && entries.some((entry) => entry.isIntersecting)) {
          started = true;
          setPlaying(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // The scroll loop.
  useEffect(() => {
    const el = scrollRef.current;
    if (!playing || !el) return;
    let raf = 0;
    let last = performance.now();
    let hold = 0;
    let position = el.scrollTop;
    const speed = SPEED[mode];

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      if (hold > 0) {
        hold -= dt;
        if (hold <= 0) {
          position = 0;
          el.scrollTo({ top: 0, behavior: "auto" });
        }
      } else {
        position += speed * dt;
        el.scrollTop = position;
        if (position >= el.scrollHeight - el.clientHeight - 1) hold = HOLD_AT_END;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, mode]);

  const stop = () => setPlaying(false);
  const shot = mode === "desktop" ? desktop : phone;

  const image = (
    <Image
      key={mode}
      src={shot.src}
      alt={`${client} ${mode === "desktop" ? "website on a computer" : "website on a phone"}, scrolling through the whole home page`}
      width={shot.width}
      height={shot.height}
      sizes={mode === "desktop" ? "(min-width: 1024px) 900px, 100vw" : "300px"}
      unoptimized
      loading="lazy"
      className="block h-auto w-full"
      draggable={false}
    />
  );

  return (
    <div ref={wrapRef}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div role="tablist" aria-label="Device" className="inline-flex rounded-md border border-line-strong p-1">
          {(["desktop", "phone"] as const).map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={mode === item}
              className={cn(
                "min-h-10 rounded px-4 text-[0.9375rem] font-medium capitalize",
                mode === item ? "bg-ink text-paper" : "text-muted hover:text-ink",
              )}
              onClick={() => {
                setChosen(item);
                setPlaying(true);
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <button type="button" className="btn btn-secondary !min-h-10" onClick={() => setPlaying((value) => !value)} aria-pressed={playing}>
          {playing ? <Pause className="size-4" aria-hidden="true" /> : <Play className="size-4" aria-hidden="true" />}
          {playing ? "Pause" : "Play"}
        </button>
      </div>

      <p className="mt-3 text-sm text-muted">Scroll the page yourself, or let it play.</p>

      <div className="mt-6">
        {mode === "desktop" ? (
          <div className="frame">
            <div className="frame-bar">
              <span className="frame-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span className="mx-auto truncate rounded bg-surface px-3 py-0.5">{host}</span>
            </div>
            <div
              ref={scrollRef}
              tabIndex={0}
              role="region"
              aria-label={`${client} on a computer. Scrollable.`}
              className="tour-scroll aspect-[16/10] overflow-y-auto bg-paper"
              onWheel={stop}
              onTouchStart={stop}
              onPointerDown={stop}
              onKeyDown={stop}
            >
              {image}
            </div>
          </div>
        ) : (
          <div className="frame mx-auto w-full max-w-[300px] rounded-[34px] p-2.5">
            <div
              ref={scrollRef}
              tabIndex={0}
              role="region"
              aria-label={`${client} on a phone. Scrollable.`}
              className="tour-scroll aspect-[9/19] overflow-y-auto rounded-[26px] bg-paper"
              onWheel={stop}
              onTouchStart={stop}
              onPointerDown={stop}
              onKeyDown={stop}
            >
              {image}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
