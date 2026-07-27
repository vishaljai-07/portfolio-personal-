import { useState } from "react";
import { z } from "zod";
import { Download, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Magnetic, Reveal, SectionHeading } from "@/components/site/primitives";

const schema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(1, "Add a subject").max(140),
  message: z.string().trim().min(10, "A little more detail, please").max(1500),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function update(key: keyof typeof values, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(next);
      return;
    }
    const { name, email, subject, message } = parsed.data;
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative scroll-mt-24 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Start a conversation."
          lead="Roles, collaborations or a detection idea worth arguing about — all welcome."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_0.8fr]">
          <Reveal>
            <form onSubmit={onSubmit} noValidate className="glass rounded-3xl p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  value={values.name}
                  error={errors.name}
                  onChange={(v) => update("name", v)}
                />
                <Field
                  label="Email"
                  type="email"
                  value={values.email}
                  error={errors.email}
                  onChange={(v) => update("email", v)}
                />
              </div>
              <div className="mt-4">
                <Field
                  label="Subject"
                  value={values.subject}
                  error={errors.subject}
                  onChange={(v) => update("subject", v)}
                />
              </div>
              <div className="mt-4">
                <label className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={values.message}
                  maxLength={1500}
                  onChange={(e) => update("message", e.target.value)}
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-surface-2/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
                )}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Magnetic
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[0_18px_60px_-20px_var(--color-glow)] transition-colors hover:bg-secondary"
                >
                  Send message
                  <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Magnetic>
                {sent && (
                  <span className="font-mono text-xs text-secondary">
                    Opening your mail client…
                  </span>
                )}
              </div>
              <p className="mt-4 font-mono text-[11px] text-muted-foreground">
                Delivery uses your mail client. Add EmailJS credentials to send directly from the
                page.
              </p>
            </form>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass flex h-full flex-col gap-3 rounded-3xl p-6 sm:p-8">
              <ContactRow icon={<Mail className="size-4" />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <ContactRow icon={<Phone className="size-4" />} label="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
              <ContactRow icon={<Github className="size-4" />} label="GitHub" value={profile.githubUser} href={profile.github} />
              <ContactRow icon={<Linkedin className="size-4" />} label="LinkedIn" value="Connect" href={profile.linkedin} />
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

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
        {label}
      </label>
      <input
        type={type}
        value={value}
        maxLength={255}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-border bg-surface-2/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
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
