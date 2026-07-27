import { Link } from "@tanstack/react-router";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Magnetic, Reveal } from "./primitives";

export function Footer() {
  return (
    <footer className="relative mt-32 px-4 pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="hairline" />
        <Reveal className="flex flex-col gap-8 pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight">
              <span className="text-gradient">Let&apos;s talk security.</span>
            </p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Open to SOC analyst and detection engineering opportunities.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <FooterIcon href={profile.github} label="GitHub">
                <Github className="size-4" />
              </FooterIcon>
              <FooterIcon href={profile.linkedin} label="LinkedIn">
                <Linkedin className="size-4" />
              </FooterIcon>
              <FooterIcon href={`mailto:${profile.email}`} label="Email">
                <Mail className="size-4" />
              </FooterIcon>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 sm:items-end">
            <Magnetic
              href="#home"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Back to top
              <ArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
            </Magnetic>
            <p className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} {profile.name} · Built with care
            </p>
            <Link
              to="/projects"
              className="link-underline font-mono text-xs text-muted-foreground hover:text-foreground"
            >
              All case studies
            </Link>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

function FooterIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid size-9 place-items-center rounded-lg border border-border bg-surface/60 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground"
    >
      {children}
    </a>
  );
}
