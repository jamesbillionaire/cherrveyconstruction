import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <FadeIn>
          <Badge variant="secondary" className="mb-4">
            About Ikli
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            A studio focused on clarity, craft, and measurable impact.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              Ikli is a digital studio helping businesses translate vision into
              polished brand experiences. We combine strategic thinking with
              meticulous execution to create websites and identities that feel
              intentional at every level.
            </p>
            <p className="leading-relaxed">
              From early-stage startups to established enterprises, we partner
              with teams who value quality, consistency, and a collaborative
              process that keeps projects moving with confidence.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
