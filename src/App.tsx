import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import { Cursor } from "./components/Cursor";
import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Works } from "./components/Works";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { SmoothScroll } from "./components/SmoothScroll";

export default function App() {
  const [ready, setReady] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  return (
    <SmoothScroll>
      <Loader onDone={() => setReady(true)} />
      <Cursor />

      {/* scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[9999] h-[3px] origin-left bg-terracotta"
      />

      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="grain"
      >
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Works />
        <Contact />
        <Footer />
      </motion.main>
    </SmoothScroll>
  );
}
