import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { whyChooseUs } from "@/lib/site-content";

export function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      className="border-y border-border/60 bg-card/30 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn className="max-w-2xl">
          <Badge variant="secondary" className="mb-4">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            A partner invested in your long-term success.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {whyChooseUs.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <div className="rounded-2xl border border-border/60 bg-background/70 p-6 backdrop-blur-sm">
                <p className="text-sm font-medium text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
