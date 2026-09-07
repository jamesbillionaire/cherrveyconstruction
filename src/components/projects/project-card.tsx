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
        {featured && project.scopeMetrics?.length ? (
          <dl className="cv-scope-numbers grid! grid-cols-3 gap-4!" aria-label="Specified project scope">
            {project.scopeMetrics.map((metric) => <div key={metric.label}><dt>{metric.value}</dt><dd>{metric.label}</dd></div>)}
          </dl>
        ) : null}
        <div className="cv-project-bottom"><span>{project.year} · {project.city}</span><strong>Explore Project <LinkArrow /></strong></div>
      </div>
    </Link>
  );
}
