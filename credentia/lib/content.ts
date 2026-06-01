export const site = {
  name: "Credentia AI",
  tagline: "Intelligent Healthcare Automation",
  contactEmail: "contact@credentia.ai",
} as const;

export const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Workflows", href: "#workflows" },
  { label: "Leadership", href: "#leadership" },
] as const;

export const hero = {
  eyebrow: "Enterprise Healthcare Automation",
  headline:
    "Intelligent automation for healthcare operations—built for clinicians, scaled for enterprise.",
  subhead:
    "Credentia AI™ modernizes provider operations and infrastructure. Sentinel AI™ transforms behavioral healthcare delivery—together, they reduce burnout, streamline coordination, and expand access with human-centered intelligence.",
  primaryCta: { label: "Request a Demo", href: "#contact" },
  secondaryCta: { label: "Explore the Platform", href: "#platform" },
} as const;

export const trustStrip = {
  label: "Clinical informatics experience across leading EHR ecosystems",
  systems: [
    "Epic",
    "Cerner",
    "NextGen",
    "Avatar",
    "PointClickCare",
    "Tebra / Kareo",
  ],
} as const;

export const pillars = [
  {
    id: "credentia",
    product: "Credentia AI",
    trademark: true,
    accent: "cyan" as const,
    title: "Intelligent automation for provider operations",
    description:
      "Support the modernization of healthcare infrastructure and provider operations with scalable AI-powered workflows that reduce operational inefficiencies, workforce strain, and administrative burden across health systems.",
    highlights: [
      "Infrastructure & operations modernization",
      "Prior authorization & utilization management",
      "Regulatory-aligned intelligent automation",
    ],
  },
  {
    id: "sentinel",
    product: "Sentinel AI",
    trademark: true,
    accent: "gold" as const,
    title: "AI-driven behavioral healthcare delivery",
    description:
      "Lead the development and deployment of AI-driven technologies designed to transform behavioral healthcare delivery—improving care coordination, patient access, and outcomes through compassionate, enterprise-scale innovation.",
    highlights: [
      "Behavioral health program transformation",
      "Telepsychiatry-ready care models",
      "Care coordination at scale",
    ],
  },
] as const;

export const mission = {
  eyebrow: "Our Mission",
  title: "Transforming healthcare through intelligent, human-centered AI",
  items: [
    {
      title: "Behavioral health transformation",
      description:
        "Deploy Sentinel AI™ to advance AI-driven behavioral healthcare delivery and intelligent care models.",
      icon: "brain" as const,
    },
    {
      title: "Infrastructure modernization",
      description:
        "Leverage Credentia AI™ to modernize healthcare infrastructure and provider operations with intelligent automation platforms.",
      icon: "building" as const,
    },
    {
      title: "Clinician-centered operations",
      description:
        "Design solutions that reduce clinician burnout, administrative drag, and workforce strain across healthcare systems.",
      icon: "heart-handshake" as const,
    },
    {
      title: "Scalable intelligent workflows",
      description:
        "Build AI-powered workflows that improve patient access, care coordination, and delivery outcomes.",
      icon: "workflow" as const,
    },
    {
      title: "Human-centered enterprise AI",
      description:
        "Prioritize equity, compassion, innovation, and ethical transformation at enterprise scale.",
      icon: "scale" as const,
    },
  ],
} as const;

export const workflows = {
  eyebrow: "Intelligent Workflows",
  title: "Automation where care delivery meets operations",
  disclaimer:
    "Illustrative outcomes shown for demonstration purposes.",
  items: [
    {
      title: "Prior authorization",
      description:
        "Intelligent routing, documentation assistance, and faster determinations—reducing bottlenecks that delay patient care.",
      metric: "Faster determinations",
      accent: "cyan" as const,
    },
    {
      title: "Utilization management",
      description:
        "Data-driven reviews with regulatory alignment—streamlining UM processes and improving care delivery efficiency.",
      metric: "Reduced administrative drag",
      accent: "gold" as const,
    },
    {
      title: "Care coordination",
      description:
        "Cross-setting visibility and coordination workflows that improve access for underserved populations and behavioral health programs.",
      metric: "Improved care access",
      accent: "cyan" as const,
    },
  ],
} as const;

export const outcomes = {
  eyebrow: "Measurable Impact",
  title: "Outcomes that matter to patients, providers, and organizations",
  items: [
    {
      value: "Operational efficiency",
      label: "Streamlined workflows across clinical and administrative teams",
    },
    {
      value: "Time to authorization",
      label: "Reduced delays in prior auth and utilization processes",
    },
    {
      value: "Provider burden",
      label: "Less administrative strain—more time for patient care",
    },
  ],
} as const;

export const values = {
  eyebrow: "Our Values",
  title: "Human-centered AI at enterprise scale",
  items: [
    {
      name: "Equity",
      description: "Expanding access for underserved populations through thoughtful design.",
    },
    {
      name: "Compassion",
      description: "Technology that supports clinicians and honors the patient relationship.",
    },
    {
      name: "Innovation",
      description: "Combining clinical excellence with operational and AI workflow innovation.",
    },
    {
      name: "Ethics",
      description: "Responsible, transparent automation aligned with regulatory expectations.",
    },
  ],
} as const;

export const leadership = {
  eyebrow: "Leadership",
  title: "Clinical leadership meets AI workflow innovation",
  intro:
    "Our leadership brings over 18 years of progressive healthcare experience at the intersection of nursing informatics, behavioral health, and intelligent automation.",
  highlights: [
    "Executive experience in telepsychiatry, clinical program development, and EHR implementations",
    "Epic super user with deep familiarity across Cerner, NextGen, Avatar, PointClickCare, and Tebra/Kareo",
    "Specialization in prior authorization and utilization management AI workflows",
    "Proven track record in risk management, data-driven reporting, and regulatory alignment",
    "Passion for behavioral health initiatives that combine clinical excellence with operational innovation",
  ],
  closing:
    "We design scalable care models that streamline operations, improve access, and create measurable impact for patients, providers, and organizations alike.",
} as const;

export const cta = {
  title: "Ready to modernize healthcare operations with intelligent automation?",
  description:
    "Partner with Credentia AI™ to reduce operational friction, support clinicians, and deliver compassionate care at scale.",
  primary: { label: "Request a Demo", href: "mailto:contact@credentia.ai" },
  secondary: { label: "Learn about Sentinel AI™", href: "#platform" },
} as const;

export const footer = {
  disclaimer:
    "Demonstration environment. No PHI is collected or stored. Metrics shown are illustrative.",
  copyright: `© ${new Date().getFullYear()} Credentia AI. All rights reserved.`,
} as const;
