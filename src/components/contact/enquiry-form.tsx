"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { BookCall } from "@/components/layout/book-call";
import { interests, site, timelines } from "@/data/site";
import { enquirySchema, enquirySteps, type EnquiryInput } from "@/lib/enquiry";

export function EnquiryForm() {
  const params = useSearchParams();
  const presetInterest = params.get("interest");
  const source = (params.get("source") ?? "").slice(0, 60);

  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const headingRef = useRef<HTMLHeadingElement>(null);
  const openedAt = useRef(0);
  const firstRender = useRef(true);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      role: "",
      website: "",
      interest: interests.find((item) => item === presetInterest),
      timeline: "",
      message: "",
      consent: false,
      source,
      companyWebsite: "",
    },
  });

  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus();
  }, [step, status]);

  const next = async () => {
    const valid = await trigger([...enquirySteps[step].fields]);
    if (valid) setStep((current) => Math.min(current + 1, enquirySteps.length - 1));
  };

  const submit = async (values: EnquiryInput) => {
    setStatus("idle");
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, openedAt: openedAt.current }),
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const messages = Object.values(errors)
    .map((error) => (error && "message" in error ? String(error.message) : ""))
    .filter(Boolean);

  if (status === "success") {
    return (
      <div className="rounded-[10px] border border-line bg-surface p-8" role="status">
        <h2 ref={headingRef} tabIndex={-1} className="h3 outline-none">Thank you. We’ve received your enquiry.</h2>
        <p className="mt-3 text-muted">We will reply to the email address you gave us, usually within one working day.</p>
        <BookCall className="mt-6" variant="secondary">Book a call instead</BookCall>
      </div>
    );
  }

  return (
    <form id="enquiry" onSubmit={(event) => handleSubmit(submit)(event)} className="scroll-mt-28" noValidate>
      <p className="label" aria-hidden="true">Step {step + 1} of {enquirySteps.length}</p>
      <h2 ref={headingRef} tabIndex={-1} className="h3 mt-2 outline-none">
        <span className="sr-only">Step {step + 1} of {enquirySteps.length}: </span>
        {enquirySteps[step].title}
      </h2>

      {messages.length > 0 ? (
        <div role="alert" className="mt-4 rounded-md border border-monetisation p-4 text-[0.9375rem]">
          <p className="font-semibold">Please check the following:</p>
          <ul className="mt-1 list-disc pl-5">
            {messages.map((message) => <li key={message}>{message}</li>)}
          </ul>
        </div>
      ) : null}

      <div className="mt-6 grid gap-5">
        <div hidden={step !== 0} className="grid gap-5">
          <Field label="Full name" error={errors.fullName?.message}>
            <input className="field" autoComplete="name" aria-invalid={!!errors.fullName} {...register("fullName")} />
          </Field>
          <Field label="Work email" error={errors.email?.message}>
            <input className="field" type="email" autoComplete="email" aria-invalid={!!errors.email} {...register("email")} />
          </Field>
          <Field label="Company" error={errors.company?.message}>
            <input className="field" autoComplete="organization" aria-invalid={!!errors.company} {...register("company")} />
          </Field>
          <Field label="Your role (optional)">
            <input className="field" autoComplete="organization-title" {...register("role")} />
          </Field>
          <Field label="Website (optional)" error={errors.website?.message}>
            <input className="field" autoComplete="url" aria-invalid={!!errors.website} {...register("website")} />
          </Field>
        </div>

        <div hidden={step !== 1} className="grid gap-5">
          <Field label="What do you need help with?" error={errors.interest?.message}>
            <select className="field" defaultValue={interests.find((item) => item === presetInterest) ?? ""} aria-invalid={!!errors.interest} {...register("interest")}>
              <option value="" disabled>Choose one</option>
              {interests.map((option) => <option key={option}>{option}</option>)}
            </select>
          </Field>
          <Field label="When would you like to start? (optional)">
            <select className="field" defaultValue="" {...register("timeline")}>
              <option value="">No preference</option>
              {timelines.map((option) => <option key={option}>{option}</option>)}
            </select>
          </Field>
        </div>

        <div hidden={step !== 2} className="grid gap-5">
          <Field label="What would you like to change?" error={errors.message?.message}>
            <textarea className="field" aria-invalid={!!errors.message} {...register("message")} />
          </Field>
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label>
              Company website
              <input tabIndex={-1} autoComplete="off" {...register("companyWebsite")} />
            </label>
          </div>
          <label className="flex items-start gap-3 text-[0.9375rem]">
            <input className="mt-1 size-4" type="checkbox" {...register("consent")} />
            <span>I agree to AuraRush contacting me about my enquiry. See our <Link className="link" href="/privacy">Privacy Policy</Link>.</span>
          </label>
          {errors.consent ? <p className="field-error">{errors.consent.message}</p> : null}
          {status === "error" ? (
            <p className="field-error" role="alert">
              We couldn’t send your enquiry just now. Please email <a className="link" href={`mailto:${site.email}`}>{site.email}</a> and we’ll pick it up from there.
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {step > 0 ? (
          <button type="button" className="btn btn-secondary" onClick={() => setStep((current) => current - 1)}>Back</button>
        ) : null}
        {step < enquirySteps.length - 1 ? (
          <button type="button" className="btn btn-primary" onClick={next}>Continue</button>
        ) : (
          <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : null}
            {isSubmitting ? "Sending" : "Send enquiry"}
          </button>
        )}
      </div>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-[0.9375rem]">
      <span className="font-medium">{label}</span>
      {children}
      {error ? <span className="field-error">{error}</span> : null}
    </label>
  );
}
