import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/lib/company";
import { getFeaturedProjects } from "@/lib/projects";
import { photos } from "@/lib/construction";
import { Arrow, Photo, ProjectCta, ProjectTile, TextLink } from "./shared";

export function ConstructionHome() {
  return <main id="main" className="cs-site">
    <section className="cs-home-hero"><Container className="cs-home-grid">
      <div className="cs-home-copy"><p className="cs-kicker">General construction · Mindanao</p><h1>Built to<br /><span>deliver.</span></h1><p className="cs-intro">Construction, facility improvements and technical works for public and private projects.</p><div className="cs-actions"><ButtonLink href="/contact" variant="cta" size="xl" className="w-full sm:w-auto">Discuss a Project <Arrow /></ButtonLink><ButtonLink href="/projects" variant="inverse" size="xl" className="w-full sm:w-auto">View Projects</ButtonLink></div><p className="cs-home-note">From the first site discussion to project turnover.</p></div>
      <div className="cs-home-image"><Photo photo={photos.construction} priority /><div className="cs-image-caption"><span>Construction. Improvement. Delivery.</span><span aria-hidden="true">01 / CHERRVEY</span></div></div>
    </Container></section>
    <section className="cs-trust"><Container className="cs-trust-grid"><p><strong>{site.foundedYear}</strong><span>Established</span></p><p><strong>{site.pcabNumber}</strong><span>PCAB number</span></p><p><strong>Mindanao</strong><span>Based in Misamis Oriental</span></p></Container></section>
    <section className="cs-section"><Container><div className="cs-section-head"><div><p className="cs-kicker">What we do</p><h2>Build. Improve. Connect.</h2></div><TextLink href="/services">Our services</TextLink></div>
      <div className="cs-offerings">
        <article><span className="cs-index">01</span><h3>General construction</h3><p>Building and civil works, with attention to every detail.</p><TextLink href="/services#general-construction">Construction</TextLink></article>
        <article><span className="cs-index">02</span><h3>Facility improvements</h3><p>Renovation and rehabilitation for spaces that need more.</p><TextLink href="/services#facility-upgrades">Improvements</TextLink></article>
        <article><span className="cs-index">03</span><h3>Technical infrastructure</h3><p>Cabling, networks, data rooms and CCTV systems.</p><TextLink href="/services#structured-cabling">Technical works</TextLink></article>
      </div>
    </Container></section>
    <section className="cs-section cs-paper"><Container><div className="cs-section-head"><div><p className="cs-kicker">Selected work</p><h2>Experience on the ground.</h2></div><TextLink href="/projects">All projects</TextLink></div><div className="cs-project-grid">{getFeaturedProjects().map(project => <ProjectTile key={project.slug} project={project} />)}</div><div className="cs-client-line"><span>Government project experience</span><p>PPA <i> / </i> CSC <i> / </i> DTI <i> / </i> EMB IX</p></div></Container></section>
    <section className="cs-section"><Container className="cs-home-about"><Photo photo={photos.facility} /><div><p className="cs-kicker">Why CHERRVEY</p><h2>Good work starts<br />with the right team.</h2><ul className="cs-reasons"><li><span>01</span><div><h3>Construction-first capability</h3><p>Building works and technical systems in one project scope.</p></div></li><li><span>02</span><div><h3>Clear coordination</h3><p>Communication between the site, office and client.</p></div></li><li><span>03</span><div><h3>Care through completion</h3><p>Workmanship, checks and the agreed handover.</p></div></li></ul><TextLink href="/about">About CHERRVEY</TextLink></div></Container></section>
    <ProjectCta />
  </main>;
}
