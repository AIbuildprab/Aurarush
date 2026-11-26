import { cn } from "@/lib/utils";

/**
 * A border with a slow shimmer. Adapted from Magic UI (MIT, https://magicui.design).
 * The `shine` keyframes live in globals.css. Place inside a `relative` parent with a radius.
 */
export function ShineBorder({
  className,
  borderWidth = 1.5,
  duration = 14,
  colors = ["var(--attention-fill)", "var(--conversion-fill)", "var(--monetisation-fill)"],
}: {
  className?: string;
  borderWidth?: number;
  duration?: number;
  colors?: string[];
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("shine-border pointer-events-none absolute inset-0 rounded-[inherit]", className)}
      style={
        {
          "--shine-width": `${borderWidth}px`,
          "--shine-duration": `${duration}s`,
          backgroundImage: `radial-gradient(transparent, transparent, ${colors.join(",")}, transparent, transparent)`,
        } as React.CSSProperties
      }
    />
  );
}
