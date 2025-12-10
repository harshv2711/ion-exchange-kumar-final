import { EcosystemCard, Industry, Milestone, Stat } from "./types";

export const NAV_ITEMS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Company", href: "#company" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export const ECOSYSTEM_CARDS: EcosystemCard[] = [
  {
    title: "Engineering (SSD)",
    description:
      "End-to-end turnkey water and wastewater treatment systems engineered for high performance.",
    image: "what-we-do-section/Engineering.png", // Industrial factory pipes
  },
  {
    title: "Resins",
    description:
      "Comprehensive range of ion exchange resins for separation, purification and softening.",
    image: "what-we-do-section/Resins.png", // Abstract blue bubbles/beads
  },
  {
    title: "Membranes",
    description:
      "Advanced RO, UF and NF membranes delivering precision filtration and high-purity water.",
    image: "what-we-do-section/Membranes.png", // Micro texture/mesh
  },
  {
    title: "Chemicals",
    description:
      "Proprietary process and speciality chemicals that ensure optimal system performance.",
    image:
      "https://images.unsplash.com/photo-1628863353691-0071c8c1874c?auto=format&fit=crop&q=80&w=600", // Lab flasks/chemistry
  },
  {
    title: "Services",
    description:
      "Lifecycle maintenance, audits, technical support, and O&M contracts.",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=600", // Engineer inspecting
  },
  {
    title: "Digital Solutions",
    description:
      "IonSite Digital Twin delivers real-time insights and predictive analytics.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600", // Data dashboard
  },
  {
    title: "ZeroB",
    description:
      "Home and community water purification systems offering safe, affordable drinking water.",
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=600", // Pouring pure water
  },
];

export const INDUSTRIES: Industry[] = [
  {
    name: "Power",
    image:
      "industries-we-serve/Power-Energy.png",
  }, // Power infrastructure/Sunset
  {
    name: "Pharmaceuticals",
    image:
      "industries-we-serve/Pharmaceuticals.png",
  }, // Laboratory/Clean room
  {
    name: "Food & Beverage",
    image:
      "industries-we-serve/Food-Beverage.png",
  }, // Bottling plant
  {
    name: "Textiles",
    image:
      "industries-we-serve/Textiles.png",
  }, // Fabric rolls
  {
    name: "Chemical",
    image:
      "industries-we-serve/Metals-Mining-13.png",
  }, // Industrial refinery
  {
    name: "Municipal",
    image:
      "industries-we-serve/Municipal.png",
  }, // Cityscape/Water
  {
    name: "Electronics",
    image:
      "industries-we-serve/Electronics.png",
  }, // Circuit board
];

export const MILESTONES: Milestone[] = [
  {
    year: "1964",
    title: "Foundation",
    description:
      "Ion Exchange is incorporated, marking the beginning of its journey in water and environment management.",
    image:
      "Milestone-section/1964.jpg", // Industrial vintage style
  },
  {
    year: "1978",
    title: "Reverse Osmosis Pioneer",
    description:
      "Becomes one of the first companies in India to introduce reverse osmosis technology.",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800", // Lab/Tech
  },
  {
    year: "1985",
    title: "Fully Indian Company",
    description:
      "Transitions to 100% Indian ownership, strengthening its identity and independence.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", // Corporate building
  },
  {
    year: "1991",
    title: "International Operations",
    description:
      "Expands beyond India with international operations in Southeast Asia.",
    image:
      "Milestone-section/1991.jpg", // Global/Port
  },
  {
    year: "1998",
    title: "ZeroB Launched",
    description:
      "Launches ZeroB, a dedicated consumer brand for safe drinking water solutions.",
    image:
      "https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&q=80&w=800", // Clean water glass
  },
  {
    year: "2003",
    title: "Rail Neer Project",
    description:
      'Commissions the first packaged drinking water plant for Indian Railways under the "Rail Neer" brand.',
    image:
      "Milestone-section/2003.jpg", // Bottling
  },
  {
    year: "2014",
    title: "ZLD in Petrochemicals",
    description:
      "Executes its first Zero Liquid Discharge (ZLD) project in the petrochemical sector.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800", // Industrial complex
  },
  {
    year: "2017",
    title: "Advanced Membrane Facility",
    description:
      "Opens an integrated advanced membrane manufacturing facility in Goa.",
    image:
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=800", // Advanced manufacturing
  },
  {
    year: "2019",
    title: "New R&D Centre",
    description:
      "Establishes a state-of-the-art research & development centre in Patancheru.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800", // Modern R&D
  },
  {
    year: "2021",
    title: "National Water Missions",
    description:
      "Undertakes major EPC projects under national water initiatives like Jal Jeevan Mission and Namami Gange.",
    image:
      "Milestone-section/2021.jpg", // Large water infra
  },
];

export const STATS: Stat[] = [
  { value: "40+", label: "Countries Served" },
  { value: "1M+", label: "Installations" },
  { value: "7", label: "Manufacturing Units" },
  { value: "1000+", label: "Service Engineers" },
];
