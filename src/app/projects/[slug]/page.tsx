import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { InnerHero, ProjectCta, ProjectTile, TextLink } from "@/components/construction/shared";
import { projectPhotos, projectTitles } from "@/lib/construction";
import { getProject, getRelatedProjects, PROJECT_SLUGS } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return PROJECT_SLUGS.map(slug => ({ slug })); }
export const dynamicParams = false;
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return pageMetadata({ title: "Project", description: "CHERRVEY project portfolio.", path: "/projects" });
  return pageMetadata({ title: project.seoTitle, description: project.seoDescription, path: `/projects/${project.slug}` });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const related = getRelatedProjects(project.slug, 2);
  return <main id="main" className="cs-site">
    <InnerHero label={project.clientShort} title={projectTitles[project.slug]} description={project.summary} photo={projectPhotos[project.slug]} parent={{ label: "Projects", href: "/projects" }} />
    <section className="cs-project-facts"><Container><dl><div><dt>Location</dt><dd>{project.location}</dd></div><div><dt>Project year</dt><dd>{project.year}</dd></div><div><dt>Scope</dt><dd>{project.category}</dd></div></dl></Container></section>
    <section className="cs-section"><Container className="cs-project-scope"><div><p className="cs-kicker">The work</p><h2>Scope of work.</h2><ul className="cs-scope-list">{project.scope.map(item => <li key={item}>{item}</li>)}</ul><TextLink href={project.serviceHref}>Related services</TextLink></div><aside className="cs-project-aside">{project.scopeMetrics ? <><h3>Project scope at a glance</h3><dl className="cs-project-metrics">{project.scopeMetrics.map(metric => <div key={metric.label}><dt>{metric.value}</dt><dd>{metric.label}</dd></div>)}</dl></> : null}{project.delivery.length > 0 ? <><h3>Testing & handover</h3><ul className="cs-checklist">{project.delivery.map(item => <li key={item}>{item}</li>)}</ul></> : <><h3>Project client</h3><p>{project.client}</p></>}{project.reference ? <p className="cs-reference">Reference: {project.reference}</p> : null}</aside></Container></section>
    <section className="cs-section cs-paper"><Container><div className="cs-section-head"><div><p className="cs-kicker">More from CHERRVEY</p><h2>Related work.</h2></div><TextLink href="/projects">All projects</TextLink></div><div className="cs-related-grid">{related.map(item => <ProjectTile key={item.slug} project={item} />)}</div></Container></section>
    <ProjectCta title="Have a similar requirement?" body="Talk to us about your facility and the work you need." />
  </main>;
}
