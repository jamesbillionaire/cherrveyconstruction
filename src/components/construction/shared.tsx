import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/lib/company";
import { photos, projectPhotos, projectTitles, type SitePhoto } from "@/lib/construction";
import { projectPath, type Project } from "@/lib/projects";
import "../../app/construction.css";

export function Arrow() {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" /></svg>;
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="cs-link">{children}<Arrow /></Link>;
}

export function Photo({ photo, className = "", priority = false, project = false }: { photo: SitePhoto; className?: string; priority?: boolean; project?: boolean }) {
  return <figure className={`cs-photo ${className}`}>
    <Image src={photo.src} alt={`${photo.alt} (illustrative stock photo)`} fill sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 700px" className="cs-photo-image" priority={priority} />
    <figcaption>{project ? "Illustrative photo · not the project site" : "Illustrative photo"}</figcaption>
  </figure>;
}

export function InnerHero({ label, title, description, photo = photos.construction, parent, children }: {
  label: string; title: string; description: string; photo?: SitePhoto;
  parent?: { label: string; href: string }; children?: ReactNode;
}) {
  return <section className="cs-inner-hero">
    <Container>
      <nav className="cs-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span aria-hidden="true">/</span>
        {parent ? <><Link href={parent.href}>{parent.label}</Link><span aria-hidden="true">/</span></> : null}
        <span aria-current="page">{parent ? "Project details" : label}</span>
      </nav>
      <div className="cs-inner-grid">
        <div className="cs-inner-copy"><p className="cs-kicker">{label}</p><h1>{title}</h1><p className="cs-intro">{description}</p>{children}</div>
        <Photo photo={photo} className="cs-inner-photo" priority project={Boolean(parent)} />
      </div>
    </Container>
  </section>;
}

export function ProjectTile({ project }: { project: Project }) {
  return <article className="cs-project-card">
    <Link href={projectPath(project.slug)} className="cs-project-image-link" aria-label={`View ${projectTitles[project.slug]} for ${project.client}`}>
      <Photo photo={projectPhotos[project.slug]} project />
      <span className="cs-project-category">{project.category}</span>
    </Link>
    <div className="cs-project-body"><p className="cs-project-client">{project.clientShort}</p><h3><Link href={projectPath(project.slug)}>{projectTitles[project.slug]}</Link></h3>
      <div className="cs-project-foot"><span>{project.city} · {project.year}</span><Link href={projectPath(project.slug)} aria-label={`Explore ${projectTitles[project.slug]}`}><span>View project</span><Arrow /></Link></div>
    </div>
  </article>;
}

export function ProjectCta({ title = "Have a project in mind?", body = "Tell us the scope, location and your target schedule." }: { title?: string; body?: string }) {
  return <section className="cs-cta"><Container className="cs-cta-inner"><div><p className="cs-kicker">Build with CHERRVEY</p><h2>{title}</h2><p>{body}</p></div><div className="cs-actions"><ButtonLink href="/contact" variant="cta" size="xl">Discuss a Project <Arrow /></ButtonLink><a href={`mailto:${site.email}`} className="cs-cta-email">{site.email}</a></div></Container></section>;
}
