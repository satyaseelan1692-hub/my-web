export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "+", label: "Active Clients" },
  { value: 99.99, suffix: "%", label: "Infrastructure Availability" },
  { value: 24, suffix: "/7", label: "Technical Support" },
  { value: 25, suffix: "+", label: "Engineers" },
];

export const SERVICES = [
  {
    slug: "network-infrastructure",
    title: "Network Infrastructure",
    short: "Enterprise-grade LAN, WAN and wireless networks built for scale.",
    description:
      "We design, deploy and maintain the physical and logical backbone your business runs on — structured cabling, switching, routing, and wireless coverage engineered for zero-downtime operations.",
    features: [
      "Structured cabling & data centre builds",
      "Enterprise switching & routing (Cisco, MikroTik)",
      "High-density wireless (Wi-Fi 6/6E)",
      "SD-WAN & multi-site connectivity",
      "Network monitoring & capacity planning",
    ],
    benefits: [
      "Predictable performance under peak load",
      "Reduced downtime through redundant design",
      "Future-ready capacity as you scale",
    ],
    process: [
      "Site survey & requirements audit",
      "Topology design & capacity modelling",
      "Staged deployment & cutover",
      "Testing, documentation & handover",
      "Ongoing monitoring & optimisation",
    ],
    stack: ["Cisco", "MikroTik", "Ubiquiti", "Fortinet", "HP Aruba"],
    caseStudy: {
      title: "Nationwide branch network refresh",
      result: "38% reduction in packet loss across 42 branch sites within one quarter.",
    },
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    short: "Migration, architecture and management across hybrid and multi-cloud.",
    description:
      "From lift-and-shift migrations to cloud-native re-architecture, we help enterprises move faster without losing control of cost, security or compliance.",
    features: [
      "Cloud migration & workload assessment",
      "Hybrid & multi-cloud architecture",
      "Cost optimisation & FinOps",
      "Backup, disaster recovery & business continuity",
      "Managed cloud operations",
    ],
    benefits: [
      "Lower total cost of ownership",
      "Elastic scale during demand spikes",
      "Built-in resilience and recovery",
    ],
    process: [
      "Workload & readiness assessment",
      "Architecture & migration planning",
      "Phased migration with rollback safety",
      "Performance tuning",
      "Continuous cost & security review",
    ],
    stack: ["Microsoft Azure", "VMware", "Dell", "HP", "Veeam"],
    caseStudy: {
      title: "Legacy data centre to hybrid cloud",
      result: "Cut infrastructure spend by 31% while doubling failover readiness.",
    },
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    short: "Threat detection, hardening and 24/7 monitoring for the modern enterprise.",
    description:
      "Security built in layers — from network perimeter to endpoint to human behaviour — with continuous monitoring so threats are caught before they become incidents.",
    features: [
      "Next-gen firewall & intrusion prevention",
      "Endpoint detection & response (EDR)",
      "Security operations centre (SOC) monitoring",
      "Vulnerability assessment & penetration testing",
      "Security awareness training",
    ],
    benefits: [
      "Reduced breach exposure window",
      "Regulatory & compliance readiness",
      "24/7 visibility across the environment",
    ],
    process: [
      "Security posture assessment",
      "Control design & remediation roadmap",
      "Deployment & hardening",
      "Continuous monitoring",
      "Incident response & reporting",
    ],
    stack: ["Fortinet", "Microsoft Defender", "Cisco", "CrowdStrike"],
    caseStudy: {
      title: "Financial services SOC rollout",
      result: "Mean time to detect threats reduced from 11 hours to 14 minutes.",
    },
  },
  {
    slug: "software-development",
    title: "Software Development",
    short: "Custom platforms, internal tools and enterprise integrations.",
    description:
      "We build web and mobile applications, internal systems, and integration layers that connect the tools your teams already depend on.",
    features: [
      "Custom web & mobile applications",
      "Enterprise system integrations & APIs",
      "Internal tooling & workflow automation",
      "Legacy system modernisation",
      "DevOps & CI/CD pipelines",
    ],
    benefits: [
      "Software built around your workflow, not the other way around",
      "Faster release cycles",
      "Reduced manual, error-prone processes",
    ],
    process: [
      "Discovery & requirements workshops",
      "Architecture & UX design",
      "Agile development sprints",
      "QA & user acceptance testing",
      "Deployment & support",
    ],
    stack: ["TypeScript", "Next.js", "Node.js", ".NET", "PostgreSQL"],
    caseStudy: {
      title: "Field service management platform",
      result: "Cut technician dispatch time by 46% across 3 regional teams.",
    },
  },
  {
    slug: "voip-communications",
    title: "VoIP Communications",
    short: "Enterprise voice, contact centre and unified communications.",
    description:
      "Cloud and on-premise voice systems that unify calling, messaging and contact centre operations across every office and remote worker.",
    features: [
      "Cloud & on-premise PBX",
      "Contact centre & IVR design",
      "SIP trunking & number porting",
      "Unified communications (voice, video, chat)",
      "Call analytics & quality monitoring",
    ],
    benefits: [
      "Lower telephony costs across sites",
      "Consistent experience for remote teams",
      "Data-driven contact centre performance",
    ],
    process: [
      "Call flow & requirements mapping",
      "Platform selection & design",
      "Number porting & cutover planning",
      "Deployment & agent training",
      "Ongoing quality monitoring",
    ],
    stack: ["Yeastar", "Grandstream", "Microsoft Teams", "3CX"],
    caseStudy: {
      title: "Multi-branch contact centre unification",
      result: "Consolidated 6 regional call centres into one platform, cutting telecom cost 27%.",
    },
  },
  {
    slug: "managed-it-services",
    title: "Managed IT Services",
    short: "Proactive monitoring, helpdesk and full IT operations as a service.",
    description:
      "A full technical team on call — proactive monitoring, helpdesk support and strategic IT planning, so your internal team can focus on the business, not the break-fix.",
    features: [
      "24/7 helpdesk & remote support",
      "Proactive monitoring & patch management",
      "Asset & lifecycle management",
      "vCIO strategic planning",
      "SLA-backed response times",
    ],
    benefits: [
      "Predictable monthly IT spend",
      "Faster issue resolution",
      "Strategic technology roadmap",
    ],
    process: [
      "IT environment audit",
      "SLA & scope definition",
      "Onboarding & monitoring deployment",
      "Ongoing support & reporting",
      "Quarterly strategy review",
    ],
    stack: ["Microsoft 365", "RMM tooling", "ConnectWise", "Dell", "HP"],
    caseStudy: {
      title: "Full IT outsourcing for a manufacturing group",
      result: "Ticket resolution time improved 3x within the first 90 days.",
    },
  },
  {
    slug: "cctv-access-control",
    title: "CCTV & Access Control",
    short: "Surveillance, access control and integrated physical security.",
    description:
      "Physical security systems that integrate with your IT environment — camera networks, access control and analytics in a single pane of glass.",
    features: [
      "IP camera design & installation",
      "Access control & biometric systems",
      "Video analytics & AI-based alerts",
      "Remote monitoring integration",
      "Perimeter & site security design",
    ],
    benefits: [
      "Centralised visibility across sites",
      "Reduced security incidents",
      "Audit-ready access logs",
    ],
    process: [
      "Site assessment & risk mapping",
      "Camera & access point design",
      "Installation & network integration",
      "Analytics configuration",
      "Handover & maintenance plan",
    ],
    stack: ["Hikvision", "Dahua", "Ubiquiti Protect", "MikroTik"],
    caseStudy: {
      title: "Campus-wide security upgrade",
      result: "Unified 14 buildings under one monitoring platform with AI-based alerts.",
    },
  },
  {
    slug: "microsoft-365",
    title: "Microsoft 365",
    short: "Licensing, migration and management of the Microsoft ecosystem.",
    description:
      "From tenant setup to security hardening, we manage the full Microsoft 365 environment — email, collaboration, identity and compliance.",
    features: [
      "Tenant setup & licensing optimisation",
      "Exchange & SharePoint migration",
      "Identity & conditional access (Entra ID)",
      "Teams deployment & governance",
      "Compliance & data loss prevention",
    ],
    benefits: [
      "Right-sized licensing spend",
      "Secure, compliant collaboration",
      "Single vendor for the whole ecosystem",
    ],
    process: [
      "Tenant & licensing assessment",
      "Migration planning",
      "Phased rollout",
      "Security hardening",
      "User adoption & training",
    ],
    stack: ["Microsoft 365", "Entra ID", "SharePoint", "Teams"],
    caseStudy: {
      title: "Full tenant migration for 300+ seats",
      result: "Zero data loss migration completed over a single weekend cutover.",
    },
  },
  {
    slug: "lark-collaboration",
    title: "Lark Collaboration",
    short: "Deployment and workflow design on the Lark platform.",
    description:
      "We roll out Lark as an all-in-one collaboration suite — messaging, docs, calendar and approval workflows — tailored to how your teams actually work.",
    features: [
      "Workspace setup & migration",
      "Custom approval & workflow automation",
      "Integration with existing business systems",
      "Admin & security configuration",
      "Team onboarding & training",
    ],
    benefits: [
      "One platform instead of five disconnected tools",
      "Faster internal approvals",
      "Better visibility across departments",
    ],
    process: [
      "Workflow discovery",
      "Workspace design",
      "Migration & integration",
      "Automation build-out",
      "Training & adoption support",
    ],
    stack: ["Lark Suite", "Lark Base", "Lark Approval"],
    caseStudy: {
      title: "Regional retail chain workflow digitisation",
      result: "Replaced 5 disconnected tools, cutting approval cycle time by 60%.",
    },
  },
];

