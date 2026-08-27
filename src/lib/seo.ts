import type { Metadata } from "next";

import { site } from "@/lib/company";

export const defaultTitle = `${site.shortName} Construction Services | Mindanao Contractor`;

export const metadataBase = new URL(site.url);

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = new URL(path, site.url).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.shortName}`,
      description,
      url,
      siteName: site.name,
      locale: "en_PH",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.shortName}`,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "LocalBusiness", "Organization"],
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.phones.map((phone) => phone.href.replace("tel:", "")),
    foundingDate: String(site.foundedYear),
    founder: {
      "@type": "Person",
      name: site.founder,
    },
    identifier: {
      "@type": "PropertyValue",
      name: "PCAB",
      value: site.pcabNumber,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line,
      addressLocality: site.address.city,
      addressRegion: site.address.province,
      addressCountry: "PH",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Misamis Oriental",
      },
      {
        "@type": "AdministrativeArea",
        name: "Northern Mindanao",
      },
      {
        "@type": "AdministrativeArea",
        name: "Mindanao",
      },
    ],
    knowsAbout: [
      "General construction",
      "Facility improvement",
      "Structured cabling",
      "Network infrastructure",
      "Data room infrastructure",
      "CCTV installation",
      "Government contracting",
    ],
    slogan: site.tagline,
    description: site.description,
  };
}
