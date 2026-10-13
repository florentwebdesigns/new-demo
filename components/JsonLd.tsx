import { business, services } from "@/content/site";
import { siteUrl } from "@/lib/site-url";

/*
 * Plumber structured data built only from published facts. No street address,
 * coordinates, hours or ratings are included because none are verified.
 */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": `${siteUrl}/#business`,
    name: business.legalName,
    alternateName: business.shortName,
    url: siteUrl,
    telephone: `+1-${business.phone}`,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.baseTown,
      addressRegion: business.state,
      addressCountry: "US",
    },
    areaServed: business.serviceTowns.length
      ? business.serviceTowns.map((t) => ({ "@type": "City", name: `${t}, ${business.state}` }))
      : { "@type": "State", name: "New Jersey" },
    sameAs: business.social.map((s) => s.href),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Plumbing and heating services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title },
      })),
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
