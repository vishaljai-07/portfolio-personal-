/**
 * Single source of truth for portfolio content.
 *
 * Resume-backed fields are populated from the uploaded PDF.
 */

export const PLACEHOLDER = "Add from resume";

export const profile = {
  name: "Vishal J",
  roles: ["Cyber Security Enthusiast", "B.Tech IT Student", "SOC Aspirant"],
  intro:
    "Motivated B.Tech Information Technology student with hands-on internship experience in cybersecurity. Skilled in Python, Linux, HTML, CSS and networking fundamentals, with a strong interest in SOC work and vulnerability assessment.",
  location: "Chennai, Tamil Nadu",
  email: "vishaljai@yahoo.com",
  phone: "+91 9791205137",
  github: "https://github.com/vishaljai-07",
  linkedin: "https://www.linkedin.com/in/vishaljai",
  resumeUrl: "/resume.pdf",
};

export const about = [
  {
    label: "Career Objective",
    body: "Motivated B.Tech Information Technology student with hands-on internship experience in cybersecurity and a clear interest in SOC and vulnerability assessment work.",
    placeholder: false,
  },
  {
    label: "Education",
    body: "B.Tech Information Technology, S.A Engineering College (2023-Present), CGPA 7.68 up to Semester VI." + "\n" + "Higher Secondary Education, Shri Krishnaswamy Matric Higher Secondary School (2022-2023), 60%.",
    placeholder: false,
  },
  {
    label: "Focus Area",
    body: "SOC monitoring, SIEM tools, vulnerability assessment, incident response, Linux, networking fundamentals, and threat detection.",
    placeholder: false,
  },
  {
    label: "Passion",
    body: "Security monitoring, log analysis, anomaly detection, cyber forensic investigation, and documenting findings clearly for the next analyst.",
    placeholder: false,
  },
  {
    label: "Languages",
    body: "English, Tamil and Hindi.",
    placeholder: false,
  },
  {
    label: "Location",
    body: "Chennai, Tamil Nadu.",
    placeholder: false,
  },
];

export type Stat = {
  value: number;
  suffix: string;
  label: string;
  note?: string;
};

export const stats: Stat[] = [
  { value: 8, suffix: "", label: "Tools & platforms" },
  { value: 1, suffix: "", label: "Security project" },
  { value: 2, suffix: "", label: "Internships" },
  { value: 2, suffix: "", label: "Certifications" },
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
      { name: "Java Basics", icon: "Code2" },
      { name: "HTML", icon: "FileCode" },
      { name: "CSS", icon: "Palette" },
      { name: "Prompt Engineering", icon: "Sparkles" },
      { name: "MongoDB", icon: "Database" },
    ],
  },
  {
    group: "Security Operations",
    blurb: "Detection, triage and investigation across the alert lifecycle.",
    items: [
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
      { name: "GitHub", icon: "Github" },
    ],
  },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  points: string[];
  placeholder?: boolean;
  verifyUrl?: string;
};

