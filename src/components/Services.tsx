import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "./ui/Reveal";

const services = [
  {
    n: "01",
    title: "Вёрстка полиграфии",
    desc: "Буклеты, журналы, меню — аккуратная модульная вёрстка с вниманием к типографике.",
    color: "#A9CFC6",
  },
  {
    n: "02",
    title: "Логотипы и фирменный стиль",
    desc: "Знак, цветовая система и носители бренда — целостный образ, который работает везде.",
    color: "#F4EFD2",
  },
  {
    n: "03",
    title: "Упаковка, баннеры, визитки",
    desc: "Дизайн упаковки, рекламных баннеров и визиток в едином визуальном языке.",
    color: "#E7E0CD",
  },
  {
    n: "04",
    title: "Лендинги и веб-дизайн",
    desc: "Современные одностраничники: структура, прототип, визуал и сборка на Tilda.",
    color: "#7FAEA2",
  },
  {
    n: "05",
    title: "Подготовка к печати",
    desc: "Препресс: вылеты, цветопрофили, метки реза — макет готов к типографии.",
    color: "#B79B7E",
  },
  {
    n: "06",
    title: "Работа с нейросетями (ИИ)",
    desc: "Генерация и доработка визуала с помощью ИИ — быстрые концепты и образы.",
    color: "#A9CFC6",
  },
];

const tools = ["Photoshop", "Illustrator", "CorelDRAW", "Figma", "NanoBanana", "Tilda"];

export function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="relative px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-sage">
              (02) Что я умею
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Услуги и&nbsp;навыки
            </h2>
          </Reveal>
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
                <motion.span
                  aria-hidden
                  className="absolute inset-0 z-0"
                  style={{ backgroundColor: s.color }}
                  initial={false}
                  animate={{ y: active === i ? "0%" : "101%" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="relative z-10 grid grid-cols-12 items-center gap-4 py-7 md:py-10">
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

                  <span className="col-span-12 mt-2 flex justify-start md:col-span-1 md:mt-0 md:justify-end">
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

        {/* Tools */}
        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col gap-5 md:flex-row md:items-center">
            <span className="font-mono text-xs uppercase tracking-widest text-ink/50">
              Инструменты:
            </span>
            <div className="flex flex-wrap gap-3">
              {tools.map((t) => (
                <motion.span
                  key={t}
                  whileHover={{ y: -4, backgroundColor: "#A9CFC6" }}
                  className="rounded-full border border-ink/20 px-5 py-2 font-mono text-sm"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
