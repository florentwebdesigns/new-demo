# Savino Jr Plumbing & Heating — website demo

Prospective-client demo by FD Web Designs LLC for **Savino Jr Plumbing and Heating, LLC** (Colonia, NJ).

Next.js (App Router) with plain CSS. No UI or animation libraries: motion is CSS plus one small
IntersectionObserver for scroll reveals, and it all respects `prefers-reduced-motion`.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint    # type check
```

## Deploy on Vercel

Import the repository in Vercel. The Next.js preset is detected automatically; no build settings are needed.

## Service request form

The form posts to `app/api/request-service/route.ts`, which validates the request and forwards it server-side.
Set **one** delivery method in Vercel → Project → Settings → Environment Variables (see `.env.example`):

| Option | Variables |
| --- | --- |
| Email via [Resend](https://resend.com) | `RESEND_API_KEY`, `LEAD_TO_EMAIL`, `LEAD_FROM_EMAIL` |
| Webhook (Zapier, Make, CRM…) | `LEAD_WEBHOOK_URL` |

Until one is configured the form tells visitors their request was **not** sent and to call or email instead.
It never shows a success message unless delivery succeeded. Spam protection: a hidden honeypot field and a
minimum fill time, checked on the server.

## Editing content

All business details and copy live in `content/site.ts`. Every fact there comes from the company's own
website or public listings; items marked `VERIFY` need the owner's confirmation.

### Confirm with the owner before launch

- **Phone number.** The site uses 908-337-9506 (from the company's own website). A third-party article lists
  (732) 805-3399. Confirm which line to publish.
- **Free consultations and estimates.** Stated on the company's website; confirm it's still offered.
- **Service area.** The site says "based in Colonia, NJ, serving Central New Jersey". Add confirmed towns to
  `business.serviceTowns` to list them.
- **Hours.** None published. Add to `business.hours` to show them.
- **Years in business.** Left out on purpose: the current site says both "established 2021" and "over 18 years".
- **Licensing and insurance.** Not shown. Add only with license numbers the owner provides.
- **Reviews.** One verified recommendation (Alignable) is shown. Google reviews from Joanne Lima and Cynthia
  Vanadium are quoted in a supplier article; copy them in full from the Google Business Profile, with the
  owner's OK, before adding them to `reviews`.
- **Services.** Taken from the company's site and Alignable profile. Remove anything no longer offered; the
  form dropdown follows the list.
- **Logo.** The wordmark (`components/Wordmark.tsx`) is a temporary text treatment, not the official logo.
- **Photography.** The hero uses a custom technical illustration (`components/HeroArt.tsx`), not photos of
  real jobs. A project gallery is intentionally omitted until the owner supplies real work photos.
- **Privacy policy.** `app/privacy/page.tsx` is a starting draft for the owner to review.
- **Domain.** Set `NEXT_PUBLIC_SITE_URL` once known.

### Sources

- Company website: https://jsavinojr.wixsite.com/savinojrplumbingandh
- Alignable profile: https://www.alignable.com/woodbridge-nj/savino-jr-plumbing-and-heating-llc
- Supplier article: https://mchomenj.com/uncategorized/supplier-highlight-savino-jr-plumbing-amp-heating/
- Nextdoor listing (Colonia, NJ): https://nextdoor.com/pages/savino-jr-plumbing-and-heating-llc-colonia-nj/
