import FadeIn from "../FadeIn";
import Magnet from "../Magnet";
import ContactButton from "../ContactButton";

const NAV_LINKS = ["关于", "服务", "项目", "联系"];

const HERO_PORTRAIT_URL =
  "https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png";

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
        <div className="w-full overflow-hidden mt-6 sm:mt-4 md:-mt-5">
          <h1 className="hero-heading font-black tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Hi，我是钱多多
          </h1>
        </div>
      </FadeIn>

      {/* Hero Portrait (absolute, centered) */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet
          padding={150}
          strength={3}
          className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
        >
          <img
            src={HERO_PORTRAIT_URL}
            alt="人像"
            className="w-full h-auto pointer-events-none"
            draggable={false}
          />
        </Magnet>
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
