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
 * ProjectCard: sticky-stacking card with scale-down as you scroll past.
 * Each card has a 200vh container so the next card enters viewport BEFORE
 * the current card leaves — this produces the stacking effect.
 * Scale: 1 → targetScale over the card's [index/N, (index+1)/N] scroll slice.
 */
function ProjectCard({ project, index, scrollYProgress }: ProjectCardProps) {
  const targetScale = 1 - (TOTAL_CARDS - 1 - index) * 0.03;
  // Each card scales down during its own slice of section scroll
  const startScale = index / TOTAL_CARDS;
  const endScale = (index + 1) / TOTAL_CARDS;
  const scale = useTransform(
    scrollYProgress,
    [startScale, endScale],
    [1, targetScale]
  );

  return (
    <div className="h-[200vh] w-full relative">
      <motion.div
        style={{
          scale,
          position: "sticky",
          top: `${(index + 1) * 28}px`,
          height: "85vh",
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
    </div>
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
      className="w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative pt-20 sm:pt-24 md:pt-32 pb-10"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          项目
        </h2>
      </FadeIn>

      {/* Cards container - 5 cards × 200vh = 1000vh total scroll */}
      <div className="relative w-full mt-16 sm:mt-20 md:mt-28">
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
