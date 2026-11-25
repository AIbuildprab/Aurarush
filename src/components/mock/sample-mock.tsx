function Badge() {
  return <span className="sample-badge">Sample data</span>;
}

export function FunnelMock() {
  return (
    <div className="mock-frame p-4 text-sm" style={{ "--glow": "#A23B8C" } as React.CSSProperties}>
      <Badge />
      <div className="rounded-md border border-white/10 bg-background p-4">
        <div className="mb-4 flex gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
        </div>
        <p className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">yourbusiness.co.uk</p>
        <p className="mt-4 font-display text-2xl font-light">Tell us what you need</p>
        <ol className="mt-4 grid gap-2">
          {["Your name", "The service", "The best time to reply"].map((step, index) => (
            <li key={step} className="flex items-center gap-3 border-t border-white/10 py-2">
              <span className="font-mono text-xs text-[var(--aura-magenta-text)]">0{index + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function PtMock() {
  const rows = ["Sample enquiry 01", "Sample enquiry 02", "Sample enquiry 03"];
  return (
    <div className="mock-frame p-4" style={{ "--glow": "#F08A2A" } as React.CSSProperties}>
      <Badge />
      <div className="grid gap-4 md:grid-cols-[140px_1fr]">
        <p className="font-mono text-xs tracking-[0.14em] text-muted uppercase">This week</p>
        <div>
          <p className="font-display text-4xl font-light">12</p>
          <p className="text-sm text-muted">New enquiries</p>
          <ul className="mt-4">
            {rows.map((row) => (
              <li key={row} className="flex justify-between border-t border-white/10 py-2 text-sm">
                <span>{row}</span>
                <span className="text-muted">New</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function SalonMock() {
  return (
    <div className="mock-frame grid gap-4 p-4 md:grid-cols-2" style={{ "--glow": "#F5C518" } as React.CSSProperties}>
      <Badge />
      <div>
        <p className="font-mono text-xs tracking-[0.14em] text-muted uppercase">New enquiries</p>
        {["Colour consult", "Cut and finish", "Follow-up due"].map((item) => (
          <p key={item} className="border-t border-white/10 py-2 text-sm">{item}</p>
        ))}
      </div>
      <div>
        <p className="font-mono text-xs tracking-[0.14em] text-muted uppercase">Day view</p>
        {["09:00 Chair one", "11:30 Follow-up", "14:00 New enquiry"].map((item) => (
          <p key={item} className="border-t border-white/10 py-2 text-sm">{item}</p>
        ))}
      </div>
    </div>
  );
}

export function ConsultingMock() {
  const columns = [
    ["Now", "Reply path"],
    ["Next", "One dashboard"],
    ["Later", "Extra tools"],
  ];
  return (
    <div className="mock-frame grid gap-3 p-4 md:grid-cols-3" style={{ "--glow": "#3A82C0" } as React.CSSProperties}>
      <Badge />
      {columns.map(([title, card]) => (
        <div key={title}>
          <p className="font-mono text-xs tracking-[0.14em] text-muted uppercase">{title}</p>
          <p className="mt-3 border border-white/10 p-3 text-sm">{card}</p>
        </div>
      ))}
    </div>
  );
}

const mocks = {
  funnel: FunnelMock,
  pt: PtMock,
  salon: SalonMock,
  consulting: ConsultingMock,
};

export function SampleMock({ type, hue }: { type: keyof typeof mocks; hue: string }) {
  const Mock = mocks[type];
  return (
    <div style={{ "--glow": hue } as React.CSSProperties}>
      <Mock />
    </div>
  );
}
