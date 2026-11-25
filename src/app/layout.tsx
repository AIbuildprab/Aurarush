import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Outfit } from "next/font/google";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { ClosingCta } from "@/components/layout/closing-cta";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ScrollManager } from "@/components/layout/scroll-manager";
import { SkipLink } from "@/components/layout/skip-link";
import { site } from "@/data/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "AuraRush | UK IT services and consulting",
    template: "%s | AuraRush",
  },
  description: site.description,
  applicationName: "AuraRush",
  alternates: { canonical: "/", languages: { "en-GB": "/" } },
  openGraph: {
    title: "AuraRush | UK IT services and consulting",
    description: site.description,
    siteName: "AuraRush",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/brand/og.png", width: 1200, height: 630, alt: "AuraRush" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/brand/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0F0F0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${outfit.variable} ${inter.variable} ${mono.variable} h-full`}>
      <body className="min-h-full bg-background text-foreground antialiased">
        <SkipLink />
        <Header />
        <ScrollManager />
        <main id="content">
          {children}
          <ClosingCta />
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
