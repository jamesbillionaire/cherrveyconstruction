import Image from "next/image";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/lib/company";

export function HeroSection() {
  return (
    <section className="cv-home-hero">
      <Container className="cv-home-hero-grid">
        <div>
          <p className="cv-eyebrow">Construction · Facility Improvement · Technical Infrastructure</p>
          <h1><span>Building spaces.</span><span>Connecting systems.</span></h1>
          <p className="cv-lead">CHERRVEY delivers construction, facility improvements and technical infrastructure for government, commercial and institutional projects across Mindanao—from building works to the networks and systems within.</p>
          <div className="cv-actions">
            <ButtonLink href="/contact" variant="cta" size="xl">Discuss a Project</ButtonLink>
            <ButtonLink href="/projects" variant="inverse" size="xl">View Our Projects</ButtonLink>
          </div>
          <div className="cv-hero-foot"><span>Established {site.foundedYear}</span><span>PCAB No. {site.pcabNumber}</span><span>Based in Mindanao</span></div>
        </div>
        <div className="cv-hero-art" aria-hidden="true">
          <div className="cv-hero-art-panel">
            <div className="cv-hero-mark"><div className="cv-hero-mark-inner"><Image src="/brand/cherrvey-logo.png" alt="" fill sizes="(max-width: 767px) 0px, (max-width: 1023px) 30vw, 350px" className="object-contain" priority /></div></div>
            <div className="cv-hero-art-caption"><span>CHERRVEY</span><span>El Salvador City · Misamis Oriental</span></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
