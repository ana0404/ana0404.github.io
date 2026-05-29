import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { SiGooglecloud, SiSnowflake } from "react-icons/si";
import WipeReveal from "./ui/WipeReveal";

const CERTIFICATIONS = [
  {
    title: "AWS Cloud Practitioner",
    year: "2023",
    number: "AWS-CP-7F89B2X",
    Icon: FaAws,
  },
  {
    title: "Azure AI Fundamentals",
    year: "2025",
    number: "AZ-AI900-5M9L3P",
    Icon: VscAzure,
  },
  {
    title: "AWS Cloud Architect",
    year: "2024",
    number: "AWS-SAA-C03-9K2R",
    Icon: FaAws,
  },
  {
    title: "Google Cloud AI Fundamentals",
    year: "2026",
    number: "GCP-AIF-228X8P",
    Icon: SiGooglecloud,
  },
  {
    title: "Generative AI Explorer - Agent Platform",
    year: "2026",
    number: "SNOW-GAIE-4P2Q9",
    Icon: SiSnowflake,
  },
];

function CertificationCard({ cert, index, isInView, key }: { cert: any; index: number; isInView: boolean; key?: string | number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0.8, 1, 1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [30, 0, 0, -30]);
  const rotateY = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [-10, 0, 0, 10]);
  const filter = useTransform(
    scrollYProgress,
    [0, 0.45, 0.55, 1],
    ["blur(4px) saturate(0%)", "blur(0px) saturate(100%)", "blur(0px) saturate(100%)", "blur(4px) saturate(0%)"]
  );
  const opacityScroll = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0.3, 1, 1, 0.3]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
      className="perspective-[1000px] w-full"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        ref={ref}
        style={{
          scale,
          rotateX,
          rotateY,
          opacity: opacityScroll,
          filter,
          transformStyle: "preserve-3d",
        }}
        className="flex items-center gap-6 p-6 border border-border group hover:border-accent-red transition-colors duration-300 relative bg-background"
      >
        {/* Subtle background glow on hover */}
        <div className="absolute inset-0 bg-accent-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 pointer-events-none" />
        
        <div className="relative z-10 w-14 h-14 flex-shrink-0 flex items-center justify-center bg-foreground/5 rounded-full group-hover:bg-accent-red/10 group-hover:text-accent-red transition-colors duration-300">
          <cert.Icon className="w-7 h-7" />
        </div>
        
        <div className="relative z-10 flex flex-col items-start text-left">
          <span className="font-mono text-xs text-accent-red mb-1.5 opacity-80 tracking-widest uppercase">{cert.year}</span>
          <span className="font-serif italic text-xl md:text-2xl text-foreground tracking-tight leading-none mb-2">
            {cert.title}
          </span>
          <span className="font-mono text-[10px] md:text-xs text-muted-foreground tracking-widest uppercase">
            CERT NO: {cert.number}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <section id="certifications" className="w-full relative py-24 px-6 md:px-12 bg-background border-t border-border z-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <WipeReveal width="100%" wipeColor="var(--accent-red)" className="mb-16">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 border-b border-border pb-4 pr-4">
            <span className="font-mono text-sm tracking-widest text-accent-red shrink-0">05</span>
            <h2 className="font-serif italic text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tighter leading-tight pb-1 break-words max-w-full w-full">Certifications</h2>
          </div>
        </WipeReveal>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
