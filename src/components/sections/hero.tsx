import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/lib/company";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-ink text-white">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-70" />
      <div className="pointer-events-none absolute -right-24 top-20 hidden h-[28rem] w-[28rem] rotate-45 border-[14px] border-brand-blue/50 lg:block" />
      <div className="pointer-events-none absolute top-0 right-[22%] hidden h-full w-px bg-white/10 lg:block" />
      <div className="pointer-events-none absolute right-10 bottom-24 h-1.5 w-28 bg-brand-red" />

      <div className="relative mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-[1180px] items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:px-8 lg:py-20">
        <div className="reveal">
          <p className="text-[0.68rem] font-semibold tracking-[0.26em] text-white/65 uppercase">
            Construction · Infrastructure · Technology
          </p>
          <h1 className="mt-5 max-w-[18ch] text-[2.15rem] leading-[1.08] font-semibold tracking-[-0.04em] text-balance break-words sm:text-5xl lg:text-[3.4rem]">
            Construction. Infrastructure. Technology. Built to perform.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {site.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/projects" variant="cta" size="xl" className="w-full justify-center sm:w-auto">
              View Our Projects
            </ButtonLink>
            <ButtonLink href="/contact" variant="inverse" size="xl" className="w-full justify-center sm:w-auto">
              Discuss a Project
            </ButtonLink>
          </div>
          <p className="mt-8 font-mono text-[0.7rem] tracking-[0.18em] text-white/55 uppercase">
            PCAB No. {site.pcabNumber}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden border border-white/10">
            <div className="absolute top-0 left-0 z-10 h-full w-1.5 bg-brand-red" />
            <div className="relative aspect-square">
              <div className="absolute inset-6 sm:inset-10">
                <Image
                  src="/brand/cherrvey-logo.png"
                  alt={`${site.shortName} Construction Services emblem`}
                  fill
                  sizes="(max-width: 1024px) 80vw, 420px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 px-5 py-4 font-mono text-[0.65rem] tracking-[0.16em] text-white/55 uppercase">
              <span>Est. {site.foundedYear}</span>
              <span>El Salvador City, Mis. Or.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
