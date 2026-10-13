import { services } from "@/content/site";

/** Shared by the form (inline validation) and the API route (server-side validation). */

export const serviceOptions = [...services.map((s) => ({ value: s.id, label: s.title })), { value: "other", label: "Something else" }];

export const contactMethods = [
  { value: "phone", label: "Phone call" },
  { value: "email", label: "Email" },
] as const;

export const timingOptions = [
  { value: "", label: "No preference" },
  { value: "soon", label: "As soon as possible" },
  { value: "week", label: "Within the next week or two" },
  { value: "flexible", label: "I'm flexible" },
  { value: "planning", label: "Planning ahead / looking for an estimate" },
];

export type RequestFields = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  contactMethod: string;
  timing: string;
};

export type FieldErrors = Partial<Record<keyof RequestFields, string>>;

export const emptyFields: RequestFields = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
  contactMethod: "phone",
  timing: "",
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function phoneDigits(v: string) {
  const d = v.replace(/\D/g, "");
  return d.length === 11 && d.startsWith("1") ? d.slice(1) : d;
}

export function validateField(name: keyof RequestFields, f: RequestFields): string | undefined {
  const v = f[name].trim();
  switch (name) {
    case "name":
      if (!v) return "Please enter your name.";
      if (v.length < 2) return "Please enter your full name.";
      if (v.length > 100) return "Please keep your name under 100 characters.";
      return;
    case "phone":
      if (!v) return "Please enter a phone number so we can reach you.";
      if (phoneDigits(v).length !== 10) return "Please enter a 10-digit phone number, e.g. 908-555-0123.";
      return;
    case "email":
      if (!v) return f.contactMethod === "email" ? "Please enter your email, or choose phone as your contact method." : undefined;
      if (!EMAIL.test(v) || v.length > 200) return "Please enter a valid email address, e.g. name@example.com.";
      return;
    case "service":
      if (!serviceOptions.some((o) => o.value === v)) return "Please choose the type of service you need.";
      return;
    case "message":
      if (!v) return "Please describe the problem or the work you need.";
      if (v.length < 10) return "A little more detail helps. Please add a sentence or two.";
      if (v.length > 2000) return "Please keep the description under 2,000 characters.";
      return;
    case "contactMethod":
      if (!contactMethods.some((m) => m.value === v)) return "Please choose how you'd like us to contact you.";
      return;
    case "timing":
      if (!timingOptions.some((o) => o.value === v)) return "Please choose a timing option.";
      return;
  }
}

export function validateAll(f: RequestFields): FieldErrors {
  const errors: FieldErrors = {};
  (Object.keys(emptyFields) as (keyof RequestFields)[]).forEach((k) => {
    const e = validateField(k, f);
    if (e) errors[k] = e;
  });
  return errors;
}

export function labelFor(list: readonly { value: string; label: string }[], value: string) {
  return list.find((o) => o.value === value)?.label ?? value;
}
