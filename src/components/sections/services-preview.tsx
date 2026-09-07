import { Container } from "@/components/layout/container";
import { TextLink } from "@/components/layout/text-link";
import { serviceGroups } from "@/lib/presentation";

export function ServicesPreview() {
  return (
    <section className="cv-section">
      <Container>
        <div className="cv-section-top">
          <div><p className="cv-eyebrow">What we do</p><h2 className="cv-heading">The space. The systems.<br />The complete scope.</h2><p className="cv-lead">Bring building works, facility improvements and technical infrastructure into one coordinated project scope.</p></div>
          <TextLink href="/services">Explore Our Services</TextLink>
        </div>
        <div className="cv-service-grid">
          {serviceGroups.map((item, index) => <article key={item.href} className="cv-service-tile"><p className="cv-number">0{index + 1}</p><h3>{item.title}</h3><p>{item.body}</p><TextLink href={item.href}>{item.linkLabel}</TextLink></article>)}
        </div>
      </Container>
    </section>
  );
}
