import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "./ui/Reveal";

const services = [
  {
    n: "01",
    title: "Вёрстка полиграфии",
    desc: "Разрабатываю макет под формат, выстраиваю модульную сетку и типографику, верстаю многостраничник и готовлю файл к печати. Буклеты, журналы, меню — в стиле бренда.",
    color: "#A9CFC6",
  },
  {
    n: "02",
    title: "Логотипы и фирменный стиль",
    desc: "Анализирую задачу, предлагаю варианты логотипа, собираю цветовую палитру, шрифты и носители бренда. На выходе — мини-гайдлайн и готовый набор файлов для печати и сети.",
    color: "#F4EFD2",
  },
  {
    n: "03",
    title: "Упаковка, баннеры, визитки",
    desc: "Создаю концепцию и отрисовываю макет под нужный формат: развёртки упаковки, баннеры под площадки, двусторонние визитки. Всё с подготовкой к производству.",
    color: "#E7E0CD",
  },
  {
    n: "04",
    title: "Лендинги и веб-дизайн",
    desc: "Прорабатываю структуру и прототип, рисую визуальную концепцию, адаптирую под телефон и собираю на Tilda. Цельный образ, который понятно ведёт к заявке.",
    color: "#7FAEA2",
  },
  {
    n: "05",
    title: "Подготовка к печати",
    desc: "Настраиваю вылеты, цветовые профили (CMYK), метки реза и проверяю разрешение. Отдаю файл, который типография примет без правок.",
    color: "#B79B7E",
  },
  {
    n: "06",
    title: "Работа с нейросетями (ИИ)",
    desc: "Генерирую концепты и образы, дорабатываю и ретуширую, создаю уникальные иллюстрации и фоны под конкретный проект.",
    color: "#A9CFC6",
  },
];

type Tool = { name: string; icon: JSX.Element };

const tools: Tool[] = [
  {
    name: "Photoshop",
    icon: (
      <span className="flex h-full w-full items-center justify-center rounded-[18%] bg-[#001E36] font-display text-lg font-600 text-[#31A8FF]">
        Ps
      </span>
    ),
  },
  {
    name: "Illustrator",
    icon: (
      <span className="flex h-full w-full items-center justify-center rounded-[18%] bg-[#330000] font-display text-lg font-600 text-[#FF9A00]">
        Ai
      </span>
    ),
  },
  {
    name: "CorelDRAW",
    icon: (
      <span className="flex h-full w-full items-center justify-center rounded-[18%] bg-[#0B3B2E] font-display text-sm font-600 text-[#5BE08F]">
        Cdr
      </span>
    ),
  },
  {
    name: "Figma",
    icon: (
      <span className="flex h-full w-full items-center justify-center rounded-[18%] bg-white">
        <svg viewBox="0 0 38 57" className="h-6 w-auto" aria-hidden>
          <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
          <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
          <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
          <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
          <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
        </svg>
      </span>
    ),
  },
  {
    name: "NanoBanana",
    icon: (
      <span className="flex h-full w-full items-center justify-center rounded-[18%] bg-[#FFE08A] text-xl">
        🍌
      </span>
    ),
  },
  {
    name: "Tilda",
    icon: (
      <span className="flex h-full w-full items-center justify-center rounded-[18%] bg-[#FFC700] font-display text-lg font-700 text-[#1A1A1A]">
        T
      </span>
    ),
  },
];

export function Services() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="services" className="relative px-5 pt-28 pb-16 md:px-10 md:pt-40 md:pb-20">
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
          <Reveal delay={0.15}>
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-ink/40">
              Нажми, чтобы узнать, что входит
            </p>
          </Reveal>
        </div>

        <div className="border-t border-ink/15">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={s.n} delay={i * 0.05}>
                <div className="border-b border-ink/15">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group relative w-full overflow-hidden text-left"
                    data-cursor=""
                  >
                    {/* color fill slides up when the row is open */}
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 z-0"
                      style={{ backgroundColor: s.color }}
                      initial={false}
                      animate={{ y: isOpen ? "0%" : "101%" }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <div className="relative z-10 grid grid-cols-12 items-center gap-4 py-7 md:py-9">
                      <span className="col-span-2 font-mono text-sm md:col-span-1">
                        {s.n}
                      </span>
                      <h3 className="col-span-9 font-display text-2xl transition-transform duration-500 group-hover:translate-x-1 md:col-span-9 md:text-4xl">
                        {s.title}
                      </h3>
                      <span className="col-span-1 flex justify-end">
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.4 }}
                          className="text-2xl md:text-3xl"
                        >
                          +
                        </motion.span>
                      </span>
                    </div>
                  </button>

                  {/* expandable description */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-12 gap-4 pb-9">
                          <p className="col-span-12 text-base leading-relaxed text-ink/70 md:col-start-2 md:col-span-8 md:text-lg">
                            {s.desc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Tools */}
        <Reveal delay={0.1}>
          <div className="mt-16">
            <span className="font-mono text-xs uppercase tracking-widest text-ink/50">
              Инструменты:
            </span>
            <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6 md:gap-4">
              {tools.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="flex flex-col items-center gap-3 rounded-2xl bg-cream/60 p-4 shadow-frame"
                >
                  <div className="h-14 w-14">{t.icon}</div>
                  <span className="text-center font-mono text-[11px] uppercase tracking-wide text-ink/70">
                    {t.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
