"use client";

import { principleHues, principles } from "@/data/principles";
import { useInView } from "@/hooks/useInView";

function Row({ principle, hue }: { principle: (typeof principles)[number]; hue: string }) {
  const { ref, inView } = useInView<HTMLElement>(0.45);
  return (
    <article ref={ref} className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-white/10 py-8">
      <span className="font-mono text-sm transition-colors duration-300" style={{ color: inView ? hue : "var(--muted-foreground)" }}>{principle.number}</span>
      <div>
        <h3 className="h3">{principle.title}</h3>
        <p className="mt-3 max-w-[52ch] text-muted">{principle.text}</p>
      </div>
    </article>
  );
}

export function PhilosophyList() {
  return (
    <div className="lg:col-span-6 lg:col-start-7">
      {principles.map((principle, index) => (
        <Row key={principle.number} principle={principle} hue={principleHues[index]} />
      ))}
    </div>
  );
}
