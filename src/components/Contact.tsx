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
  const y = useTransform(scrollYProgress, [0, 1], [120, 0]);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden bg-ink px-5 py-28 text-paper md:px-10 md:py-40 grain"
    >
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-terracotta">
            (04) Контакты
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl font-display text-2xl leading-snug text-cream/70 md:text-3xl">
            Есть проект или просто идея? Напишите — обсудим, как сделать её
            красивой.
          </p>
        </Reveal>

        <motion.div style={{ y }} className="mt-12 md:mt-16">
          <Magnetic strength={0.25}>
            <a
              href="mailto:hello@studio.ru"
              data-cursor="Написать"
              className="group inline-block"
            >
              <span className="block font-display text-[12vw] leading-none tracking-tightest transition-colors duration-500 group-hover:text-terracotta md:text-[8vw]">
                hello@studio.ru
              </span>
            </a>
          </Magnetic>
        </motion.div>

        <div className="mt-16 flex flex-col justify-between gap-10 border-t border-paper/15 pt-10 md:flex-row md:items-end">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="group relative font-mono text-sm uppercase tracking-widest text-cream/70 transition-colors hover:text-paper"
              >
                {s.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-terracotta transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <p className="max-w-xs font-mono text-xs uppercase tracking-widest text-cream/40">
            Калининград · работаю удалённо со всем миром
          </p>
        </div>
      </div>
    </section>
  );
}
