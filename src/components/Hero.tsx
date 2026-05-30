import { motion, useScroll, useTransform } from "framer-motion";
import { Suspense, lazy, useRef } from "react";

// 3D is heavy — load it after the rest of the page is interactive.
const Hero3D = lazy(() =>
  import("./Hero3D").then((m) => ({ default: m.Hero3D }))
);

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
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pt-28 md:px-10"
    >
      <motion.div style={{ scale }} className="absolute inset-0 -z-10">
        <Suspense fallback={null}>
          <Hero3D />
        </Suspense>
      </motion.div>

      {/* soft gradient wash so the type stays readable over 3D */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-paper/40 via-transparent to-paper" />

      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-ink/60"
        >
          <span className="h-px w-10 bg-ink/40" />
          Графический дизайнер · Калининград
        </motion.div>

        <h1 className="font-display font-500 leading-[0.86] tracking-tightest">
          <span className="block overflow-hidden">
            <motion.span variants={line} custom={0} initial="hidden" animate="show" className="block text-[16vw] md:text-[12vw]">
              Дизайн,
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span variants={line} custom={1} initial="hidden" animate="show" className="block text-[16vw] italic md:text-[12vw]">
              который
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span variants={line} custom={2} initial="hidden" animate="show" className="block text-[16vw] md:text-[12vw]">
              <span className="text-terracotta">за</span>помина<span className="text-stroke">ется</span>
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9 }}
          className="ml-auto mt-8 max-w-md text-right text-lg leading-relaxed text-ink/70 md:mt-12"
        >
          Создаю свадебные приглашения, фирменный стиль и полиграфию —
          с вниманием к каждой детали, типографике и настроению.
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
