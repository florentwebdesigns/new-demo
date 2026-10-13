/**
 * All business details and site copy live here.
 *
 * Every fact below comes from the company's own public pages (its current Wix site,
 * jsavinojr.wixsite.com/savinojrplumbingandh) or public business listings, as noted.
 * Anything marked VERIFY should be confirmed with the owner before the site goes live.
 * Do not add licenses, insurance, years in business, response times, emergency
 * availability, prices or guarantees unless the owner confirms them.
 */

export const business = {
  legalName: "Savino Jr Plumbing and Heating, LLC",
  shortName: "Savino Jr Plumbing & Heating",
  owner: "Joseph Savino Jr.", // Alignable business profile
  tagline: "The plumbers you can count on.", // company's own site

  // VERIFY: 908-337-9506 is the number on the company's own website. A third-party
  // article lists (732) 805-3399. Confirm which line the owner wants published.
  phone: "908-337-9506",
  phoneHref: "tel:+19083379506",

  email: "SavinoJrPlumbing@gmail.com", // company's own site

  // Colonia, NJ appears on Nextdoor, NJ business records and a supplier article.
  // "Central New Jersey" is the company's own wording. No street address is published.
  baseTown: "Colonia",
  state: "NJ",
  region: "Central New Jersey",

  // VERIFY: leave empty until the owner confirms the towns they cover.
  // Example: ["Colonia", "Woodbridge", "Iselin"]. The site lists them only when filled.
  serviceTowns: [] as string[],

  // VERIFY: no hours are published anywhere. Add them here to show them on the site,
  // e.g. [{ days: "Mon–Fri", hours: "8:00 AM – 5:00 PM" }].
  hours: [] as { days: string; hours: string }[],

  social: [
    { label: "Facebook", href: "https://www.facebook.com/savinojrplumbingandheating" },
    { label: "Instagram", href: "https://www.instagram.com/savinojrplumbingandheating" },
  ],
};

/** Statements the company makes about itself on its own website. */
export const companyStatements = {
  familyOwned: "Family owned and operated",
  freeEstimates: "Free consultations and estimates", // VERIFY still offered
  communication: "Open communication throughout every project",
  residentialAndCommercial: "Residential and commercial work",
};

export type IconName =
  | "boiler"
  | "waterHeater"
  | "drain"
  | "fixture"
  | "gas"
  | "remodel"
  | "commercial"
  | "disposal"
  | "plumbing";

export type Service = {
  id: string;
  title: string;
  summary: string;
  points?: string[];
  icon: IconName;
  featured?: boolean;
};

/**
 * Services listed on the company's own site (plus garbage disposals, from its Alignable
 * profile). Remove anything the owner no longer offers; the contact form's dropdown
 * is built from this list.
 */
export const services: Service[] = [
  {
    id: "heating",
    title: "Heating & Boiler Service",
    summary:
      "Radiators lukewarm, the boiler short-cycling, or simply due for its yearly look? Get your heating system checked, serviced and back to steady, even warmth.",
    points: ["Boiler service and tune-ups", "Heating system repairs", "Residential and commercial heating"],
    icon: "boiler",
    featured: true,
  },
  {
    id: "water-heaters",
    title: "Water Heater Replacement",
    summary: "Running out of hot water or seeing rust and leaks at the tank? Talk through replacement options that fit your home.",
    icon: "waterHeater",
  },
  {
    id: "drains",
    title: "Drain Cleaning",
    summary: "Slow sinks, backed-up tubs and stubborn clogs, cleared so water goes where it should again.",
    icon: "drain",
  },
  {
    id: "fixtures",
    title: "Toilets, Sinks & Fixtures",
    summary: "New toilet or sink installed properly, or an existing one that runs, drips or wobbles put right.",
    icon: "fixture",
  },
  {
    id: "gas-lines",
    title: "Gas Lines",
    summary: "Gas lines run for fireplaces, fire pits, outdoor grills and standby generators.",
    icon: "gas",
  },
  {
    id: "remodels",
    title: "Kitchen & Bath Remodels",
    summary: "The plumbing behind a new kitchen or bathroom, planned and installed so the finished room works as well as it looks.",
    icon: "remodel",
  },
  {
    id: "disposals",
    title: "Garbage Disposals",
    summary: "Kitchen sink disposals installed, repaired or replaced.",
    icon: "disposal",
  },
  {
    id: "general",
    title: "General Plumbing",
    summary: "Leaks, repairs and everyday plumbing work around the house, handled with care for your home.",
    icon: "plumbing",
  },
  {
    id: "commercial",
    title: "Commercial Plumbing & Heating",
    summary: "Plumbing and heating work for businesses and commercial properties.",
    icon: "commercial",
  },
];

/** Customer situations, each tied to a service above. */
export const problems = [
  { title: "The radiators are cold, or the boiler won't fire.", service: "heating" },
  { title: "There's no hot water, or the tank is leaking.", service: "water-heaters" },
  { title: "A drain is slow, gurgling or backing up.", service: "drains" },
  { title: "A toilet keeps running or a faucet won't stop dripping.", service: "fixtures" },
  { title: "You want a gas line run to a grill, fire pit or generator.", service: "gas-lines" },
  { title: "You're planning a kitchen or bathroom remodel.", service: "remodels" },
];

/**
 * Only real, attributable reviews go here, word for word, with a link to the source.
 * VERIFY: Google reviews from Joanne Lima and Cynthia Vanadium are quoted in a supplier
 * article (mchomenj.com). Copy them in full from the Google Business Profile, with the
 * owner's OK, before adding them.
 */
export const reviews = [
  {
    quote: "Joe is a very friendly and honest professional! I will continue to use Savino Jr. For my future work.",
    author: "Ryan Morrell",
    detail: "Morrell Construction",
    source: "Alignable",
    sourceUrl: "https://www.alignable.com/woodbridge-nj/savino-jr-plumbing-and-heating-llc",
  },
];

export const faqs = [
  {
    q: "What plumbing and heating services do you offer?",
    a: "Residential and commercial plumbing and heating, including boiler service, heating repairs, water heater replacement, drain cleaning, toilet and sink installation, garbage disposals, gas lines for fireplaces, fire pits, grills and generators, and the plumbing for kitchen and bathroom remodels.",
  },
  {
    q: "How do I request service?",
    a: `Call ${business.phone} to talk it through, or send a request with the form on this page and include a short description of the problem.`,
  },
  {
    q: "What areas do you serve?",
    a: `We're based in ${business.baseTown}, ${business.state} and work across ${business.region}. If you're not sure whether your town is covered, give us a call and ask.`,
  },
  {
    q: "Do you offer estimates?",
    a: "Yes. Consultations and estimates are free, so you can understand your options before any work begins.",
  },
  {
    q: "What should I include when I request service?",
    a: "Your name, the best number to reach you, what kind of work you need and a short description: what you're seeing, where it is, and when it started. Photos are easy to share once we're in touch.",
  },
  {
    q: "Do you work on commercial properties?",
    a: "Yes. Along with homes, we take on commercial plumbing and heating work. Call to discuss the project.",
  },
];

export const nav = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQs" },
  { href: "#contact", label: "Contact" },
];
