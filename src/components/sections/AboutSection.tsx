import FadeIn from "../FadeIn";
import ContactButton from "../ContactButton";
import MagicBento, { type BentoCard } from "../MagicBento";

const DECORATIVE_IMAGES = {
  topLeft:
    "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
  bottomLeft:
    "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
  topRight:
    "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
  bottomRight:
    "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
};

// 把 ABOUT_TEXT 拆成 6 张 Bento 卡片
// 顺序对应默认布局：1 (1×1) / 2 (1×1) / 3 (2×2 大) / 4 (2×2 大) / 5 (1×1) / 6 (1×1)
const ABOUT_BENTO_CARDS: BentoCard[] = [
  {
    color: "#13101A",
    labelEn: "Background",
    labelZh: "起点",
    title: "山城 IT 老兵",
    description:
      "🏔️ 18 年项目沉淀 · 🌶️ 山城土著 · ⚡ 爱折腾爱探索 · 🔭 对新事物永远好奇",
  },
  {
    color: "#0F131A",
    labelEn: "Career",
    labelZh: "跨界",
    title: "通信 → 能源",
    description:
      "💼 一线工程师 → 🎯 高级 IT 项目经理 · 📡 运营商业务 → 🏛️ 政企业务双线成长",
  },
  {
    color: "#120F17",
    labelEn: "Delivery",
    labelZh: "落地",
    title: "项目交付",
    description:
      "🎯 扎实的 IT 项目管理能力是基本盘。多年深耕项目交付全流程，能够提前完成项目规划，优质的完成项目交付任务。从一线工程师一路成长为高级 IT 项目经理，靠的就是把流程理顺、把控细节、把风险提前压住。这份能力是从无数次实战交付里打磨出来的。",
  },
  {
    color: "#1A0F17",
    labelEn: "Insight",
    labelZh: "洞察",
    title: "客户洞察",
    description:
      "🔍 敏锐的观察力和职业素养是吃饭的本事。多年在客户一线，善于洞察、挖掘与引导真实需求，能把客户的业务痛点翻译成可落地的产品方案，配合公司项目顺利推进。这套方法论在运营商业务和政企业务两个场景都验证过，是可以复用的核心能力。",
  },
  {
    color: "#0F1A13",
    labelEn: "Team",
    labelZh: "协作",
    title: "团队协作",
    description:
      "🎨 创造力 + 🤝 协作精神 + 🧠 组织策划能力 · 与团队紧密合作 🚀 推动市场拓展",
  },
  {
    color: "#1A1810",
    labelEn: "Learning",
    labelZh: "进化",
    title: "学习能力",
    description:
      "📚 对新技术新知识 · 💡 吸收转化能力强 · ⚙️ 迅速运用到自身工作场景里",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about-me"
      className="min-h-screen w-full px-5 sm:px-8 md:px-10 py-20 relative"
    >
      {/* Top-left: Moon */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
        <img
          src={DECORATIVE_IMAGES.topLeft}
          alt=""
          className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
        />
      </FadeIn>

      {/* Bottom-left: 3D object */}
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
        <img
          src={DECORATIVE_IMAGES.bottomLeft}
          alt=""
          className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none"
        />
      </FadeIn>

      {/* Top-right: Lego */}
      <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
        <img
          src={DECORATIVE_IMAGES.topRight}
          alt=""
          className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
        />
      </FadeIn>

      {/* Bottom-right: 3D group */}
      <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
        <img
          src={DECORATIVE_IMAGES.bottomRight}
          alt=""
          className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none"
        />
      </FadeIn>

      {/* Centered content - widened to fit MagicBento grid (max-width 54em ≈ 864px) */}
      <div className="relative z-10 max-w-[1080px] mx-auto flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            关于我
          </h2>
        </FadeIn>

        <MagicBento
          cards={ABOUT_BENTO_CARDS}
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>

      {/* Contact button below */}
      <div className="relative z-10 flex justify-center mt-16 sm:mt-20 md:mt-24">
        <ContactButton href="#contact" />
      </div>
    </section>
  );
}
