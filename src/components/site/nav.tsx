import { useEffect, useState } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Command, Menu, X } from "lucide-react";
import { navSections, profile, projects } from "@/data/portfolio";
import { Magnetic } from "./primitives";

export function Nav({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
          scrolled ? "glass shadow-[0_20px_60px_-40px_var(--color-glow)]" : "border border-transparent"
        }`}
      >
        <Link
          to="/"
          hash="home"
          className="group flex items-center gap-2.5"
          aria-label="Back to top"
        >
          <span className="relative grid size-8 place-items-center rounded-lg border border-border bg-surface font-display text-sm font-bold text-primary">
            VJ
            <span className="absolute inset-0 rounded-lg opacity-0 shadow-[0_0_24px_var(--color-glow)] transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <span className="font-display text-sm font-medium tracking-tight">{profile.name}</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navSections.map((s) => (
            <Link
              key={s.id}
              to="/"
              hash={s.id}
              className="link-underline rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {s.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenPalette}
            className="hidden items-center gap-2 rounded-lg border border-border bg-surface/60 px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground sm:flex"
            aria-label="Open command palette"
          >
            <Command className="size-3.5" />
            <span>K</span>
          </button>
          <Magnetic
            href={profile.resumeUrl}
            download
            className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_-12px_var(--color-glow)] transition-colors hover:bg-secondary sm:inline-flex"
          >
            Resume
          </Magnetic>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-lg border border-border bg-surface/60 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-3 lg:hidden"
          >
            <div className="grid grid-cols-2 gap-1">
              {navSections.map((s) => (
                <Link
                  key={s.id}
                  to="/"
                  hash={s.id}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <a
              href={profile.resumeUrl}
              download
              className="mt-2 block rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function CommandPalette({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(!open);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  useEffect(() => {
    if (open) setQuery("");
  }, [open]);

  const items = [
    ...navSections.map((s) => ({
      label: s.label,
      hint: "Section",
      run: () => navigate({ to: "/", hash: s.id }),
    })),
    ...projects.map((p) => ({
      label: p.title,
      hint: "Case study",
      run: () => navigate({ to: "/projects/$slug", params: { slug: p.slug } }),
    })),
    { label: "Download Resume", hint: "Action", run: () => window.open(profile.resumeUrl, "_blank") },
    { label: "GitHub", hint: "External", run: () => window.open(profile.github, "_blank") },
    { label: "LinkedIn", hint: "External", run: () => window.open(profile.linkedin, "_blank") },
  ];

  const filtered = items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[75] flex items-start justify-center bg-background/70 px-4 pt-[18vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-label="Command palette"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="glass w-full max-w-lg overflow-hidden rounded-2xl"
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Jump to a section, project or link…"
              className="w-full border-b border-border bg-transparent px-4 py-3.5 text-sm outline-none placeholder:text-muted-foreground"
            />
            <ul className="max-h-72 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-muted-foreground">No matches</li>
              )}
              {filtered.map((i) => (
                <li key={i.label + i.hint}>
                  <button
                    onClick={() => {
                      i.run();
                      setOpen(false);
                    }}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-surface"
                  >
                    <span>{i.label}</span>
                    <span className="font-mono text-[11px] text-muted-foreground">{i.hint}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
