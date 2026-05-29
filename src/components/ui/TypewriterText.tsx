import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const WORDS = ["LEARN.", "SCALE.", "TRANSFORM.", "DELIVER.", "EVALUATE."];

export default function TypewriterText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("LEARN.");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(true);

  useEffect(() => {
    // Initial wait before starting first backspace animation
    const timer = setTimeout(() => {
        setIsDeleting(true);
        setIsWaiting(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []); // Only run once on mount

  useEffect(() => {
    if (isWaiting) return;

    const currentWord = WORDS[wordIndex];
    
    // Typing or Backspacing
    const timer = setTimeout(() => {
      setText(prev => {
        if (isDeleting) {
          const nextText = prev.slice(0, -1);
          if (nextText === "") {
            setIsDeleting(false);
            const nextWordIndex = (wordIndex + 1) % WORDS.length;
            setWordIndex(nextWordIndex);
            return nextText;
          }
          return nextText;
        } else {
          const nextText = currentWord.slice(0, prev.length + 1);
          if (nextText === currentWord) {
             setIsWaiting(true);
             setTimeout(() => {
                 setIsDeleting(true);
                 setIsWaiting(false);
             }, 2000); // Wait 2s before backspacing again
          }
          return nextText;
        }
      });
    }, isDeleting ? 70 : 120);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, isWaiting]);

  return (
    <span className="inline-block min-w-[280px]">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-1.5 h-[1em] bg-accent-red align-middle ml-1"
      />
    </span>
  );
}
