import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

type ProjectVisualProps = { project: Project; className?: string };

export function ProjectVisual({ project, className }: ProjectVisualProps) {
  if (project.image) {
    return <div className={cn("relative w-full aspect-[16/10] overflow-hidden bg-brand-ink", className)}><Image src={project.image} alt={`${project.title} for ${project.client}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" /></div>;
  }
  // Brand illustration only: never represented as a photograph or project drawing.
  const network = project.visualTheme === "flagship" || project.visualTheme === "network";
  return (
    <div className={cn("cv-project-graphic w-full aspect-[16/10]", className)} aria-hidden="true">
      <svg viewBox="0 0 600 360" fill="none" preserveAspectRatio="xMidYMid slice">
        <path d="M0 60h600M0 120h600M0 180h600M0 240h600M0 300h600M60 0v360M120 0v360M180 0v360M240 0v360M300 0v360M360 0v360M420 0v360M480 0v360M540 0v360" stroke="#8ba4cf" strokeOpacity=".1" />
        {network ? <>
          <path d="M72 174h120v-66h120v120h120v-66h102M192 174v72h60M312 108h108V60M432 228v66" stroke="#577bae" strokeWidth="1.5" />
          <path d="M268 70h88v77h-88zM388 192h88v77h-88zM148 135h88v77h-88z" fill="#173769" stroke="#7996bf" strokeOpacity=".7" />
          <path d="M280 92h64m-64 11h64m-64 11h45M400 215h64m-64 11h64m-64 11h45M160 158h64m-64 11h64m-64 11h45" stroke="#91a9ca" strokeOpacity=".7" />
          <path d="M70 172h6v6h-6zM418 57h6v6h-6zM530 159h6v6h-6z" fill="#e33629" />
        </> : project.visualTheme === "dataroom" ? <>
          {[145, 265, 385].map((x) => <g key={x}><rect x={x} y="58" width="85" height="214" fill="#143264" stroke="#6687b5" /><path d={`M${x + 10} 84h65m-65 32h65m-65 32h65m-65 32h65m-65 32h65m-65 32h65`} stroke="#91a9ca" strokeOpacity=".6" /><rect x={x + 64} y="95" width="5" height="5" fill="#e33629" /></g>)}
          <path d="M120 285h375M120 280v10m375-10v10" stroke="#d4ddeb" strokeOpacity=".45" />
        </> : project.visualTheme === "facility" ? <>
          <path d="M126 90h270v176H126zM396 90l77 44v176l-77-44M126 266l78 44h269" fill="#143264" stroke="#6687b5" />
          <path d="M165 130h115v91H165zM302 130h55v136M204 310v-44M396 176h77" stroke="#7694bc" strokeOpacity=".6" />
          <path d="M280 130h35l25 25v26h-34" stroke="#e33629" strokeWidth="2" />
          <circle cx="315" cy="181" r="5" fill="#e33629" />
          <path d="M98 110V66h44M422 58h35v40" stroke="#d4ddeb" strokeOpacity=".45" />
        </> : <>
          <path d="m126 243 155-143 180 37v134l-180 41-155-69Z" fill="#143264" stroke="#6687b5" />
          <path d="m126 243 178-43 157-63M304 200v104M280 100l24 100M156 217l148-36 128 27M184 190l115-28 113 22" stroke="#7694bc" strokeOpacity=".55" />
          <path d="M98 264v25l177 50M480 117l24 6v161" stroke="#d4ddeb" strokeOpacity=".45" />
          <path d="m321 229 56-12v7l-56 12z" fill="#e33629" />
        </>}
      </svg>
      <span className="cv-graphic-label">{project.category}</span>
    </div>
  );
}
