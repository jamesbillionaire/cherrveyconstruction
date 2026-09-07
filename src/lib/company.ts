export const site = {
  name: "CHERRVEY Construction Services",
  shortName: "CHERRVEY",
  legalName: "CHERRVEY Construction Services",
  url: "https://cherrveyconstruction.com",
  domain: "cherrveyconstruction.com",
  tagline: "Building spaces. Connecting systems.",
  description: "CHERRVEY Construction Services delivers construction, facility improvements and technical infrastructure for government, commercial and institutional projects across Mindanao.",
  foundedYear: 2021,
  founder: "Harvey John M. Pong",
  pcabNumber: "50206",
  email: "cherrveyconstruction@gmail.com",
  phones: [{ display: "0917 704 2069", href: "tel:+639177042069" }, { display: "0954 399 3723", href: "tel:+639543993723" }],
  address: { line: "Zone 12, Molugan", city: "El Salvador City", province: "Misamis Oriental", country: "Philippines", display: "Zone 12, Molugan, El Salvador City, Misamis Oriental" },
} as const;

export const mission = { title: "Mission", body: "Deliver quality construction and related services through skilled workmanship, professional collaboration and clear communication between office and site, supported by practical technology and attention to time, cost and client requirements." } as const;
export const vision = { title: "Vision", body: "To become one of the region’s leading construction partners, recognised for workmanship, quality and commitment to its people, with the ambition to extend its services nationwide by 2033." } as const;
export const values = [
  { letter: "P", title: "Passion", body: "Take pride in the work and the care it requires." },
  { letter: "L", title: "Leadership", body: "Give clear direction and take responsibility." },
  { letter: "O", title: "Optimism", body: "Approach challenges with a practical, constructive mindset." },
  { letter: "W", title: "Work-Life Balance", body: "Respect the wellbeing of the people behind each project." },
  { letter: "I", title: "Integrity", body: "Act honestly and communicate clearly." },
  { letter: "N", title: "Nature", body: "Respect the environment and surrounding communities." },
  { letter: "G", title: "Gratitude", body: "Value the trust of clients, partners and colleagues." },
] as const;

export const capabilities = [
  { title: "Field Execution", body: "Project coordination with professional and skilled personnel, aligned with drawings, specifications and schedule." },
  { title: "Quality Control", body: "Implementation, testing and workmanship checks for construction and technical infrastructure." },
  { title: "Technology-Enabled Coordination", body: "Practical monitoring and communication between office and site." },
  { title: "Project Turnover", body: "Testing, documentation, training and as-built records where the scope requires them." },
  { title: "Institutional Experience", body: "Project experience with Philippine government and institutional clients." },
] as const;
export const organizationCapabilities = [
  { title: "Management", body: "Project leadership and client coordination." },
  { title: "Project Engineering", body: "Drawings, specifications and technical requirements." },
  { title: "QA / QC", body: "Inspection and workmanship verification." },
  { title: "Safety", body: "Site discipline and work coordination." },
  { title: "Administration", body: "Documentation and procurement support." },
  { title: "Supervision", body: "On-site direction of trades and technical crews." },
  { title: "Skilled Workers", body: "Trade and technical personnel." },
  { title: "Site Personnel", body: "Field support for installation and facility works." },
] as const;
export const credentials = [{ id: "pcab", name: "PCAB License", number: "50206", displayPublicly: true }] as const;
export const credentialsNote = "For company documents and project-specific procurement requirements, contact CHERRVEY.";
