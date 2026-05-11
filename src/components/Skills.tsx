import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Database, 
  Terminal, 
  BrainCircuit, 
  LineChart, 
  PieChart, 
  BarChart4, 
  Users, 
  BookOpen,
  Code2,
  Table2,
  Cpu,
  Layers,
  Search,
  Layout,
  Microscope,
  Presentation,
  CheckCircle2,
  Workflow,
  Sigma,
  FunctionSquare,
  ArrowRight,
  FolderOpen,
  Award,
  Briefcase
} from "lucide-react";

const SKILLS = [
  { name: "SQL", icon: Database, details: ["Data Scientist Intern at Intellipaat", "Sreenidhi Institute of Science and Technology", "Querying a Large Relational Database"] },
  { name: "Python", icon: Terminal, details: ["Data Scientist Intern at Intellipaat", "Sreenidhi Institute of Science and Technology", "Forecasting of Sales using Superstore Data"] },
  { name: "Machine Learning", icon: BrainCircuit, details: ["Data Scientist Intern at Intellipaat", "Sreenidhi Institute of Science and Technology", "Forecasting of Sales using Superstore Data"] },
  { name: "Deep Learning", icon: Cpu, details: ["Handwriting Recognition System"] },
  { name: "Stats & Probability", icon: LineChart, details: ["Sreenidhi Institute of Science and Technology", "Certificate of Completion - Data Science"] },
  { name: "Data Analytics", icon: PieChart, details: ["Sreenidhi Institute of Science and Technology"] },
  { name: "Power BI", icon: BarChart4, details: ["Data Scientist Intern at Intellipaat", "Sreenidhi Institute of Science and Technology"] },
  { name: "Microsoft Excel", icon: Table2, details: ["Data Scientist Intern at Intellipaat"] },
  { name: "NumPy", icon: Sigma, details: ["Certificate of Completion - Data Science"] },
  { name: "SciPy", icon: Microscope, details: ["Certificate of Completion - Data Science"] },
  { name: "Matplotlib", icon: Layout, details: ["Certificate of Completion - Data Science"] },
  { name: "Seaborn", icon: Presentation, details: ["Certificate of Completion - Data Science"] },
  { name: "Pandas", icon: Code2, details: ["Certificate of Completion - Data Science"] },
  { name: "Scikit-Learn", icon: Layers, details: ["Forecasting of Sales using Superstore Data", "Certificate of Completion - Data Science"] },
  { name: "EDA", icon: Search, details: ["Data Scientist Intern at Intellipaat", "Sreenidhi Institute of Science and Technology", "Forecasting of Sales using Superstore Data"] },
  { name: "Data Visualization", icon: Layout, details: ["Forecasting of Sales using Superstore Data", "Certificate of Completion - Data Science"] },
  { name: "Data Cleaning", icon: Workflow, details: ["Sreenidhi Institute of Science and Technology", "Forecasting of Sales using Superstore Data", "Certificate of Completion - Data Science"] },
  { name: "Mathematics", icon: FunctionSquare, details: ["Sreenidhi Institute of Science and Technology"] },
  { name: "Problem Solving", icon: Microscope, details: ["Sreenidhi Institute of Science and Technology", "Forecasting of Sales using Superstore Data", "Querying a Large Relational Database"] },
  { name: "Presentations", icon: Presentation, details: ["Sreenidhi Institute of Science and Technology"] },
  { name: "Critical Thinking", icon: CheckCircle2, details: ["Sreenidhi Institute of Science and Technology"] },
  { name: "Interpersonal Skills", icon: Users, details: ["Team Collaboration", "Client Communication"] },
  { name: "Continuous Learning", icon: BookOpen, details: ["M.Tech Research", "Online Certifications"] }
];

export default function Skills({ hoveredTechs = [] }: { hoveredTechs?: string[] }) {
  const [selectedSkill, setSelectedSkill] = useState<typeof SKILLS[0] | null>(null);

  return (
    <section id="skills" className="scroll-mt-24 py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto border-t border-white/10 mt-12 sm:mt-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 border-b border-white/10 pb-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl lg:text-5xl font-display font-black uppercase"
        >
          Skills &<br className="md:hidden" /> Tools
        </motion.h2>
        <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest mt-4 md:mt-0">Click a skill to see context</p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {SKILLS.map((skill, idx) => {
          const Icon = skill.icon;
          const isHighlighted = hoveredTechs.includes(skill.name);
          const isSelected = selectedSkill?.name === skill.name;
          
          const activeClass = isHighlighted || isSelected ? "bg-white text-black border-white/80 shadow-[0_0_20px_rgba(255,255,255,0.4)]" : "bg-zinc-800/50 border-white/20 text-zinc-300";
          const iconClass = isHighlighted || isSelected ? "text-black scale-110" : "text-white";
          const textClass = isHighlighted || isSelected ? "text-black font-black" : "text-zinc-300";

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.03 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedSkill(isSelected ? null : skill)}
              className={`group aspect-square border flex flex-col items-center justify-center p-3 text-center transition-all duration-300 cursor-pointer rounded-2xl ${activeClass}`}
            >
              <Icon className={`w-8 h-8 sm:w-10 sm:h-10 mb-3 group-hover:scale-110 group-hover:text-black transition-transform duration-300 ${iconClass}`} strokeWidth={2} />
              <h4 className={`font-display font-semibold uppercase tracking-wider text-[10px] sm:text-xs leading-tight group-hover:text-black transition-colors ${textClass}`}>
                {skill.name}
              </h4>
            </motion.div>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-8 bg-zinc-900/50 border border-white/10 rounded-3xl overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white text-black rounded-xl">
                  <selectedSkill.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-black uppercase text-white">{selectedSkill.name}</h3>
                  <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Experience & Applications</p>
                </div>
              </div>

              <div className="space-y-4">
                {selectedSkill.details?.map((detail, dIdx) => {
                  let DetailIcon = Briefcase;
                  if (detail.toLowerCase().includes("certificate")) DetailIcon = Award;
                  if (detail.toLowerCase().includes("system") || detail.toLowerCase().includes("database") || detail.toLowerCase().includes("data")) DetailIcon = FolderOpen;

                  return (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: dIdx * 0.1 }}
                      key={dIdx} 
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <DetailIcon className="w-5 h-5 text-zinc-500 shrink-0" />
                      <span className="text-zinc-300 font-sans text-sm uppercase tracking-wide">{detail}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
