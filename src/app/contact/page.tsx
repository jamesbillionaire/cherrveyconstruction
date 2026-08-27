import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/lib/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact CHERRVEY Construction Services in El Salvador City, Misamis Oriental to discuss construction, facility improvement, or technical infrastructure work.",
  path: "/contact",
});

const inquiryHref = `mailto:${site.email}?subject=${encodeURIComponent("Project inquiry — CHERRVEY Construction Services")}`;

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Contact"
        title="Tell us what you’re building, upgrading, or rehabilitating."
        description="Reach CHERRVEY directly by telephone or email. There is no web form on this page — inquiries go to the company, not into an unmonitored inbox."
      />

      <section className="bg-white py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-ink">
              Start a project conversation
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Include the site location, the current condition of the facility or
              network, and the work you need performed. We will review the
              inquiry and respond.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={inquiryHref} variant="cta" size="xl">
                Email CHERRVEY
              </ButtonLink>
              <ButtonLink href={site.phones[0].href} variant="outline" size="xl">
                Call {site.phones[0].display}
              </ButtonLink>
            </div>
          </div>

          <div className="border border-border bg-brand-paper p-6 sm:p-8">
            <h2 className="text-lg font-semibold tracking-tight text-brand-ink">
              {site.name}
            </h2>
            <address className="mt-6 not-italic">
              <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-brand-steel uppercase">
                Address
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                {site.address.display}
              </p>

              <p className="mt-6 text-[0.65rem] font-semibold tracking-[0.16em] text-brand-steel uppercase">
                Telephone
              </p>
              <div className="mt-2 flex flex-col gap-1">
                {site.phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="text-sm font-medium text-brand-navy hover:underline"
                  >
                    {phone.display}
                  </a>
                ))}
              </div>

              <p className="mt-6 text-[0.65rem] font-semibold tracking-[0.16em] text-brand-steel uppercase">
                Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block text-sm font-medium break-all text-brand-navy hover:underline"
              >
                {site.email}
              </a>

              <p className="mt-6 font-mono text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                PCAB No. {site.pcabNumber}
              </p>
            </address>
          </div>
        </Container>
      </section>
    </main>
  );
}
