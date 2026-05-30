import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "./ui/Reveal";

const services = [
  {
    n: "01",
    title: "Свадебная полиграфия",
    desc: "Приглашения, программы дня, рассадка, благодарности. Монограммы, ботанические иллюстрации, каллиграфия.",
    tags: ["Приглашения", "Монограммы", "Печать"],
    color: "#8AA1B1",
  },
  {
    n: "02",
    title: "Фирменный стиль",
    desc: "Логотип, цветовая система, типографика и носители бренда — целостный образ, который работает везде.",
    tags: ["Логотип", "Айдентика", "Гайдлайн"],
    color: "#C06B4A",
  },
  {
    n: "03",
    title: "Рекламная полиграфия",
    desc: "Брошюры, буклеты, каталоги, визитки. Модульные сетки и аккуратная вёрстка под типографию.",
    tags: ["Буклеты", "Вёрстка", "Каталоги"],
    color: "#8C9A82",
  },
  {
    n: "04",
    title: "Социальные сети",
    desc: "Оформление профилей, шаблоны постов и сторис в едином визуальном языке бренда.",
    tags: ["Шаблоны", "Сторис", "Контент"],
    color: "#B98A6E",
  },
];

export function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="relative px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-terracotta">
                (02) Услуги
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
                Чем я могу быть полезна
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="border-t border-ink/15">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group relative cursor-pointer overflow-hidden border-b border-ink/15"
                data-cursor=""
              >
                {/* fill on hover */}
                <motion.span
                  aria-hidden
                  className="absolute inset-0 z-0"
                  style={{ backgroundColor: s.color }}
                  initial={false}
                  animate={{ y: active === i ? "0%" : "101%" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="relative z-10 grid grid-cols-12 items-center gap-4 py-7 transition-colors duration-500 group-hover:text-paper md:py-10">
                  <span className="col-span-2 font-mono text-sm md:col-span-1">
                    {s.n}
                  </span>
                  <h3 className="col-span-10 font-display text-2xl md:col-span-5 md:text-4xl">
                    {s.title}
                  </h3>

                  <AnimatePresence>
                    {active === i && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="col-span-12 hidden text-sm leading-relaxed md:col-span-5 md:block"
                      >
                        {s.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <span className="col-span-12 mt-2 flex flex-wrap gap-2 md:col-span-1 md:mt-0 md:justify-end">
                    <motion.span
                      animate={{ rotate: active === i ? 45 : 0 }}
                      className="text-2xl"
                    >
                      +
                    </motion.span>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
