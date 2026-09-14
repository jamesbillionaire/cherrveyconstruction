import type { ProjectSlug } from "@/lib/projects";

export const photos = {
  construction: { src: "/images/temporary/construction.jpg", alt: "Construction team on a reinforced concrete building site" },
  facility: { src: "/images/temporary/facility.jpg", alt: "Modern office interior with open work areas" },
  cabling: { src: "/images/temporary/cabling.jpg", alt: "Network patch panels with labelled cable connections" },
  dataRoom: { src: "/images/temporary/data-room.jpg", alt: "Equipment cabinets and cabling inside a server room" },
  security: { src: "/images/temporary/security.jpg", alt: "Building-mounted security cameras" },
} as const;
export type SitePhoto = { src: string; alt: string };

// Stock photographs are illustrative, never evidence of CHERRVEY project delivery.
// Replace entries with approved site photos and remove the illustrative caption only then.
export const projectPhotos: Record<ProjectSlug, SitePhoto> = {
  "csc-network-rehabilitation": photos.dataRoom,
  "ppa-structured-cabling": photos.cabling,
  "dti-cctv-it-room": photos.security,
  "ppa-data-room": photos.dataRoom,
  "emb-region-ix-data-network": photos.cabling,
};

export const projectTitles: Record<ProjectSlug, string> = {
  "csc-network-rehabilitation": "Regional office network rehabilitation",
  "ppa-structured-cabling": "Structured cabling maintenance",
  "dti-cctv-it-room": "CCTV & IT room upgrade",
  "ppa-data-room": "Building 2 data room maintenance",
  "emb-region-ix-data-network": "Data network installation",
};

export const serviceCards = [
  { id: "general-construction", number: "01", title: "General construction", summary: "Building and civil works, carried through with care.", details: ["Building & civil works", "Site coordination", "Project implementation"], photo: photos.construction, group: "construction" },
  { id: "facility-upgrades", number: "02", title: "Renovation & improvements", summary: "Upgrade existing spaces for the way they need to work.", details: ["Facility rehabilitation", "Building improvements", "Technical-room upgrades"], photo: photos.facility, group: "construction" },
  { id: "structured-cabling", number: "03", title: "Cabling & networks", summary: "Organised cabling and dependable connections.", details: ["Structured data cabling", "Switches & wireless access", "Cabinets & patch panels"], photo: photos.cabling, group: "technical" },
  { id: "data-room", number: "04", title: "Data & technical rooms", summary: "The infrastructure behind your daily operations.", details: ["Room rehabilitation", "Racks & cable management", "Grounding & equipment setup"], photo: photos.dataRoom, group: "technical" },
  { id: "cctv-security", number: "05", title: "CCTV systems", summary: "Security equipment and the infrastructure to support it.", details: ["CCTV installation", "Cabling & pathways", "IT-room integration"], photo: photos.security, group: "technical" },
  { id: "testing-commissioning", number: "06", title: "Testing & turnover", summary: "A clear handover, with the records your project requires.", details: ["Testing & commissioning", "As-built documentation", "User training & turnover"], photo: photos.cabling, group: "delivery" },
] as const;

export const workSteps = [
  { title: "Plan", text: "Understand the site and scope." },
  { title: "Coordinate", text: "Align people, materials and schedule." },
  { title: "Build", text: "Execute and check the work." },
  { title: "Handover", text: "Complete the agreed deliverables." },
] as const;
