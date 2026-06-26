import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/** Full-screen intro: a centred loading counter that lifts away as a curtain. */
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
          className="fixed inset-0 z-[10001] flex items-center justify-center bg-mint"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-display text-[26vw] font-500 leading-none tabular-nums tracking-tightest text-ink md:text-[16vw]"
          >
            {String(count).padStart(3, "0")}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
