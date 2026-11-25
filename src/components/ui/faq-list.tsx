export function FaqList({ items }: { items: readonly { question: string; answer: string }[] }) {
  return (
    <div className="border-t border-white/10">
      {items.map((item) => (
        <details key={item.question} className="group border-b border-white/10">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-4 font-display text-xl [&::-webkit-details-marker]:hidden">
            {item.question}
            <span className="font-mono text-muted group-open:hidden" aria-hidden="true">+</span>
            <span className="hidden font-mono text-muted group-open:inline" aria-hidden="true">–</span>
          </summary>
          <p className="max-w-[60ch] pb-5 text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
