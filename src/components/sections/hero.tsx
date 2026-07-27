import { motion } from "motion/react";
import { ArrowRight, Download, ShieldCheck } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Magnetic } from "@/components/site/primitives";
import heroShield from "@/assets/hero-shield.jpg";

export function Hero() {
  return (
    <section id="home" className="relative scroll-mt-24 px-4 pt-36 pb-24 sm:pt-44">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase"
          >
            <ShieldCheck className="size-3.5 text-primary" />
            OPEN TO CYBER SECURITY OPPORTUNITIES
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-[clamp(3rem,10vw,6.5rem)] leading-[0.92] font-semibold"
          >
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-secondary"
          >
            {profile.roles.map((r, i) => (
              <span key={r} className="flex items-center gap-3">
                {i > 0 && <span className="text-muted-foreground/40">/</span>}
                {r}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnetic
              href={profile.resumeUrl}
              download
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[0_18px_60px_-20px_var(--color-glow)] transition-colors hover:bg-secondary"
            >
              <Download className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              Download Resume
            </Magnetic>
            <Magnetic
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
            >
              Contact Me
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="animate-float-slow relative overflow-hidden rounded-[2rem] border border-border">
            <img
              src={heroShield}
              alt="Abstract translucent shield wrapped in a glowing network of nodes"
              width={1200}
              height={1200}
              fetchPriority="high"
              className="aspect-square w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-background),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="animate-sweep h-24 w-full bg-[linear-gradient(to_bottom,transparent,color-mix(in_oklab,var(--color-primary)_16%,transparent),transparent)]" />
            </div>
          </div>

          <div className="glass absolute -bottom-6 -left-4 rounded-2xl px-4 py-3 font-mono text-xs sm:-left-8">
            <p className="text-muted-foreground">Currently Seeking for Internship Opportunities</p>
            <p className="mt-1 text-primary">SOC Analyst , Vulnerability Assessment & Penetration Testing , Infrastructure Security</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
