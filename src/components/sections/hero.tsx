"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-border/60 pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.72_0.12_85/0.18),transparent_42%),radial-gradient(circle_at_bottom_left,oklch(0.35_0.06_260/0.35),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <Badge variant="secondary" className="mb-6">
            Premium Digital Studio
          </Badge>
        </FadeIn>

        <motion.h1
          className="max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          We build refined digital experiences for ambitious brands.
        </motion.h1>

        <FadeIn delay={0.15}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Ikli partners with companies ready to elevate their presence with
            strategic design, premium craftsmanship, and websites engineered for
            performance and growth.
          </p>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button render={<a href="#contact" />} size="lg" className="h-11 px-5">
            Book a Consultation
            <ArrowRight className="size-4" />
          </Button>
          <Button
            render={<a href="#projects" />}
            variant="outline"
            size="lg"
            className="h-11 px-5"
          >
            View Our Work
          </Button>
        </FadeIn>

        <FadeIn delay={0.35} className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "12+", label: "Years of Experience" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border/60 bg-card/50 p-5 backdrop-blur-sm"
            >
              <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
