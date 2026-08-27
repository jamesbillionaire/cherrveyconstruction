import { Container } from "@/components/layout/container";
import { SectionEyebrow } from "@/components/layout/section-eyebrow";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/lib/company";

export function AboutPreview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionEyebrow>About CHERRVEY</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Built from Mindanao. Built for bigger work.
          </h2>
        </div>
        <div>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            CHERRVEY Construction Services began operations in {site.foundedYear}{" "}
            under the leadership of {site.founder}. From its base in{" "}
            {site.address.city}, {site.address.province}, the firm executes
            construction, facility improvement, and technical infrastructure
            projects for government and institutional clients.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            The practice sits at the intersection of building works and ICT
            infrastructure — structured cabling, data rooms, CCTV, and network
            rehabilitation — delivered with the documentation government and
            institutional clients require.
          </p>
          <ButtonLink href="/about" variant="outline" size="xl" className="mt-8">
            About CHERRVEY
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
