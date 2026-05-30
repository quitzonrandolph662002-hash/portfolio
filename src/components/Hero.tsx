import { motion, useScroll, useTransform } from "framer-motion";
import { Suspense, lazy, useRef } from "react";
import { SafeBoundary } from "./ui/SafeBoundary";
import { asset } from "../lib/asset";

// 3D is heavy — load it after the rest of the page is interactive.
const Hero3D = lazy(() => import("./Hero3D").then((m) => ({ default: m.Hero3D })));

const line = {
  hidden: { y: "120%" },
  show: (i: number) => ({
    y: 0,
    transition: { duration: 1.1, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const imgRot = useTransform(scrollYProgress, [0, 1], [-6, 2]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pt-28 md:px-10"
    >
      {/* soft color blocks à la wabi-sabi mockup */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute -right-24 top-0 h-[55vh] w-[60vw] rounded-bl-[120px] bg-mint/60" />
        <div className="absolute right-10 top-[48vh] h-40 w-40 rounded-[40px] bg-butter md:h-56 md:w-56" />
        <div className="absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-sand/70 blur-[2px]" />
      </div>

      {/* ambient 3D */}
      <div className="absolute inset-0 -z-10 opacity-90">
        <SafeBoundary>
          <Suspense fallback={null}>
            <Hero3D />
          </Suspense>
        </SafeBoundary>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-paper/30 via-transparent to-paper" />

      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-ink/60"
        >
          <span className="h-px w-10 bg-ink/40" />
          Даша · графический и веб-дизайнер · Калининград
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
          <h1 className="col-span-1 font-display font-500 leading-[0.92] tracking-tightest md:col-span-8">
            <span className="block overflow-hidden">
              <motion.span variants={line} custom={0} initial="hidden" animate="show" className="block text-[13vw] md:text-[8.5vw]">
                Графический
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={line} custom={1} initial="hidden" animate="show" className="block text-[13vw] md:text-[8.5vw]">
                & <span className="text-sage">веб</span>-дизайн
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={line} custom={2} initial="hidden" animate="show" className="block text-[13vw] font-300 italic md:text-[8.5vw]">
                с любовью к деталям
              </motion.span>
            </span>
          </h1>

          {/* floating brochure */}
          <motion.div
            style={{ y: imgY, rotate: imgRot }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 md:col-span-4"
          >
            <div className="overflow-hidden rounded-[28px] shadow-2xl shadow-ink/20 ring-1 ring-ink/5">
              <img
                src={asset("portfolio/pokrovsky-hero.jpg")}
                alt="Работа: брошюра Покровский квартал"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="mt-10 max-w-md text-lg leading-relaxed text-ink/70"
        >
          Создаю фирменный стиль, полиграфию и лендинги. Минимализм, чистая
          типографика и эстетика <span className="italic">ваби-саби</span>.
        </motion.p>
      </motion.div>

      <motion.a
        href="#about"
        data-scroll-to="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ink/50"
      >
        Листай вниз
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="text-base"
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}
