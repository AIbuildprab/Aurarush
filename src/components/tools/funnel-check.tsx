"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { stages, type StageId } from "@/data/framework";
import { getService, type ServiceSlug } from "@/data/services";
import { cn } from "@/lib/utils";

type Question = { id: StageId; text: string };

const questions: Question[] = [
  { id: "attention", text: "Most weeks, the right new people hear about us without us chasing them." },
  { id: "attention", text: "We know which one or two channels bring in our best customers." },
  { id: "conversion", text: "A visitor to our website always has one obvious next step." },
  { id: "conversion", text: "We reply to a new enquiry within one working day, every time." },
  { id: "monetisation", text: "Every enquiry is followed up until the answer is a clear yes or no." },
  { id: "monetisation", text: "We can say which channel brought in our last five customers." },
];

const options = [
  { value: 2, label: "Yes, reliably" },
  { value: 1, label: "Sometimes" },
  { value: 0, label: "Not really" },
] as const;

const recommendation: Record<StageId, ServiceSlug> = {
  attention: "outbound-automation",
  conversion: "websites-and-funnels",
  monetisation: "client-systems-and-dashboards",
};

export function FunnelCheck() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [done, setDone] = useState(false);

  const answered = Object.keys(answers).length;
  const complete = answered === questions.length;

  const scores = stages.map((stage) => {
    const indexes = questions.map((q, index) => (q.id === stage.id ? index : -1)).filter((index) => index >= 0);
    const total = indexes.reduce((sum, index) => sum + (answers[index] ?? 0), 0);
    return { stage, score: total, max: indexes.length * 2 };
  });
  const weakest = scores.length ? [...scores].sort((a, b) => a.score / a.max - b.score / b.max)[0] : null;

  if (done && weakest) {
    const service = getService(recommendation[weakest.stage.id]);
    const tied = scores.filter((s) => s.score / s.max === weakest.score / weakest.max).length > 1;
    return (
      <div data-stage={weakest.stage.id} className="rounded-[10px] border border-line bg-surface p-8" role="status">
        <p className="label">Your result</p>
        <h2 className="h2 mt-2">
          {tied ? "Several stages need attention. Start with " : "Start with "}
          <span className="stage-text">{weakest.stage.name.toLowerCase()}</span>.
        </h2>
        <p className="lead mt-4">{weakest.stage.summary}</p>
        <p className="mt-4 text-sm text-muted">
          This is a quick self-assessment based on your own answers. It is a conversation starter, not a diagnosis or a forecast.
        </p>
        <dl className="mt-6 grid gap-2 sm:grid-cols-3">
          {scores.map(({ stage, score, max }) => (
            <div key={stage.id} data-stage={stage.id} className="rounded-md border border-line bg-paper p-3">
              <dt className="flex items-center gap-2 text-sm font-semibold"><span className="stage-dot" aria-hidden="true" />{stage.name}</dt>
              <dd className="mt-1 text-2xl font-display">{score} / {max}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link className="btn btn-primary" href={`/contact?stage=${weakest.stage.id}&source=funnel-check#enquiry`}>
            Talk to us about this <ArrowRight className="arrow-x size-4" aria-hidden="true" />
          </Link>
          {service ? <Link className="btn btn-secondary" href={`/services/${service.slug}`}>See {service.name}</Link> : null}
          <button type="button" className="btn btn-text" onClick={() => { setAnswers({}); setDone(false); }}>Start again</button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (complete) setDone(true);
      }}
    >
      <p className="text-muted" aria-live="polite">{answered} of {questions.length} answered</p>
      <ol className="mt-6 grid gap-6">
        {questions.map((question, index) => (
          <li key={question.text}>
            <fieldset className="border-t border-line pt-5">
              <legend className="max-w-[60ch] text-lg font-medium">{question.text}</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {options.map((option) => (
                  <label
                    key={option.value}
                    className={cn(
                      "flex min-h-11 cursor-pointer items-center gap-2 rounded-md border px-4 text-[0.9375rem]",
                      answers[index] === option.value ? "border-accent bg-surface font-semibold" : "border-line hover:border-line-strong",
                    )}
                  >
                    <input
                      type="radio"
                      className="size-4"
                      name={`q-${index}`}
                      value={option.value}
                      checked={answers[index] === option.value}
                      onChange={() => setAnswers((current) => ({ ...current, [index]: option.value }))}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </fieldset>
          </li>
        ))}
      </ol>
      <button type="submit" className="btn btn-primary mt-8" disabled={!complete}>
        See my result
      </button>
      {!complete ? <p className="mt-3 text-sm text-muted">Answer all six questions to see your result.</p> : null}
    </form>
  );
}
