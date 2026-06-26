import { motion, useScroll, useTransform, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

const items = [
  "Фирменный стиль",
  "Полиграфия",
  "Лендинги",
  "Логотипы",
  "Веб-дизайн",
  "Ваби-саби",
];

// Gentle constant drift (in % of track per second). Low = calm.
const BASE_SPEED = 2.4;

/** Slow, smooth infinite marquee with a soft scroll-velocity boost. */
export function Marquee() {
  const baseX = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const prev = useRef(0);
  const boost = useRef(0); // smoothed extra speed from scrolling

  useAnimationFrame((_, delta) => {
    const dt = Math.min(delta, 64) / 1000; // clamp big frame gaps

    const cur = scrollY.get();
    const scrolled = Math.abs(cur - prev.current);
    prev.current = cur;

    // scrolling adds a little speed, then it eases back to the calm base
    const target = Math.min(scrolled * 4, 14);
    boost.current += (target - boost.current) * 0.06;

    let next = baseX.get() - dt * (BASE_SPEED + boost.current);
    if (next <= -25) next += 25; // wrap one segment (4 copies => 25% each)
    baseX.set(next);
  });

  const x = useTransform(baseX, (v) => `${v}%`);

  return (
    <section className="edge border-b border-ink/15 bg-mint py-6 text-ink">
      <div ref={ref} className="flex overflow-hidden whitespace-nowrap">
        <motion.div style={{ x }} className="flex shrink-0">
          {Array.from({ length: 4 }).map((_, r) => (
            <div key={r} className="flex shrink-0 items-center">
              {items.map((it) => (
                <span key={`${r}-${it}`} className="flex items-center">
                  <span className="px-8 font-display text-2xl font-500 uppercase tracking-tight md:text-4xl">
                    {it}
                  </span>
                  <span className="text-sage">✦</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
