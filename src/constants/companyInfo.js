// ============================================
// DIGITEE WORLD - COMPANY INFORMATION
// Single source of truth for all company data
// ============================================

export const companyInfo = {
  // BASIC
  name: "Digitee World",
  tagline: "Physics of Business Growth",
  founded: "June 2022",
  foundedLocation: "Kota, Rajasthan",
  
  // BRANCHES
  branches: [
    {
      type: "Head Office",
      city: "Kota",
      state: "Rajasthan",
      isPrimary: true,
    },
    {
      type: "Corporate Office",
      city: "Indore",
      state: "Madhya Pradesh",
      isPrimary: false,
    },
  ],

  // SERVICE AREAS
  serviceAreas: ["Rajasthan", "Madhya Pradesh", "Pan India"],

  // CORE PHILOSOPHY
  philosophy: {
    title: "Physics of Business Growth",
    description:
      "Just as every physical system moves forward through the right balance of force, energy, and momentum, every business grows through the right mix of strategy, consistency, and data-driven action.",
    principles: [
      { name: "Force", meaning: "Strategy" },
      { name: "Energy", meaning: "Consistency" },
      { name: "Momentum", meaning: "Data-driven Action" },
    ],
  },
};

// ============================================
// ABOUT SECTIONS (for About Page)
// ============================================
export const aboutSections = {
  whoWeAre: {
    heading: "Who We Are",
    content: `Digitee World is a full-service Digital Marketing Company in Kota and Indore, dedicated to helping startups, local businesses, and established brands build a powerful online presence and achieve measurable growth. Our philosophy is rooted in what we proudly call the Physics of Business Growth — just as every physical system moves forward through the right balance of force, energy, and momentum, every business grows through the right mix of strategy, consistency, and data-driven action. This principle drives everything we do at Digitee World.`,
  },

  journey: {
    heading: "Our Journey",
    subheading: "Since June 2022",
    content: `Digitee World was founded in June 2022 in Kota, Rajasthan, with a simple mission: to deliver smart, ethical, and result-oriented digital marketing solutions. What began as a focused Local SEO and Google Business Profile consultancy has, over the years, grown into a trusted digital marketing partner for businesses across multiple industries. Today, Digitee World proudly operates from two branches — Kota and our corporate branch in Indore — giving us the reach and expertise to serve clients across Rajasthan, Madhya Pradesh, and beyond.`,
    milestones: [
      { year: "2022", event: "Founded in Kota, Rajasthan" },
      { year: "2022", event: "Started with Local SEO & GMB consultancy" },
      { year: "2023", event: "Expanded services across industries" },
      { year: "2024", event: "Opened Corporate Branch in Indore" },
      { year: "2025", event: "Scaling across Rajasthan, MP & beyond" },
    ],
  },

  whatWeDo: {
    heading: "What We Do",
    intro: `As a leading Digital Marketing Agency in Kota and Indore, we offer a complete range of services designed to generate leads, boost visibility, and drive real business growth.`,
    closing: `Whether you're a local business in Kota aiming to rank higher on Google Maps or a growing brand in Indore looking to scale through digital campaigns, our team blends industry expertise with the latest tools and technology to deliver results you can measure.`,
  },

  whyChooseUs: {
    heading: "Why Choose Digitee World",
    content: `At Digitee World, we believe digital marketing isn't just about traffic — it's about building trust, creating long-term relationships, and delivering outcomes that matter. With offices in both Kota and Indore, a team driven by discipline and strategic thinking, and a proven track record of result-oriented campaigns, we're here to power the next stage of your business growth.`,
    pillars: [
      {
        title: "Two Strategic Locations",
        desc: "Offices in Kota and Indore for wider reach and personal touch",
      },
      {
        title: "Discipline-Driven Team",
        desc: "Strategic thinkers focused on measurable outcomes",
      },
      {
        title: "Proven Track Record",
        desc: "Result-oriented campaigns that deliver real growth",
      },
      {
        title: "Trust & Relationships",
        desc: "Building long-term partnerships, not one-time deals",
      },
    ],
  },
};

