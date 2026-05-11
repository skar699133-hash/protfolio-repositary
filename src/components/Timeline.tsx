import { motion } from "motion/react";

export default function Timeline() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-white/10 mt-12 sm:mt-16">
       <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
         {/* Experience */}
         <motion.div id="experience"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="scroll-mt-24 flex-1"
         >
            <h3 className="text-2xl font-display font-black uppercase mb-8 pb-4 border-b border-white/20 text-zinc-300">Experience</h3>
            
            {/* Intellipaat */}
            <div className="relative border-l border-white/20 pl-6 pb-10 ml-2">
              <div className="absolute w-2.5 h-2.5 bg-white -left-[5.5px] top-2 rounded-full hidden sm:block" />
              <div className="flex flex-col mb-4">
                <span className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase mb-1">Jul 2023 — Mar 2024 • 9 mos</span>
                <h4 className="text-lg font-bold font-display uppercase leading-tight tracking-wider">Data Scientist Intern</h4>
                <p className="text-sm font-mono text-zinc-400">Intellipaat • Remote</p>
              </div>
              <p className="text-zinc-400 font-sans leading-relaxed text-sm mb-4">
                Delving deep into the fascinating realm of data science. Applied statistical analysis, machine learning algorithms, and data visualization techniques to real-world datasets. Worked across the entire data science lifecycle, from data wrangling and preprocessing to model building and evaluation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-zinc-300 uppercase tracking-tighter">Python</span>
                <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-zinc-300 uppercase tracking-tighter">SQL</span>
                <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-zinc-300 uppercase tracking-tighter">Machine Learning</span>
                <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-zinc-300 uppercase tracking-tighter">EDA</span>
              </div>
            </div>

            {/* Brain O Vision */}
            <div className="relative border-l border-white/20 pl-6 pb-8 ml-2">
              <div className="absolute w-2.5 h-2.5 bg-zinc-700 -left-[5.5px] top-2 rounded-full hidden sm:block" />
              <div className="flex flex-col mb-4">
                <span className="text-zinc-500 text-[10px] font-mono tracking-widest uppercase mb-1">Jul 2021 — Aug 2021 • 2 mos</span>
                <h4 className="text-lg font-bold font-display uppercase leading-tight tracking-wider">Web Development Intern</h4>
                <p className="text-sm font-mono text-zinc-400">BRAINOVISION SOLUTIONS INDIA PVT.LTD • On-site</p>
              </div>
              <p className="text-zinc-400 font-sans leading-relaxed text-sm">
                Testing and maintaining code for websites and web applications. Identifying and fixing issues within existing code. Creating and maintaining documentation for code, processes, and projects.
              </p>
            </div>
         </motion.div>

         {/* Education */}
         <motion.div id="education"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="scroll-mt-24 flex-1"
         >
            <h3 className="text-2xl font-display font-black uppercase mb-8 pb-4 border-b border-white/20 text-zinc-300">Education</h3>
            <div className="space-y-6 relative border-l border-white/20 pl-6 ml-2">
              <div className="relative pb-6 border-b-0 border-white/10">
                <div className="absolute w-2.5 h-2.5 bg-white -left-[29.5px] top-2 rounded-full hidden sm:block" />
                <h4 className="text-base sm:text-lg font-bold font-display uppercase mb-1 tracking-wider">M.Tech Computer Science <span className="text-zinc-500 font-mono text-xs block sm:inline sm:ml-2 tracking-normal">(Present)</span></h4>
                <p className="text-zinc-400 font-sans text-sm">NIT Calicut</p>
              </div>
              <div className="relative pb-6 border-b-0 border-white/10">
                <div className="absolute w-2.5 h-2.5 bg-zinc-700 -left-[29.5px] top-2 rounded-full hidden sm:block" />
                <h4 className="text-base sm:text-lg font-bold font-display uppercase mb-1 tracking-wider">B.Tech ECE <span className="text-zinc-500 font-mono text-xs block sm:inline sm:ml-2 tracking-normal">(CGPA: 6.65)</span></h4>
                <p className="text-zinc-400 font-sans text-sm">Sree Nidhi Institute of Science and Technology</p>
              </div>
              <div className="relative pb-6 border-b-0 border-white/10">
                <div className="absolute w-2.5 h-2.5 bg-zinc-700 -left-[29.5px] top-2 rounded-full hidden sm:block" />
                <h4 className="text-base sm:text-lg font-bold font-display uppercase mb-1 tracking-wider">Class XII <span className="text-zinc-500 font-mono text-xs block sm:inline sm:ml-2 tracking-normal">(91.2%)</span></h4>
                <p className="text-zinc-400 font-sans text-sm">Sri Chaitanya Junior College</p>
              </div>
            </div>

            <h3 className="text-2xl font-display font-black uppercase mb-8 pb-4 border-b border-white/20 text-zinc-300 mt-12">Certifications</h3>
            <div className="relative border-l border-white/20 pl-6 ml-2">
              <div className="absolute w-2.5 h-2.5 bg-white -left-[5.5px] top-2 rounded-full hidden sm:block" />
              <h4 className="text-lg font-bold font-display uppercase leading-tight mb-1 tracking-wider">Data Science Certificate</h4>
              <p className="text-sm font-mono text-zinc-400 mb-3">Intellipaat Completion</p>
              <p className="text-zinc-400 font-sans leading-relaxed text-sm">
                Comprehensive training in Data Science, Machine Learning, and Big Data Analytics.
              </p>
            </div>
         </motion.div>

         {/* Responsibility */}
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="flex-1"
         >
            <h3 className="text-2xl font-display font-black uppercase mb-8 pb-4 border-b border-white/20 text-zinc-300">Responsibility</h3>
            <div className="relative border-l border-white/20 pl-6 ml-2">
              <div className="absolute w-2.5 h-2.5 bg-white -left-[5.5px] top-2 rounded-full hidden sm:block" />
              <h4 className="text-lg font-bold font-display uppercase leading-tight mb-1 tracking-wider">Executive Member</h4>
              <p className="text-sm font-mono text-zinc-400 mb-3">Bachpan Prayas</p>
              <p className="text-zinc-400 font-sans leading-relaxed text-sm">
                Organized medical camps and village adaptation events to support community well-being and development.
              </p>
            </div>
         </motion.div>
       </div>
    </section>
  )
}
