import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/lib/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ title: "Contact", description: "Discuss your construction, facility improvement or technical infrastructure project with CHERRVEY in El Salvador City, Misamis Oriental.", path: "/contact" });
const inquiryHref = `mailto:${site.email}?subject=${encodeURIComponent("Project inquiry — CHERRVEY Construction Services")}`;

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero eyebrow="Discuss a project" title="Tell us about your next project." description="Planning construction, a facility upgrade or a network installation? Share your site location and requirements with CHERRVEY."><div className="cv-actions"><ButtonLink href={inquiryHref} variant="cta" size="xl">Email Your Project Brief</ButtonLink></div></PageHero>
      <section className="cv-section">
        <Container className="cv-contact-layout">
          <div><p className="cv-eyebrow">Get in touch</p><h2 className="cv-heading">A direct conversation starts here.</h2><div className="mt-8"><a href={inquiryHref} className="cv-contact-method"><small>Email CHERRVEY</small><strong>{site.email}</strong></a>{site.phones.map((phone, index) => <a key={phone.href} href={phone.href} className="cv-contact-method"><small>{index === 0 ? "Call us" : "Alternative contact number"}</small><strong>{phone.display}</strong></a>)}<address className="cv-contact-address"><strong>{site.name}</strong><br />{site.address.display}</address></div></div>
          <aside className="cv-inquiry-guide"><h2>Start with your project requirements.</h2><p>Send a brief description of the work, the site location and your target schedule. Include drawings or scope documents in your email when available.</p><ol><li><strong>Where is the project?</strong>Share the city and the type of facility.</li><li><strong>What work do you need?</strong>Outline the construction, improvement or technical scope.</li><li><strong>What is your target schedule?</strong>Let us know your intended start date or project deadline.</li></ol><div className="cv-actions"><ButtonLink href={site.phones[0].href} variant="outline" size="xl">Call CHERRVEY</ButtonLink></div></aside>
        </Container>
      </section>
    </main>
  );
}
