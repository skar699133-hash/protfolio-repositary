import { motion } from "motion/react";
import { 
  Database, 
  Terminal, 
  BrainCircuit, 
  LineChart, 
  PieChart, 
  BarChart4, 
  Users, 
  BookOpen 
} from "lucide-react";

const SKILLS = [
  { name: "SQL", icon: Database },
  { name: "Python", icon: Terminal },
  { name: "Machine Learning", icon: BrainCircuit },
  { name: "Stats & Probability", icon: LineChart },
  { name: "Data Analytics", icon: PieChart },
  { name: "Power BI", icon: BarChart4 },
  { name: "Interpersonal Skills", icon: Users },
  { name: "Continuous Learning", icon: BookOpen }
];

export default function Skills({ hoveredTechs = [] }: { hoveredTechs?: string[] }) {
  return (
    <section id="skills" className="scroll-mt-24 py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-white/10 mt-12 sm:mt-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl lg:text-5xl font-display font-black uppercase mb-8 border-b border-white/10 pb-4"
      >
        Skills &<br className="md:hidden" /> Tools
      </motion.h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {SKILLS.map((skill, idx) => {
          const Icon = skill.icon;
          const isHighlighted = hoveredTechs.includes(skill.name);
          const activeClass = isHighlighted ? "bg-white text-black border-white/80 shadow-[0_0_20px_rgba(255,255,255,0.4)]" : "bg-zinc-800/50 border-white/20 text-zinc-300";
          const iconClass = isHighlighted ? "text-black scale-110" : "text-white";
          const textClass = isHighlighted ? "text-black font-black" : "text-zinc-300";

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={`group aspect-square border flex flex-col items-center justify-center p-4 sm:p-6 text-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer rounded-3xl ${activeClass}`}
            >
              <Icon className={`w-10 h-10 sm:w-14 sm:h-14 mb-4 sm:mb-5 group-hover:scale-110 group-hover:text-black transition-transform duration-300 ${iconClass}`} strokeWidth={2} />
              <h4 className={`font-display font-semibold uppercase tracking-wider text-xs sm:text-sm leading-tight group-hover:text-black transition-colors ${textClass}`}>
                {skill.name}
              </h4>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
