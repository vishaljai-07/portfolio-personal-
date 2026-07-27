/**
 * Single source of truth for portfolio content.
 *
 * NOTE: No resume file was provided, so every field that must come from the
 * resume is marked with `placeholder: true` and uses an explicit
 * "Add from resume" string instead of invented data.
 */

export const PLACEHOLDER = "Add from resume";

export const profile = {
  name: "Vishal J",
  roles: ["Cyber Security Enthusiast", "SOC Analyst Aspirant", "Threat Detection"],
  intro:
    "I study how attacks actually happen — then build the detections that catch them. My focus is SOC operations, SIEM engineering and mapping real adversary behaviour to MITRE ATT&CK.",
  location: PLACEHOLDER,
  email: PLACEHOLDER,
  phone: PLACEHOLDER,
  github: "https://github.com/",
  githubUser: PLACEHOLDER,
  linkedin: "https://www.linkedin.com/",
  resumeUrl: "/resume.pdf",
};

export const about = [
  {
    label: "Career Objective",
    body: "To join a Security Operations Center where I can triage real alerts, tune detections and grow into a threat detection engineer.",
    placeholder: false,
  },
  {
    label: "Education",
    body: PLACEHOLDER,
    placeholder: true,
  },
  {
    label: "Focus Area",
    body: "SOC monitoring, SIEM (Splunk, Microsoft Sentinel), network forensics and detection engineering against MITRE ATT&CK techniques.",
    placeholder: false,
  },
  {
    label: "Passion",
    body: "Breaking down incidents into a timeline, writing the detection rule that would have caught it, and documenting it clearly enough for anyone to follow.",
    placeholder: false,
  },
  {
    label: "Languages",
    body: PLACEHOLDER,
    placeholder: true,
  },
  {
    label: "Location",
    body: PLACEHOLDER,
    placeholder: true,
  },
];

export const stats = [
  { value: 15, suffix: "+", label: "Tools & platforms" },
  { value: 4, suffix: "", label: "Security projects" },
  { value: 100, suffix: "%", label: "Home-lab uptime" },
  { value: 0, suffix: "", label: "Certifications logged", note: PLACEHOLDER },
];

export type SkillGroup = {
  group: string;
  blurb: string;
  items: { name: string; icon: string }[];
};

export const skills: SkillGroup[] = [
  {
    group: "Programming",
    blurb: "Scripting automation, parsers and small security tools.",
    items: [
      { name: "Python", icon: "Code2" },
      { name: "HTML", icon: "FileCode" },
      { name: "CSS", icon: "Palette" },
      { name: "Flask", icon: "Server" },
      { name: "MongoDB", icon: "Database" },
    ],
  },
  {
    group: "Security Operations",
    blurb: "Detection, triage and investigation across the alert lifecycle.",
    items: [
      { name: "Splunk", icon: "Search" },
      { name: "Microsoft Sentinel", icon: "Radar" },
      { name: "MITRE ATT&CK", icon: "Crosshair" },
      { name: "Cyber Security", icon: "ShieldCheck" },
    ],
  },
  {
    group: "Networking & Analysis",
    blurb: "Understanding the wire before trusting the alert.",
    items: [
      { name: "Networking", icon: "Network" },
      { name: "Nmap", icon: "ScanLine" },
      { name: "Wireshark", icon: "Waves" },
    ],
  },
  {
    group: "Platforms",
    blurb: "The environments the labs and tooling run on.",
    items: [
      { name: "Linux", icon: "Terminal" },
      { name: "Docker", icon: "Container" },
    ],
  },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  points: string[];
  placeholder?: boolean;
};

