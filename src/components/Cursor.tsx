import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/** Custom blend-mode cursor that grows + labels itself over interactive areas. */
export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  const [variant, setVariant] = useState<"default" | "hover" | "view">("default");
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.body.classList.add("custom-cursor");

    function move(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = (e.target as HTMLElement)?.closest<HTMLElement>(
        "a, button, [data-cursor]"
      );
      if (el) {
        const c = el.getAttribute("data-cursor");
        if (c) {
          setVariant("view");
          setLabel(c);
        } else {
          setVariant("hover");
          setLabel("");
        }
      } else {
        setVariant("default");
        setLabel("");
      }
    }

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = variant === "view" ? 88 : variant === "hover" ? 56 : 14;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[10000] flex items-center justify-center rounded-full bg-ink mix-blend-difference"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{ width: size, height: size }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <AnimatePresence>
        {label && (
          <motion.span
            className="font-mono text-[10px] uppercase tracking-widest text-paper"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
