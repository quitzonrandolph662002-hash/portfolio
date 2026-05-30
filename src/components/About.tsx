import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, RevealText } from "./ui/Reveal";
import { asset } from "../lib/asset";

const facts = [
  { k: "2022", v: "в дизайне с" },
  { k: "«Прогресс дизайн»", v: "рекламное агентство" },
  { k: "ваби-саби", v: "любимая эстетика" },
];

/** Circular badge with text running along a circle, slowly rotating. */
function RotatingBadge() {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="absolute -inset-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)]"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
      aria-hidden
    >
      <defs>
        <path
          id="circlePath"
          d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
        />
      </defs>
      <text className="fill-ink font-mono uppercase" style={{ fontSize: 11, letterSpacing: 4 }}>
        <textPath href="#circlePath" startOffset="0%">
          графический дизайн • веб-дизайн • нейросети • полиграфия •
        </textPath>
      </text>
    </motion.svg>
  );
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" className="relative px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-sage">
            (01) Обо мне
          </span>
        </Reveal>

        <div ref={ref} className="mt-12 grid grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-16">
          {/* circular photo + rotating badge */}
          <div className="flex justify-center md:col-span-5">
            <motion.div style={{ y: photoY }} className="relative">
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-[24rem] md:w-[24rem]">
                <RotatingBadge />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-6 overflow-hidden rounded-full ring-4 ring-mint/60"
                >
                  <img
                    src={asset("portfolio/designer.jpg")}
                    alt="Даша — графический дизайнер"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </div>

              {/* floating labels like the mockup */}
              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -left-6 top-6 max-w-[9rem] rounded-2xl bg-butter px-4 py-2 text-center font-mono text-[10px] uppercase leading-tight tracking-widest shadow-sm md:-left-12"
              >
                Веб-дизайн и ИИ
              </motion.span>
              <motion.span
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.6 }}
                className="absolute -right-4 bottom-8 rounded-2xl bg-mint px-4 py-2 font-mono text-[10px] uppercase tracking-widest shadow-sm md:-right-10"
              >
                Привет, это я 👋
              </motion.span>
            </motion.div>
          </div>

          {/* text */}
          <div className="md:col-span-7">
            <h2 className="font-display text-3xl leading-[1.08] tracking-tight md:text-5xl">
              <RevealText text="Привет, я Даша —" />
              <br />
              <span className="text-ink/45">
                <RevealText text="графический дизайнер." delay={0.15} />
              </span>
            </h2>

            <Reveal delay={0.1} className="mt-7 max-w-xl space-y-5 text-lg leading-relaxed text-ink/75">
              <p>
                В дизайне с 2022 года: работала на фрилансе, сотрудничала с
                крутыми компаниями, а с 2023 года — в найме в известном рекламном
                агентстве Калининграда «Прогресс дизайн». Знакома со всеми
                принципами типографики и наружной рекламы.
              </p>
              <p>
                Для меня дизайн — это создание образа, система, которая дополняет
                бренд и заставляет его прочувствовать. Сейчас активно занимаюсь
                графическим и веб-дизайном. Люблю минимализм и тащусь от стиля
                <span className="italic"> ваби-саби</span>.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/15 pt-8">
              {facts.map((f, i) => (
                <Reveal key={f.v} delay={0.15 + i * 0.1}>
                  <div className="font-display text-lg leading-tight md:text-2xl">
                    {f.k}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ink/50">
                    {f.v}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
