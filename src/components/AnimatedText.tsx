import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  char: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

/**
 * Char: single-character animated span (extracted to follow Rules of Hooks).
 * Each char animates from opacity 0.2 to 1 based on its sub-range of scroll progress.
 */
function Char({ char, index, total, scrollYProgress }: CharProps) {
  // Newline: render as <br /> with no animation, no placeholder
  if (char === "\n") {
    return <br />;
  }

  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      {/* Invisible placeholder preserves layout */}
      <span style={{ visibility: "hidden" }}>
        {char === " " ? "\u00A0" : char}
      </span>
      {/* Animated span positioned over placeholder */}
      <motion.span
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          opacity,
          whiteSpace: char === " " ? "pre" : "normal",
        }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
}

/**
 * AnimatedText: Character-by-character scroll-reveal text animation.
 * Each character goes from opacity 0.2 to 1 based on its position in the text
 * relative to scroll progress. Uses Framer Motion useScroll.
 */
export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const characters = text.split("");

  return (
    <p ref={containerRef} className={className}>
      {characters.map((char, i) => (
        <Char
          key={i}
          char={char}
          index={i}
          total={characters.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
}
