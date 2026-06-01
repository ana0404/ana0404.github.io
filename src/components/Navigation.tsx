import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onNavigate: (id: string) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const NAV_ITEMS = [
  { id: "hero", label: "01 // Hero" },
  { id: "projects", label: "02 // Architectures" },
  { id: "ai-engineering", label: "03 // AI Engineering" },
  { id: "ai-story", label: "04 // The Evolution" },
  { id: "certifications", label: "05 // Certifications" },
  { id: "contact", label: "06 // Contact" },
];

export default function Navigation({ isOpen, setIsOpen, onNavigate, isDarkMode, toggleTheme }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 p-4 md:p-10 pointer-events-none">
        <header className="flex justify-between items-center bg-transparent border-b border-border pb-6 pointer-events-auto">
          <div className="flex items-center cursor-pointer relative" onClick={() => onNavigate("hero")}>
            <div className="relative flex items-center shrink-0">
              {/* Local backdrop matches the exact website background color to eliminate the "white box" effect */}
              {!isDarkMode && (
                <div className={`absolute inset-0 bg-background z-0 origin-left pointer-events-none transition-all duration-300 ${isScrolled ? 'scale-100' : 'scale-125 sm:scale-[1.35]'}`} />
              )}
              {/* Logo - using initials fallback */}
              <div className="w-10 h-10 bg-accent-red flex items-center justify-center font-bold text-white font-sans transition-colors relative z-20 shadow-sm ml-2">
                AD
              </div>
            </div>
            <div className="overflow-hidden hidden sm:block z-10 ml-2">
              <motion.div
                initial={false}
                animate={{
                  x: isScrolled ? "-100%" : "0%",
                  opacity: isScrolled ? 0 : 1,
                }}
                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                className="pl-4 text-xs font-mono uppercase tracking-[0.4em] opacity-60 text-foreground whitespace-nowrap"
              >
                ana0404.github.io / core_systems
              </motion.div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className="text-foreground hover:text-accent-red transition-colors pointer-events-auto p-2"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="group flex flex-col items-end gap-1.5 p-2 pointer-events-auto"
              aria-label="Open menu"
            >
              <div className="w-8 h-0.5 bg-foreground group-hover:bg-accent-red transition-colors"></div>
              <div className="w-5 h-0.5 bg-foreground group-hover:bg-accent-red transition-colors"></div>
              <div className="w-8 h-0.5 bg-foreground group-hover:bg-accent-red transition-colors"></div>
            </button>
          </div>
        </header>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-background text-foreground flex flex-col pt-24 px-6 pb-6 md:p-12 md:pt-32 overflow-hidden border-8 md:border-[16px] border-border"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-grid-pattern" />
            
            <div className="absolute top-4 md:top-10 right-4 md:right-10 pointer-events-auto">
              <button
                onClick={() => setIsOpen(false)}
                className="hover:opacity-70 transition-opacity p-2 text-foreground"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex flex-col space-y-4 sm:space-y-6 max-w-4xl mx-auto w-full z-10 flex-1 justify-center h-full overflow-y-auto py-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {NAV_ITEMS.map((item, index) => (
                <div key={item.id} className="overflow-hidden w-full shrink-0 py-2">
                  <motion.button
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{
                      duration: 0.6,
                      ease: [0.76, 0, 0.24, 1],
                      delay: 0.1 + index * 0.05,
                    }}
                    onClick={() => onNavigate(item.id)}
                    className="group flex flex-col items-start w-full text-left pt-2 pb-1"
                  >
                    <span className="font-mono text-[10px] md:text-xs text-accent-red mb-2 opacity-80">{item.label.split(' // ')[0]}</span>
                    <div className="w-full border-b border-border pb-2 flex justify-between items-end">
                       <span className="font-serif italic text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter group-hover:text-accent-red transition-colors text-foreground whitespace-normal break-words leading-normal">
                        {item.label.split(' // ')[1]}
                      </span>
                      <span className="font-mono text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline tracking-widest text-[10px] md:text-xs uppercase ml-4 shrink-0 mb-2">SELECT</span>
                    </div>
                  </motion.button>
                </div>
              ))}
            </div>
            
            <div className="mt-auto pt-8 flex justify-between items-end font-mono text-[10px] text-muted-foreground w-full max-w-4xl mx-auto tracking-[0.4em] uppercase z-10">
               <span>SYS_STATUS: ONLINE</span>
               <span>v1.0.0</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
