import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, Instrument_Serif } from "next/font/google";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ScrollManager } from "@/components/layout/scroll-manager";
import { SkipLink } from "@/components/layout/skip-link";
import { site } from "@/data/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
  variable: "--font-bricolage",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken",
});

const title = `AuraRush | ${site.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s | AuraRush",
  },
  description: site.description,
  applicationName: "AuraRush",
  alternates: { canonical: "/", languages: { "en-GB": "/" } },
  openGraph: {
    title,
    description: site.description,
    siteName: "AuraRush",
    locale: "en_GB",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0b0910",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${bricolage.variable} ${instrumentSerif.variable} ${hanken.variable}`}>
      <body className="min-h-screen antialiased">
        <SkipLink />
        <Header />
        <ScrollManager />
        <main id="content">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
