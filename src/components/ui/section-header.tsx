import { WordReveal } from "@/components/ui/word-reveal";

export function SectionHeader({
  eyebrow,
  title,
  highlight,
  intro,
  id,
  aside,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  intro?: string;
  id: string;
  aside?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          {eyebrow}
        </p>
        <WordReveal id={id} text={title} highlight={highlight} className="h2 mt-5 max-w-[min(16ch,100%)]" />
        {intro ? <p className="lead mt-6">{intro}</p> : null}
      </div>
      {aside}
    </div>
  );
}
