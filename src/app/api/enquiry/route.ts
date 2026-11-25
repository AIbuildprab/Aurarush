import { NextResponse } from "next/server";
import { enquirySchema } from "@/lib/enquiry";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (parsed.data.companyWebsite) {
    return NextResponse.json({ ok: true });
  }

  const endpoint = process.env.FORM_ENDPOINT;
  if (!endpoint) {
    return NextResponse.json({ ok: false, error: "unconfigured" }, { status: 503 });
  }

  const { companyWebsite: _honeypot, ...enquiry } = parsed.data;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(enquiry),
  });

  if (!response.ok) {
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
