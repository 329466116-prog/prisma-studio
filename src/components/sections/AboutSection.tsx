import FadeIn from "../FadeIn";
import ContactButton from "../ContactButton";
import AnimatedText from "../AnimatedText";

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

const ABOUT_TEXT =
  "本人拥有五年以上设计与工程经验，专注于构建融合美学、数据与用户体验的智能产品。期待与志同道合的团队合作，打造可落地、有质感的工程项目——留下清晰而持久的印记。让我们一起，做出经得起时间检验的作品。";

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

      {/* Centered content */}
      <div className="relative z-10 max-w-[640px] mx-auto flex flex-col items-center text-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            关于我
          </h2>
        </FadeIn>

        <AnimatedText
          text={ABOUT_TEXT}
          className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px] tracking-wide"
        />
      </div>

      {/* Contact button below */}
      <div className="relative z-10 flex justify-center mt-16 sm:mt-20 md:mt-24">
        <ContactButton href="#contact" />
      </div>

      <style>{`
        section#about-me p {
          font-size: clamp(1rem, 2vw, 1.35rem);
        }
      `}</style>
    </section>
  );
}
