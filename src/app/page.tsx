import { AboutPreview } from "@/components/sections/about-preview";
import { CapabilitiesSection } from "@/components/sections/capabilities";
import { CredibilityStrip } from "@/components/sections/credibility-strip";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { HeroSection } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services-preview";
import { CtaBand } from "@/components/layout/cta-band";

export default function HomePage() {
  return (
    <main id="main">
      <HeroSection />
      <CredibilityStrip />
      <ServicesPreview />
      <FeaturedProjects />
      <CapabilitiesSection />
      <AboutPreview />
      <CtaBand />
    </main>
  );
}
