import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (dir: number) => {
    setIndex(([prev]) => {
      const next = (prev + dir + images.length) % images.length;
      return [next, dir];
    });
  };

  const variants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.8,
      borderRadius: "10px",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      borderRadius: "0px",
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.8,
      borderRadius: "10px",
      transition: {
        duration: 0.35,
        ease: [0.4, 0, 1, 1],
      },
    }),
  };

  return (
    <>
      <div className="relative w-full aspect-video overflow-hidden border border-amber-900 bg-amber-50/40 select-none">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={`bg-${index}`}
            src={images[index]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-40 pointer-events-none"
          />
        </AnimatePresence>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative z-10 w-full h-full object-contain"
          />
        </AnimatePresence>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => paginate(-1)}
          className="px-2 py-2 border border-amber-900 text-amber-900 transition-all duration-300 shadow-[3px_3px_0px_#461901] active:translate-x-px active:translate-y-px cursor-pointer hover:text-amber-700 hover:border-amber-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="size-4"
          >
            <path
              fill="currentColor"
              d="M1 13v-2h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h1V1h1v1h1v1h1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1h15v4H8v1h1v1h1v1h1v1h1v1h1v1h1v1h-1v1h-1v1h-1v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-1z"
            />
          </svg>
        </button>
        <button
          onClick={() => paginate(1)}
          className="px-2 py-2 border border-amber-900 text-amber-900 transition-all duration-300 shadow-[3px_3px_0px_#461901] active:translate-x-px active:translate-y-px cursor-pointer hover:text-amber-700 hover:border-amber-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="size-4"
          >
            <path
              fill="currentColor"
              d="M23 11v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1H1v-4h15V9h-1V8h-1V7h-1V6h-1V5h-1V4h-1V3h1V2h1V1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