export const experience: Experience[] = [
  {
    role: "Cyber Security Intern",
    org: "IARM Information Security Pvt. Ltd.",
    period: "June 2026 ( 1 Month )",
    points: [
      "Monitored and analyzed security events using SIEM tools to identify and investigate potential threats.",
      "Performed basic Vulnerability Assessment (VA) and gained exposure to VAPT methodologies and security testing tools.",
      "Worked with Linux, Active Directory, networking fundamentals, and incident response workflows in a SOC environment.",
      "Assisted in security monitoring, log analysis, and incident investigation following SOC best practices.",
    ],
    placeholder: false,
    verifyUrl: "/iarm-internship.pdf",
  },
  {
    role: "Cyber Security Intern",
    org: "Arjun Vision Tech Solution",
    period: "July 2025",
    points: [
      "Gained practical exposure to cybersecurity fundamentals.",
      "Learned about threat identification and risk management techniques. Studied secure system practices and protection strategies.",
      "Explored how organizations monitor and prevent cyber attacks.",
    ],
    placeholder: false,
    verifyUrl: "/arjun-internship.pdf",
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
  github?: string;
  demo?: string;
  highlights: string[];
  overview: string;
  role: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "advanced-system-log-analyzer",
    title: "Advanced System Log Analyzer for Anomaly Detection & Cyber Forensic Investigation",
    tagline: "AI-powered log analysis that detects anomalies and sends real-time threat alerts.",
    description:
      "An AI-powered system log analyser that automates log monitoring, detects abnormal activity and sends real-time alerts to speed up incident response.",
    category: "Detection",
    stack: ["HTML", "CSS", "Flask", "Python", "MongoDB"],
    image: "/images/project-intel.jpg",
    github: "https://github.com/vishaljai-07/Cyber-Monitoring-.git",
    highlights: [
      "Real-time log monitoring",
      "AI-based anomaly detection with LSTM and Isolation Forest",
      "Threat classification, email alerts and interactive dashboard views",
    ],
    overview:
      "Traditional log monitoring generates thousands of events every day, making it difficult to spot real threats quickly. This project automates log collection, preprocessing and anomaly detection so suspicious behavior can be classified and surfaced faster for analysts.",
    role: "Designed the project architecture, developed the Flask backend, implemented the AI models and built the real-time dashboard and alert flow.",
    outcome: "Improves visibility into potential cyber threats, reduces manual log analysis effort and supports faster incident response and cyber forensic investigations.",
  },
  {
    slug: "aegis",
    title: "AEGIS — Adaptive Exposure Graph & Intelligent Security Validation",
    tagline:
      "A team-built autonomous penetration-testing workflow that validates findings and re-tests remediation.",
    description:
      "Designed around MAPE-K-V, AEGIS connects authorized asset discovery, evidence-backed finding validation, and post-remediation exploit-chain replay for controlled security assessments.",
    category: "Detection",
    stack: ["Python", "Nmap", "Metasploit", "Hydra", "SQLMap", "JSON"],
    image: "/images/project-soc-lab.jpg",
    highlights: [
      "MAPE-K-V lifecycle: Monitor, Analyze, Plan, Execute, Knowledge, and Verify",
      "Independent corroboration grades findings Confirmed, Suspected, or Needs Human Review",
      "Remediation replay classifies results as Verified Closed, Ineffective Fix / Reopened, Regression Detected, or Inconclusive",
      "Evidence ledger and finding history support traceable, evidence-backed reports",
      "Evaluation scenarios cover unpatched, ambiguous, correctly patched, ineffective-fix, and regression cases",
    ],
    overview:
      "AEGIS (Adaptive Exposure Graph & Intelligent Security Validation) is an academic team project that extends autonomous penetration testing beyond a single exploit attempt. The system treats tool output as evidence to validate, rather than unquestionable proof. Its MAPE-K-V workflow discovers assets and services, ranks candidate actions by expected gain, information value, cost, and risk, executes authorized assessments, independently corroborates findings, and verifies reported fixes by replaying the original attack chain.",
    role:
      "Contributed as a project team member to the design and development of the AEGIS autonomous penetration-testing and security-validation workflow.",
    outcome:
      "The project is designed to improve finding reliability, expose ineffective fixes and regressions, and preserve each finding’s lifecycle from discovery through remediation verification. Its evaluation plan measures confidence-grade accuracy, verification-verdict accuracy, false-positive reduction, and false all-clear rate; the report does not claim measured scores.",
  },
];

export type Certification = {
  name: string;
  org: string;
  status: "Completed" | "In progress" | "Planned";
  verifyUrl?: string;
  placeholder?: boolean;
};

export type Achievement = {
  title: string;
  event: string;
  details: string;
};

export const certifications: Certification[] = [
  {
    name: "Introduction to Cyber Security",
    org: "Cisco Networking Academy",
    status: "Completed",
    verifyUrl: "/cisco-introduction.pdf",
  },
  {
    name: "Cyber Threat Management",
    org: "Cisco Networking Academy",
    status: "In progress",
  },
];

export const achievements: Achievement[] = [
  {
    title: "MAGNUS25",
    event: "Participant, Paper Presentation",
    details: "Participated in the MAGNUS25 paper presentation event.",
  },
  {
    title: "ELITEZ24",
    event: "Participant, Paper Presentation",
    details: "Participated in the ELITEZ24 paper presentation event.",
  },
  {
    title: "Agentic AI Master Class",
    event: "Workshop Participant",
    details: "Attended the Agentic AI Master Class workshop as a participant.",
  },
  {
    title: "MindQuest",
    event: "Secured 2nd Position in Technical Quiz",
    details: "Secured second place in the MindQuest technical quiz.",
  },
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
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];
