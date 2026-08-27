export const PROJECT_SLUGS = [
  "csc-network-rehabilitation",
  "ppa-structured-cabling",
  "dti-cctv-it-room",
  "ppa-data-room",
  "emb-region-ix-data-network",
] as const;

export type ProjectSlug = (typeof PROJECT_SLUGS)[number];

export type ProjectVisualTheme =
  | "flagship"
  | "port"
  | "facility"
  | "dataroom"
  | "network";

export type Project = {
  slug: ProjectSlug;
  title: string;
  shortTitle: string;
  client: string;
  clientShort: string;
  year: string;
  location: string;
  sector: string;
  category: string;
  eyebrow: string;
  summary: string;
  reference?: string;
  featured: boolean;
  featuredOrder: number;
  image: string | null;
  visualTheme: ProjectVisualTheme;
  requirement: string;
  scope: string[];
  delivery: string[];
  seoTitle: string;
  seoDescription: string;
};

export const projects: Project[] = [
  {
    slug: "csc-network-rehabilitation",
    title: "Regional Office Network Rehabilitation",
    shortTitle: "CSC Network Rehabilitation",
    client: "Civil Service Commission Regional Office X",
    clientShort: "CSC Regional Office X",
    year: "2026",
    location: "CSC Regional Office Building, Region X",
    sector: "Government / Institutional",
    category: "Network Rehabilitation",
    eyebrow: "Government / Institutional Infrastructure",
    summary:
      "Structured rehabilitation of the regional office network: node installation and termination, managed switching, wireless coverage, cable management, and documented turnover.",
    reference: "PO FATR 26-01-001",
    featured: true,
    featuredOrder: 1,
    image: null,
    visualTheme: "flagship",
    requirement:
      "Rehabilitate the regional office building network so structured cabling, switching, wireless access, and ISP connectivity operate as a coherent, documented system.",
    scope: [
      "Installation and termination of approximately 102 network nodes",
      "CAT6 or higher structured cabling",
      "Managed gigabit network switching",
      "VLAN configuration",
      "Load balancing and failover across multiple ISP connections",
      "Multiple wireless access points",
      "Structured cable management and patch-panel system",
      "Integration with existing servers and firewall systems",
    ],
    delivery: [
      "Network performance testing and certification",
      "Project documentation",
      "Floor plan and as-built layout",
      "Network topology documentation",
    ],
    seoTitle: "CSC Regional Office X Network Rehabilitation",
    seoDescription:
      "CHERRVEY rehabilitated the Civil Service Commission Regional Office X building network, including structured cabling, managed switching, wireless access, and documented turnover.",
  },
  {
    slug: "ppa-structured-cabling",
    title: "Maintenance of Structured Cabling Local Area Network",
    shortTitle: "PPA Structured Cabling LAN",
    client: "Philippine Ports Authority — Port of Cagayan de Oro",
    clientShort: "Philippine Ports Authority",
    year: "2025",
    location: "Port of Cagayan de Oro",
    sector: "Government / Port Infrastructure",
    category: "Structured Cabling",
    eyebrow: "Government / Institutional Infrastructure",
    summary:
      "Maintenance of the structured cabling local area network serving port operations at the Port of Cagayan de Oro.",
    reference: "MPF-MOC-23-2025",
    featured: true,
    featuredOrder: 2,
    image: null,
    visualTheme: "port",
    requirement:
      "Maintain the port's structured cabling LAN so network infrastructure supporting operations remains serviceable and properly implemented.",
    scope: [
      "Structured cabling local area network maintenance",
      "Port facility network infrastructure works",
      "Implementation aligned to the awarded maintenance scope",
    ],
    delivery: [
      "Completed maintenance works for the structured cabling LAN",
      "Turnover consistent with the project requirements",
    ],
    seoTitle: "PPA Port of Cagayan de Oro Structured Cabling LAN",
    seoDescription:
      "CHERRVEY performed maintenance of the structured cabling local area network at the Philippine Ports Authority Port of Cagayan de Oro.",
  },
  {
    slug: "dti-cctv-it-room",
    title: "CCTV System and IT Room Cabling with Facility Improvement",
    shortTitle: "DTI CCTV & IT Room Upgrade",
    client: "Department of Trade and Industry — Regional Office",
    clientShort: "DTI Regional Office",
    year: "2025",
    location: "DTI Regional Office",
    sector: "Government / Institutional",
    category: "CCTV & IT Infrastructure",
    eyebrow: "Government / Institutional Infrastructure",
    summary:
      "Upgrading, delivery, and installation of a CCTV system and IT room cabling, together with related facility improvement works.",
    reference: "PR2025-08-549",
    featured: true,
    featuredOrder: 3,
    image: null,
    visualTheme: "facility",
    requirement:
      "Upgrade regional office security and IT-room infrastructure through CCTV installation, IT-room cabling, and accompanying facility improvement.",
    scope: [
      "CCTV system upgrading, delivery, and installation",
      "IT room cabling",
      "Facility improvement associated with the infrastructure upgrade",
      "Integrated installation of security and data infrastructure",
    ],
    delivery: [
      "Installed CCTV system",
      "Completed IT-room cabling",
      "Facility improvement works included in the awarded scope",
    ],
    seoTitle: "DTI Regional Office CCTV and IT Room Upgrade",
    seoDescription:
      "CHERRVEY upgraded CCTV, IT-room cabling, and related facilities for a Department of Trade and Industry regional office.",
  },
  {
    slug: "ppa-data-room",
    title: "Maintenance of Data Room at Building 2",
    shortTitle: "PPA Data Room Maintenance",
    client: "Philippine Ports Authority — Port of Cagayan de Oro",
    clientShort: "Philippine Ports Authority",
    year: "2025",
    location: "Building 2, Port of Cagayan de Oro",
    sector: "Government / Port Infrastructure",
    category: "Data Room",
    eyebrow: "Government / Institutional Infrastructure",
    summary:
      "Maintenance of the data room at Building 2, covering technical facility works that support port ICT operations.",
    reference: "MPF-MOC-24-2025",
    featured: false,
    featuredOrder: 4,
    image: null,
    visualTheme: "dataroom",
    requirement:
      "Maintain the Building 2 data room as a functioning technical facility supporting port information systems.",
    scope: [
      "Data room maintenance at Building 2",
      "Technical facility works supporting ICT operations",
      "Implementation aligned to the awarded maintenance scope",
    ],
    delivery: [
      "Completed data-room maintenance works",
      "Turnover consistent with the project requirements",
    ],
    seoTitle: "PPA Port of Cagayan de Oro Data Room Maintenance",
    seoDescription:
      "CHERRVEY performed data-room maintenance at Building 2, Philippine Ports Authority Port of Cagayan de Oro.",
  },
  {
    slug: "emb-region-ix-data-network",
    title: "Data Network Infrastructure",
    shortTitle: "EMB IX Data Network",
    client: "Environmental Management Bureau Region IX",
    clientShort: "EMB Region IX",
    year: "2025",
    location: "EMB IX Regional Office, Balintawak, Pagadian City",
    sector: "Government / Institutional",
    category: "Network Infrastructure",
    eyebrow: "Government / Institutional Infrastructure",
    summary:
      "Supply, delivery, installation, testing, activation, and commissioning of data network cabling termination for the EMB IX regional office.",
    featured: false,
    featuredOrder: 5,
    image: null,
    visualTheme: "network",
    requirement:
      "Establish a commissioned data network for the regional office, from structured cabling and cabinets through switching, wireless, power protection, and turnover.",
    scope: [
      "Structured cabling components, keystone termination, patching, labeling, and grounding",
      "Network switches",
      "Ceiling wireless access points with centralized AP controller",
      "VPN router / load balancer",
      "UPS equipment",
      "42U data cabinets",
      "Equipment installation for a complete data network",
    ],
    delivery: [
      "Testing, activation, and commissioning",
      "User training",
      "Final turnover of the commissioned network",
    ],
    seoTitle: "EMB Region IX Data Network Infrastructure",
    seoDescription:
      "CHERRVEY supplied, installed, tested, and commissioned data network infrastructure for the Environmental Management Bureau Region IX office in Pagadian City.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => a.featuredOrder - b.featuredOrder);
}

export function getRelatedProjects(slug: ProjectSlug, limit = 3): Project[] {
  return projects.filter((project) => project.slug !== slug).slice(0, limit);
}

export function projectPath(slug: ProjectSlug): string {
  return `/projects/${slug}`;
}
