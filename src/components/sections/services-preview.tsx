import Link from "next/link";

import { Container } from "@/components/layout/container";
import { SectionEyebrow } from "@/components/layout/section-eyebrow";
import { services } from "@/lib/services";

export function ServicesPreview() {
  return (
    <section className="bg-brand-paper py-20 md:py-28">
      <Container>
        <div className="flex max-w-3xl flex-col gap-4 md:flex-row md:items-end md:justify-between md:max-w-none">
          <div className="max-w-2xl">
            <SectionEyebrow>Capabilities</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              Construction and technical infrastructure, executed as one practice.
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold tracking-[0.08em] text-brand-navy uppercase underline-offset-4 hover:underline"
          >
            Explore Our Capabilities
          </Link>
        </div>

        <div className="mt-12 grid gap-px bg-border md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="bg-white p-6 sm:p-7"
            >
              <p className="font-mono text-[0.7rem] tracking-[0.18em] text-brand-red">
                {service.number}
              </p>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-brand-ink">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.summary}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
