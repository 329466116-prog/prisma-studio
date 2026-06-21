import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import AudioPlayer from "react-modern-audio-player";
import FadeIn from "../FadeIn";
import LiveProjectButton from "../LiveProjectButton";
import { PROJECTS, type Project } from "../data/projects";

const TOTAL_CARDS = PROJECTS.length;

interface ProjectCardProps {
  project: Project;
  index: number;
  scrollYProgress: MotionValue<number>;
}

// 计算统一的卡内缩放曲线（不随 layout 变）
function useCardScale(index: number, scrollYProgress: MotionValue<number>) {
  const shrinkStep = 0.06 / Math.max(TOTAL_CARDS - 1, 1);
  const targetScale = 1 - shrinkStep * (TOTAL_CARDS - 1 - index);
  const startProgress = index / Math.max(TOTAL_CARDS - 1, 1);
  return useTransform(
    scrollYProgress,
    [startProgress, 1],
    [1, targetScale]
  );
}

/**
 * CardTop: 顶部行（编号 + category + name + Live 按钮）— 两套布局共用
 */
function CardTop({ project }: { project: Project }) {
  return (
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
      <LiveProjectButton
        href={project.linkUrl || (project.layout === "qwenTTS" ? "https://qwen.ai/blog?id=qwen3tts-0115" : "#联系")}
        label={project.linkLabel || (project.layout === "qwenTTS" ? "官方文档" : "查看项目")}
        target={project.linkTarget || (project.layout === "qwenTTS" || project.linkUrl ? "_blank" : undefined)}
        rel={project.linkRel || (project.layout === "qwenTTS" || project.linkUrl ? "noopener noreferrer" : undefined)}
        className="shrink-0"
      />
    </div>
  );
}

/**
 * TextBlock: 替换左列某位置图片的深底文字块。
 * - label：黄色 + 微微发光的小标题（静态，无动画）
 * - body：普通文本，小字号，精简内容保证不需滚动
 */
