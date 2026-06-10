import FadeIn from "../FadeIn";
import BorderGlow from "../BorderGlow";
import { PROJECTS } from "../data/projects";

/**
 * ProjectsGridSection: 4 张并排 BorderGlow 卡片
 * - 位置：Hero 下方（在 Marquee 之前）
 * - 内容：复用 PROJECTS 数据
 * - 卡片用 BorderGlow 鼠标边缘跟踪发光效果
 */
export default function ProjectsGridSection() {
  return (
    <section
      id="projects-grid"
      className="w-full px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          项目
        </h2>
      </FadeIn>

      <div className="max-w-7xl mx-auto mt-16 sm:mt-20 md:mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROJECTS.map((project, i) => (
          <FadeIn key={project.id} delay={i * 0.1} y={20}>
            <BorderGlow
              borderRadius={20}
              glowColor="45 90 70"
              glowIntensity={1.0}
              coneSpread={25}
              colors={["#c084fc", "#f472b6", "#38bdf8"]}
              className="h-full"
            >
              <div className="p-5 flex flex-col gap-4 h-full">
                <p className="text-[#D7E2EA]/50 text-xs uppercase tracking-widest">
                  {project.category}
                </p>
                <h3 className="text-[#D7E2EA] font-medium uppercase text-lg">
                  {project.name}
                </h3>
                <img
                  src={project.imageCol2Tall}
                  alt=""
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover rounded-lg"
                />
                <p className="text-[#D7E2EA]/60 text-sm leading-relaxed mt-auto">
                  View project →
                </p>
              </div>
            </BorderGlow>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
