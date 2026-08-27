import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/lib/company";
import { cn } from "@/lib/utils";

type CtaBandProps = {
  title?: string;
  body?: string;
  className?: string;
};

export function CtaBand({
  title = "Planning a similar project? Discuss it with CHERRVEY.",
  body = "Tell us what you are building, upgrading, or rehabilitating. We will review the scope and respond directly.",
  className,
}: CtaBandProps) {
  return (
    <section className={cn("bg-brand-navy text-white", className)}>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-16 -top-16 size-56 rotate-45 border-[12px] border-white/10" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-2 w-40 bg-brand-red" />
        <div className="mx-auto flex max-w-[1180px] flex-col gap-8 px-5 py-16 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-white/60 uppercase">
              Next step
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
              {body}
            </p>
          </div>
          <ButtonLink href="/contact" variant="cta" size="xl">
            Discuss a Project
          </ButtonLink>
        </div>
      </div>
      <p className="sr-only">{site.name}</p>
    </section>
  );
}