export const ECOSYSTEM_NODES = [
  "Microsoft",
  "Cisco",
  "Fortinet",
  "Dell",
  "HP",
  "VMware",
  "Lark",
  "Ubiquiti",
  "Grandstream",
  "Yeastar",
  "MikroTik",
];

export const INDUSTRIES = [
  {
    slug: "government",
    name: "Government",
    challenges: "Legacy infrastructure, strict compliance requirements, and citizen-facing uptime demands.",
    solutions: "Hardened network infrastructure, compliant cloud hosting, and 24/7 monitored security operations.",
    benefits: "Improved service uptime and audit-ready compliance posture.",
    caseStudy: "Statewide agency network modernisation across 9 departments.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    challenges: "Sensitive patient data, regulatory compliance, and zero-tolerance for system downtime.",
    solutions: "Secure network segmentation, HIPAA-aligned data protection, and redundant infrastructure.",
    benefits: "Continuous system availability with strengthened data protection.",
    caseStudy: "Private hospital network and security overhaul across 3 facilities.",
  },
  {
    slug: "education",
    name: "Education",
    challenges: "Large user bases, limited budgets, and growing demand for digital learning tools.",
    solutions: "Campus-wide Wi-Fi, ICT lab builds, and centrally managed device fleets.",
    benefits: "Reliable connectivity for students and staff at a manageable cost.",
    caseStudy: "School ICT lab and campus network deployment for 1,200 students.",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    challenges: "OT/IT convergence, plant-floor connectivity, and production continuity.",
    solutions: "Industrial-grade networking, segmented OT security, and proactive monitoring.",
    benefits: "Reduced unplanned downtime and safer converged networks.",
    caseStudy: "Plant-wide network and CCTV integration for a manufacturing group.",
  },
  {
    slug: "retail",
    name: "Retail",
    challenges: "Multi-site consistency, POS uptime, and customer data security.",
    solutions: "SD-WAN across branches, PCI-aligned security, and centralised support.",
    benefits: "Consistent in-store experience across every location.",
    caseStudy: "Regional retail chain multi-site network unification.",
  },
  {
    slug: "sme",
    name: "SME",
    challenges: "Limited in-house IT resources and constrained budgets.",
    solutions: "Managed IT services, right-sized cloud, and Microsoft 365 bundles.",
    benefits: "Enterprise-grade capability without an enterprise-grade budget.",
    caseStudy: "Full outsourced IT operations for a fast-growing SME.",
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    challenges: "Complex multi-site operations, legacy systems, and evolving threat landscape.",
    solutions: "End-to-end infrastructure, security and software modernisation programmes.",
    benefits: "A single accountable partner across the full technology stack.",
    caseStudy: "Group-wide digital transformation across 42 branch sites.",
  },
];

