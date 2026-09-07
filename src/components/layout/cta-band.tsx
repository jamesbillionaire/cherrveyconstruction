import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/lib/company";

type CtaBandProps = { title?: string; body?: string };

export function CtaBand({ title = "Let’s talk about your next project.", body = "Share your location, the work you need and your target schedule. Start a conversation with CHERRVEY about the next step." }: CtaBandProps) {
  return (
    <section className="cv-cta">
      <Container className="cv-cta-inner">
        <div><h2>{title}</h2><p>{body}</p></div>
        <div className="cv-actions">
          <ButtonLink href="/contact" variant="cta" size="xl">Discuss a Project</ButtonLink>
          <a className="cv-cta-call" href={site.phones[0].href}>Or call {site.phones[0].display}</a>
        </div>
      </Container>
    </section>
  );
}
