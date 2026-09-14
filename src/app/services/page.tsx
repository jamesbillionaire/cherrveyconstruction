import { Container } from "@/components/layout/container";
import { InnerHero, Photo, ProjectCta, TextLink } from "@/components/construction/shared";
import { photos, serviceCards } from "@/lib/construction";
import { serviceProjectLinks } from "@/lib/presentation";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Services", description: "General construction, renovation, facility improvements, structured cabling, CCTV and technical-room works from CHERRVEY in Mindanao.", path: "/services" });

export default function ServicesPage() {
  const construction = serviceCards.filter(service => service.group === "construction");
  const technical = serviceCards.filter(service => service.group === "technical");
  const handover = serviceCards[5];
  return <main id="main" className="cs-site">
    <InnerHero label="Services" title="Built around your project." description="Construction first. Facility improvements and technical systems to complete the scope." photo={photos.facility} />
    <Container><nav className="cs-service-nav" aria-label="Services on this page">{serviceCards.map(service => <a key={service.id} href={`#${service.id}`}><span>{service.number}</span>{service.title}</a>)}</nav></Container>
    <section className="cs-section"><Container><div className="cs-section-head"><div><p className="cs-kicker">Construction & facilities</p><h2>Build new. Make better.</h2></div></div><div className="cs-service-grid cs-service-primary">{construction.map(service => <ServiceCard key={service.id} service={service} />)}</div></Container></section>
    <section className="cs-section cs-paper"><Container><div className="cs-section-head"><div><p className="cs-kicker">Technical works</p><h2>Connect what matters.</h2></div></div><div className="cs-service-grid">{technical.map(service => <ServiceCard key={service.id} service={service} />)}</div></Container></section>
    <section className="cs-section" id={handover.id}><Container className="cs-turnover"><div><p className="cs-kicker">06 / Testing & turnover</p><h2>Ready for handover.</h2><p>The testing, training and documentation your project requires.</p></div><ul className="cs-checklist">{handover.details.map(detail => <li key={detail}>{detail}</li>)}</ul><TextLink href="/projects/emb-region-ix-data-network">See project</TextLink></Container></section>
    <ProjectCta title="Let’s scope your project." />
  </main>;
}

function ServiceCard({ service }: { service: (typeof serviceCards)[number] }) {
  const related = serviceProjectLinks[service.id];
  return <article className="cs-service-card" id={service.id}>
    <Photo photo={service.photo} /><div className="cs-service-content"><span className="cs-index">{service.number}</span><h3>{service.title}</h3><p>{service.summary}</p><ul className="cs-checklist">{service.details.map(detail => <li key={detail}>{detail}</li>)}</ul><TextLink href={related?.href || "/contact"}>{related ? "View related project" : "Discuss construction works"}</TextLink></div>
  </article>;
}
