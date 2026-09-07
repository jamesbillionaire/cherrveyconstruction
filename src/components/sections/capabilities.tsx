import { Container } from "@/components/layout/container";
import { approach } from "@/lib/presentation";

export function CapabilitiesSection() {
  return (
    <section className="cv-section cv-approach">
      <Container>
        <p className="cv-eyebrow">How we work</p><h2 className="cv-heading">A clear approach,<br />from scope to turnover.</h2>
        <div className="cv-steps">{approach.map((item, index) => <article className="cv-step" key={item.title}><p className="cv-number">0{index + 1}</p><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
      </Container>
    </section>
  );
}
