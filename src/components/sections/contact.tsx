import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal, SectionHeading } from "@/components/site/primitives";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Start a conversation."
          lead="Roles, collaborations or a detection idea worth arguing about — all welcome."
        />

        <div className="mt-12">
          <Reveal>
            <div className="glass flex h-full flex-col gap-3 rounded-3xl p-6 sm:p-8">
              <ContactRow icon={<Mail className="size-4" />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <ContactRow icon={<Phone className="size-4" />} label="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
              <ContactRow icon={<Linkedin className="size-4" />} label="LinkedIn" value="Connect" href={profile.linkedin} />
              <ContactRow icon={<Github className="size-4" />} label="GitHub" value="@vishaljai-07" href={profile.github} />
              <a
                href={profile.resumeUrl}
                download
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface-2/50 px-4 py-3 text-sm transition-colors hover:border-primary/50"
              >
                <Download className="size-4" />
                Download Resume
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-3 rounded-xl border border-border bg-surface-2/40 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
    >
      <span className="grid size-9 place-items-center rounded-lg border border-border text-primary">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
          {label}
        </span>
        <span className="block truncate text-sm">{value}</span>
      </span>
    </a>
  );
}
