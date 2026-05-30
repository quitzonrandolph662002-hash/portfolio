import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

/** Initializes Lenis momentum scrolling for the whole document. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    let raf = 0;
    function loop(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    // Allow [data-scroll-to] anchors to drive Lenis.
    function onClick(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>(
        "[data-scroll-to]"
      );
      if (!target) return;
      const sel = target.getAttribute("data-scroll-to");
      if (!sel) return;
      const dest = document.querySelector(sel);
      if (dest) {
        e.preventDefault();
        lenis.scrollTo(dest as HTMLElement, { offset: -40 });
      }
    }
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
