import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

interface WipeRevealProps {
  children: React.ReactNode;
  delay?: number;
  width?: "fit-content" | "100%";
  className?: string;
  wipeColor?: string;
}

export default function WipeReveal({ children, width = "fit-content", delay = 0, className = "", wipeColor = "#FF4D00" }: WipeRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={{ width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.01, delay: delay + 0.4 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0, right: "100%" },
          visible: { 
             left: ["0%", "0%", "100%"], 
             right: ["100%", "0%", "0%"]
          },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: "easeInOut", delay, times: [0, 0.5, 1] }}
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{ backgroundColor: wipeColor }}
      />
    </div>
  );
}
