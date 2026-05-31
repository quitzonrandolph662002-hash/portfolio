import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { categories, works, type Work } from "../data/works";
import { Reveal } from "./ui/Reveal";
import { TiltCard } from "./ui/TiltCard";
import { WorkModal } from "./WorkModal";
import { asset } from "../lib/asset";
import { imgFallback } from "../lib/imgFallback";

const spanClass: Record<NonNullable<Work["size"]>, string> = {
  tall: "md:row-span-2",
  wide: "md:col-span-2",
  normal: "",
};

export function Works() {
  const [filter, setFilter] = useState("Все");
  const [selected, setSelected] = useState<Work | null>(null);

  const shown = useMemo(
    () => (filter === "Все" ? works : works.filter((w) => w.category === filter)),
    [filter]
  );

  return (
    <section id="works" className="relative bg-paper px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-sage">
                (03) Избранные работы
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
                Портфолио
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                    filter === c
                      ? "border-ink bg-ink text-paper"
                      : "border-ink/20 hover:border-ink/60"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-5 md:auto-rows-[300px] md:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {shown.map((w, i) => (
              <motion.article
                key={w.id}
                layout
                layoutId={`card-${w.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className={`group ${spanClass[w.size ?? "normal"]}`}
              >
                <TiltCard
                  className="relative h-full min-h-[300px] cursor-pointer overflow-hidden rounded-[24px] bg-cream"
                >
                  <button
                    onClick={() => setSelected(w)}
                    data-cursor="Открыть"
                    className="absolute inset-0 z-30 h-full w-full"
                    aria-label={`Открыть ${w.title}`}
                  />
                  <img
                    src={asset(w.image)}
                    onError={imgFallback(w.placeholder)}
                    alt={w.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                  />
                  {/* gradient + meta */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
                  <div className="absolute inset-x-0 bottom-0 z-20 flex translate-y-2 flex-col gap-1 p-6 text-paper opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span
                      className="font-mono text-[10px] uppercase tracking-widest"
                      style={{ color: w.accent }}
                    >
                      {w.category}
                    </span>
                    <h3 className="font-display text-2xl leading-tight">{w.title}</h3>
                  </div>
                  {/* always-visible corner index */}
                  <span
                    className="absolute right-5 top-5 z-20 font-mono text-xs text-white"
                    style={{ textShadow: "0 1px 5px rgba(0,0,0,0.5)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </TiltCard>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <WorkModal work={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
