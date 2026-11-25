import { cn } from "@/lib/utils";

export function Aurora({ variant = "hero" }: { variant?: "hero" | "corner" | "bottom" }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "aurora",
        variant === "corner" && "aurora-corner",
        variant === "bottom" && "aurora-bottom",
      )}
    >
      <div className="aurora-ribbon aurora-left" />
      {variant === "hero" ? <div className="aurora-ribbon aurora-right" /> : null}
      <div className="aurora-vignette" />
      {variant === "hero" ? <div className="aurora-grain" /> : null}
    </div>
  );
}
