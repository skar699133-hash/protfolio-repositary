import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";

export default function Hero({ photoLocation = "hero" }: { photoLocation?: "hero" | "about" }) {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-20 pb-10">
      {/* Massive Background Text (Filled, Behind Image) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 overflow-hidden text-zinc-700">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-[6rem] leading-[0.9] font-display font-black uppercase tracking-tighter text-center"
        >
          Sadiq Ahmad
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-[6rem] leading-[0.9] font-display font-black uppercase tracking-tighter text-center mt-2"
        >
          Shaik
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-sm font-mono text-zinc-400 uppercase tracking-widest text-center"
        >
          Scroll to reveal
        </motion.p>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center px-4 w-full mt-8 md:mt-24 pointer-events-none min-h-[400px]">
        
        {/* Placeholder container to preserve space */}
        <div className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 flex justify-center pointer-events-none">
          {photoLocation === "hero" && (
            <motion.div
              layoutId="profile-photo"
              initial={{ opacity: 0, scale: 0, y: 100, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              transition={{ type: "spring", stiffness: 450, damping: 15 }}
              className="absolute inset-0 overflow-hidden bg-zinc-900 rounded-3xl pointer-events-auto shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1549471013-3364d7adbc4a?q=80&w=800&auto=format&fit=crop"
                alt="Sadiq Ahmad Shaik"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 scale-105"
              />
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 text-center flex flex-col items-center pointer-events-auto"
        >
          <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-sans font-medium uppercase tracking-widest text-zinc-400">
            Web Developer & Data Analyst
          </h2>
          <button 
            onClick={scrollToContact}
            className="mt-8 px-8 py-4 bg-white text-zinc-900 font-display font-bold text-sm sm:text-base uppercase tracking-[0.2em] hover:bg-zinc-300 hover:scale-105 active:scale-95 transition-all duration-300 select-none rounded-full"
          >
            Let's Talk
          </button>
        </motion.div>
      </div>

      {/* Massive Background Text Overlap (Outlined, Above Image) */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-20 overflow-hidden text-transparent opacity-80"
        style={{ WebkitTextStroke: '1px var(--color-white, white)' }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-[6rem] leading-[0.9] font-display font-black uppercase tracking-tighter text-center"
        >
          Sadiq Ahmad
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-[6rem] leading-[0.9] font-display font-black uppercase tracking-tighter text-center mt-2"
        >
          Shaik
        </motion.h1>
      </div>
    </section>
  );
}
