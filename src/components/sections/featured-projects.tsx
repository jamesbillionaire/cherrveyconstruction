import Link from "next/link";

import { ProjectVisual } from "@/components/brand/project-visual";
import { Container } from "@/components/layout/container";
import { SectionEyebrow } from "@/components/layout/section-eyebrow";
import { getFeaturedProjects, projectPath } from "@/lib/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();
  const [flagship, ...rest] = featured;

  if (!flagship) {
    return null;
  }

  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionEyebrow>Selected Projects</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              Government and institutional work, documented and delivered.
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm font-semibold tracking-[0.08em] text-brand-navy uppercase underline-offset-4 hover:underline"
          >
            View All Projects →
          </Link>
        </div>

        <Link
          href={projectPath(flagship.slug)}
          className="mt-12 grid overflow-hidden border border-border transition-colors hover:border-brand-blue lg:grid-cols-[1.15fr_0.85fr]"
        >
          <ProjectVisual project={flagship} className="aspect-[16/11] lg:aspect-auto lg:min-h-[22rem]" />
          <div className="flex flex-col justify-between bg-brand-paper p-6 sm:p-8">
            <div>
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-brand-blue uppercase">
                {flagship.sector}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-ink">
                {flagship.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-brand-navy">
                {flagship.client}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {flagship.summary}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5 text-xs tracking-[0.12em] text-muted-foreground uppercase">
              <span>
                {flagship.location} · {flagship.year}
              </span>
              <span className="font-semibold text-brand-navy">View Project →</span>
            </div>
          </div>
        </Link>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {rest.map((project) => (
            <Link
              key={project.slug}
              href={projectPath(project.slug)}
              className="group overflow-hidden border border-border transition-colors hover:border-brand-blue"
            >
              <ProjectVisual project={project} />
              <div className="p-5 sm:p-6">
                <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-brand-blue uppercase">
                  {project.clientShort}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-brand-ink">
                  {project.shortTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                <p className="mt-5 text-xs tracking-[0.12em] text-muted-foreground uppercase">
                  {project.year} · {project.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
