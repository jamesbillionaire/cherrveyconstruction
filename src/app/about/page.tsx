import { Container } from "@/components/layout/container";
import { InnerHero, ProjectCta, TextLink } from "@/components/construction/shared";
import { site, values } from "@/lib/company";
import { photos, workSteps } from "@/lib/construction";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "About", description: "Meet CHERRVEY, a Mindanao-based contractor for general construction, facility improvements and technical works. Established in 2021.", path: "/about" });

export default function AboutPage() {
  return <main id="main" className="cs-site">
    <InnerHero label="About us" title="Built on care. Backed by capability." description="A Mindanao-based contractor bringing building works, facility improvements and technical expertise together." photo={photos.construction} />
    <section className="cs-section"><Container className="cs-story"><div><p className="cs-kicker">CHERRVEY Construction Services</p><h2>Local roots.<br />Hands-on delivery.</h2><div className="cs-story-year"><strong>{site.foundedYear}</strong><span>Established in<br />Misamis Oriental</span></div></div><div><p className="cs-story-lead">We build, improve and connect the spaces people rely on.</p><p>Based in El Salvador City, CHERRVEY delivers construction and related works for government, commercial and institutional clients. Skilled people, clear coordination and quality workmanship guide the way we work.</p><div className="cs-company-facts"><span>PCAB No. {site.pcabNumber}</span><TextLink href="/contact">Company inquiries</TextLink></div></div></Container></section>
    <section className="cs-section cs-dark"><Container><div className="cs-section-head"><div><p className="cs-kicker">How we work</p><h2>Clear from start to finish.</h2></div></div><div className="cs-work-steps">{workSteps.map((step, index) => <article key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></Container></section>
    <section className="cs-section"><Container><div className="cs-purpose"><article><p className="cs-kicker">Our mission</p><h2>Do the work well.</h2><p>Deliver quality workmanship and client satisfaction through skilled people, practical technology and close coordination between office and site.</p></article><article><p className="cs-kicker">Our vision</p><h2>Grow with purpose.</h2><p>Become a leading regional construction partner, recognised for quality and commitment to people, with the ambition to serve nationwide by 2033.</p></article></div></Container></section>
    <section className="cs-section cs-paper"><Container className="cs-values-layout"><div><p className="cs-kicker">Our values</p><h2>PLOWING</h2><p className="cs-intro">The principles behind our work.</p></div><div className="cs-values">{values.map(value => <article key={value.letter}><span>{value.letter}</span><div><h3>{value.title}</h3><p>{value.body}</p></div></article>)}</div></Container></section>
    <ProjectCta />
  </main>;
}
