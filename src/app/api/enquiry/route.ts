import { NextResponse } from "next/server";
import { enquirySchema } from "@/lib/enquiry";

const MAX_BODY_BYTES = 20_000;
const MIN_FILL_MS = 3_000;

function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true; // non-browser clients: nothing to compare
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ ok: false }, { status: 403 });
  }

  const text = await request.text().catch(() => "");
  if (text.length === 0 || text.length > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  let body: unknown = null;
  try {
    body = JSON.parse(text);
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { companyWebsite, openedAt, ...enquiry } = parsed.data;

  // Bots: a filled honeypot or an instant submission. Answer as if it worked, send nothing.
  if (companyWebsite || (typeof openedAt === "number" && Date.now() - openedAt < MIN_FILL_MS)) {
    return NextResponse.json({ ok: true });
  }

  const endpoint = process.env.FORM_ENDPOINT;
  if (!endpoint) {
    return NextResponse.json({ ok: false, error: "unconfigured" }, { status: 503 });
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(enquiry),
      signal: AbortSignal.timeout(8_000),
    });
    if (!response.ok) {
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
