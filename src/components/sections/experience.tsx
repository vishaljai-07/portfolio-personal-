import { experience } from "@/data/portfolio";
import { Reveal, SectionHeading, Spotlight } from "@/components/site/primitives";

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where the practice happened."
          lead="Roles, internships and training drawn from the resume."
        />

        <ol className="relative mt-12 ml-3 space-y-6 border-l border-border pl-8">
          {experience.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <li className="relative">
                <span className="absolute top-6 -left-[41px] grid size-5 place-items-center rounded-full border border-border bg-background">
                  <span className="size-2 rounded-full bg-primary shadow-[0_0_14px_var(--color-glow)]" />
                </span>
                <article className="glass card-glow group relative overflow-hidden rounded-2xl p-6">
                  <Spotlight />
                  <div className="relative flex flex-wrap items-baseline justify-between gap-2">
                    <h3
                      className={`font-display text-lg font-medium ${
                        item.placeholder ? "text-muted-foreground italic" : ""
                      }`}
                    >
                      {item.role}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                  </div>
                  <p className="relative mt-1 text-sm text-secondary">{item.org}</p>
                  <ul className="relative mt-4 space-y-2">
                    {item.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/70" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  {item.verifyUrl && (
                    <a
                      href={item.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-6 right-6 z-10 inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-white hover:brightness-95"
                    >
                      Verify
                    </a>
                  )}
                </article>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