function TextBlock({
  label,
  body,
  height,
}: {
  label?: string;
  body: string;
  height: string;
}) {
  return (
    <div
      className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-[#D7E2EA]/15 bg-[#14171A] p-3 sm:p-4 md:p-5 overflow-hidden flex flex-col"
      style={{ height }}
    >
      {label && (
        <h4 className="text-[#FCD34D] drop-shadow-[0_0_4px_rgba(252,211,77,0.7)] drop-shadow-[0_0_12px_rgba(252,211,77,0.35)] font-black uppercase tracking-wider text-xs mb-1.5 shrink-0">
          {label}
        </h4>
      )}
      <p className="text-[#D7E2EA] text-[11px] leading-snug whitespace-pre-line font-medium flex-1">
        {body}
      </p>
    </div>
  );
}

/**
 * DefaultProjectCard: 原 3 图布局（左 40% 上下图 + 右 60% 高图）
 * - 若 project.textCol1Top 存在则渲染 TextBlock 代替上图
 * - 若 project.textCol1Bottom 存在则渲染 TextBlock 代替下图
 */
function DefaultProjectCard({ project }: { project: Project }) {
  return (
    <>
      <CardTop project={project} />
      <div className="flex gap-3 sm:gap-4 md:gap-5 w-full mt-4 sm:mt-6">
        {/* Left column: 2 stacked items (40% width) — 图片或文字块 */}
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5" style={{ width: "40%" }}>
          {project.textCol1Top ? (
            <TextBlock
              label={project.textCol1Top.label}
              body={project.textCol1Top.body}
              height="clamp(130px, 16vw, 230px)"
            />
          ) : (
            <img
              src={project.imageCol1Top}
              alt=""
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
          )}
          {project.textCol1Bottom ? (
            <TextBlock
              label={project.textCol1Bottom.label}
              body={project.textCol1Bottom.body}
              height="clamp(160px, 22vw, 340px)"
            />
          ) : (
            <img
              src={project.imageCol1Bottom}
              alt=""
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          )}
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
    </>
  );
}

/**
 * QwenTTSProjectCard: 项目 1 专用布局
 * - 左上：react-modern-audio-player 音乐播放器
 * - 左下：qwen3-tts 功能介绍文字
 * - 右 60%：语音剧本文字
 */
function QwenTTSProjectCard({ project }: { project: Project }) {
  return (
    <>
      <CardTop project={project} />
      {/* 仿 v6 三块布局：左 40% (上播放器 + 下介绍) + 右 60% (剧本) */}
      <div className="flex gap-3 sm:gap-4 md:gap-5 w-full mt-4 sm:mt-6 flex-1 min-h-0">
        {/* Left column: 播放器 (上) + 功能介绍 (下) — 40% width */}
        <div
          className="flex flex-col gap-3 sm:gap-4 md:gap-5 min-h-0"
          style={{ width: "40%" }}
        >
          {/* Top: 播放器模块 — 跟 v6 图框同高度，背景图铺在框内，播放器贴底 */}
          <div
            className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden border border-[#D7E2EA]/15 relative"
            style={{ height: "clamp(130px, 16vw, 230px)" }}
          >
            {/* 框内背景图 + 暗化遮罩让控件可读 */}
            {project.bgImage && (
              <>
                <img
                  src={project.bgImage}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/35 via-[#0C0C0C]/45 to-[#0C0C0C]/65" />
              </>
            )}
            {/* 播放器贴底 */}
            <div className="relative z-10 h-full flex flex-col justify-end p-3 sm:p-4 md:p-5">
              <div style={{ height: "110px" }}>
                <AudioPlayer
                  playList={[
                    {
                      id: project.id,
                      src: project.audioSrc || "",
                      name: project.audioName || project.name,
                      writer: project.audioWriter || "",
                      img: project.audioCover || undefined,
                      customTrackInfo: project.audioCustomTrackInfo ? (
                        <span style={{ whiteSpace: "pre-line", lineHeight: 1.2, display: "block" }}>
                          {project.audioCustomTrackInfo}
                        </span>
                      ) : undefined,
                    },
                  ]}
                  audioInitialState={{
                    isPlaying: false,
                    repeatType: "NONE",
                    volume: 0.8,
                    curPlayId: project.id,
                  }}
                  activeUI={{ all: true, progress: "bar" }}
                  colorScheme="dark"
                  rootContainerProps={{
                    style: {
                      width: "100%",
                      height: "100%",
                      background: "transparent",
                    },
                    className: "qwen-tts-player",
                  }}
                />
              </div>
            </div>
          </div>
          {/* Bottom: 功能介绍 — 跟 v6 文字块一致 */}
          <div
            className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-[#D7E2EA]/15 bg-[#14171A] p-4 sm:p-5 md:p-6 overflow-auto scrollbar-hidden flex-1 min-h-0"
          >
            <p className="text-[#D7E2EA]/50 font-light uppercase tracking-widest text-[10px] sm:text-xs">
              {project.infoTitle}
            </p>
            <p className="text-[#D7E2EA] text-xs sm:text-sm md:text-base leading-relaxed mt-2 sm:mt-3 whitespace-pre-line">
              {project.infoBody}
            </p>
          </div>
        </div>
        {/* Right column: 语音剧本 (60% width) — 跟 v6 文字块一致 */}
        <div style={{ width: "60%" }} className="flex min-h-0">
          <div className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-[#D7E2EA]/15 bg-[#14171A] p-5 sm:p-6 md:p-8 overflow-auto scrollbar-hidden">
            <p className="text-[#D7E2EA]/50 font-light uppercase tracking-widest text-[10px] sm:text-xs">
              {project.scriptTitle}
            </p>
            <p className="text-[#D7E2EA] text-sm sm:text-base md:text-lg leading-relaxed mt-3 sm:mt-4 whitespace-pre-line font-light">
              {project.scriptBody}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function ProjectCard({ project, index, scrollYProgress }: ProjectCardProps) {
  const scale = useCardScale(index, scrollYProgress);

  return (
    <div
      className="h-[85vh] w-full sticky"
      style={{ top: `${index * 28 + 96}px` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between origin-top relative overflow-hidden"
      >
        {project.layout === "qwenTTS" ? (
          <QwenTTSProjectCard project={project} />
        ) : (
          <DefaultProjectCard project={project} />
        )}
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
      className="w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative pt-20 sm:pt-24 md:pt-32 pb-10"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          我的AI实践案例
        </h2>
      </FadeIn>

      {/* 4 cards × 85vh = 340vh sticky-stacking */}
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
