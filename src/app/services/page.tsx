import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { TextLink } from "@/components/layout/text-link";
import { services, type Service } from "@/lib/services";
import { serviceProjectLinks } from "@/lib/presentation";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ title: "Services", description: "Explore CHERRVEY’s construction, facility improvement, structured cabling, data-room, CCTV and commissioning services for projects across Mindanao.", path: "/services" });

function ServiceDetail({ service }: { service: Service }) {
  const proof = serviceProjectLinks[service.slug];
  return <article id={service.slug} className="cv-service-detail"><p className="cv-number">{service.number}</p><div><h2>{service.title}</h2><p>{service.summary}</p></div><div><ul className="cv-scope-list">{service.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><div className="cv-service-proof"><TextLink href={proof?.href ?? "/contact"}>{proof?.label ?? "Discuss Your Construction Project"}</TextLink></div></div></article>;
}

export default function ServicesPage() {
  const construction = services.slice(0, 2);
  const technical = services.slice(2, 5);
  const delivery = services[5];
  return (
    <main id="main">
      <PageHero eyebrow="Our capabilities" title="From building works to connected systems." description="Explore construction, facility improvement and technical infrastructure services for your next project—from the physical works to the cabling, equipment and systems within." />
      <Container><nav className="cv-service-index" aria-label="Service areas">{services.map((service) => <a href={`#${service.slug}`} key={service.slug}><span>{service.number}</span>{service.navTitle}</a>)}</nav></Container>
      <section className="cv-section">
        <Container>
          <div className="cv-service-chapter"><p className="cv-service-chapter-title">Construction & Facilities</p>{construction.map((service) => <ServiceDetail key={service.slug} service={service} />)}</div>
          <div className="cv-service-chapter"><p className="cv-service-chapter-title">Technical Infrastructure</p>{technical.map((service) => <ServiceDetail key={service.slug} service={service} />)}</div>
          <article className="cv-delivery" id={delivery.slug}><div><p className="cv-eyebrow">Project handover</p><h2 className="mt-4">{delivery.title}</h2><p className="cv-lead">{delivery.summary}</p></div><div><ul className="cv-scope-list">{delivery.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><div className="cv-service-proof"><TextLink href="/projects/emb-region-ix-data-network">Explore the EMB IX Network Project</TextLink></div></div></article>
        </Container>
      </section>
      <CtaBand title="Bring your project requirements to CHERRVEY." body="Tell us about your site and the construction, facility or technical work you need. We can discuss the scope and next steps." />
    </main>
  );
}
