import { BadgeCheck, CircleDashed, Clock3, ExternalLink } from "lucide-react";
import { certifications, githubStats, profile, topLanguages } from "@/data/portfolio";
import { Counter, Reveal, SectionHeading, Spotlight } from "@/components/site/primitives";

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
          lead="Placeholders below — they will be filled from the resume with issuer, date and verification link."
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

/* ---------------------------------- github --------------------------------- */

function contributionLevel(week: number, day: number) {
  const seed = (week * 7 + day * 13) % 11;
  return seed > 8 ? 3 : seed > 6 ? 2 : seed > 3 ? 1 : 0;
}

export function GitHubSection() {
  const weeks = Array.from({ length: 34 }, (_, w) => w);
  const days = Array.from({ length: 7 }, (_, d) => d);

  return (
    <section id="github" className="relative scroll-mt-24 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="GitHub"
          title="Built in the open."
          lead="Repositories, languages and activity. Connect the live GitHub username from the resume to replace the sample figures."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="glass rounded-3xl p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-base font-medium">Contribution activity</h3>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline font-mono text-xs text-muted-foreground hover:text-foreground"
                >
                  @{profile.githubUser}
                </a>
              </div>
              <div className="mt-6 flex gap-[3px] overflow-x-auto pb-1">
                {weeks.map((w) => (
                  <div key={w} className="flex flex-col gap-[3px]">
                    {days.map((d) => {
                      const lvl = contributionLevel(w, d);
                      return (
                        <span
                          key={d}
                          className="size-2.5 rounded-[3px] transition-transform duration-300 hover:scale-150"
                          style={{
                            background:
                              lvl === 0
                                ? "color-mix(in oklab, var(--color-foreground) 6%, transparent)"
                                : `color-mix(in oklab, var(--color-primary) ${lvl * 30}%, transparent)`,
                          }}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
                Less
                {[0, 1, 2, 3].map((l) => (
                  <span
                    key={l}
                    className="size-2.5 rounded-[3px]"
                    style={{
                      background:
                        l === 0
                          ? "color-mix(in oklab, var(--color-foreground) 6%, transparent)"
                          : `color-mix(in oklab, var(--color-primary) ${l * 30}%, transparent)`,
                    }}
                  />
                ))}
                More
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass h-full rounded-3xl p-6">
              <h3 className="font-display text-base font-medium">Top languages</h3>
              <ul className="mt-6 space-y-4">
                {topLanguages.map((l, i) => (
                  <li key={l.name}>
                    <div className="flex justify-between font-mono text-xs">
                      <span>{l.name}</span>
                      <span className="text-muted-foreground">{l.pct}%</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-2">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-[width] duration-[1200ms] ease-out"
                        style={{ width: `${l.pct}%`, transitionDelay: `${i * 90}ms` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {githubStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="glass card-glow rounded-2xl p-6">
                <p className="font-display text-3xl font-semibold text-gradient">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
