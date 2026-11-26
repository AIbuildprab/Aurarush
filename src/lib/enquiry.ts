import { z } from "zod";
import { interests, timelines } from "@/data/site";

const optionalText = z.string().trim().max(200).optional().or(z.literal(""));

export const enquirySchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name.").max(120),
  email: z.string().trim().email("Enter a valid email address.").max(200),
  company: z.string().trim().min(2, "Enter your company name.").max(160),
  role: optionalText,
  website: z
    .string()
    .trim()
    .max(200)
    .refine(
      (value) => value === "" || /^(https?:\/\/)?[^\s]+\.[^\s]+$/.test(value),
      "Enter a valid website, or leave this blank.",
    ),
  interest: z.enum(interests, { errorMap: () => ({ message: "Choose what you are interested in." }) }),
  timeline: z.enum(timelines).optional().or(z.literal("")),
  message: z.string().trim().min(12, "Tell us a little more, in a sentence or two.").max(3000),
  consent: z.boolean().refine((value) => value, {
    message: "Please agree so AuraRush can reply to your enquiry.",
  }),
  source: z.string().trim().max(60).optional().or(z.literal("")),
  /** Honeypot. Real visitors never see or fill this. */
  companyWebsite: z.string().optional().or(z.literal("")),
  /** When the form was opened (ms since epoch). Used to reject instant bot submissions. */
  openedAt: z.number().optional(),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const enquirySteps = [
  { title: "About you", fields: ["fullName", "email", "company", "role", "website"] },
  { title: "What you need", fields: ["interest", "timeline"] },
  { title: "Your message", fields: ["message", "consent"] },
] as const satisfies readonly { title: string; fields: readonly (keyof EnquiryInput)[] }[];
