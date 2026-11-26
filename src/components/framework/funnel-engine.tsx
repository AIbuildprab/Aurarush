"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { channels, directionCopy, getChannel, getStage, stages, type Channel, type StageId } from "@/data/framework";
import { getService } from "@/data/services";
import { cn } from "@/lib/utils";

type Selection = { kind: "channel"; id: string } | { kind: "stage"; id: StageId };

function Arrow() {
  return (
    <div className="flex items-center justify-center text-line-strong" aria-hidden="true">
      <ChevronRight className="hidden size-6 lg:block" />
      <ChevronDown className="size-6 lg:hidden" />
    </div>
  );
}

function ChannelButton({ channel, selected, onSelect }: { channel: Channel; selected: boolean; onSelect: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={cn(
        "flex min-h-11 w-full items-center justify-between gap-3 rounded-md border px-3 py-2 text-left text-[0.9375rem] transition-colors",
        selected ? "border-[var(--stage)] bg-[var(--stage-wash)] font-semibold text-ink" : "border-line bg-paper hover:border-line-strong",
      )}
    >
      <span>{channel.name}</span>
      {channel.status === "advisory" ? <span className="text-xs font-medium text-muted">Advisory</span> : null}
    </button>
  );
}

function Detail({ selection }: { selection: Selection }) {
  if (selection.kind === "channel") {
    const channel = getChannel(selection.id);
    if (!channel) return null;
    return (
      <div data-stage="attention" className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="label">{directionCopy[channel.direction].name} channel</p>
          <h3 className="h3 mt-2">{channel.name}</h3>
          <p className="mt-3 text-muted">{channel.summary}</p>
          <p className="mt-5 text-sm">
            <span className="font-semibold">Primary skill: </span>
            {channel.primarySkill}
          </p>
          {channel.status === "advisory" ? (
            <p className="mt-2 text-sm text-muted">We advise and support this channel. It is not one of our core builds.</p>
          ) : null}
        </div>
        <div className="lg:col-span-4">
          <p className="label">What AI automation adds</p>
          <ul className="mt-3 grid gap-2">
            {channel.aiRole.map((line) => (
              <li key={line} className="flex gap-3">
                <span className="stage-dot mt-2.5" aria-hidden="true" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <p className="label">Related services</p>
          <ul className="mt-3 grid gap-1">
            {channel.serviceSlugs.map((slug) => {
              const service = getService(slug);
              return service ? (
                <li key={slug}>
                  <Link className="link inline-flex min-h-11 items-center" href={`/services/${slug}`}>{service.name}</Link>
                </li>
              ) : null;
            })}
          </ul>
          <Link className="btn btn-text mt-2" href={`/framework#${channel.id}`}>
            Read about this channel <ArrowRight className="arrow-x size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    );
  }

  const stage = getStage(selection.id);
  if (!stage) return null;
  return (
    <div data-stage={stage.id} className="grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <p className="label">Stage</p>
        <h3 className="h3 mt-2 stage-text">{stage.name}</h3>
        <p className="mt-3 font-display text-xl">{stage.question}</p>
        <p className="mt-3 text-muted">{stage.summary}</p>
      </div>
      <div className="lg:col-span-4">
        <p className="label">What good looks like</p>
        <p className="mt-3">{stage.good}</p>
        <p className="label mt-6">What usually breaks</p>
        <p className="mt-3 text-muted">{stage.breaks}</p>
      </div>
      <div className="lg:col-span-3">
        <Link className="btn btn-text" href={`/framework#${stage.id}`}>
          Read about this stage <ArrowRight className="arrow-x size-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

/** The interactive three-stage funnel. Select a channel or a stage to read how AI automation applies. */
export function FunnelEngine() {
  const [selection, setSelection] = useState<Selection>({ kind: "channel", id: "outbound" });
  const [drawn, setDrawn] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const activeStage: StageId | null =
    selection.kind === "stage" ? selection.id : selection.kind === "channel" ? "attention" : null;
  const inbound = channels.filter((channel) => channel.direction === "inbound");
  const outbound = channels.filter((channel) => channel.direction === "outbound");

  const selectedChannel = selection.kind === "channel" ? selection.id : null;

  return (
    <figure ref={ref} className="m-0">
      <div className="relative">
        <svg className="absolute inset-x-0 top-[22px] hidden h-2 w-full lg:block" viewBox="0 0 100 2" preserveAspectRatio="none" aria-hidden="true">
          <line x1="2" y1="1" x2="98" y2="1" stroke="var(--line-strong)" strokeWidth="1" vectorEffect="non-scaling-stroke" pathLength="1" className={drawn ? "engine-line" : ""} style={drawn ? undefined : { strokeDasharray: 1, strokeDashoffset: 1 }} />
        </svg>
        <div className="relative grid items-start gap-4 lg:grid-cols-[minmax(0,1.4fr)_32px_minmax(0,1fr)_32px_minmax(0,1fr)]">
          <div data-stage="attention">
            <button
              type="button"
              aria-pressed={selection.kind === "stage" && selection.id === "attention"}
              onClick={() => setSelection({ kind: "stage", id: "attention" })}
              className={cn(
                "flex min-h-11 w-full items-center gap-2 rounded-md border px-3 py-2 text-left text-lg font-semibold",
                activeStage === "attention" ? "border-[var(--stage)] bg-[var(--stage-wash)]" : "border-line bg-paper",
              )}
            >
              <span className="stage-dot" aria-hidden="true" />
              Attention
            </button>
            <p className="mt-3 text-sm text-muted">Seven channels bring people in.</p>
            <p className="label mt-5">Inbound: traffic comes to you</p>
            <ul className="mt-2 grid gap-2">
              {inbound.map((channel) => (
                <li key={channel.id}>
                  <ChannelButton channel={channel} selected={selectedChannel === channel.id} onSelect={() => setSelection({ kind: "channel", id: channel.id })} />
                </li>
              ))}
            </ul>
            <p className="label mt-5">Outbound: you go to them</p>
            <ul className="mt-2 grid gap-2">
              {outbound.map((channel) => (
                <li key={channel.id}>
                  <ChannelButton channel={channel} selected={selectedChannel === channel.id} onSelect={() => setSelection({ kind: "channel", id: channel.id })} />
                </li>
              ))}
            </ul>
          </div>
          <Arrow />
          {stages
            .filter((stage) => stage.id !== "attention")
            .flatMap((stage, index) => {
              const column = (
                <div key={stage.id} data-stage={stage.id}>
                  <button
                    type="button"
                    aria-pressed={selection.kind === "stage" && selection.id === stage.id}
                    onClick={() => setSelection({ kind: "stage", id: stage.id })}
                    className={cn(
                      "flex min-h-11 w-full items-center gap-2 rounded-md border px-3 py-2 text-left text-lg font-semibold",
                      selection.kind === "stage" && selection.id === stage.id ? "border-[var(--stage)] bg-[var(--stage-wash)]" : "border-line bg-paper",
                    )}
                  >
                    <span className="stage-dot" aria-hidden="true" />
                    {stage.name}
                  </button>
                  <p className="mt-3 text-sm text-muted">{stage.question}</p>
                  <ol className="mt-5 grid gap-2">
                    {stage.steps.map((step) => (
                      <li key={step.id} className="rounded-md border border-line bg-surface px-3 py-2">
                        <p className="text-[0.9375rem] font-medium">{step.name}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              );
              return index === 0 ? [column, <Arrow key="arrow-2" />] : [column];
            })}
        </div>
      </div>
      <figcaption className="sr-only">
        A funnel with three stages. Attention has seven channels, five inbound and two outbound. Conversion captures, qualifies and responds. Monetisation closes, retains and expands, and measures.
      </figcaption>
      <div aria-live="polite" className="mt-8 rounded-[10px] border border-line bg-surface p-6 lg:p-8">
        <Detail selection={selection} />
      </div>
    </figure>
  );
}

/** A static three-stage strip, with the relevant stages emphasised. Used on case studies. */
export function StageStrip({ active }: { active: StageId[] }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-3" aria-label="Funnel stages this work supports">
      {stages.map((stage) => {
        const on = active.includes(stage.id);
        return (
          <li
            key={stage.id}
            data-stage={stage.id}
            className={cn("rounded-md border px-4 py-3", on ? "border-[var(--stage)] bg-[var(--stage-wash)]" : "border-line text-muted")}
          >
            <p className="flex items-center gap-2 font-semibold">
              <span className="stage-dot" aria-hidden="true" />
              {stage.name}
              {on ? <span className="sr-only"> (supported by this work)</span> : null}
            </p>
            <p className="mt-1 text-sm">{stage.question}</p>
          </li>
        );
      })}
    </ol>
  );
}
