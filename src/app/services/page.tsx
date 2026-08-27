import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { services } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "CHERRVEY provides general construction, facility upgrades, structured cabling, data-room infrastructure, CCTV systems, and documented testing and commissioning.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Services"
        title="Construction, facilities, and technical infrastructure."
        description="CHERRVEY does not treat cabling as a side trade or construction as a separate company. The same practice executes building works and the ICT systems that make facilities operable."
      />

      <section className="bg-white py-16 md:py-24">
        <Container className="space-y-px bg-border">
          {services.map((service) => (
            <article
              key={service.slug}
              id={service.slug}
              className="grid gap-6 bg-white p-6 sm:p-8 lg:grid-cols-[8rem_1fr_1fr]"
            >
              <p className="font-mono text-sm tracking-[0.18em] text-brand-red">
                {service.number}
              </p>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-brand-ink">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {service.summary}
                </p>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {service.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-2 h-px w-4 shrink-0 bg-brand-red" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Container>
      </section>

      <CtaBand
        title="Need a site assessment for construction or infrastructure work?"
        body="Describe the facility, the existing condition, and the outcome you need. CHERRVEY will respond directly."
      />
    </main>
  );
}
