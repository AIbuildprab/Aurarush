"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { BookCall } from "@/components/layout/book-call";
import { businessTypes, needs, site } from "@/data/site";
import { enquirySchema, type EnquiryInput } from "@/lib/enquiry";

export function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      businessName: "",
      website: "",
      message: "",
      consent: false,
      companyWebsite: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setStatus("idle");
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  });

  if (status === "success") {
    return (
      <div className="rounded-lg border border-white/10 bg-surface p-8">
        <h2 className="h3">Thank you. We’ve received your enquiry.</h2>
        <p className="mt-3 text-muted">We’ll reply to the email address you gave us.</p>
        <BookCall className="mt-6" />
      </div>
    );
  }

  return (
    <form id="enquiry" onSubmit={onSubmit} className="scroll-mt-28 grid gap-5" noValidate>
      <Field label="Full name" error={errors.fullName?.message}>
        <input className="field" autoComplete="name" {...register("fullName")} />
      </Field>
      <Field label="Email" error={errors.email?.message}>
        <input className="field" type="email" autoComplete="email" {...register("email")} />
      </Field>
      <Field label="Phone (optional)" error={errors.phone?.message}>
        <input className="field" type="tel" autoComplete="tel" {...register("phone")} />
      </Field>
      <Field label="Business name" error={errors.businessName?.message}>
        <input className="field" autoComplete="organization" {...register("businessName")} />
      </Field>
      <Field label="I run a…" error={errors.businessType?.message}>
        <select className="field" defaultValue="" {...register("businessType")}>
          <option value="" disabled>Choose one</option>
          {businessTypes.map((option) => <option key={option}>{option}</option>)}
        </select>
      </Field>
      <Field label="Website (optional)" error={errors.website?.message}>
        <input className="field" autoComplete="url" {...register("website")} />
      </Field>
      <Field label="What do you need?" error={errors.need?.message}>
        <select className="field" defaultValue="" {...register("need")}>
          <option value="" disabled>Choose one</option>
          {needs.map((option) => <option key={option}>{option}</option>)}
        </select>
      </Field>
      <Field label="Message" error={errors.message?.message}>
        <textarea className="field min-h-32" {...register("message")} />
      </Field>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Company website
          <input tabIndex={-1} autoComplete="off" {...register("companyWebsite")} />
        </label>
      </div>
      <label className="flex items-start gap-3 text-sm">
        <input className="mt-1 size-4" type="checkbox" {...register("consent")} />
        <span>I agree to AuraRush contacting me about my enquiry. See our <Link className="underline" href="/privacy">Privacy Policy</Link>.</span>
      </label>
      {errors.consent ? <p className="text-sm text-[var(--aura-crimson-text)]">{errors.consent.message}</p> : null}
      {status === "error" ? (
        <p className="text-sm text-[var(--aura-crimson-text)]">
          We couldn’t send your enquiry just now. Please email <a className="underline" href={`mailto:${site.email}`}>{site.email}</a> and we’ll pick it up from there.
        </p>
      ) : null}
      <button className="btn btn-primary w-fit" type="submit" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : null}
        {isSubmitting ? "Sending" : "Send enquiry"}
      </button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm">
      <span>{label}</span>
      {children}
      {error ? <span className="text-[var(--aura-crimson-text)]">{error}</span> : null}
    </label>
  );
}
