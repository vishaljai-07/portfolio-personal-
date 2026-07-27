import {
  Code2,
  Container,
  Crosshair,
  Database,
  FileCode,
  Network,
  Palette,
  Radar,
  ScanLine,
  Search,
  Server,
  ShieldCheck,
  Terminal,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { skills } from "@/data/portfolio";
import { Reveal, SectionHeading, Spotlight } from "@/components/site/primitives";

const ICONS: Record<string, LucideIcon> = {
  Code2,
  Container,
  Crosshair,
  Database,
  FileCode,
  Network,
  Palette,
  Radar,
  ScanLine,
  Search,
  Server,
  ShieldCheck,
  Terminal,
  Waves,
};

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="The stack behind the detections."
          lead="Tools I use regularly in labs and projects — grouped by how they actually get used, not by buzzword."
        />

        <div className="mt-12 space-y-10">
          {skills.map((group, gi) => (
            <div key={group.group}>
              <Reveal delay={gi * 0.04}>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-medium">{group.group}</h3>
                  <p className="text-sm text-muted-foreground">{group.blurb}</p>
                </div>
              </Reveal>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {group.items.map((item, i) => {
                  const Icon = ICONS[item.icon] ?? ShieldCheck;
                  return (
                    <Reveal key={item.name} delay={i * 0.05} y={16}>
                      <div className="glass card-glow group relative overflow-hidden rounded-xl p-4">
                        <Spotlight />
                        <div className="relative flex items-center gap-3">
                          <span className="grid size-10 place-items-center rounded-lg border border-border bg-surface-2 text-primary transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110 group-hover:shadow-[0_0_24px_-6px_var(--color-glow)]">
                            <Icon className="size-4.5" />
                          </span>
                          <span className="text-sm font-medium">{item.name}</span>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
