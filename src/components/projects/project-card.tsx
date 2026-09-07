import Link from "next/link";
import { ProjectVisual } from "@/components/brand/project-visual";
import { LinkArrow } from "@/components/layout/text-link";
import { projectPath, type Project } from "@/lib/projects";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <Link href={projectPath(project.slug)} className={featured ? "cv-project-feature" : "cv-project-card"}>
      <ProjectVisual project={project} className={featured ? "cv-feature-visual" : "cv-card-visual"} />
      <div className={featured ? "cv-feature-body" : "cv-card-body"}>
        <p className="cv-project-client">{project.clientShort}</p>
        <h3 className="cv-project-title">{project.title}</h3>
        <p className="cv-project-summary">{project.summary}</p>
        {featured && project.slug === "csc-network-rehabilitation" ? (
          <dl className="cv-scope-numbers" aria-label="Specified project scope">
            <div><dt>102</dt><dd>Network nodes</dd></div>
            <div><dt>5</dt><dd>Managed switches</dd></div>
            <div><dt>8</dt><dd>Wireless access points</dd></div>
          </dl>
        ) : null}
        <div className="cv-project-bottom"><span>{project.year} · {project.location.includes("Pagadian") ? "Pagadian City" : "Cagayan de Oro"}</span><strong>Explore Project <LinkArrow /></strong></div>
      </div>
    </Link>
  );
}
