import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove("theme-light");
    } else {
      document.body.classList.add("theme-light");
    }
  }, [isDark]);

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      className="relative flex items-center justify-between w-[72px] h-9 bg-transparent rounded-full p-1 border-2 border-white cursor-pointer pointer-events-auto shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle Theme"
      layout
    >
      <motion.div 
        className="absolute left-[3px] flex items-center justify-center w-[26px] h-[26px] bg-white rounded-full z-10"
        animate={{ x: isDark ? 0 : 36, rotate: isDark ? 0 : 360 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {isDark ? <Moon className="w-3.5 h-3.5 text-black" strokeWidth={3} /> : <Sun className="w-3.5 h-3.5 text-black" strokeWidth={3} />}
      </motion.div>
    </motion.button>
  );
}
