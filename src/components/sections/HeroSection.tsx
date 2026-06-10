import FadeIn from "../FadeIn";
import ContactButton from "../ContactButton";
import ShinyText from "../ShinyText";

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
        <div className="w-full overflow-hidden mt-20 sm:mt-24 md:mt-16">
          <h1 className="font-black tracking-tight leading-none whitespace-nowrap w-full text-[8vw] sm:text-[9vw] md:text-[10vw] lg:text-[11vw]">
            <span className="hero-heading">Hi，我是</span>
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

      {/* Bottom bar */}
      <div className="mt-auto w-full flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
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
        <FadeIn delay={0.5} y={20}>
          <ContactButton href="#联系" />
        </FadeIn>
      </div>
    </section>
  );
}
