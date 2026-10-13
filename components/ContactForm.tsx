"use client";

import { useEffect, useRef, useState } from "react";
import { business } from "@/content/site";
import {
  contactMethods,
  emptyFields,
  serviceOptions,
  timingOptions,
  validateAll,
  validateField,
  type FieldErrors,
  type RequestFields,
} from "@/lib/service-request";
import { Icon } from "./Icons";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "sent" }
  | { kind: "not-configured" }
  | { kind: "error"; message: string };

export function ContactForm() {
  const [fields, setFields] = useState<RequestFields>(emptyFields);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof RequestFields, boolean>>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const startedAt = useRef(Date.now());
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  // "Request service" links elsewhere on the page pre-select the matching service.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest<HTMLElement>("[data-service]");
      const id = link?.dataset.service;
      if (id && serviceOptions.some((o) => o.value === id)) {
        setFields((f) => ({ ...f, service: id }));
        setErrors((er) => ({ ...er, service: undefined }));
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const update = (name: keyof RequestFields, value: string) => {
    const next = { ...fields, [name]: value };
    setFields(next);
    if (touched[name] || errors[name]) setErrors((er) => ({ ...er, [name]: validateField(name, next) }));
    if (name === "contactMethod") setErrors((er) => ({ ...er, email: touched.email || er.email ? validateField("email", next) : undefined }));
  };

  const blur = (name: keyof RequestFields) => {
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((er) => ({ ...er, [name]: validateField(name, fields) }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.kind === "submitting") return;

    const found = validateAll(fields);
    setErrors(found);
    setTouched(Object.fromEntries(Object.keys(fields).map((k) => [k, true])));
    const firstInvalid = (Object.keys(fields) as (keyof RequestFields)[]).find((k) => found[k]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus({ kind: "submitting" });
    const honeypot = (formRef.current?.elements.namedItem("company") as HTMLInputElement | null)?.value ?? "";
    try {
      const res = await fetch("/api/request-service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, company: honeypot, elapsedMs: Date.now() - startedAt.current }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; code?: string; errors?: FieldErrors; message?: string };
      if (res.ok && data.ok) {
        setStatus({ kind: "sent" });
        setFields(emptyFields);
        setTouched({});
      } else if (data.code === "not_configured") {
        setStatus({ kind: "not-configured" });
      } else if (data.errors) {
        setErrors(data.errors);
        setStatus({ kind: "error", message: "Please check the highlighted fields." });
      } else {
        setStatus({ kind: "error", message: data.message ?? "Something went wrong and your request was not sent." });
      }
    } catch {
      setStatus({ kind: "error", message: "We couldn't reach the server, so your request was not sent. Please check your connection." });
    }
  }

  useEffect(() => {
    if (status.kind !== "idle" && status.kind !== "submitting") statusRef.current?.focus();
  }, [status]);

  if (status.kind === "sent") {
    return (
      <div className="form-card form-card--done" ref={statusRef} tabIndex={-1} role="status">
        <span className="form-done__icon">
          <Icon name="check" />
        </span>
        <h3 className="form-card__title">Your request was sent.</h3>
        <p>
          Thanks for reaching out. We&rsquo;ll follow up using the contact details you provided. If it&rsquo;s urgent, please call{" "}
          <a href={business.phoneHref}>{business.phone}</a>.
        </p>
        <button type="button" className="btn btn--ghost-dark" onClick={() => setStatus({ kind: "idle" })}>
          Send another request
        </button>
      </div>
    );
  }

  const fieldProps = (name: keyof RequestFields) => ({
    id: `f-${name}`,
    name,
    value: fields[name],
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `f-${name}-err` : undefined,
    onBlur: () => blur(name),
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => update(name, e.target.value),
  });

  const err = (name: keyof RequestFields) =>
    errors[name] ? (
      <p className="field__error" id={`f-${name}-err`}>
        {errors[name]}
      </p>
    ) : null;

  const submitting = status.kind === "submitting";

  return (
    <form ref={formRef} className="form-card" onSubmit={onSubmit} noValidate aria-labelledby="form-title">
      <div className="form-card__head">
        <h3 id="form-title" className="form-card__title">
          Request service
        </h3>
        <p className="form-card__sub">Fields marked * are required.</p>
      </div>

      <div className="form-grid">
        <div className={`field${errors.name ? " field--error" : ""}`}>
          <label htmlFor="f-name">Full name *</label>
          <input type="text" autoComplete="name" required {...fieldProps("name")} />
          {err("name")}
        </div>

        <div className={`field${errors.phone ? " field--error" : ""}`}>
          <label htmlFor="f-phone">Phone number *</label>
          <input type="tel" inputMode="tel" autoComplete="tel" required {...fieldProps("phone")} />
          {err("phone")}
        </div>

        <div className={`field field--full${errors.email ? " field--error" : ""}`}>
          <label htmlFor="f-email">
            Email {fields.contactMethod === "email" ? "*" : <span className="field__opt">(optional)</span>}
          </label>
          <input type="email" autoComplete="email" {...fieldProps("email")} />
          {err("email")}
        </div>

        <div className={`field${errors.service ? " field--error" : ""}`}>
          <label htmlFor="f-service">Type of service *</label>
          <div className="select">
            <select required {...fieldProps("service")}>
              <option value="" disabled>
                Choose a service
              </option>
              {serviceOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          {err("service")}
        </div>

        <div className="field">
          <label htmlFor="f-timing">Preferred timing</label>
          <div className="select">
            <select {...fieldProps("timing")}>
              {timingOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={`field field--full${errors.message ? " field--error" : ""}`}>
          <label htmlFor="f-message">What do you need help with? *</label>
          <textarea rows={4} placeholder="What you're seeing, where it is, and when it started." required {...fieldProps("message")} />
          {err("message")}
        </div>

        <fieldset className="field field--full field--radios">
          <legend>Preferred contact method</legend>
          <div className="radios">
            {contactMethods.map((m) => (
              <label key={m.value} className="radio">
                <input
                  type="radio"
                  name="contactMethod"
                  value={m.value}
                  checked={fields.contactMethod === m.value}
                  onChange={(e) => update("contactMethod", e.target.value)}
                />
                <span>{m.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Spam trap: hidden from people, filled in by bots. */}
        <div className="hp" aria-hidden="true">
          <label htmlFor="f-company">Company</label>
          <input id="f-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {(status.kind === "not-configured" || status.kind === "error") && (
        <div className="form-alert" ref={statusRef} tabIndex={-1} role="alert">
          <strong>Your request was not sent.</strong>{" "}
          {status.kind === "not-configured" ? (
            <>
              Online requests aren&rsquo;t connected yet. Please call <a href={business.phoneHref}>{business.phone}</a> or email{" "}
              <a href={`mailto:${business.email}`}>{business.email}</a>.
            </>
          ) : (
            <>
              {status.message} You can also call <a href={business.phoneHref}>{business.phone}</a>.
            </>
          )}
        </div>
      )}

      <div className="form-card__foot">
        <button type="submit" className="btn btn--primary btn--lg btn--block" disabled={submitting} aria-busy={submitting}>
          {submitting ? (
            <>
              <span className="spinner" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send request
              <Icon name="arrow" />
            </>
          )}
        </button>
        <p className="form-card__privacy">
          We use your details only to respond to this request. See our <a href="/privacy">privacy policy</a>.
        </p>
      </div>
    </form>
  );
}
