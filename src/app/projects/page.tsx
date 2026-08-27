import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { CtaBand } from "@/components/layout/cta-band";
import { PageHero } from "@/components/layout/page-hero";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description:
    "Selected government and institutional projects by CHERRVEY Construction Services, including network rehabilitation, structured cabling, data rooms, and CCTV infrastructure.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Portfolio"
        title="Selected government and institutional experience."
        description="These records establish clients, locations, and scope. Project photography will be added as site images are released. Until then, each case is presented through verified project data rather than stock construction photos."
      />

      <section className="bg-white py-16 md:py-24">
        <Container className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </Container>
      </section>

      <CtaBand />
    </main>
  );
}
