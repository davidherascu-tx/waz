// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { siteConfig, absoluteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// 1. VIEWPORT & BROWSER-FARBEN (Next.js Standard)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0067B0", // Dein WAZ-Blau! Färbt den Header in mobilen Browsern wie Chrome auf Android blau ein.
};

// 2. SEO-BASIS FÜR ALLE SEITEN
// Achtung: Hier steht bewusst KEIN `alternates.canonical`. Ein Canonical im
// Root-Layout würde an jede Unterseite vererbt und Google mitteilen, dass alle
// Seiten Kopien der Startseite sind. Jede Seite setzt ihr Canonical selbst.
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} | Wasser- und Abwasserzweckverband`,
    template: `%s | ${siteConfig.name}`, // Automatische Titel für Unterseiten (z.B. "Kontakt | WAZ Blankenfelde-Mahlow")
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,

  // Format-Erkennung auf mobilen Geräten (verhindert falsche Verlinkungen von normalen Zahlen)
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Google Search Console: Bestätigungs-Code als Umgebungsvariable
  // NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION hinterlegen – kein Code-Deploy nötig.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,

  // Open Graph (Wie deine Seite auf WhatsApp, Facebook, LinkedIn etc. aussieht, wenn jemand den Link teilt)
  openGraph: {
    title: `${siteConfig.name} | Wasser- und Abwasserzweckverband`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 800,
        height: 600,
        alt: `${siteConfig.name} Logo`,
      },
    ],
  },

  // Twitter Card (für X / Twitter)
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: "Zweckverband für Wasserversorgung und Abwasserentsorgung.",
    images: [siteConfig.ogImage],
  },

  // Bots & Suchmaschinen (sagt Google, dass alles ausgelesen werden darf)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// 3. STRUCTURED DATA (schema.org)
// Erlaubt Google, Adresse, Telefonnummer und Öffnungszeiten direkt in den
// Suchergebnissen und im Knowledge Panel anzuzeigen.
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  "@id": absoluteUrl("/#organization"),
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: absoluteUrl("/waz_logo_menu.webp"),
  image: absoluteUrl("/waz_logo_menu.webp"),
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  faxNumber: siteConfig.fax,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.street,
    postalCode: siteConfig.postalCode,
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.region,
    addressCountry: siteConfig.country,
  },
  areaServed: [
    { "@type": "Place", name: "Blankenfelde" },
    { "@type": "Place", name: "Mahlow" },
    { "@type": "Place", name: "Dahlewitz" },
    { "@type": "Place", name: "Groß Kienitz" },
    { "@type": "Place", name: "Jühnsdorf" },
    { "@type": "Place", name: "Diedersdorf" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      availableLanguage: ["de"],
    },
    {
      "@type": "ContactPoint",
      contactType: "emergency",
      telephone: siteConfig.emergencyPhone,
      availableLanguage: ["de"],
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Tuesday",
      opens: "13:00",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "09:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "13:00",
      closes: "18:00",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  url: siteConfig.url,
  name: siteConfig.name,
  inLanguage: "de-DE",
  publisher: { "@id": absoluteUrl("/#organization") },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // WICHTIG: Sprache auf "de" gesetzt und sanftes Scrollen aktiviert!
    <html lang="de" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          // Statisches, im Code definiertes Objekt – keine Nutzereingaben.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
