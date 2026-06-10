import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import FadeIn from "../FadeIn";
import LiveProjectButton from "../LiveProjectButton";
import { PROJECTS, type Project } from "../data/projects";

const TOTAL_CARDS = PROJECTS.length;

interface ProjectCardProps {
  project: Project;
  index: number;
  scrollYProgress: MotionValue<number>;
}

/**
 * ProjectCard: stacking card driven by scrollYProgress.
 * - y transform: 100% (below container) → 0% (in container top), in [0, (i+1)/N] range
 * - scale transform: 1 → targetScale = 1 - (N-1-i)*0.03, in same range
 * - top offset: index * 28px (cards peek out of each other)
 * - z-index: index (later cards on top)
 *
 * Sticky physics alone cannot produce a "next card presses down on previous" effect
 * for more than ~28px (the sticky_top offset). We bypass sticky entirely and use
 * framer-motion transforms driven by section-level scrollYProgress.
 */
function ProjectCard({ project, index, scrollYProgress }: ProjectCardProps) {
  const total = TOTAL_CARDS;
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const endProgress = (index + 1) / total;

  // y: card rises from below the sticky container to the container top
  const y = useTransform(scrollYProgress, [0, endProgress], ["100%", "0%"]);

  // scale: card scales down during its rise, settling at targetScale
  const scale = useTransform(scrollYProgress, [0, endProgress], [1, targetScale]);

  return (
    <motion.div
      style={{
        y,
        scale,
        position: "absolute",
        top: `${index * 28}px`,
        left: 0,
        right: 0,
        height: "85vh",
        zIndex: index,
      }}
      className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between origin-top"
    >
      {/* Top row: number + category + name + Live button */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 sm:gap-6 md:gap-8">
          <span
            className="hero-heading font-black leading-none"
            style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
          >
            {String(project.id).padStart(2, "0")}
          </span>
          <div className="pt-2 sm:pt-4 md:pt-6">
            <p className="text-[#D7E2EA]/50 font-light uppercase tracking-widest text-xs sm:text-sm">
              {project.category}
            </p>
            <h3
              className="text-[#D7E2EA] font-medium uppercase mt-1 sm:mt-2"
              style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
            >
              {project.name}
            </h3>
          </div>
        </div>
        <LiveProjectButton href="#contact" className="shrink-0" />
      </div>

      {/* Bottom row: image grid */}
      <div className="flex gap-3 sm:gap-4 md:gap-5 w-full mt-4 sm:mt-6">
        {/* Left column: 2 stacked images (40% width) */}
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5" style={{ width: "40%" }}>
          <img
            src={project.imageCol1Top}
            alt=""
            loading="lazy"
            className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            style={{ height: "clamp(130px, 16vw, 230px)" }}
          />
          <img
            src={project.imageCol1Bottom}
            alt=""
            loading="lazy"
            className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            style={{ height: "clamp(160px, 22vw, 340px)" }}
          />
        </div>
        {/* Right column: 1 tall image (60% width) */}
        <div style={{ width: "60%" }} className="flex">
          <img
            src={project.imageCol2Tall}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative pt-20 sm:pt-24 md:pt-32 pb-10"
      style={{ height: `${TOTAL_CARDS * 100}vh` }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          项目
        </h2>
      </FadeIn>

      {/* Sticky container - holds ALL cards in viewport while scrolling through the section */}
      <div className="sticky top-0 h-screen w-full mt-16 sm:mt-20 md:mt-28">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