export const PROJECTS = [
  {
    slug: "corporate-network-deployment",
    title: "Corporate Network Deployment",
    scope: "End-to-end LAN/WAN deployment across 42 branch locations.",
    tech: ["Cisco", "MikroTik", "Fortinet"],
    timeline: "Feb 2024 – Aug 2024",
    outcome: "38% reduction in packet loss and unified branch connectivity.",
  },
  {
    slug: "cloud-migration",
    title: "Cloud Migration",
    scope: "Migration of legacy on-premise workloads to a hybrid cloud model.",
    tech: ["Microsoft Azure", "VMware", "Veeam"],
    timeline: "May 2024 – Oct 2024",
    outcome: "31% infrastructure cost reduction with improved failover.",
  },
  {
    slug: "contact-center-implementation",
    title: "Contact Center Implementation",
    scope: "Unified cloud contact centre replacing six regional call centres.",
    tech: ["Yeastar", "Grandstream", "Microsoft Teams"],
    timeline: "Jan 2024 – Apr 2024",
    outcome: "27% reduction in telecom costs post-consolidation.",
  },
  {
    slug: "cyber-security-upgrade",
    title: "Cyber Security Upgrade",
    scope: "SOC deployment and endpoint hardening for a financial services client.",
    tech: ["Fortinet", "CrowdStrike", "Microsoft Defender"],
    timeline: "Mar 2024 – Jun 2024",
    outcome: "Mean detection time cut from 11 hours to 14 minutes.",
  },
  {
    slug: "school-ict-lab",
    title: "School ICT Lab",
    scope: "Campus network and ICT lab build-out for a secondary school.",
    tech: ["Ubiquiti", "Dell", "HP"],
    timeline: "Nov 2023 – Jan 2024",
    outcome: "Reliable connectivity delivered for 1,200 students and staff.",
  },
  {
    slug: "government-infrastructure-project",
    title: "Government Infrastructure Project",
    scope: "Network modernisation across nine government departments.",
    tech: ["Cisco", "Fortinet", "VMware"],
    timeline: "Jul 2023 – Feb 2024",
    outcome: "Unified, audit-ready infrastructure across all departments.",
  },
];

