import { Container } from "@/components/layout/container";
import { TextLink } from "@/components/layout/text-link";
import { ProjectCard } from "@/components/projects/project-card";
import { getFeaturedProjects } from "@/lib/projects";

export function FeaturedProjects() {
  const [flagship, ...rest] = getFeaturedProjects();
  if (!flagship) return null;
  return (
    <section className="cv-section cv-paper">
      <Container>
        <div className="cv-section-top"><div><p className="cv-eyebrow">Selected projects</p><h2 className="cv-heading">Explore our project experience.</h2><p className="cv-lead">A closer look at the facilities, systems and project scopes CHERRVEY has worked on.</p></div><TextLink href="/projects">View All Projects</TextLink></div>
        <ProjectCard project={flagship} featured />
        <div className="cv-project-grid">{rest.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </Container>
    </section>
  );
}
