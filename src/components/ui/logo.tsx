import { cn } from "@/lib/utils";

const petals = [
  "#a23b8c", "#de2f4b", "#e8453c", "#f08a2a", "#f5c518", "#9bbf3a",
  "#5baa47", "#7fc8a9", "#3a82c0", "#4f6fb5", "#6b4e9e", "#8a4a96",
];

/** Vector recreation of the AuraRush flower mark. Replace with the supplied vector logo when available. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={cn("size-8 shrink-0", className)} aria-hidden="true" focusable="false">
      {petals.map((fill, index) => (
        <path
          key={fill}
          d="M50 4 C61 17 61 31 50 41 C39 31 39 17 50 4Z"
          fill={fill}
          opacity="0.94"
          transform={`rotate(${index * 30} 50 50)`}
        />
      ))}
    </svg>
  );
}

export function Logo({ className, markClassName }: { className?: string; markClassName?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={markClassName} />
      <span className="text-[1.375rem] leading-none font-semibold tracking-tight">AuraRush</span>
    </span>
  );
}
