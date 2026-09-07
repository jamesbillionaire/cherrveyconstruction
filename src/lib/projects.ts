export const PROJECT_SLUGS = ["csc-network-rehabilitation", "ppa-structured-cabling", "dti-cctv-it-room", "ppa-data-room", "emb-region-ix-data-network"] as const;
export type ProjectSlug = (typeof PROJECT_SLUGS)[number];
export type ProjectVisualTheme = "flagship" | "port" | "facility" | "dataroom" | "network";
export type Project = {
  slug: ProjectSlug; title: string; shortTitle: string; client: string; clientShort: string;
  year: string; location: string; sector: string; category: string; eyebrow: string;
  summary: string; reference?: string; featured: boolean; featuredOrder: number;
  image: string | null; visualTheme: ProjectVisualTheme; overviewHeading: string;
  requirement: string; scope: string[]; delivery: string[]; serviceHref: string;
  seoTitle: string; seoDescription: string;
};

// Project years identify the supplied project records, not independent completion dates.
// Source documents are private references; do not place procurement scans in public/.
export const projects: Project[] = [
  {
    slug: "csc-network-rehabilitation", title: "Regional Office Network Rehabilitation", shortTitle: "CSC Network Rehabilitation",
    client: "Civil Service Commission Regional Office X", clientShort: "Civil Service Commission · Regional Office X", year: "2026", location: "CSC Regional Office X, Cagayan de Oro City", sector: "Government / Institutional", category: "Network Rehabilitation", eyebrow: "Government / Institutional Infrastructure",
    summary: "Structured cabling, managed switching, wireless access and multi-ISP connectivity, with network testing and as-built documentation.",
    reference: "PO FATR 26-01-001", featured: true, featuredOrder: 1, image: null, visualTheme: "flagship",
    overviewHeading: "A coordinated network upgrade.",
    requirement: "The regional office’s network rehabilitation brought cabling, network equipment, wireless coverage and internet connectivity into one project scope, including integration with existing servers and firewall systems.",
    scope: ["Installation and termination of 102 network nodes using CAT6 or higher cabling", "Five managed gigabit switches, including VLAN configuration", "Eight wireless access points for building-wide coverage", "Cable management and a centralised patch-panel system", "Multiple ISP connections configured for load balancing and failover", "Integration with existing servers and firewall systems"],
    delivery: ["Network performance testing and certification", "Floor plans and as-built layout", "Network topology and project documentation"],
    serviceHref: "/services#structured-cabling", seoTitle: "CSC Regional Office X Network Rehabilitation", seoDescription: "Explore CHERRVEY’s CSC Regional Office X network rehabilitation scope: 102 network nodes, managed switching, wireless access, testing and documentation."
  },
  {
    slug: "ppa-structured-cabling", title: "Structured Cabling LAN Maintenance", shortTitle: "PPA Structured Cabling LAN",
    client: "Philippine Ports Authority — Port of Cagayan de Oro", clientShort: "Philippine Ports Authority", year: "2025", location: "Port of Cagayan de Oro", sector: "Government / Port Infrastructure", category: "Structured Cabling", eyebrow: "Government / Port Infrastructure",
    summary: "Maintenance of the structured cabling local area network at the Port of Cagayan de Oro.",
    reference: "MPF-MOC-23-2025", featured: true, featuredOrder: 2, image: null, visualTheme: "port",
    overviewHeading: "Maintaining port network infrastructure.",
    requirement: "The project covered maintenance of the port’s structured cabling local area network, connecting CHERRVEY’s technical infrastructure capability with the requirements of a government port facility.",
    scope: ["Maintenance of the structured cabling local area network", "Network infrastructure works at the Port of Cagayan de Oro"], delivery: [], serviceHref: "/services#structured-cabling",
    seoTitle: "PPA Port of Cagayan de Oro Structured Cabling LAN", seoDescription: "CHERRVEY’s structured cabling LAN maintenance project for the Philippine Ports Authority at the Port of Cagayan de Oro."
  },
  {
    slug: "dti-cctv-it-room", title: "CCTV & IT Room Upgrade", shortTitle: "DTI CCTV & IT Room Upgrade",
    client: "Department of Trade and Industry — Northern Mindanao", clientShort: "Department of Trade and Industry", year: "2025", location: "DTI Regional Office, Cagayan de Oro City", sector: "Government / Institutional", category: "CCTV & Facility Improvement", eyebrow: "Government / Institutional Infrastructure",
    summary: "CCTV system upgrading and installation, IT-room cabling and related facility improvements for the DTI regional office.",
    reference: "PR2025-08-549", featured: true, featuredOrder: 3, image: null, visualTheme: "facility",
    overviewHeading: "Security and facility works, brought together.",
    requirement: "The regional office project combined delivery and installation of CCTV equipment with IT-room cabling and facility improvement, bringing the security system and its supporting physical infrastructure into one scope.",
    scope: ["CCTV system upgrading, delivery and installation", "IT-room cabling", "Facility improvement associated with the upgrade"], delivery: [], serviceHref: "/services#cctv-security",
    seoTitle: "DTI Regional Office CCTV and IT Room Upgrade", seoDescription: "Explore CHERRVEY’s DTI Northern Mindanao project for CCTV installation, IT-room cabling and facility improvements."
  },
  {
    slug: "ppa-data-room", title: "Building 2 Data Room Maintenance", shortTitle: "PPA Data Room Maintenance",
    client: "Philippine Ports Authority — Port of Cagayan de Oro", clientShort: "Philippine Ports Authority", year: "2025", location: "Building 2, Port of Cagayan de Oro", sector: "Government / Port Infrastructure", category: "Data Room Maintenance", eyebrow: "Government / Port Infrastructure",
    summary: "Data-room maintenance at Building 2 of the Port of Cagayan de Oro.",
    reference: "MPF-MOC-24-2025", featured: false, featuredOrder: 4, image: null, visualTheme: "dataroom",
    overviewHeading: "Care for a critical technical space.",
    requirement: "The project focused on maintenance of the data room in Building 2, forming part of CHERRVEY’s technical facility work for the Philippine Ports Authority at the Port of Cagayan de Oro.",
    scope: ["Maintenance of the Building 2 data room", "Technical facility work within the awarded maintenance scope"], delivery: [], serviceHref: "/services#data-room",
    seoTitle: "PPA Port of Cagayan de Oro Data Room Maintenance", seoDescription: "CHERRVEY’s Building 2 data-room maintenance project for the Philippine Ports Authority at the Port of Cagayan de Oro."
  },
  {
    slug: "emb-region-ix-data-network", title: "Data Network Installation & Commissioning", shortTitle: "EMB IX Data Network",
    client: "Environmental Management Bureau Region IX", clientShort: "Environmental Management Bureau · Region IX", year: "2025", location: "EMB IX Regional Office, Balintawak, Pagadian City", sector: "Government / Institutional", category: "Network Infrastructure", eyebrow: "Government / Institutional Infrastructure",
    summary: "Data-network equipment, cabling and installation for the regional office, with testing, activation, commissioning and user training.",
    reference: "PO 02-2025-040", featured: false, featuredOrder: 5, image: null, visualTheme: "network",
    overviewHeading: "From network equipment to commissioned systems.",
    requirement: "The regional office scope covered supply, delivery, installation, testing, activation and commissioning of data-network cabling termination, together with the active equipment, cabinets and power protection supporting the network.",
    scope: ["Structured cabling components, termination, patching and labelling", "Network switches and ceiling wireless access points", "Centralised wireless controller and VPN router/load balancer", "UPS equipment and 42U data cabinets", "Rack assembly, cable management and grounding works"],
    delivery: ["Network equipment configuration, testing and activation", "User training for network management and operations", "Final checking, commissioning and turnover"], serviceHref: "/services#testing-commissioning",
    seoTitle: "EMB Region IX Data Network Infrastructure", seoDescription: "Explore CHERRVEY’s data-network installation and commissioning project for the Environmental Management Bureau Region IX office in Pagadian City."
  }
];
export function getProject(slug: string): Project | undefined { return projects.find((project) => project.slug === slug); }
export function getFeaturedProjects(): Project[] { return projects.filter((project) => project.featured).sort((a, b) => a.featuredOrder - b.featuredOrder); }
export function getRelatedProjects(slug: ProjectSlug, limit = 3): Project[] { return projects.filter((project) => project.slug !== slug).slice(0, limit); }
export function projectPath(slug: ProjectSlug): string { return `/projects/${slug}`; }
