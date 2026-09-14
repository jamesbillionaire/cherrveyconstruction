import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { InquiryForm } from "@/components/construction/inquiry-form";
import { site } from "@/lib/company";
import { pageMetadata } from "@/lib/seo";
import "../construction.css";

export const metadata = pageMetadata({ title: "Contact", description: "Discuss construction, renovation or technical works with CHERRVEY. Call us or prepare a project inquiry for info@cherrveyconstruction.com.", path: "/contact" });

export default function ContactPage() {
  return <main id="main" className="cs-site cs-contact-page">
    <Container><nav className="cs-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Contact</span></nav><header className="cs-contact-heading"><div><p className="cs-kicker">Contact CHERRVEY</p><h1>Let’s talk<br />about your project.</h1></div><p>Construction, improvements or technical works.<br />Start with what you need.</p></header>
    <div className="cs-contact-grid"><aside className="cs-contact-panel"><p className="cs-kicker">Get in touch</p><h2>A direct line<br />to CHERRVEY.</h2><div className="cs-contact-detail"><Mail aria-hidden="true" /><div><h3>Email</h3><a href={`mailto:${site.email}`}>{site.email}</a></div></div><div className="cs-contact-detail"><Phone aria-hidden="true" /><div><h3>Call us</h3>{site.phones.map(phone => <a key={phone.href} href={phone.href}>{phone.display}</a>)}</div></div><div className="cs-contact-detail"><MapPin aria-hidden="true" /><div><h3>Our address</h3><address>{site.address.display}</address></div></div><div className="cs-contact-bottom"><p>{site.name}</p><span>PCAB No. {site.pcabNumber}</span></div></aside><InquiryForm /></div>
    </Container>
  </main>;
}
