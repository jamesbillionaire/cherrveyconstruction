import { Container } from "@/components/layout/container";
import { SectionEyebrow } from "@/components/layout/section-eyebrow";
import { capabilities } from "@/lib/company";

export function CapabilitiesSection() {
  return (
    <section className="bg-brand-navy py-20 text-white md:py-28">
      <Container>
        <div className="max-w-2xl">
          <SectionEyebrow inverse>How CHERRVEY works</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Multidisciplinary delivery without the usual handoff gaps.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
            Construction scopes and technical infrastructure are coordinated as
            one implementation — from field execution through documented turnover.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {capabilities.map((item, index) => (
            <article key={item.title} className="border-t border-white/20 pt-5">
              <p className="font-mono text-[0.68rem] tracking-[0.16em] text-brand-red">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
