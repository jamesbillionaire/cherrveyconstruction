export const services = [
  {
    slug: "general-construction",
    number: "01",
    title: "General Construction & Civil Works",
    summary:
      "Construction and building-related works executed with focus on quality, coordination, and schedule performance.",
    details: [
      "Building-related construction and civil works",
      "Project implementation from site coordination through completion",
      "Workmanship standards aligned to drawings and specifications",
    ],
  },
  {
    slug: "facility-upgrades",
    number: "02",
    title: "Facility Upgrades & Improvements",
    summary:
      "Renovation, upgrading, rehabilitation, and technical facility improvements for occupied and operational buildings.",
    details: [
      "Renovation and upgrading of existing facilities",
      "Rehabilitation of technical rooms and support spaces",
      "Facility improvement coordinated with infrastructure installation",
    ],
  },
  {
    slug: "structured-cabling",
    number: "03",
    title: "Structured Cabling & Network Infrastructure",
    summary:
      "Copper and data cabling, cabinets, patching, backbone systems, access points, switching, and structured IT infrastructure.",
    details: [
      "CAT6 and higher structured cabling",
      "Patch panels, cabinets, labeling, and cable management",
      "Switching, wireless access, and related network hardware installation",
    ],
  },
  {
    slug: "data-room",
    number: "04",
    title: "Data Room & IT Infrastructure",
    summary:
      "Data-room rehabilitation, racks, power distribution, grounding, cable management, equipment installation, and documentation.",
    details: [
      "Data-room and IT-room upgrades",
      "Racks, grounding, and cable management",
      "Equipment installation prepared for testing and turnover",
    ],
  },
  {
    slug: "cctv-security",
    number: "05",
    title: "CCTV & Security Infrastructure",
    summary:
      "CCTV system deployment integrated with structured cabling and facility requirements.",
    details: [
      "CCTV system delivery and installation",
      "Cabling and pathway works required by the security layout",
      "Coordination with IT-room and facility improvement scopes",
    ],
  },
  {
    slug: "testing-commissioning",
    number: "06",
    title: "Testing, Commissioning & Documentation",
    summary:
      "System testing, certification, as-built documentation, topology plans, training, and project turnover.",
    details: [
      "Testing, activation, and commissioning",
      "As-built layouts, floor plans, and network topology documentation",
      "User training and complete project turnover where specified",
    ],
  },
] as const;

export type Service = (typeof services)[number];
