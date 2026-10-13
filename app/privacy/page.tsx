import type { Metadata } from "next";
import { business } from "@/content/site";
import { Wordmark } from "@/components/Wordmark";

export const metadata: Metadata = {
  title: `Privacy Policy | ${business.shortName}`,
  description: `How ${business.legalName} handles information submitted through this website.`,
  alternates: { canonical: "/privacy" },
};

/* Starting draft for the owner to review before launch. */
export default function PrivacyPage() {
  return (
    <main id="main" className="legal">
      <div className="container legal__inner">
        <a href="/" className="legal__brand" aria-label={`${business.shortName} home`}>
          <Wordmark tone="dark" id="wm-legal" />
        </a>
        <h1>Privacy Policy</h1>
        <p>
          This policy explains how {business.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles information you share through this
          website.
        </p>
        <h2>What we collect</h2>
        <p>
          When you send a service request, we collect the details you enter: your name, phone number, email address (if provided), the type
          of service, your description of the problem and your contact preferences.
        </p>
        <h2>How we use it</h2>
        <p>
          We use this information only to respond to your request and to discuss the work you asked about. We do not sell your information
          or use it for unrelated marketing.
        </p>
        <h2>Who we share it with</h2>
        <p>
          Your request is delivered to us through service providers that host this website and forward form submissions (for example, an
          email delivery service). They process it only to provide that service.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about this policy, or want us to delete your information? Call <a href={business.phoneHref}>{business.phone}</a> or
          email <a href={`mailto:${business.email}`}>{business.email}</a>.
        </p>
        <p>
          <a href="/" className="legal__back">
            ← Back to the homepage
          </a>
        </p>
      </div>
    </main>
  );
}
