import { Award, BadgeCheck, CircleDashed, Clock3, ExternalLink } from "lucide-react";
import { achievements, certifications } from "@/data/portfolio";
import { Reveal, SectionHeading, Spotlight } from "@/components/site/primitives";

const STATUS_ICON = {
  Completed: BadgeCheck,
  "In progress": Clock3,
  Planned: CircleDashed,
};

export function Certifications() {
  return (
    <section id="certifications" className="relative scroll-mt-24 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials and coursework."
          lead="Certifications and coursework taken from the resume."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => {
            const Icon = STATUS_ICON[c.status];
            return (
              <Reveal key={i} delay={i * 0.07}>
                <article className="glass card-glow group relative h-full overflow-hidden rounded-2xl p-6">
                  <Spotlight />
                  <div className="relative flex items-start justify-between gap-4">
                    <span className="grid size-11 place-items-center rounded-xl border border-border bg-surface-2 font-display text-sm font-semibold text-primary">
                      {c.org.slice(0, 2).toUpperCase()}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                      <Icon className="size-3" />
                      {c.status}
                    </span>
                  </div>
                  <h3
                    className={`relative mt-5 font-display text-base font-medium ${
                      c.placeholder ? "text-muted-foreground italic" : ""
                    }`}
                  >
                    {c.name}
                  </h3>
                  <p className="relative mt-1 text-sm text-muted-foreground">{c.org}</p>
                  <a
                    href={c.verifyUrl ?? "#certifications"}
                    className="relative mt-5 inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    Verify
                    <ExternalLink className="size-3" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="relative scroll-mt-24 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition and milestones."
          lead="Paper presentations, workshops and competition results taken from the resume."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {achievements.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <article className="glass card-glow group relative h-full overflow-hidden rounded-2xl p-6">
                <Spotlight />
                <div className="relative flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-surface-2 font-display text-sm font-semibold text-primary">
                    <Award className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-medium">{item.title}</h3>
                    <p className="mt-1 text-sm text-secondary">{item.event}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.details}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
