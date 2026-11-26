import { Plus } from "lucide-react";

export function FaqList({ items }: { items: readonly { question: string; answer: string }[] }) {
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <details key={item.question} className="group border-b border-line">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-medium [&::-webkit-details-marker]:hidden">
            {item.question}
            <Plus className="size-5 shrink-0 text-muted transition-transform group-open:rotate-45" aria-hidden="true" />
          </summary>
          <p className="max-w-[62ch] pb-6 text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
