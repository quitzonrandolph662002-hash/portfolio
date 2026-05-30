import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Magnetic } from "./ui/Magnetic";

const links = [
  { label: "Обо мне", to: "#about" },
  { label: "Услуги", to: "#services" },
  { label: "Работы", to: "#works" },
  { label: "Контакты", to: "#contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [last, setLast] = useState(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    setSolid(y > 40);
    setHidden(y > last && y > 280);
    setLast(y);
  });

  return (
    <motion.header
      initial={{ y: -120 }}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-[9990]"
    >
      <div
        className={`mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 transition-colors duration-500 md:px-10 ${
          solid
            ? "bg-paper/70 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <a
          href="#top"
          data-scroll-to="#top"
          className="font-display text-xl font-600 tracking-tightest"
        >
          studio<span className="text-terracotta">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.to}
              href={l.to}
              data-scroll-to={l.to}
              className="group relative font-mono text-xs uppercase tracking-widest"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <Magnetic>
          <a
            href="#contact"
            data-scroll-to="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-ink hover:text-paper"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-terracotta" />
            Свободна для заказов
          </a>
        </Magnetic>
      </div>
    </motion.header>
  );
}
