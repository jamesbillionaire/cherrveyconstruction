import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { TextLink } from "@/components/layout/text-link";
import { credentialsNote, mission, site, values, vision } from "@/lib/company";
import { teamGroups } from "@/lib/presentation";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ title: "About", description: "Meet CHERRVEY Construction Services, a Mindanao-based contractor bringing together construction, facility improvements and technical infrastructure since 2021.", path: "/about" });

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero eyebrow="About CHERRVEY" title="Construction expertise. Rooted in Mindanao." description="Based in El Salvador City, Misamis Oriental, CHERRVEY brings together construction, facility improvement and technical infrastructure capabilities, with a focus on workmanship and coordinated project delivery.">
        <div className="cv-factline"><span>Established {site.foundedYear}</span><span>PCAB No. {site.pcabNumber}</span></div>
      </PageHero>
      <section className="cv-section">
        <Container className="cv-about-story">
          <div><p className="cv-eyebrow">Our story</p><h2 className="cv-heading">Built on practical experience.</h2></div>
          <div className="cv-story-text"><p>CHERRVEY Construction Services began operations in {site.foundedYear} under the leadership of {site.founder}, building on a background in general merchandise, tyres and heavy equipment.</p><p>Today, its capabilities bring construction and facility work together with the technical systems inside: structured cabling, networks, data rooms and CCTV. Government and institutional projects form part of that experience.</p><TextLink href="/projects">Explore Our Project Experience</TextLink></div>
        </Container>
      </section>
      <section className="cv-section cv-paper">
        <Container><p className="cv-eyebrow">Working together</p><h2 className="cv-heading">The people and coordination behind the work.</h2><p className="cv-lead">Clear direction between office and site brings the right skills, project support and workmanship checks to each stage.</p><div className="cv-team-grid">{teamGroups.map((item) => <article key={item.title} className="cv-team-item"><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></Container>
      </section>
      <section className="cv-section">
        <Container className="cv-purpose-grid">
          <article><p className="cv-eyebrow">Our mission</p><h2>Quality in the work we deliver.</h2><p>{mission.body}</p></article>
          <article><p className="cv-eyebrow">Our vision</p><h2>A regional foundation. A wider ambition.</h2><p>{vision.body}</p></article>
        </Container>
      </section>
      <section className="cv-section cv-paper">
        <Container className="cv-values-layout">
          <div><p className="cv-eyebrow">Our values</p><h2 className="cv-heading">PLOWING</h2><p className="cv-lead">Seven values guide how we approach our work, support our people and build relationships with clients.</p></div>
          <div className="cv-values-list">{values.map((value) => <article key={value.letter} className="cv-value"><span className="cv-value-letter" aria-hidden="true">{value.letter}</span><h3>{value.title}</h3><p>{value.body}</p></article>)}</div>
        </Container>
      </section>
      <section className="cv-section"><Container><div className="cv-credential"><div><h2>Company credentials</h2><p>PCAB No. {site.pcabNumber}</p><p>{credentialsNote}</p></div><TextLink href="/contact">Contact CHERRVEY</TextLink></div></Container></section>
      <CtaBand />
    </main>
  );
}
