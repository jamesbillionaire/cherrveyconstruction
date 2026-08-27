import { Container } from "@/components/layout/container";
import { SectionEyebrow } from "@/components/layout/section-eyebrow";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("border-b border-border bg-brand-paper", className)}>
      <Container className="py-12 md:py-16">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h1 className="mt-4 max-w-[18ch] text-3xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      </Container>
    </section>
  );
}
