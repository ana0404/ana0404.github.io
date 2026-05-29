import Reveal from "./ui/Reveal";
import WipeReveal from "./ui/WipeReveal";
import { motion } from "motion/react";

const PIPELINE_STEPS = [
  { id: "INGEST", desc: "Real-time streaming & batch ETL. Kafka, Airflow, dbt." },
  { id: "MODEL", desc: "Distributed GPU training. PyTorch, Ray, MLOps." },
  { id: "EVAL", desc: "Bias detection, robust testing, validation metrics." },
  { id: "SERVE", desc: "Low-latency edge inference. Triton, TensorRT, FastAPI." },
];

export default function AIEngineering() {
  return (
    <section id="ai-engineering" className="w-full relative py-24 px-6 md:px-12 bg-background text-foreground overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row gap-12 lg:gap-24">
        
        <div className="w-full md:w-5/12 lg:w-1/3">
          <WipeReveal width="100%" wipeColor="var(--accent-red)" className="mb-8">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 border-b border-border pb-4 pr-4">
              <span className="font-mono text-sm tracking-widest text-accent-red shrink-0">03</span>
              <h2 className="font-serif italic text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tighter leading-tight pb-1 break-words max-w-full w-full">AI Engineering</h2>
            </div>
          </WipeReveal>
          
          <Reveal delay={0.2}>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground mb-8">
              Engineering robust, reproducible, and scalable infrastructure to move machine learning models from research environments into mission-critical production systems. 
            </p>
            <div className="flex justify-between items-start pt-6 border-t border-border">
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Status</span>
              <span className="font-mono text-[9px] font-bold text-accent-red">98.4% EFFICIENCY</span>
            </div>
          </Reveal>
        </div>

        <div className="w-full md:w-2/3 flex flex-col justify-center">
            <div className="relative border-l border-border pl-8 md:pl-12 py-8">
              {PIPELINE_STEPS.map((step, index) => (
                <Reveal key={step.id} delay={index * 0.15}>
                  <div className="relative mb-16 last:mb-0 group cursor-default">
                    {/* Connection Node */}
                    <div className="absolute -left-[37px] md:-left-[53px] top-1 w-4 h-4 bg-accent-red shadow-sm rounded-sm group-hover:bg-foreground transition-colors z-10 scale-50 group-hover:scale-75 origin-center" />
                    
                    {/* Line connecting to content */}
                    <div className="absolute -left-8 md:-left-12 top-3 w-8 md:w-12 h-[1px] bg-border group-hover:bg-accent-red transition-colors" />

                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                      <div className="bg-transparent border-l-2 border-border group-hover:border-accent-red p-4 min-w-[140px] shrink-0 transition-colors">
                        <span className="font-mono text-[9px] text-accent-red block mb-1">NODE_{index + 1}</span>
                        <span className="font-mono font-bold tracking-widest uppercase text-card-foreground">{step.id}</span>
                      </div>
                      <div className="font-sans text-sm text-muted-foreground leading-relaxed max-w-sm pt-2 group-hover:text-foreground transition-colors">
                        {step.desc}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}

              {/* Animated data flow line */}
              <motion.div 
                className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-[var(--accent-red)] to-transparent z-0"
                initial={{ y: "-100%" }}
                animate={{ y: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "linear"
                }}
              />
            </div>
        </div>

      </div>
    </section>
  );
}
