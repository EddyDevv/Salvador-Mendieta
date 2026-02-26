import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export function Typewriter({
  words,
  typingSpeed = 60,
  deletingSpeed = 35,
  pauseTime = 1200,
}: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [glitch, setGlitch] = useState(false);

  const currentWord = words[index];

  useEffect(() => {
    let timeout: any;

    if (!deleting && Math.random() > 0.6) {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 120);
    }

    if (!deleting) {
      if (display.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplay(currentWord.slice(0, display.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setDeleting(true), pauseTime);
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => {
          setDisplay(currentWord.slice(0, display.length - 1));
        }, deletingSpeed);
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [display, deleting, currentWord, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <motion.span
      animate={
        glitch
          ? {
              x: [0, -2, 2, 0],
              y: [0, -3, 3, 0],
              filter: ["none", "blur(3px)", "contrast(140%)", "none"],
            }
          : {}
      }
      transition={{ duration: 0.12 }}
      className="inline text-5xl max-md:text-3xl font-bold uppercase wrap-break-words tracking-tight"
    >
      {display}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{
          duration: 0.9,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        |
      </motion.span>
    </motion.span>
  );
}
