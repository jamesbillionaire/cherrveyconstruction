import { Monitor, Palette, Sparkles, TrendingUp } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/lib/site-content";

const iconMap = {
  Sparkles,
  Monitor,
  Palette,
  TrendingUp,
} as const;

export function ServicesSection() {
  return (
    <section id="services" className="border-y border-border/60 bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn className="max-w-2xl">
          <Badge variant="secondary" className="mb-4">
            Services
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need to launch and grow with confidence.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tailored capabilities designed to strengthen your brand and deliver
            results across every stage of your digital journey.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <FadeIn key={service.title} delay={index * 0.08}>
                <Card className="h-full border-border/60 bg-background/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent />
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
