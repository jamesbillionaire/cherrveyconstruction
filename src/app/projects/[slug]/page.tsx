import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectVisual } from "@/components/brand/project-visual";
import { Container } from "@/components/layout/container";
import { CtaBand } from "@/components/layout/cta-band";
import { ProjectCard } from "@/components/projects/project-card";
import {
  getProject,
  getRelatedProjects,
  PROJECT_SLUGS,
} from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROJECT_SLUGS.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return pageMetadata({
      title: "Project",
      description: "CHERRVEY Construction Services project.",
      path: `/projects/${slug}`,
    });
  }

  return pageMetadata({
    title: project.seoTitle,
    description: project.seoDescription,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const related = getRelatedProjects(project.slug);

  return (
    <main id="main">
      <section className="border-b border-border bg-brand-paper">
        <Container className="py-12 md:py-16">
          <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-brand-blue uppercase">
            {project.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight break-words text-brand-ink sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-brand-navy">{project.client}</p>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="grid gap-10 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
          <ProjectVisual project={project} className="aspect-[16/10]" />
          <dl className="grid content-start gap-5 border border-border p-6 sm:grid-cols-2 lg:grid-cols-1">
            <MetaItem label="Client" value={project.client} />
            <MetaItem label="Location" value={project.location} />
            <MetaItem label="Year" value={project.year} />
            <MetaItem label="Category" value={project.category} />
            {project.reference ? (
              <MetaItem label="Reference" value={project.reference} />
            ) : null}
          </dl>
        </Container>
      </section>

      <section className="bg-brand-paper py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-ink">
              Requirement
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {project.requirement}
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {project.summary}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-brand-ink">
              CHERRVEY scope of work
            </h2>
            <ul className="mt-5 space-y-3">
              {project.scope.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <span className="mt-2 h-px w-4 shrink-0 bg-brand-red" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-brand-ink">
            Delivery and turnover
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {project.delivery.map((item) => (
              <li
                key={item}
                className="border-l-2 border-brand-blue bg-brand-paper px-5 py-4 text-sm leading-relaxed text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-brand-paper py-16 md:py-24">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-brand-ink">
              Related projects
            </h2>
            <Link
              href="/projects"
              className="text-sm font-semibold tracking-[0.08em] text-brand-navy uppercase underline-offset-4 hover:underline"
            >
              All Projects →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </main>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[0.65rem] font-semibold tracking-[0.16em] text-brand-steel uppercase">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-medium text-brand-ink">{value}</dd>
    </div>
  );
}
