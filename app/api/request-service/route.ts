import { NextResponse } from "next/server";
import { business } from "@/content/site";
import {
  contactMethods,
  emptyFields,
  labelFor,
  serviceOptions,
  timingOptions,
  validateAll,
  type RequestFields,
} from "@/lib/service-request";

/*
 * Forwards service requests server-side. Configure ONE delivery method in Vercel
 * (Project → Settings → Environment Variables); see .env.example:
 *   - Email via Resend: RESEND_API_KEY, LEAD_TO_EMAIL, LEAD_FROM_EMAIL
 *   - Webhook (Zapier, Make, CRM): LEAD_WEBHOOK_URL
 * With neither set, the route answers 503 "not_configured" and the form tells the
 * visitor the request was NOT sent and to call instead.
 */

const MIN_FILL_MS = 2500; // humans don't fill this form in under ~2.5s

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  // Spam checks: honeypot filled, or submitted implausibly fast. Answer like a success so bots learn nothing.
  const elapsed = Number(body.elapsedMs ?? 0);
  if (typeof body.company === "string" && body.company.trim() !== "") return NextResponse.json({ ok: true });
  if (!Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) return NextResponse.json({ ok: true });

  const fields = Object.fromEntries(
    (Object.keys(emptyFields) as (keyof RequestFields)[]).map((k) => [k, typeof body[k] === "string" ? (body[k] as string).trim() : ""]),
  ) as RequestFields;

  const errors = validateAll(fields);
  if (Object.keys(errors).length) return NextResponse.json({ ok: false, errors }, { status: 422 });

  const summary = {
    name: fields.name,
    phone: fields.phone,
    email: fields.email || "(not provided)",
    service: labelFor(serviceOptions, fields.service),
    preferredContact: labelFor(contactMethods, fields.contactMethod),
    timing: labelFor(timingOptions, fields.timing),
    message: fields.message,
    submittedAt: new Date().toISOString(),
  };

  const { RESEND_API_KEY, LEAD_TO_EMAIL, LEAD_FROM_EMAIL, LEAD_WEBHOOK_URL } = process.env;

  try {
    if (RESEND_API_KEY && LEAD_TO_EMAIL && LEAD_FROM_EMAIL) {
      const text = [
        `New service request from the website`,
        ``,
        `Name: ${summary.name}`,
        `Phone: ${summary.phone}`,
        `Email: ${summary.email}`,
        `Service: ${summary.service}`,
        `Preferred contact: ${summary.preferredContact}`,
        `Timing: ${summary.timing}`,
        ``,
        summary.message,
      ].join("\n");
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: `${business.shortName} Website <${LEAD_FROM_EMAIL}>`,
          to: LEAD_TO_EMAIL.split(",").map((s) => s.trim()),
          reply_to: fields.email || undefined,
          subject: `Service request: ${summary.service} (${summary.name})`,
          text,
        }),
      });
      if (!res.ok) throw new Error(`Resend responded ${res.status}`);
      return NextResponse.json({ ok: true });
    }

    if (LEAD_WEBHOOK_URL) {
      const res = await fetch(LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(summary),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
      return NextResponse.json({ ok: true });
    }
  } catch (err) {
    console.error("Service request delivery failed:", err);
    return NextResponse.json(
      { ok: false, message: "Something went wrong on our end and your request was not sent." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: false, code: "not_configured" }, { status: 503 });
}
