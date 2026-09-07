import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { TextLink } from "@/components/layout/text-link";
import { ProjectVisual } from "@/components/brand/project-visual";
import { ProjectCard } from "@/components/projects/project-card";
import { getProject, getRelatedProjects, PROJECT_SLUGS } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";

type ProjectPageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return PROJECT_SLUGS.map((slug) => ({ slug })); }
export const dynamicParams = false;

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return pageMetadata({ title: "Project", description: "CHERRVEY Construction Services project.", path: `/projects/${slug}` });
  return pageMetadata({ title: project.seoTitle, description: project.seoDescription, path: `/projects/${project.slug}` });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const related = getRelatedProjects(project.slug);
  return (
    <main id="main">
      <PageHero eyebrow={project.category} title={project.title} description={project.summary} parent={{ label: "Projects", href: "/projects" }}><p className="cv-case-client">{project.client}</p></PageHero>
      <section className="cv-section"><Container className="cv-case-overview"><div><p className="cv-eyebrow">Project overview</p><h2 className="cv-heading">{project.overviewHeading}</h2><p className="cv-lead">{project.requirement}</p><ProjectVisual project={project} /></div><dl className="cv-case-facts"><MetaItem label="Client" value={project.client} /><MetaItem label="Location" value={project.location} /><MetaItem label="Project year" value={project.year} /><MetaItem label="Scope" value={project.category} />{project.reference ? <MetaItem label="Project reference" value={project.reference} /> : null}</dl></Container></section>
      <section className="cv-section cv-paper"><Container className="cv-case-scope"><div><h2>CHERRVEY’s scope of work</h2><ul className="cv-scope-list">{project.scope.map((item) => <li key={item}>{item}</li>)}</ul></div>{project.delivery.length > 0 ? <div><h2>Testing & handover scope</h2><ul className="cv-scope-list">{project.delivery.map((item) => <li key={item}>{item}</li>)}</ul></div> : <div><p className="cv-eyebrow">Related capability</p><h2 className="mt-4">{project.category}</h2><p className="cv-lead">Explore the services behind this project and discuss the requirements for your own facility.</p><TextLink href={project.serviceHref}>Explore This Service</TextLink></div>}</Container></section>
      <section className="cv-section"><Container><div className="cv-section-top"><div><p className="cv-eyebrow">More of our work</p><h2 className="cv-heading">Related project experience.</h2></div><TextLink href="/projects">All Projects</TextLink></div><div className="cv-project-grid cv-project-grid-related">{related.map((item) => <ProjectCard key={item.slug} project={item} />)}</div></Container></section>
      <CtaBand title="Planning a similar project?" body="Share your site location and requirements with CHERRVEY. Let’s discuss the construction or technical infrastructure your facility needs." />
    </main>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) { return <div><dt>{label}</dt><dd>{value}</dd></div>; }
