import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/** Full-screen intro: counts to 100, then lifts away as a curtain. */
export function Loader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const start = performance.now();
    const dur = 1700;
    let raf = 0;
    function tick(now: number) {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setOpen(false), 350);
        setTimeout(onDone, 1250);
      }
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[10001] flex flex-col items-center justify-center bg-mint"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.5em] text-ink/50">
              Портфолио
            </span>
          </motion.div>

          <div className="mt-5 overflow-hidden">
            <motion.h1
              className="font-display text-[18vw] font-600 leading-none tracking-tightest text-ink md:text-[11vw]"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              Даша
            </motion.h1>
          </div>

          <div className="absolute bottom-10 right-8 font-mono text-5xl tabular-nums text-ink/70 md:text-7xl">
            {String(count).padStart(3, "0")}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
