// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. VIEWPORT & BROWSER-FARBEN (Next.js Standard)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0067B0", // Dein WAZ-Blau! Färbt den Header in mobilen Browsern wie Chrome auf Android blau ein.
};

// 2. PERFEKTE SEO METADATEN
export const metadata: Metadata = {
  metadataBase: new URL("https://www.waz-blankenfelde-mahlow.de"), // WICHTIG: Deine finale URL hier eintragen!
  
  title: {
    default: "WAZ Blankenfelde-Mahlow | Wasser- und Abwasserzweckverband",
    template: "%s | WAZ Blankenfelde-Mahlow", // Automatische Titel für Unterseiten (z.B. "Kontakt | WAZ Blankenfelde-Mahlow")
  },
  
  description:
    "Ihr zuverlässiger Partner für sichere Trinkwasserversorgung und umweltgerechte Abwasserentsorgung in Blankenfelde-Mahlow und Umgebung.",
  
  keywords: [
    "WAZ",
    "Blankenfelde-Mahlow",
    "Wasserversorgung",
    "Abwasserentsorgung",
    "Trinkwasser",
    "Schmutzwasser",
    "Zweckverband",
    "Zählerstand melden",
    "Wasseranschluss Brandenburg",
  ],
  
  authors: [{ name: "WAZ Blankenfelde-Mahlow" }],
  creator: "WAZ Blankenfelde-Mahlow",
  publisher: "WAZ Blankenfelde-Mahlow",
  
  // Format-Erkennung auf mobilen Geräten (verhindert falsche Verlinkungen von normalen Zahlen)
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  alternates: {
    canonical: "/",
  },
  
  // Open Graph (Wie deine Seite auf WhatsApp, Facebook, LinkedIn etc. aussieht, wenn jemand den Link teilt)
  openGraph: {
    title: "WAZ Blankenfelde-Mahlow | Wasser- und Abwasserzweckverband",
    description: "Ihr zuverlässiger Partner für sichere Trinkwasserversorgung und umweltgerechte Abwasserentsorgung.",
    url: "https://www.waz-blankenfelde-mahlow.de",
    siteName: "WAZ Blankenfelde-Mahlow",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/waz_logo_menu.webp", // Zeigt automatisch dein Logo, wenn der Link geteilt wird
        width: 800,
        height: 600,
        alt: "WAZ Blankenfelde-Mahlow Logo",
      },
    ],
  },
  
  // Twitter Card (für X / Twitter)
  twitter: {
    card: "summary_large_image",
    title: "WAZ Blankenfelde-Mahlow",
    description: "Zweckverband für Wasserversorgung und Abwasserentsorgung.",
    images: ["/waz_logo_menu.webp"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // WICHTIG: Sprache auf "de" geändert und sanftes Scrollen aktiviert!
    <html lang="de" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}