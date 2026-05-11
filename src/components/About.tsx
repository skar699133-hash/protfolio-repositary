import { motion } from "motion/react";

export default function About({ photoLocation = "about" }: { photoLocation?: "hero" | "about" }) {
  return (
    <section id="about" className="scroll-mt-24 py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-white/10 mt-12 sm:mt-16">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:w-1/3 shrink-0 flex flex-col"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-black uppercase mb-6 md:mb-8 border-b border-white/10 pb-4 text-white">
            About<br className="hidden md:block"/> Me
          </h2>
          
          <div className="relative w-full max-w-[240px] aspect-[3/4] rounded-3xl mt-2 mx-auto md:mx-0">
            {photoLocation === "about" && (
              <motion.div
                layoutId="profile-photo"
                transition={{ 
                  type: "spring", 
                  stiffness: 60, 
                  damping: 20,
                  mass: 1.2
                }}
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
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:w-2/3 flex flex-col justify-center"
        >
          <p className="text-base md:text-lg lg:text-xl font-sans leading-relaxed text-zinc-300 font-medium">
            I am currently pursuing an M.Tech in Computer Science at NIT Calicut, having previously graduated with a B.Tech in ECE from Sree Nidhi Institute of Science and Technology. My work bridges the gap between <strong className="text-white font-black">technical data expertise</strong> and <strong className="text-white font-black">creative web development</strong>.
          </p>
          <p className="mt-4 md:mt-6 text-sm md:text-base font-sans leading-relaxed text-zinc-400">
            With a strong foundation in <span className="font-mono text-zinc-100 uppercase tracking-widest text-xs lg:text-sm bg-white/5 py-1 px-2 rounded">Python</span>, <span className="font-mono text-zinc-100 uppercase tracking-widest text-xs lg:text-sm bg-white/5 py-1 px-2 rounded">Machine Learning</span>, and <span className="font-mono text-zinc-100 uppercase tracking-widest text-xs lg:text-sm bg-white/5 py-1 px-2 rounded">SQL</span>, I build high-performance web applications that transform complex data into intuitive, engaging user experiences. I thrive on solving intricate problems and designing elegant, minimalist interfaces.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