// ============================================
// SERVICES (Complete List)
// ============================================
export const services = [
  {
    id: "gmb-optimization",
    name: "Google Business Profile (GMB) Optimization",
    shortName: "GMB Optimization",
    slug: "gmb-optimization",
    tagline: "Rank higher on Google Maps",
    description:
      "Complete Google Business Profile setup, optimization, and management to help local businesses dominate Google Maps and local search results.",
    category: "Local SEO",
  },
  {
    id: "local-seo",
    name: "Local SEO & Technical SEO",
    shortName: "SEO Services",
    slug: "seo-services",
    tagline: "Rank #1 on Google",
    description:
      "Comprehensive SEO strategies including local SEO, technical SEO, on-page and off-page optimization to boost organic visibility.",
    category: "SEO",
  },
  {
    id: "web-design",
    name: "Website Design & Development",
    shortName: "Web Development",
    slug: "web-development",
    tagline: "Websites that convert",
    description:
      "Custom, responsive, and SEO-friendly website design and development that turns visitors into customers.",
    category: "Development",
  },
  {
    id: "social-media",
    name: "Social Media Marketing",
    shortName: "Social Media",
    slug: "social-media-marketing",
    tagline: "Build your online community",
    description:
      "Strategic social media management, content creation, and community building across Instagram, Facebook, LinkedIn, and YouTube.",
    category: "Marketing",
  },
  {
    id: "ai-marketing",
    name: "AI-Powered Marketing & Automation",
    shortName: "AI Marketing",
    slug: "ai-marketing",
    tagline: "Smarter marketing with AI",
    description:
      "Leverage cutting-edge AI tools and marketing automation to streamline campaigns, personalize outreach, and scale efficiently.",
    category: "Advanced",
  },
  {
    id: "performance-marketing",
    name: "Performance Marketing",
    shortName: "Paid Ads",
    slug: "performance-marketing",
    tagline: "ROI-driven paid campaigns",
    description:
      "Data-driven Google Ads, Meta Ads, and YouTube Ads campaigns focused on conversions and measurable ROI.",
    category: "Marketing",
  },
  {
    id: "branding",
    name: "Branding & Online Reputation Management",
    shortName: "Branding & ORM",
    slug: "branding-orm",
    tagline: "Build a brand people trust",
    description:
      "Complete brand identity development, online reputation management, and review management to build lasting trust.",
    category: "Branding",
  },
  {
    id: "lead-generation",
    name: "Lead Generation & Business Growth Strategy",
    shortName: "Lead Generation",
    slug: "lead-generation",
    tagline: "Fill your sales pipeline",
    description:
      "Custom lead generation strategies and end-to-end business growth consulting to accelerate your revenue.",
    category: "Growth",
  },
];

// ============================================
// SEO KEYWORDS (For Meta Tags Later)
// ============================================
export const seoKeywords = {
  primary: [
    "Digital Marketing Company in Kota",
    "Digital Marketing Company in Indore",
    "Digital Marketing Agency in Kota",
    "Digital Marketing Agency in Indore",
    "SEO Company in Kota",
    "SEO Company in Indore",
  ],
  secondary: [
    "Google Business Profile Kota",
    "Local SEO Kota Indore",
    "Website Development Kota",
    "Social Media Marketing Indore",
    "Performance Marketing Rajasthan",
    "AI Marketing MP",
  ],
  locations: ["Kota", "Indore", "Rajasthan", "Madhya Pradesh"],
};

// ============================================
// KEY DIFFERENTIATORS (Quick Access)
// ============================================
export const keyPoints = {
  established: "June 2022",
  locations: "Kota & Indore",
  approach: "Physics of Business Growth",
  focus: ["Startups", "Local Businesses", "Established Brands"],
  values: ["Smart", "Ethical", "Result-Oriented"],
  differentiators: [
    "Two Strategic Branches (Kota + Indore)",
    "Physics-Based Growth Framework",
    "Ethical & Data-Driven Approach",
    "Discipline-Driven Team",
    "Trust & Long-term Relationships",
  ],
};