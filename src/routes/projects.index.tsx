import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/sections/projects";
import { Reveal, SectionHeading } from "@/components/site/primitives";

const TITLE = "Projects — Vishal J, Cyber Security";
const DESC =
  "Detection labs, recon tooling and threat intel work by Vishal J, each with a written case study.";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <section className="px-4 pt-36 pb-16 sm:pt-44">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Case studies"
          title="Every project, in full."
          lead="The complete list — problem, approach and outcome for each build."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
