import { cn } from "@/lib/utils";

/**
 * Fades and lifts its children into place as they scroll into view.
 * CSS scroll-driven animation (see `.reveal`): no JavaScript, content is visible by default,
 * and browsers without support or with reduced motion simply show it.
 */
export function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("reveal", className)}>{children}</div>;
}
