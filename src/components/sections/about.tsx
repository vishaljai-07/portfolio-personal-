import { about, stats } from "@/data/portfolio";
import { Counter, Reveal, SectionHeading, Spotlight, Tilt } from "@/components/site/primitives";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Analyst mindset, engineer's discipline."
          lead="I care about the part most people skip: writing down why an alert fired, what proved it, and what the next analyst should do."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {about.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06}>
              <Tilt className="h-full">
                <article className="glass card-glow group relative h-full overflow-hidden rounded-2xl p-6">
                  <Spotlight />
                  <h3 className="relative font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                    {item.label}
                  </h3>
                  <p
                    className={`relative mt-3 text-sm leading-relaxed ${
                      item.placeholder ? "text-muted-foreground italic" : "text-foreground/90"
                    }`}
                  >
                    {item.body}
                  </p>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="glass rounded-2xl p-6">
                <p className="font-display text-4xl font-semibold text-gradient">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                {"note" in s && s.note ? (
                  <p className="mt-1 font-mono text-[11px] text-muted-foreground/70 italic">
                    {s.note}
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
