import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { ScrollToTop } from "./components/scroll-to-top";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  display: "swap"
});

import { PHONE_DISPLAY, OG_IMAGE_SRC, SITE_URL, withTrailingSlash } from "./lib/site";

const siteUrl = SITE_URL;
const canonicalUrl = `${SITE_URL}${withTrailingSlash("/")}`;
const siteName = "DB-Clean";
const sitePhone = PHONE_DISPLAY;

const titleTemplate = `%s | ${siteName}`;
const defaultTitle = "DB-Clean | Почистване на имоти, дворове и извозване — София и Перник";
const defaultDescription =
  "DB-Clean извършва почистване на тавани и мазета, разчистване на обрасли дворове, рязане на опасни дървета, косене и извозване на отпадъци с голям бус. Достъп до труднодостъпни имоти с джип 4x4. Обслужваме София, Перник и околията.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // ── Title ───────────────────────────────────────────────────────────────
  title: {
    default: defaultTitle,
    template: titleTemplate
  },

  // ── Description & keywords ──────────────────────────────────────────────
  description: defaultDescription,
  keywords: [
    "почистване на тавани",
    "почистване на мазета",
    "разчистване на дворове",
    "рязане на опасни дървета",
    "извозване на отпадъци",
    "косене на дворове",
    "почистване на имоти",
    "почистване София",
    "почистване Перник",
    "извозване с бус",
    "почистване на тавани и мазета Sofia",
    "DB-Clean"
  ],

  // ── Canonical & alternates ──────────────────────────────────────────────
  alternates: {
    canonical: canonicalUrl,
    languages: {
      "bg-BG": canonicalUrl
    }
  },

  // ── Open Graph ──────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: canonicalUrl,
    siteName,
    title: defaultTitle,
    description:
      "Почистване на тавани, мазета и дворове, рязане на опасни дървета, косене и извозване с голям бус — DB-Clean, София и Перник. Възможно плащане чрез извозените предмети.",
    images: [
      {
        url: `${siteUrl}${OG_IMAGE_SRC}`,
        width: 1200,
        height: 630,
        alt: "DB-Clean — почистване на имоти и извозване на отпадъци"
      }
    ]
  },

  // ── Twitter / X Card ────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description:
      "Почистване на тавани, мазета и дворове, рязане на дървета, косене и извозване — DB-Clean, София и Перник.",
    images: [`${siteUrl}${OG_IMAGE_SRC}`]
  },

  // ── Robots ──────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },

  // ── Icons (favicon.ico in /app is auto-served by Next.js) ───────────────
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: "/icons/icon-192.png"
  },

  // ── Verification (add real tokens when available) ───────────────────────
  // verification: {
  //   google: "REPLACE_WITH_GOOGLE_SITE_VERIFICATION_TOKEN",
  // },

  // ── Additional meta ─────────────────────────────────────────────────────
  authors: [{ name: siteName, url: siteUrl }],
  category: "Почистване и извозване",
  other: {
    // Geographic targeting
    "geo.region": "BG-22", // Sofia Province
    "geo.placename": "Sofia, Bulgaria",
    // Contact
    "contact:phone_number": sitePhone
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bg">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#283618" />
      </head>
      <body className={montserrat.className}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
