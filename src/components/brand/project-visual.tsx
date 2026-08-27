import Image from "next/image";

import { cn } from "@/lib/utils";
import type { Project, ProjectVisualTheme } from "@/lib/projects";

type ProjectVisualProps = {
  project: Project;
  className?: string;
};

export function ProjectVisual({ project, className }: ProjectVisualProps) {
  if (project.image) {
    return (
      <div className={cn("relative aspect-[16/10] overflow-hidden bg-brand-ink", className)}>
        <Image
          src={project.image}
          alt={`${project.title} for ${project.client}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative aspect-[16/10] overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      <AbstractField theme={project.visualTheme} />
      <div className="absolute inset-0 blueprint-grid opacity-80" />
      <div className="absolute left-0 top-0 h-full w-1.5 bg-brand-red" />
      <div className="absolute right-0 top-0 h-16 w-16 border-r-2 border-t-2 border-white/30" />
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-4 sm:p-5">
        <div>
          <p className="font-mono text-[0.65rem] tracking-[0.18em] text-white/70 uppercase">
            {project.category}
          </p>
          <p className="mt-1 max-w-[16rem] text-sm font-semibold tracking-tight text-white sm:text-base">
            {project.clientShort}
          </p>
        </div>
        <p className="font-mono text-xs tracking-[0.16em] text-white/80">
          {project.year}
        </p>
      </div>
    </div>
  );
}

function AbstractField({ theme }: { theme: ProjectVisualTheme }) {
  switch (theme) {
    case "flagship":
      return (
        <div className="absolute inset-0 bg-brand-ink">
          <div className="absolute -right-10 top-6 h-40 w-40 rotate-45 border-[10px] border-brand-blue/80" />
          <div className="absolute left-10 top-10 h-24 w-24 border border-white/20" />
          <div className="absolute bottom-16 right-16 h-2 w-28 bg-brand-red" />
        </div>
      );
    case "port":
      return (
        <div className="absolute inset-0 bg-[#12356e]">
          <div className="absolute inset-y-0 right-[18%] w-px bg-white/20" />
          <div className="absolute inset-y-0 right-[28%] w-px bg-white/10" />
          <div className="absolute left-8 top-8 h-28 w-2 bg-brand-steel/70" />
          <div className="absolute bottom-20 right-10 h-20 w-32 border border-white/25" />
        </div>
      );
    case "facility":
      return (
        <div className="absolute inset-0 bg-brand-navy">
          <div className="absolute left-[20%] top-0 h-full w-[12%] bg-black/20" />
          <div className="absolute right-8 top-8 size-16 border-2 border-brand-red" />
          <div className="absolute bottom-24 left-12 h-px w-40 bg-white/30" />
          <div className="absolute bottom-20 left-12 h-px w-24 bg-brand-red" />
        </div>
      );
    case "dataroom":
      return (
        <div className="absolute inset-0 bg-[#0b1c44]">
          <div className="absolute left-8 top-8 grid grid-cols-6 gap-1.5">
            {Array.from({ length: 18 }, (_, index) => (
              <span
                key={index}
                className="h-6 w-3 bg-white/15"
              />
            ))}
          </div>
          <div className="absolute right-10 top-12 h-24 w-16 border border-brand-steel/60" />
        </div>
      );
    case "network":
      return (
        <div className="absolute inset-0 bg-brand-blue">
          <svg className="absolute inset-0 size-full" viewBox="0 0 400 250">
            <path
              d="M20 210 L80 80 L160 140 L240 40 L320 120 L380 70"
              fill="none"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="1.5"
            />
            <circle cx="80" cy="80" r="5" fill="#E33629" />
            <circle cx="240" cy="40" r="5" fill="#ffffff" />
            <circle cx="320" cy="120" r="5" fill="#939496" />
          </svg>
          <div className="absolute right-0 top-0 h-full w-1/3 bg-brand-ink/30" />
        </div>
      );
    default: {
      const exhaustive: never = theme;
      return exhaustive;
    }
  }
}
