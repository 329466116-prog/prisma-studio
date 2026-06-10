import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import FadeIn from "../FadeIn";
import ContactButton from "../ContactButton";
import ShinyText from "../ShinyText";
import BorderGlow from "../BorderGlow";
import { FEATURES } from "../data/features";

const NAV_LINKS = ["关于", "服务", "项目", "联系"];

export default function HeroSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col overflow-x:clip relative"
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full">
        <nav className="w-full flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="text-[#D7E2EA] font-medium tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40} className="w-full">
        <div className="w-full overflow-hidden mt-12 sm:mt-14 md:mt-10">
          <h1 className="font-black tracking-tight leading-none whitespace-nowrap w-full text-[8vw] sm:text-[9vw] md:text-[10vw] lg:text-[11vw]">
            <span className="text-white">Hi，我是</span>
            <ShinyText
              text="钱多多"
              color="#ffd700"
              shineColor="#ffffff"
              speed={3}
              spread={120}
              direction="right"
            />
          </h1>
        </div>
      </FadeIn>

      {/* Features 4 张大卡（h1 下方居中）— 参考 prisma-studio Features 段布局 */}
      <FeaturesGrid />

      {/* Bottom bar */}
      <div className="mt-auto w-full flex items-end justify-between px-6 md:px-10 py-7 sm:py-8 md:py-10 relative z-20">
        <FadeIn delay={0.7} y={20}>
          <p
            className="text-[#D7E2EA] font-light tracking-wide leading-snug"
            style={{
              fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)",
              maxWidth: "min(260px, 50vw)",
            }}
          >
            电力 AI 行业工程师，致力于打造智能产品
          </p>
        </FadeIn>
        <FadeIn delay={0.85} y={20}>
          <ContactButton href="#联系" />
        </FadeIn>
      </div>
    </section>
  );
}

/**
 * FeaturesGrid: 4 张大卡 grid（完全参照 prisma-studio Features 段布局）
 * - Card 1: 视频背景 + 底部文字（无 number）
 * - Card 2-4: checklist 格式（Check icon + 多个 items + "Learn more" link）
 * - 每张 BorderGlow 包裹，鼠标边缘跟踪发光
 * - 高度 h-[480px]（参考 prisma 段，去滚动条）
 * - 4 张卡居中 grid + max-w-7xl mx-auto
 * - stagger 0.15s 入场动画
 */
function FeaturesGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div
      ref={containerRef}
      /* self-center：父级 section.flex.flex-col 默认 align-items: stretch，
         会把子级拉满 1440px 让 mx-auto 失效；self-center 让 cross-axis 居中
         （4 张卡视觉上居中到 viewport 中间）

         max-w-[min(80rem,100%)]：max-w-7xl=1280px 在 1024 视口下 > viewport，
         mx-auto 居中后左侧 128px 超出被 overflow-x:clip 裁掉，导致 4 张卡贴左。
         min(80rem, 100%) 让小屏退化到 100% 宽度避免溢出。 */
      className="self-center w-full max-w-[min(80rem,100%)] px-5 sm:px-8 md:px-10 mt-8 sm:mt-10 md:mt-12 mb-12"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-3">
        {FEATURES.map((feature, i) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.7,
              delay: i * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full"
          >
            <BorderGlow
              borderRadius={20}
              backgroundColor="#120F17"
              glowColor="45 90 70"
              glowIntensity={1.0}
              coneSpread={25}
              colors={["#c084fc", "#f472b6", "#38bdf8"]}
              className="h-full"
            >
              {feature.videoUrl ? (
                <VideoCard feature={feature} />
              ) : (
                <ChecklistCard feature={feature} />
              )}
            </BorderGlow>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/** VideoCard: full video background with bottom text (no number) */
function VideoCard({ feature }: { feature: typeof FEATURES[number] }) {
  return (
    <div
      className="relative w-full h-[480px] rounded-[20px] overflow-hidden flex flex-col"
      style={{ background: "#120F17" }}
    >
      <video
        src={feature.videoUrl}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      <div className="relative z-10 p-6 flex flex-col h-full justify-end">
        <p className="text-[#E1E0CC] text-sm sm:text-base font-normal leading-tight">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

/** ChecklistCard: 标题 + 4 个 checklist items + Learn more link (no number) */
function ChecklistCard({ feature }: { feature: typeof FEATURES[number] }) {
  return (
    <div
      className="w-full h-[480px] rounded-[20px] p-5 sm:p-6 md:p-7 flex flex-col gap-4 sm:gap-5"
      style={{ background: "#120F17" }}
    >
      <h3 className="text-[#E1E0CC] text-lg sm:text-xl md:text-2xl font-normal">
        {feature.title}
      </h3>
      {feature.items && (
        <ul className="flex-1 flex flex-col gap-2 sm:gap-3">
          {feature.items.map((item, j) => (
            <li
              key={j}
              className="flex items-start gap-2 text-[#D7E2EA]/70 text-xs sm:text-sm"
            >
              <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DEDBC8] shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      <a
        href="#"
        className="group inline-flex items-center gap-1.5 text-[#E1E0CC] text-xs sm:text-sm hover:gap-2.5 transition-all duration-200 mt-auto"
      >
        Learn more
        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 -rotate-45 transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
