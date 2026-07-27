import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Achievements, Certifications } from "@/components/sections/credentials";
import { Contact } from "@/components/sections/contact";

const TITLE = "Vishal J — Cyber Security Engineer & SOC Analyst Aspirant";
const DESC =
  "Threat detection, SIEM engineering and MITRE ATT&CK work by Vishal J. Projects, skills and case studies in one place.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />
    </>
  );
}
