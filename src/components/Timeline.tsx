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
            <div className="relative border-l border-white/20 pl-6 pb-8 ml-2">
              <div className="absolute w-2.5 h-2.5 bg-white -left-[5.5px] top-2 rounded-full hidden sm:block" />
              <p className="text-zinc-500 text-xs font-mono tracking-widest mb-2 uppercase block sm:absolute sm:-left-32 sm:top-1 sm:text-right sm:w-20">2021</p>
              <h4 className="text-lg font-bold font-display uppercase leading-tight mb-1 tracking-wider">Web Developer Intern</h4>
              <p className="text-sm font-mono text-zinc-400 mb-3">Brain O Vision</p>
              <p className="text-zinc-400 font-sans leading-relaxed text-sm">
                Code maintenance, cross-functional collaboration with designers, and documentation to ensure high-performance deliverables.
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
              <div className="relative">
                <div className="absolute w-2.5 h-2.5 bg-zinc-700 -left-[29.5px] top-2 rounded-full hidden sm:block" />
                <h4 className="text-base sm:text-lg font-bold font-display uppercase mb-1 tracking-wider">Class X <span className="text-zinc-500 font-mono text-xs block sm:inline sm:ml-2 tracking-normal">(88%)</span></h4>
                <p className="text-zinc-400 font-sans text-sm">Dr. KKR’s Gowtham High School</p>
              </div>
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
