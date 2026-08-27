import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { SectionEyebrow } from "@/components/layout/section-eyebrow";
import {
  credentialsNote,
  mission,
  organizationCapabilities,
  site,
  values,
  vision,
} from "@/lib/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "CHERRVEY Construction Services began operations in 2021 in El Salvador City, Misamis Oriental, delivering construction and technical infrastructure for government and institutional clients.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Company"
        title="A Mindanao contractor built for construction and technical infrastructure."
        description={`CHERRVEY Construction Services began operations in ${site.foundedYear} under the leadership of ${site.founder}. From ${site.address.display}, the firm delivers construction, facility improvement, and ICT infrastructure work for government and institutional clients.`}
      />

      <section className="bg-white py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <article>
            <SectionEyebrow>{mission.title}</SectionEyebrow>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {mission.body}
            </p>
          </article>
          <article>
            <SectionEyebrow>{vision.title}</SectionEyebrow>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {vision.body}
            </p>
          </article>
        </Container>
      </section>

      <section className="bg-brand-paper py-16 md:py-24">
        <Container>
          <SectionEyebrow>Core values</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            PLOWING
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            The operating standard behind CHERRVEY&apos;s project delivery —
            written for the work, not as a slogan wall.
          </p>
          <p className="mt-8 font-semibold tracking-[0.35em] text-brand-navy uppercase">
            {values.map((value) => value.letter).join(" ")}
          </p>
          <div className="mt-10 divide-y divide-border border-y border-border bg-white">
            {values.map((value) => (
              <article
                key={value.letter}
                className="grid gap-3 px-5 py-7 sm:grid-cols-[4.5rem_1fr] sm:gap-8 sm:px-8"
              >
                <p className="text-4xl font-semibold tracking-tight text-brand-blue">
                  {value.letter}
                </p>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-brand-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {value.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <SectionEyebrow>Operating philosophy</SectionEyebrow>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Site and office stay connected. The work stays documented.
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="border border-border p-6">
              <h3 className="font-semibold tracking-tight text-brand-ink">
                Coordinated execution
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Professional personnel and skilled partners implement the scope
                with clear direction between office and site.
              </p>
            </article>
            <article className="border border-border p-6">
              <h3 className="font-semibold tracking-tight text-brand-ink">
                Visible progress
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Practical technology and systematic monitoring keep schedule,
                issues, and decisions in view.
              </p>
            </article>
            <article className="border border-border p-6">
              <h3 className="font-semibold tracking-tight text-brand-ink">
                Cost-conscious delivery
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Workmanship and client requirements come first, executed with
                attention to schedule and cost.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-brand-paper py-16 md:py-24">
        <Container>
          <SectionEyebrow>Team capability</SectionEyebrow>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            The functions required to take a project from award to turnover.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Individual staff profiles are not published here. The organization
            is structured around the capabilities below.
          </p>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {organizationCapabilities.map((item) => (
              <article key={item.title} className="bg-white p-6">
                <h3 className="font-semibold tracking-tight text-brand-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container className="max-w-3xl">
          <SectionEyebrow>Credentials</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink">
            PCAB No. {site.pcabNumber}
          </h2>
          <p className="mt-4 text-muted-foreground">{credentialsNote}</p>
        </Container>
      </section>

      <CtaBand />
    </main>
  );
}
