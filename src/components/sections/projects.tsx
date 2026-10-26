import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Reveal, SectionHeading, Spotlight, Tilt } from "@/components/site/primitives";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Tilt className="h-full" max={4}>
      <article className="glass card-glow group relative flex h-full flex-col overflow-hidden rounded-3xl">
        <Spotlight />
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} cover artwork`}
            loading="lazy"
            width={1280}
            height={800}
            className="size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-card),transparent_65%)]" />
          <span className="absolute top-4 left-4 rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-[10px] tracking-[0.18em] uppercase backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        <div className="relative flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-1 text-sm text-secondary">{project.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((t) => (
              <li
                key={t}
                className="rounded-md border border-border bg-surface-2/60 px-2 py-1 font-mono text-[11px] text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-2 pt-1">
            <Link
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="group/btn inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-secondary"
            >
              Case study
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <Github className="size-3.5" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </article>
    </Tilt>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Work that proves the thinking."
          lead="Each project ships with a written case study: the problem, the approach and what it produced."
        />

        <motion.div layout className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
