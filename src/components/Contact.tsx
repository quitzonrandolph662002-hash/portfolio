import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Magnetic } from "./ui/Magnetic";
import { Reveal } from "./ui/Reveal";

const socials = [
  { label: "Telegram", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Pinterest", href: "#" },
];

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

  return (
    <section id="contact" ref={ref} className="relative px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="relative overflow-hidden rounded-[40px] bg-mint px-6 py-16 md:px-16 md:py-24">
          {/* floating cream accents */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-butter/70" />
          <div className="pointer-events-none absolute -bottom-12 left-1/3 h-40 w-40 rounded-[40px] bg-sand/60" />

          <div className="relative">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-ink/60">
                (04) Контакты
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl font-display text-2xl leading-snug text-ink md:text-4xl">
                Есть проект или просто идея? Давайте сделаем её красивой.
              </p>
            </Reveal>

            <motion.div style={{ y }} className="mt-10 md:mt-14">
              <Magnetic strength={0.25}>
                <a href="mailto:hello@dasha.design" data-cursor="Написать" className="group inline-block">
                  <span className="block font-display text-[9vw] leading-none tracking-tightest transition-colors duration-500 group-hover:text-paper md:text-[5.5vw]">
                    hello@dasha.design
                  </span>
                </a>
              </Magnetic>
            </motion.div>

            <div className="mt-14 flex flex-col justify-between gap-8 border-t border-ink/20 pt-8 md:flex-row md:items-end">
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="group relative font-mono text-sm uppercase tracking-widest text-ink/70 transition-colors hover:text-ink"
                  >
                    {s.label}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>
              <p className="max-w-xs font-mono text-xs uppercase tracking-widest text-ink/50">
                Калининград · работаю удалённо со всем миром
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
