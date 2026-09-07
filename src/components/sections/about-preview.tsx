import { Container } from "@/components/layout/container";
import { TextLink } from "@/components/layout/text-link";
import { site } from "@/lib/company";

export function AboutPreview() {
  return (
    <section className="cv-section">
      <Container className="cv-about-split">
        <div><p className="cv-eyebrow">About CHERRVEY</p><h2 className="cv-heading">Rooted in Mindanao.<br />Focused on the work.</h2><div className="cv-local-note"><strong>{site.foundedYear}</strong><span>The year our construction journey began.</span></div></div>
        <div className="cv-about-copy"><p>CHERRVEY Construction Services began operations in {site.foundedYear}. From its base in El Salvador City, Misamis Oriental, the company brings together building works, facility improvements and technical infrastructure capabilities.</p><p>Quality workmanship, practical technology and communication between office and site guide its approach to project delivery.</p><TextLink href="/about">Get to Know CHERRVEY</TextLink></div>
      </Container>
    </section>
  );
}
