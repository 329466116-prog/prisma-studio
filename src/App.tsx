import HeroSection from "./components/sections/HeroSection";
import MarqueeSection from "./components/sections/MarqueeSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ProjectsGridSection from "./components/sections/ProjectsGridSection";
import LiquidEther from "./components/LiquidEther";

export default function App() {
  return (
    <>
      {/* 全站背景：WebGL 流体效果，fixed 位置，z-0（内容层 z-10） */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LiquidEther
          colors={["#D7E2EA", "#BBCCD7", "#646973"]}
          mouseForce={20}
          cursorSize={100}
          resolution={0.5}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
        />
      </div>
      <main className="app-wrapper relative z-10">
        <HeroSection />
        <ProjectsGridSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
      </main>
    </>
  );
}
