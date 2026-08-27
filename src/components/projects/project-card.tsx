import Link from "next/link";

import { ProjectVisual } from "@/components/brand/project-visual";
import { projectPath, type Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={projectPath(project.slug)}
      className="group flex h-full flex-col overflow-hidden border border-border bg-white transition-colors hover:border-brand-blue"
    >
      <ProjectVisual project={project} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-brand-blue uppercase">
          {project.sector}
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-brand-ink">
          {project.title}
        </h3>
        <p className="mt-2 text-sm font-medium text-brand-navy">
          {project.clientShort}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <p className="mt-5 text-xs tracking-[0.12em] text-muted-foreground uppercase">
          {project.year} · {project.location}
        </p>
      </div>
    </Link>
  );
}
