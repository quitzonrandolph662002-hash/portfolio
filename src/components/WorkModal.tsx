import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import type { Work } from "../data/works";

export function WorkModal({
  work,
  onClose,
}: {
  work: Work | null;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (work) {
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
  }, [work, onClose]);

  return (
    <AnimatePresence>
      {work && (
        <motion.div
          className="fixed inset-0 z-[9995] flex items-center justify-center p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            layoutId={`card-${work.id}`}
            className="relative z-10 grid max-h-[88vh] w-full max-w-5xl grid-cols-1 overflow-hidden rounded-[28px] bg-paper md:grid-cols-2"
          >
            <div className="relative overflow-hidden bg-cream">
              <img
                src={work.image}
                alt={work.title}
                className="h-64 w-full object-cover md:h-full"
              />
            </div>
            <div className="flex flex-col overflow-y-auto p-8 md:p-12">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="font-mono text-xs uppercase tracking-widest"
                style={{ color: work.accent }}
              >
                {work.category} — {work.year}
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 font-display text-3xl leading-tight md:text-4xl"
              >
                {work.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                className="mt-2 text-sm text-ink/50"
              >
                {work.client}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34 }}
                className="mt-6 leading-relaxed text-ink/75"
              >
                {work.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.42 }}
                className="mt-8 flex flex-wrap gap-2"
              >
                {work.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-ink/20 px-3 py-1 font-mono text-xs uppercase tracking-widest"
                  >
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>

            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-paper/80 text-xl transition-transform hover:rotate-90"
              aria-label="Закрыть"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
