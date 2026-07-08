export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#why-us", label: "Why Us" },
  { href: "#contact", label: "Contact" },
] as const;

export const services = [
  {
    title: "Brand Strategy",
    description:
      "Positioning, messaging, and identity systems that give your business a clear voice in competitive markets.",
    icon: "Sparkles",
  },
  {
    title: "Digital Experiences",
    description:
      "High-performance websites and product interfaces designed for clarity, conversion, and long-term growth.",
    icon: "Monitor",
  },
  {
    title: "Creative Production",
    description:
      "Campaign assets, visual storytelling, and content that elevates how your audience perceives your brand.",
    icon: "Palette",
  },
  {
    title: "Growth Partnership",
    description:
      "Ongoing support, optimization, and strategic guidance as your company scales into new opportunities.",
    icon: "TrendingUp",
  },
] as const;

export const projects = [
  {
    title: "Aurora Commerce",
    category: "E-Commerce Platform",
    description:
      "A refined storefront experience with streamlined checkout and a brand system built for expansion.",
  },
  {
    title: "Northline Capital",
    category: "Corporate Website",
    description:
      "A trust-focused digital presence for a financial services firm, balancing authority with approachability.",
  },
  {
    title: "Summit Living",
    category: "Property Development",
    description:
      "Immersive project storytelling and lead capture for a premium residential development portfolio.",
  },
] as const;

export const whyChooseUs = [
  {
    title: "Strategic First",
    description:
      "Every design and build decision is tied to business outcomes, not trends for their own sake.",
  },
  {
    title: "Premium Craft",
    description:
      "Meticulous attention to typography, motion, and detail that signals quality at every touchpoint.",
  },
  {
    title: "Reliable Delivery",
    description:
      "Clear timelines, transparent communication, and dependable execution from kickoff to launch.",
  },
  {
    title: "Built to Scale",
    description:
      "Solutions structured for growth so your digital foundation stays strong as ambitions expand.",
  },
] as const;
