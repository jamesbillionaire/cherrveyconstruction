import { ArrowUpRight } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/lib/site-content";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-4">
              Projects
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Selected work that reflects our standard of excellence.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Representative case studies showcasing strategy, design, and
            execution across industries.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <Card className="group h-full border-border/60 transition-colors hover:border-primary/40">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <Badge variant="outline">{project.category}</Badge>
                    <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <CardTitle className="mt-4">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-36 rounded-xl bg-gradient-to-br from-primary/15 via-muted/40 to-transparent" />
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