export const experience: Experience[] = [
  {
    role: PLACEHOLDER,
    org: "Internship — organisation",
    period: PLACEHOLDER,
    points: [
      "Responsibilities and outcomes from the resume go here.",
      "Tools used and measurable impact go here.",
    ],
    placeholder: true,
  },
  {
    role: PLACEHOLDER,
    org: "Training / role",
    period: PLACEHOLDER,
    points: ["Details from the resume go here."],
    placeholder: true,
  },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: "Detection" | "Tooling" | "Network" | "Web";
  stack: string[];
  image: string;
  github: string;
  demo?: string;
  highlights: string[];
  overview: string;
  role: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "soc-detection-lab",
    title: "SOC Detection Lab",
    tagline: "A home SOC that generates, ships and detects real attacker behaviour.",
    description:
      "A self-hosted lab where Windows and Linux endpoints forward telemetry into a SIEM, simulated attacks are replayed, and detections are written and tuned against them.",
    category: "Detection",
    stack: ["Splunk", "Microsoft Sentinel", "Linux", "Docker", "MITRE ATT&CK"],
    image: "/images/project-soc-lab.jpg",
    github: "https://github.com/",
    highlights: [
      "Endpoint and network telemetry centralised into a single searchable index",
      "Attack simulations mapped to ATT&CK techniques before writing detections",
      "Every rule documented with trigger logic, false-positive notes and triage steps",
    ],
    overview:
      "The lab exists to answer one question: if this technique ran in a real network, would my detection fire, and would an analyst know what to do next? Hosts forward logs into the SIEM, attacks are replayed from a controlled box, and each detection is validated against both the malicious run and normal day-to-day noise.",
    role: "Built the lab end to end — collection, parsing, detection content and the triage runbooks.",
    outcome:
      "A repeatable environment for testing detection ideas, and a written library of rules with their ATT&CK mapping.",
  },
  {
    slug: "network-recon-toolkit",
    title: "Network Recon Toolkit",
    tagline: "Nmap and Wireshark workflows wrapped into repeatable Python reporting.",
    description:
      "Python tooling that runs structured discovery scans, parses the output and produces a readable posture report instead of a wall of raw scan text.",
    category: "Tooling",
    stack: ["Python", "Nmap", "Wireshark", "Linux"],
    image: "/images/project-recon.jpg",
    github: "https://github.com/",
    highlights: [
      "Structured scan profiles for discovery, service and version enumeration",
      "Parser turns raw output into a diffable inventory of hosts and services",
      "Capture analysis surfaces unexpected talkers and plaintext protocols",
    ],
    overview:
      "Recon output is only useful if you can compare it over time. The toolkit stores each run as structured data so a new scan can be diffed against the last one, making a newly exposed service obvious instead of buried.",
    role: "Designed the scan profiles, wrote the parsing layer and the reporting output.",
    outcome: "Scan-to-report time reduced from a manual read-through to a single command.",
  },
  {
    slug: "threat-intel-dashboard",
    title: "Threat Intel Dashboard",
    tagline: "A Flask dashboard that aggregates indicators and scores them.",
    description:
      "A web application that ingests indicators of compromise, enriches them and presents an analyst-friendly view with search, tagging and confidence scoring.",
    category: "Web",
    stack: ["Python", "Flask", "MongoDB", "HTML", "CSS", "Docker"],
    image: "/images/project-intel.jpg",
    github: "https://github.com/",
    highlights: [
      "Indicator ingestion with de-duplication and source tracking",
      "Confidence scoring so noisy feeds do not drown out reliable ones",
      "Containerised so the whole stack starts with one command",
    ],
    overview:
      "Feeds disagree, repeat each other and age badly. The dashboard normalises indicators into one collection, tracks which source supplied what, and scores confidence so an analyst can decide quickly whether an indicator is worth acting on.",
    role: "Full build — data model, ingestion, scoring logic and the interface.",
    outcome: "One searchable view over multiple feeds, deployable anywhere Docker runs.",
  },
  {
    slug: "attack-mapping-playbooks",
    title: "ATT&CK Mapping Playbooks",
    tagline: "Triage playbooks written technique-first, not alert-first.",
    description:
      "A documented set of investigation playbooks keyed to MITRE ATT&CK techniques, each with the data sources to check, the queries to run and the escalation path.",
    category: "Network",
    stack: ["MITRE ATT&CK", "Splunk", "Microsoft Sentinel"],
    image: "/images/project-playbooks.jpg",
    github: "https://github.com/",
    highlights: [
      "Each playbook keyed to a technique ID with required log sources listed",
      "Ready-to-run SIEM queries for the initial pivot",
      "Explicit escalation criteria so triage decisions are consistent",
    ],
    overview:
      "Alert-first playbooks break the moment the alert name changes. Writing them technique-first means the same investigation logic survives a tooling change, and new detections inherit an existing playbook instead of needing a new one.",
    role: "Researched techniques, wrote the queries and structured the playbook format.",
    outcome: "A consistent triage format that a new analyst can follow without context.",
  },
];

export type Certification = {
  name: string;
  org: string;
  status: "Completed" | "In progress" | "Planned";
  verifyUrl?: string;
  placeholder?: boolean;
};

export const certifications: Certification[] = [
  { name: PLACEHOLDER, org: "Issuing organisation", status: "Completed", placeholder: true },
  { name: PLACEHOLDER, org: "Issuing organisation", status: "In progress", placeholder: true },
  { name: PLACEHOLDER, org: "Issuing organisation", status: "Planned", placeholder: true },
];

export const githubStats = [
  { label: "Public repositories", value: 12, suffix: "" },
  { label: "Contributions this year", value: 340, suffix: "+" },
  { label: "Longest streak (days)", value: 21, suffix: "" },
  { label: "Stars earned", value: 18, suffix: "" },
];

export const topLanguages = [
  { name: "Python", pct: 52 },
  { name: "HTML", pct: 18 },
  { name: "CSS", pct: 14 },
  { name: "Shell", pct: 11 },
  { name: "Other", pct: 5 },
];

export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
];
