import { motion } from "motion/react";
import WipeReveal from "./ui/WipeReveal";
import TypewriterText from "./ui/TypewriterText";

export default function Hero() {
  return (
    <section id="hero" className="w-full min-h-screen relative flex flex-col justify-between p-6 pt-32 md:p-12 md:pt-32 overflow-hidden bg-transparent text-foreground">
      {/* Background layer */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center gap-8 md:gap-16 py-12 md:py-24">
        <div
          className="flex flex-col"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-xs font-mono text-accent-red uppercase mb-4 md:mb-8 block tracking-widest italic">
            01 // Data Scientist & AI Engineer
          </motion.span>
          
          <WipeReveal delay={0.2} wipeColor="var(--accent-red)">
            <h1 className="text-5xl sm:text-6xl md:text-[80px] lg:text-[100px] leading-[0.9] font-serif italic tracking-tighter mb-4 md:mb-8 break-words">
              Designing <br/>Systems that <br/>
              <span className="text-accent-red not-italic font-sans font-black tracking-tighter mt-4 md:mt-6 block break-words max-w-full">
                <TypewriterText />
              </span>
            </h1>
          </WipeReveal>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="max-w-xl md:max-w-md pb-12 md:pb-0"
        >
          <p className="text-lg leading-relaxed opacity-70 mb-8 font-sans text-foreground">
            Translating complex datasets into scalable, intelligent systems. Specializing in machine learning infrastructure and rigorous analytical modeling at the intersection of logic and intuition.
          </p>

          <div className="flex gap-10 border-t border-border pt-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-sans">Current Node</p>
              <p className="text-sm font-mono text-foreground">San Francisco / Remote</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-sans">Signal Status</p>
              <p className="text-sm font-mono text-foreground">Available for Collab</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 md:bottom-12 right-6 md:right-12 font-mono text-[10px] text-muted-foreground uppercase tracking-[0.4em] flex flex-col items-center gap-4">
        <span className="rotate-90 origin-right translate-x-3 sm:translate-x-0 sm:rotate-0 translate-y-8 sm:translate-y-0">SCROLL</span>
        <div className="w-[1px] h-12 bg-accent-red animate-pulse" />
      </div>
    </section>
  );
}
