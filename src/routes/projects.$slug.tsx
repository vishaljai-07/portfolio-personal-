import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Reveal } from "@/components/site/primitives";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found — Vishal J" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.project.title} — Case study | Vishal J`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.project.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.project.tagline },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <article className="px-4 pt-36 pb-16 sm:pt-44">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            All case studies
          </Link>

          <p className="mt-8 font-mono text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
            {project.category}
          </p>
          <h1 className="mt-4 text-[clamp(2.25rem,6vw,4rem)] leading-[1.02] font-semibold">
            <span className="text-gradient">{project.title}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-secondary">{project.tagline}</p>
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src={project.image}
              alt={`${project.title} cover artwork`}
              width={1280}
              height={800}
              className="w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((t: string) => (
            <span
              key={t}
              className="rounded-md border border-border bg-surface-2/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.12} className="mt-12 grid gap-10">
          <Block title="Overview" body={project.overview} />
          <div>
            <h2 className="font-display text-xl font-medium">Highlights</h2>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((h: string) => (
                <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <Block title="My role" body={project.role} />
          <Block title="Outcome" body={project.outcome} />
        </Reveal>

        <Reveal delay={0.14} className="mt-12 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-secondary"
          >
            <Github className="size-4" />
            View source
          </a>
          <a
            href={project.demo ?? project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm transition-colors hover:border-primary/50"
          >
            <ExternalLink className="size-4" />
            Live demo
          </a>
        </Reveal>
      </div>
    </article>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="font-display text-xl font-medium">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{body}</p>
    </div>
  );
}
