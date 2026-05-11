import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: "Handwriting Recognition System",
    desc: "A deep learning model developed to recognize handwritten text with high accuracy using neural networks and computer vision.",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    techs: ["Python", "Deep Learning", "Machine Learning", "Computer Vision"]
  },
  {
    title: "Forecasting of Sales",
    desc: "Comprehensive sales forecasting analysis using Superstore data. Leveraged Python and Power BI for predictive modeling and visualization.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    techs: ["Python", "Machine Learning", "Data Analytics", "Power BI", "Exploratory Data Analysis"]
  },
  {
    title: "Querying Large Databases",
    desc: "Optimized complex SQL queries for multi-million row relational databases, improving data retrieval efficiency and reporting precision.",
    img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800&auto=format&fit=crop",
    techs: ["SQL", "Database Management", "Data Analytics", "Analytical Skills"]
  }
];

export default function Projects({ onHoverTechs }: { onHoverTechs?: (techs: string[]) => void }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const handleMouseEnter = (idx: number) => {
    setHoveredIdx(idx);
    if (onHoverTechs) {
      onHoverTechs(PROJECTS[idx].techs);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIdx(null);
    if (onHoverTechs) {
      onHoverTechs([]);
    }
  };

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="projects"
      className="scroll-mt-24 py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto min-h-screen flex flex-col justify-center border-t border-white/10 mt-12 sm:mt-16"
      onMouseMove={handleMouseMove}
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl lg:text-5xl font-display font-black uppercase mb-8 border-b border-white/10 pb-4"
      >
        Projects
      </motion.h2>
      
      <div className="relative">
        <div className="flex flex-col border-t border-white/20">
          {PROJECTS.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              className="group border-b border-white/20 py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between cursor-pointer relative z-10 hover:bg-white/5 transition-colors duration-500 px-4 -mx-4 rounded-3xl"
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-4xl pr-0 md:pr-12 w-full">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-3">
                  <span className="text-zinc-500 font-mono text-xs md:text-sm tracking-widest uppercase">0{idx + 1}</span>
                  <span className="hidden md:inline-block w-8 h-[1px] bg-zinc-500"></span>
                  <span className="text-zinc-500 font-mono text-xs md:text-sm tracking-widest uppercase md:hidden">Project</span>
                </div>
                
                <div className="flex justify-between items-start md:block">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-display font-bold uppercase transition-transform duration-500 md:group-hover:translate-x-4 origin-left text-white leading-tight">
                    {proj.title}
                  </h3>
                   {/* Mobile standard arrow */}
                  <div className="md:hidden mt-0 shrink-0 ml-4">
                    <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center bg-transparent text-white">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Mobile Image preview */}
                <div className="md:hidden mt-5 overflow-hidden rounded-xl">
                  <img src={proj.img} alt={proj.title} className="w-full h-40 sm:h-56 object-cover grayscale brightness-75" />
                </div>
                
                <div className="overflow-hidden h-auto md:h-0 group-hover:h-auto opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 origin-top mt-4 group-hover:md:mt-5 text-zinc-400 text-xs md:text-sm font-sans max-w-2xl leading-relaxed border-l-2 border-white/20 pl-4 py-1 flex flex-col gap-3">
                  <p>
                    {proj.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {proj.techs.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-[10px] sm:text-xs font-mono uppercase tracking-widest border border-white/10 rounded-sm bg-white/5 text-zinc-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:flex mt-8 md:mt-0 opacity-100 md:opacity-0 md:-translate-x-4 group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-500">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white flex items-center justify-center bg-transparent group-hover:bg-white text-white group-hover:text-black transition-colors duration-500 shrink-0">
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hover Image Preview (Desktop only) */}
        <AnimatePresence>
           {hoveredIdx !== null && (
             <motion.div
               className="fixed top-0 left-0 pointer-events-none z-0 hidden lg:block"
               animate={{
                 x: mousePos.x - 200,
                 y: mousePos.y - 250,
                 opacity: 1,
                 scale: 1,
                 rotate: hoveredIdx % 2 === 0 ? 3 : -3
               }}
               initial={{ opacity: 0, scale: 0.8 }}
               exit={{ opacity: 0, scale: 0.8 }}
               transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.5 }}
             >
               <img 
                 src={PROJECTS[hoveredIdx].img} 
                 alt={PROJECTS[hoveredIdx].title} 
                 className="w-[400px] h-[500px] object-cover grayscale mix-blend-luminosity opacity-80" 
               />
             </motion.div>
           )}
        </AnimatePresence>
      </div>
    </section>
  )
}
