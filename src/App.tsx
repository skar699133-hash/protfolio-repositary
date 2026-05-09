/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring, LayoutGroup } from "motion/react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import { useEffect, useState } from "react";

export default function App() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [date, setDate] = useState("");
  const [photoLocation, setPhotoLocation] = useState<"hero" | "about">("hero");
  const [hoveredTechs, setHoveredTechs] = useState<string[]>([]);

  useEffect(() => {
    // Keep a simple hydration-safe client date format if needed
    setDate(new Date().toLocaleDateString());
  }, []);

  useEffect(() => {
    return scrollY.on("change", (v) => {
      // Trigger moving the photo to the About section when scrolled enough
      const triggerPoint = window.innerHeight * 0.45;
      if (v > triggerPoint && photoLocation !== "about") {
        setPhotoLocation("about");
      } else if (v <= triggerPoint && photoLocation !== "hero") {
        setPhotoLocation("hero");
      }
    });
  }, [scrollY, photoLocation]);

  return (
    <div className="min-h-screen bg-zinc-900 text-white selection:bg-white selection:text-zinc-900 overflow-x-hidden font-sans relative">
      {/* Massive Background Watermark */}
      <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden flex flex-col justify-center gap-12 opacity-[0.03]">
        <motion.div 
           animate={{ x: [0, -1000] }} 
           transition={{ repeat: Infinity, duration: 150, ease: "linear" }}
           className="text-[12vw] font-display font-black uppercase whitespace-nowrap leading-none"
        >
          DATA ANALYST WEB DEVELOPER RESUME PORTFOLIO DATA ANALYST WEB DEVELOPER RESUME PORTFOLIO
        </motion.div>
        <motion.div 
           animate={{ x: [-1000, 0] }} 
           transition={{ repeat: Infinity, duration: 150, ease: "linear" }}
           className="text-[12vw] font-display font-black uppercase whitespace-nowrap leading-none"
        >
          SADIQ AHMAD SHAIK SADIQ AHMAD SHAIK SADIQ AHMAD SHAIK SADIQ AHMAD SHAIK SADIQ AHMAD SHAIK
        </motion.div>
        <motion.div 
           animate={{ x: [0, -1000] }} 
           transition={{ repeat: Infinity, duration: 150, ease: "linear" }}
           className="text-[12vw] font-display font-black uppercase whitespace-nowrap leading-none"
        >
          PYTHON SQL POWER BI REACT TAILWIND CSS PYTHON SQL POWER BI REACT TAILWIND CSS
        </motion.div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-[100]"
        style={{ scaleX }}
      />
      
      {/* Minimalist Brutalist Header */}
      <header className="fixed top-0 left-0 right-0 px-4 sm:px-6 py-4 flex justify-between items-center z-50 bg-zinc-900 border-b border-white/10 transition-colors shadow-sm">
        <span className="font-display font-black text-xl lg:text-2xl uppercase tracking-[0.2em] text-white">SADIQ AHMAD SHAIK</span>
        
        <nav className="hidden lg:flex items-center gap-6">
          <a href="#about" className="text-xs uppercase tracking-widest font-mono hover:text-zinc-400 transition-colors">About</a>
          <a href="#skills" className="text-xs uppercase tracking-widest font-mono hover:text-zinc-400 transition-colors">Skills</a>
          <a href="#projects" className="text-xs uppercase tracking-widest font-mono hover:text-zinc-400 transition-colors">Projects</a>
          <a href="#experience" className="text-xs uppercase tracking-widest font-mono hover:text-zinc-400 transition-colors">Experience</a>
          <a href="#education" className="text-xs uppercase tracking-widest font-mono hover:text-zinc-400 transition-colors">Education</a>
        </nav>

        <div className="flex gap-4 items-center flex-shrink-0 pointer-events-auto">
           <ThemeToggle />
        </div>
      </header>

      <main className="relative z-10">
        <LayoutGroup>
          <Hero photoLocation={photoLocation} />
          <About photoLocation={photoLocation} />
          <Skills hoveredTechs={hoveredTechs} />
          <Projects onHoverTechs={setHoveredTechs} />
          <Timeline />
          <Contact />
        </LayoutGroup>
      </main>
    </div>
  );
}