export const OPEN_POSITIONS = [
  {
    slug: "technical-support-engineer",
    title: "Technical Support Engineer",
    type: "Full-time",
    location: "On-site / Hybrid",
  },
  {
    slug: "network-engineer",
    title: "Network Engineer",
    type: "Full-time",
    location: "On-site",
  },
  {
    slug: "system-engineer",
    title: "System Engineer",
    type: "Full-time",
    location: "Hybrid",
  },
  {
    slug: "software-developer",
    title: "Software Developer",
    type: "Full-time",
    location: "Hybrid / Remote",
  },
  {
    slug: "project-manager",
    title: "Project Manager",
    type: "Full-time",
    location: "On-site",
  },
];

export const TIMELINE = [
  { year: "2014", event: "SNexus founded as a networking consultancy." },
  { year: "2017", event: "Expanded into managed IT services and helpdesk operations." },
  { year: "2019", event: "Launched dedicated cyber security division." },
  { year: "2021", event: "Cloud & VoIP practice established for enterprise clients." },
  { year: "2023", event: "Software development team launched for custom platforms." },
  { year: "2025", event: "500+ projects delivered across government, healthcare and enterprise." },
];

export const CORE_VALUES = [
  { title: "Precision", desc: "Every deployment is engineered, measured and documented — nothing is left to chance." },
  { title: "Resilience", desc: "We design systems that stay online, and teams that respond when it matters most." },
  { title: "Transparency", desc: "Clear reporting, honest timelines, and no hidden scope." },
  { title: "Partnership", desc: "We operate as an extension of your team, not a vendor on the other end of a ticket." },
];
