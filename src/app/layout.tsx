import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { site } from "@/lib/company";
import { defaultTitle, metadataBase, organizationJsonLd } from "@/lib/seo";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: defaultTitle,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "construction services Misamis Oriental",
    "construction company Cagayan de Oro",
    "contractor Northern Mindanao",
    "construction contractor Mindanao",
    "structured cabling contractor Cagayan de Oro",
    "network infrastructure contractor Mindanao",
    "CCTV installation contractor Cagayan de Oro",
    "government contractor Misamis Oriental",
    "facility improvement contractor Mindanao",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: site.url,
    siteName: site.name,
    title: defaultTitle,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: site.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#0E327C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = organizationJsonLd();

  return (
    <html lang="en-PH" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-brand-navy"
        >
          Skip to content
        </a>
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
