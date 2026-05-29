import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import WipeReveal from "./ui/WipeReveal";

const STORY_CARDS = [
  {
    year: "1957",
    title: "The Perceptron",
    description: "Early biological inspiration. The concept of a single-layer artificial neuron introduces the bold idea of machine learning.",
  },
  {
    year: "1986",
    title: "Backpropagation",
    description: "The foundational algorithm for training multi-layer neural networks emerges, solving the fatal limitations of early perceptrons.",
  },
  {
    year: "2006",
    title: "Deep Learning",
    description: "Deep belief networks rekindle interest. The phrase 'Deep Learning' begins its ascent, fueled by parallel compute and expanding data.",
  },
  {
    year: "2012",
    title: "CNN & ImageNet",
    description: "AlexNet shatters visual recognition benchmarks. Convolutional layers conquer spatial patterns, making CNNs the de facto standard.",
  },
  {
    year: "2014",
    title: "Seq2Seq & RNN",
    description: "Recurrent connections master sequence mapping, capturing temporal dependencies and revolutionizing machine translation.",
  },
  {
    year: "2014",
    title: "GANs",
    description: "Adversarial training introduces generative prowess. Pitting networks against each other to create the novel and the uncanny.",
  },
  {
    year: "2017",
    title: "Transformers",
    description: "'Attention Is All You Need'. Parallel processing of sequences through self-attention eliminates recurrence and unlocks unprecedented scale.",
  },
  {
    year: "2020",
    title: "Large Language Models",
    description: "Generative pre-trained transformers scale to hundreds of billions of parameters, exhibiting startling few-shot reasoning capabilities.",
  },
  {
    year: "2023",
    title: "Autonomous Agents",
    description: "Models transition from passive oracles to active entities capable of breaking down tasks, using tools, and autonomous execution.",
  },
  {
    year: "BEYOND",
    title: "The Future",
    description: "Seamless multimodal synthesis, embodied AI, and the continuous, exponential march toward Artificial General Intelligence.",
  }
];

const StoryCard = ({ title, year, description, key }: { title: string; year: string; description: string; key?: string | number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "end 5%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [150, 0, 0, -150]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  const filter = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, scale, filter }}
      className="bg-transparent backdrop-blur-[2px] border-l-4 border-border/50 hover:border-accent-red p-8 md:p-12 relative overflow-hidden group transition-colors duration-500"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-red/5 rounded-bl-[100px] -z-10 transition-transform duration-500 origin-top-right group-hover:scale-150" />
      <span className="font-mono text-sm tracking-widest text-accent-red block mb-4">{year}</span>
      <h3 className="font-serif italic text-2xl sm:text-4xl md:text-5xl lg:text-5xl text-card-foreground mb-6 tracking-tighter break-words max-w-full w-full">{title}</h3>
      <p className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground">{description}</p>
    </motion.div>
  );
};

export default function AIStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [duration, setDuration] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      requestAnimationFrame(() => {
        if (videoRef.current) {
          const currentDuration = videoRef.current.duration || duration;
          if (currentDuration > 0) {
            videoRef.current.currentTime = latest * currentDuration;
          }
        }
      });
    });
  }, [scrollYProgress, duration]);

  return (
    <section id="ai-story" ref={containerRef} className="w-full relative bg-background border-t border-border mt-24">
      {/* Sticky Video Background */}
      <div className="sticky top-0 w-full h-screen overflow-hidden z-0">
        <div className="absolute inset-0 bg-background/80 md:bg-transparent md:bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-1/4 md:w-1/3 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="absolute inset-x-0 top-0 h-32 md:h-48 bg-gradient-to-b from-background to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-32 md:h-48 bg-gradient-to-t from-background to-transparent z-10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay z-10" />
        
        {/* Abstract technical video simulating neural networks/processing */}
        <video
          ref={videoRef}
          className="absolute right-0 top-0 w-full md:w-3/4 h-full object-cover opacity-80 mix-blend-lighten dark:mix-blend-screen z-0 [mask-image:linear-gradient(to_right,transparent,black_15%,black_100%)] md:[mask-image:linear-gradient(to_right,transparent,black_25%,black_100%)]"
          muted
          playsInline
          disableRemotePlayback
          preload="auto"
          crossOrigin="anonymous"
          onLoadedMetadata={(e) => {
            const video = e.currentTarget;
            setDuration(video.duration);
            video.pause(); // Ensure it respects manual scrolling
          }}
          onError={(e) => {
            if (e.currentTarget.src.includes('flower.mp4')) {
               e.currentTarget.src = "https://assets.mixkit.co/videos/preview/mixkit-blooming-red-rose-in-close-up-16508-large.mp4";
            }
          }}
          src="/assets/flower.mp4"
        />
      </div>

      {/* Scrollytelling Cards Area */}
      <div className="relative z-10 -mt-[100vh] w-full pt-[20vh] pb-[30vh]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="mb-[30vh]">
            <WipeReveal width="100%" wipeColor="var(--accent-red)">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 border-b border-border pb-4 pr-4">
                <span className="font-mono text-sm tracking-widest text-accent-red shrink-0">04</span>
                <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tighter leading-tight pb-1 break-words max-w-full w-full">The Evolution</h2>
              </div>
            </WipeReveal>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground mt-8 max-w-md">
              Tracing the lineage of artificial intelligence from rigid rules to emergent reasoning. Scroll to progress through the timeline.
            </p>
          </div>

          <div className="w-full md:w-1/2 lg:w-5/12 flex flex-col gap-[85vh]">
            {STORY_CARDS.map((card, i) => (
              <StoryCard key={i} {...card} />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
