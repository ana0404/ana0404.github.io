import Reveal from "./ui/Reveal";
import WipeReveal from "./ui/WipeReveal";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: "01",
    title: "Predictive Energy Grid Modeling",
    description: "Developed a distributed ML pipeline to forecast grid load with 94% accuracy, optimizing capacity distribution.",
    stack: ["Python", "TensorFlow", "Spark", "AWS", "Grafana"],
    metrics: "Reduced overhead by 15%",
  },
  {
    id: "02",
    title: "Algorithmic Trading Engine",
    description: "High-frequency trading infrastructure utilizing reinforcement learning on tick-level market data.",
    stack: ["C++", "Python", "PyTorch", "Redis"],
    metrics: "20μs latency execution",
  },
  {
    id: "03",
    title: "NLP Clinical Data Extraction",
    description: "Transformer-based extraction of key entities from unstructured EHR text to automate patient risk stratification.",
    stack: ["HuggingFace", "FastAPI", "React", "PostgreSQL"],
    metrics: "Processed 1M+ records/day",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full relative py-24 px-6 md:px-12 bg-background text-foreground transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <WipeReveal width="100%" wipeColor="var(--accent-red)" className="mb-16 md:mb-24">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 border-b border-border pb-4 pr-4">
            <span className="font-mono text-sm tracking-widest text-accent-red shrink-0">02</span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl uppercase tracking-tighter leading-tight pb-1 break-words max-w-full w-full">Architectures</h2>
          </div>
        </WipeReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <div className="group bg-transparent border-l-2 border-accent-red relative p-6 md:p-8 min-h-[320px] flex flex-col justify-between hover:bg-muted transition-colors cursor-pointer shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase items-center flex gap-2">
                    {project.id} / ARCHITECTURE
                  </span>
                  <div className="p-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0 duration-300">
                    <ArrowUpRight className="w-5 h-5 text-accent-red" />
                  </div>
                </div>
                
                <div>
                  <h3 className="font-serif italic text-2xl lg:text-3xl mb-4 text-card-foreground">{project.title}</h3>
                  <p className="font-sans text-xs leading-relaxed text-muted-foreground mb-8">
                    {project.description}
                  </p>
                </div>

                <div className="border-t border-border pt-4 mt-auto">
                   <div className="font-mono text-[9px] text-accent-red tracking-widest uppercase mb-2">Metrics</div>
                   <div className="font-mono text-sm font-semibold mb-4 text-card-foreground opacity-90">{project.metrics}</div>
                  
                   <div className="flex flex-wrap gap-2">
                     {project.stack.map(tech => (
                       <span key={tech} className="bg-background text-foreground text-[9px] font-mono px-3 py-1 uppercase tracking-widest border border-border">
                         {tech}
                       </span>
                     ))}
                   </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
