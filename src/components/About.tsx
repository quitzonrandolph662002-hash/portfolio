import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, RevealText } from "./ui/Reveal";

const facts = [
  { k: "5+", v: "лет в дизайне" },
  { k: "120+", v: "проектов" },
  { k: "∞", v: "любви к деталям" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);
  const tagY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" className="relative px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        {/* Portrait */}
        <div ref={ref} className="md:col-span-5">
          <div className="relative overflow-hidden rounded-[2px] bg-cream">
            <motion.img
              src="/portfolio/designer.svg"
              alt="Портрет дизайнера"
              style={{ y: imgY, scale: 1.15 }}
              className="aspect-[3/4] w-full object-cover"
            />
            <motion.div
              style={{ y: tagY }}
              className="absolute bottom-5 left-5 rounded-full bg-paper/90 px-5 py-2 font-mono text-xs uppercase tracking-widest backdrop-blur"
            >
              Привет, это я 👋
            </motion.div>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center md:col-span-7">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-terracotta">
              (01) Обо мне
            </span>
          </Reveal>

          <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
            <RevealText text="Я превращаю идеи в изящную графику —" />
            <br />
            <span className="italic text-ink/50">
              <RevealText text="от первого эскиза до готовой печати." delay={0.2} />
            </span>
          </h2>

          <Reveal delay={0.1} className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-ink/70">
            <p>
              Меня зовут [Имя] — я графический дизайнер. Специализируюсь на
              свадебной полиграфии, фирменном стиле и рекламных материалах.
              Каждый проект для меня — это история, рассказанная через
              типографику, цвет и композицию.
            </p>
            <p>
              Люблю чистые сетки, тёплые палитры и ту самую деталь, которая
              заставляет работу звучать. Работаю в CorelDRAW и Adobe — от
              концепции до подготовки макета к типографии.
            </p>
            <p className="font-mono text-sm text-ink/40">
              * Замените этот текст на содержимое файла «текст на сайт».
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-ink/15 pt-8">
            {facts.map((f, i) => (
              <Reveal key={f.v} delay={0.15 + i * 0.1}>
                <div>
                  <div className="font-display text-4xl md:text-5xl">{f.k}</div>
                  <div className="mt-1 font-mono text-xs uppercase tracking-widest text-ink/50">
                    {f.v}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
