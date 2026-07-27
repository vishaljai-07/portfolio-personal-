import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";

/* ------------------------------ aurora backdrop ----------------------------- */

export function AuroraBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="aurora animate-drift absolute inset-[-25%] opacity-70" />
      <div className="grid-lines absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,transparent_40%,var(--color-background)_100%)]" />
    </div>
  );
}

/* ------------------------------ scroll progress ----------------------------- */

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-primary via-secondary to-accent"
    />
  );
}

/* -------------------------------- custom cursor ----------------------------- */

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement | null;
      setActive(!!t?.closest("a,button,[data-cursor='link']"));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[70] size-1.5 rounded-full bg-primary mix-blend-screen"
        animate={{ x: pos.x - 3, y: pos.y - 3 }}
        transition={{ type: "spring", stiffness: 900, damping: 40 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[70] rounded-full border border-primary/50 mix-blend-screen"
        animate={{
          x: pos.x - (active ? 22 : 14),
          y: pos.y - (active ? 22 : 14),
          width: active ? 44 : 28,
          height: active ? 44 : 28,
          opacity: active ? 1 : 0.55,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
      />
    </>
  );
}

/* -------------------------------- loading screen ---------------------------- */

export function LoadingScreen() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("boot-done")) {
      setHidden(true);
      return;
    }
    let p = 0;
    const id = setInterval(() => {
      p = Math.min(100, p + Math.random() * 14 + 6);
      setPct(Math.round(p));
      if (p >= 100) {
        clearInterval(id);
        setDone(true);
        sessionStorage.setItem("boot-done", "1");
        setTimeout(() => setHidden(true), 900);
      }
    }, 130);
    return () => clearInterval(id);
  }, []);

  const filled = Math.round(pct / 5);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          key="boot"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background"
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="aurora animate-drift absolute inset-[-20%] opacity-40" />
          <div className="relative w-[min(90vw,520px)] font-mono text-sm">
            <p className="text-muted-foreground">
              Initializing Secure Environment
              <span className="animate-pulse">...</span>
            </p>
            <p className="mt-4 overflow-hidden text-primary">
              <span>{"█".repeat(filled)}</span>
              <span className="text-muted-foreground/30">{"█".repeat(20 - filled)}</span>
              <span className="ml-3 text-foreground">{pct}%</span>
            </p>
            <motion.p
              className="mt-4 text-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: done ? 1 : 0 }}
            >
              Access Granted.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
