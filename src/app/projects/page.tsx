import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ title: "Projects", description: "Explore CHERRVEY’s government and institutional work for PPA, CSC, DTI and EMB Region IX, from network rehabilitation to CCTV and facility upgrades.", path: "/projects" });

export default function ProjectsPage() {
  const [flagship, ...remaining] = projects;
  return (
    <main id="main">
      <PageHero eyebrow="Selected projects" title="The work behind our name." description="Explore CHERRVEY’s government and institutional projects in network rehabilitation, structured cabling, data-room maintenance, CCTV and facility improvement." />
      <section className="cv-section"><Container><h2 className="sr-only">Project portfolio</h2>{flagship ? <ProjectCard project={flagship} featured /> : null}<div className="cv-project-grid">{remaining.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></Container></section>
      <CtaBand />
    </main>
  );
}
