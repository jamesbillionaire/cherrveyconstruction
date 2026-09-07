export const serviceGroups = [
  { title: "Construction & Civil Works", body: "Building and civil works supported by project coordination, skilled personnel and attention to the agreed specifications.", href: "/services#general-construction", linkLabel: "Construction Services" },
  { title: "Facility Improvements", body: "Renovation, rehabilitation and technical-room upgrades for existing facilities and changing requirements.", href: "/services#facility-upgrades", linkLabel: "Facility Services" },
  { title: "Networks, Data Rooms & CCTV", body: "Structured cabling, network equipment, data-room infrastructure and CCTV systems, with testing and documentation where specified.", href: "/services#structured-cabling", linkLabel: "Technical Services" },
] as const;

export const approach = [
  { title: "Understand the requirements", body: "Review the work needed, the site conditions and the project priorities." },
  { title: "Coordinate the work", body: "Align the construction and technical requirements with the agreed scope." },
  { title: "Execute with care", body: "Bring skilled personnel, site supervision and workmanship checks into the implementation." },
  { title: "Complete the handover", body: "Carry out the testing, documentation and training required by the project." },
] as const;

export const teamGroups = [
  { title: "Engineering & Quality", body: "Project engineering, specifications, inspection and workmanship checks." },
  { title: "Site Execution & Safety", body: "Supervision, skilled personnel and coordination of the work on site." },
  { title: "Management & Project Support", body: "Client communication, administration, procurement support and documentation." },
] as const;

export const serviceProjectLinks: Record<string, { href: string; label: string }> = {
  "facility-upgrades": { href: "/projects/dti-cctv-it-room", label: "Explore the DTI facility upgrade" },
  "structured-cabling": { href: "/projects/csc-network-rehabilitation", label: "Explore the CSC network project" },
  "data-room": { href: "/projects/ppa-data-room", label: "Explore the PPA data-room project" },
  "cctv-security": { href: "/projects/dti-cctv-it-room", label: "Explore the DTI CCTV project" },
  "testing-commissioning": { href: "/projects/emb-region-ix-data-network", label: "Explore the EMB IX network project" },
};
