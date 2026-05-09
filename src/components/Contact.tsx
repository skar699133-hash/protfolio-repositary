import { motion } from "motion/react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:midoriyayakuza2@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-white text-zinc-950 py-24 sm:py-32 px-4 sm:px-6 md:px-8 lg:mt-24 min-h-screen flex flex-col justify-center select-none overflow-hidden relative">
       <div className="absolute inset-0 bg-white z-0 hidden lg:block" />
       <div className="max-w-7xl mx-auto w-full flex flex-col items-center relative z-10">
         <motion.h2 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-5xl sm:text-7xl lg:text-8xl leading-[0.9] font-display font-black uppercase tracking-tighter text-center mb-16 sm:mb-24 text-zinc-900"
         >
           Ready to<br/>Collaborate?
         </motion.h2>

         <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-7"
           >
             <form onSubmit={handleSubmit} className="flex flex-col space-y-8 w-full max-w-xl">
               <div className="flex flex-col space-y-2 group">
                 <label className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 group-focus-within:text-zinc-600 transition-colors">Name / Organization</label>
                 <input 
                   type="text" 
                   required
                   value={formData.name}
                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                   className="bg-transparent border-b border-zinc-300 py-3 font-display text-xl lg:text-2xl text-zinc-950 focus:outline-none focus:border-zinc-950 transition-colors rounded-none placeholder:text-zinc-300 select-auto" 
                   placeholder="JOHN DOE" 
                 />
               </div>
               <div className="flex flex-col space-y-2 group">
                 <label className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 group-focus-within:text-zinc-600 transition-colors">Email Address</label>
                 <input 
                   type="email" 
                   required
                   value={formData.email}
                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                   className="bg-transparent border-b border-zinc-300 py-3 font-display text-xl lg:text-2xl text-zinc-950 focus:outline-none focus:border-zinc-950 transition-colors rounded-none placeholder:text-zinc-300 select-auto" 
                   placeholder="HELLO@DOMAIN.COM" 
                 />
               </div>
               <div className="flex flex-col space-y-2 group">
                 <label className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 group-focus-within:text-zinc-600 transition-colors">Project Details</label>
                 <textarea 
                   required
                   value={formData.message}
                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                   className="bg-transparent border-b border-zinc-300 py-3 font-display text-xl lg:text-2xl text-zinc-950 focus:outline-none focus:border-zinc-950 transition-colors resize-none h-24 lg:h-32 rounded-none placeholder:text-zinc-300 select-auto" 
                   placeholder="TELL ME ABOUT YOUR IDEA..." 
                 />
               </div>
               <button 
                 type="submit"
                 className="self-start mt-6 px-8 py-4 bg-zinc-950 text-white font-display font-bold text-sm lg:text-base uppercase tracking-[0.2em] hover:bg-zinc-800 hover:scale-[1.02] active:scale-95 transition-all duration-300 rounded-full"
               >
                 Send Inquiry
               </button>
             </form>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-5 flex flex-col justify-end space-y-12 lg:pl-16 lg:border-l border-zinc-200"
           >
             <div>
               <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">Direct Contact</p>
               <a href="mailto:midoriyayakuza2@gmail.com" className="block opacity-70 hover:opacity-100 transition-opacity font-display text-xl sm:text-2xl lg:text-3xl font-bold break-words select-auto text-zinc-800">
                 midoriyayakuza2@gmail.com
               </a>
             </div>
             
             <div className="pt-10 border-t border-zinc-200">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-5">Social Profiles</p>
                <div className="flex flex-col space-y-3">
                  <a href="https://linkedin.com/in/sadiqa-shaik" target="_blank" rel="noopener noreferrer" className="font-display font-bold text-lg lg:text-xl uppercase hover:translate-x-2 transition-transform w-[max-content] text-zinc-800">LinkedIn / Sadiq</a>
                  <a href="https://github.com/sadiqshaik" target="_blank" rel="noopener noreferrer" className="font-display font-bold text-lg lg:text-xl uppercase hover:translate-x-2 transition-transform w-[max-content] text-zinc-800">GitHub / Sadiq</a>
                </div>
             </div>
             
             <div className="pt-10 mt-auto">
               <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest leading-relaxed">
                 © {new Date().getFullYear()} Sadiq Ahmad Shaik.<br/>All rights reserved.
               </p>
             </div>
           </motion.div>
         </div>
       </div>
    </section>
  )
}

