import { z } from "zod";
import { businessTypes, needs } from "@/data/site";

export const enquirySchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().optional().or(z.literal("")),
  businessName: z.string().trim().min(2, "Enter your business name."),
  businessType: z.enum(businessTypes, {
    errorMap: () => ({ message: "Choose the option that fits you best." }),
  }),
  website: z
    .string()
    .trim()
    .refine(
      (value) => value === "" || /^(https?:\/\/)?[^\s]+\.[^\s]+$/.test(value),
      "Enter a valid website, or leave this blank.",
    ),
  need: z.enum(needs, {
    errorMap: () => ({ message: "Choose what you need help with." }),
  }),
  message: z.string().trim().min(12, "Tell us a little more, in a sentence or two."),
  consent: z.boolean().refine((value) => value, {
    message: "Please agree so AuraRush can reply to your enquiry.",
  }),
  companyWebsite: z.string().optional().or(z.literal("")),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
