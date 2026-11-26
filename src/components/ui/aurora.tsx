import { cn } from "@/lib/utils";

/**
 * Slow-drifting colour ribbons behind a section. Ported from the first version of the site.
 * On paper it renders as a soft pastel wash; inside `.theme-ink` it glows as before.
 */
export function Aurora({ variant = "hero" }: { variant?: "hero" | "bottom" }) {
  return (
    <div aria-hidden="true" className={cn("aurora", variant === "bottom" && "aurora-bottom")}>
      <div className="aurora-ribbon aurora-left" />
      {variant === "hero" ? <div className="aurora-ribbon aurora-right" /> : null}
      <div className="aurora-vignette" />
    </div>
  );
}
