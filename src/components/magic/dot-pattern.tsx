import { useId } from "react";
import { cn } from "@/lib/utils";

/** A fading field of dots for section backgrounds. Inspired by Magic UI's dot pattern. */
export function DotPattern({ className, gap = 22, radius = 1.1 }: { className?: string; gap?: number; radius?: number }) {
  const id = useId();
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 size-full fill-[var(--line-strong)] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000,transparent)]",
        className,
      )}
    >
      <defs>
        <pattern id={id} width={gap} height={gap} patternUnits="userSpaceOnUse">
          <circle cx={radius + 1} cy={radius + 1} r={radius} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
