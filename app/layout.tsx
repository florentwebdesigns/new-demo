import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import { business } from "@/content/site";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const title = "Savino Jr Plumbing & Heating | Plumbing and Heating in Central New Jersey";
const description =
  "Family-owned plumbing and heating based in Colonia, NJ. Boiler service, heating repairs, water heaters, drain cleaning, fixtures and gas lines for homes and businesses across Central New Jersey.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  applicationName: business.shortName,
  openGraph: {
    type: "website",
    url: "/",
    siteName: business.legalName,
    title,
    description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#071426",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables reveal animations only when JS runs, so the page is complete without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
