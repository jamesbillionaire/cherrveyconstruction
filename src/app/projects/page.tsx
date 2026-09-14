import { Container } from "@/components/layout/container";
import { InnerHero, ProjectCta, ProjectTile } from "@/components/construction/shared";
import { photos } from "@/lib/construction";
import { projects } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Projects", description: "Explore CHERRVEY’s government and institutional work in facility improvements, CCTV, cabling, data rooms and network infrastructure.", path: "/projects" });

export default function ProjectsPage() {
  return <main id="main" className="cs-site">
    <InnerHero label="Projects" title="Our work. In focus." description="Selected government and institutional projects in facility improvement and technical infrastructure." photo={photos.cabling} />
    <section className="cs-section"><Container><div className="cs-portfolio-heading"><p className="cs-kicker">Selected project portfolio</p><p>{projects.length} projects · 2025–2026</p></div><div className="cs-project-index">{projects.map(project => <ProjectTile key={project.slug} project={project} />)}</div></Container></section>
    <ProjectCta title="Planning your next project?" />
  </main>;
}
