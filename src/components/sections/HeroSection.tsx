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
      className="h-screen flex flex-col overflow-x:clip relative"
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
        <div className="w-full overflow-hidden mt-12 sm:mt-14 md:mt-12">
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

      {/* Features 4 张并排 BorderGlow 卡片（h1 下方居中，第一屏可见） */}
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 mt-8 sm:mt-10 md:mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {FEATURES.map((feature, i) => (
            <FadeIn key={feature.id} delay={0.3 + i * 0.1} y={20}>
              <BorderGlow
                borderRadius={20}
                glowColor="45 90 70"
                glowIntensity={1.0}
                coneSpread={25}
                colors={["#c084fc", "#f472b6", "#38bdf8"]}
                className="h-full"
              >
                <div className="p-4 sm:p-5 flex flex-col gap-3 h-full min-h-[160px]">
                  <p className="text-[#D7E2EA]/50 text-xs uppercase tracking-widest">
                    {feature.number}
                  </p>
                  <h3 className="text-[#D7E2EA] font-medium uppercase text-base sm:text-lg">
                    {feature.title}
                  </h3>
                  {feature.description && (
                    <p className="text-[#D7E2EA]/80 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  )}
                  {feature.items && (
                    <ul className="flex flex-col gap-1.5 mt-auto">
                      {feature.items.map((item, j) => (
                        <li
                          key={j}
                          className="text-[#D7E2EA]/80 text-sm flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#D7E2EA]/60" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </BorderGlow>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-auto w-full flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20">
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
