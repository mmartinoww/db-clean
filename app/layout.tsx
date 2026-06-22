import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  display: "swap"
});

const siteUrl = "https://db-clean.example.com"; // TODO: replace with real domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "DB-Clean | Почистване на имоти, дворове и извозване",
  description:
    "DB-Clean — почистване на тавани, мазета и обрасли дворове, рязане на опасни дървета, косене и извозване на отпадъци с голям бус. Достъп до труднодостъпни имоти с високопроходим джип.",
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: "DB-Clean | Почистване на имоти, дворове и извозване",
    description:
      "Почистване на тавани, мазета и дворове, рязане на опасни дървета, косене и извозване на отпадъци. Възможно заплащане чрез извозените предмети.",
    url: siteUrl,
    siteName: "DB-Clean",
    locale: "bg_BG",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "DB-Clean | Почистване на имоти и дворове",
    description:
      "Почистване, рязане на дървета, косене и извозване на отпадъци с голям бус и високопроходим джип."
  },
  robots: {
    index: true,
    follow: true
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
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
