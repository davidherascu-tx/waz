import type { NextConfig } from "next";

// Sicherheits-Header, die für alle Seiten gelten.
// Sie kosten keine Ladezeit, verbessern aber die Bewertung in Security-Scans
// und schützen vor Clickjacking und MIME-Sniffing.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  // Verrät nicht mehr per Header, dass Next.js eingesetzt wird.
  poweredByHeader: false,

  // Sorgt für saubere, eindeutige URLs: /kontakt/ leitet auf /kontakt um.
  // Doppelte URLs sind einer der häufigsten SEO-Fehler.
  trailingSlash: false,

  compress: true,

  images: {
    // Moderne Formate sind deutlich kleiner als JPEG/PNG.
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // PDFs und Videos ändern sich praktisch nie und dürfen lange im
        // Browser-Cache bleiben.
        source: "/news/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
      {
        source: "/service/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
      {
        source: "/wassertropfen.mp4",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
