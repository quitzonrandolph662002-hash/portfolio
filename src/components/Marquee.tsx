import { motion, useScroll, useTransform, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

const items = [
  "Свадебные приглашения",
  "Фирменный стиль",
  "Полиграфия",
  "Логотипы",
  "Вёрстка",
  "Айдентика",
];

/** Infinite marquee whose speed/direction reacts to scroll velocity. */
export function Marquee() {
  const baseX = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const prev = useRef(0);
  const dir = useRef(1);

  useAnimationFrame((_, delta) => {
    // scroll velocity nudges direction
    const cur = scrollY.get();
    const v = cur - prev.current;
    prev.current = cur;
    if (v > 0.5) dir.current = 1;
    else if (v < -0.5) dir.current = -1;

    let next = baseX.get() - (delta / 1000) * 60 * dir.current;
    // wrap within one segment width (-25% of the 4x track)
    if (next <= -25) next += 25;
    if (next >= 0) next -= 25;
    baseX.set(next);
  });

  const x = useTransform(baseX, (v) => `${v}%`);

  return (
    <section className="edge border-b border-ink/15 bg-ink py-6 text-paper">
      <div ref={ref} className="flex overflow-hidden whitespace-nowrap">
        <motion.div style={{ x }} className="flex shrink-0">
          {Array.from({ length: 4 }).map((_, r) => (
            <div key={r} className="flex shrink-0 items-center">
              {items.map((it) => (
                <span key={`${r}-${it}`} className="flex items-center">
                  <span className="px-8 font-display text-3xl italic md:text-5xl">
                    {it}
                  </span>
                  <span className="text-terracotta">✦</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
