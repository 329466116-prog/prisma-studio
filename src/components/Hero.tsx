import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Navbar } from './Navbar'
import { ShinyText } from './ShinyText'
import { SideRays } from './SideRays'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4'

const HERO_DESCRIPTION =
  '电力 AI 工程师 · 持续学习的工作流手艺人。擅长把繁琐流程用脚本和工具链串起来，PPT 制作 / 信息图设计 / 自动化工作流 / 偶尔写写代码。'

const HERO_SLOGAN_PREFIX = '“我是'
const HERO_SLOGAN_NAME = '钱多多'
const HERO_SLOGAN_SUFFIX = '，探索无止境。”'

export function Hero() {
  return (
    <section className="h-screen w-full p-4 md:p-6">
      <div className="relative h-full w-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Background video */}
        <video
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay - 调暗一点,让 SideRays 更明显 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 pointer-events-none" />

        {/* Noise overlay */}
        <div className="noise-overlay opacity-[0.7] mix-blend-overlay" />

        {/* SideRays 光照背景 (OGL WebGL) */}
        <SideRays
          speed={2.5}
          rayColor1="#FFD700"
          rayColor2="#96c8ff"
          intensity={3.5}
          spread={2.5}
          origin="top-right"
          tilt={0}
          saturation={2}
          blend={0.5}
          falloff={1.4}
          opacity={1.0}
        />

        {/* Navbar */}
        <Navbar />

        {/* Content (bottom-aligned) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-20">
          <div className="grid grid-cols-12 gap-4 sm:gap-6 items-end">
            {/* Left 8 cols: ShinyText heading split into 3 segments */}
            <div className="col-span-12 sm:col-span-8 inline-flex flex-wrap items-baseline text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.1] tracking-tight">
              <ShinyText
                text={HERO_SLOGAN_PREFIX}
                speed={2.5}
                color="#6a6a6a"
                shineColor="#FFFFFF"
                spread={60}
                delay={0.5}
                direction="left"
              />
              <ShinyText
                text={HERO_SLOGAN_NAME}
                speed={2.5}
                color="#B8860B"
                shineColor="#FFD700"
                spread={80}
                delay={0.5}
                direction="left"
              />
              <ShinyText
                text={HERO_SLOGAN_SUFFIX}
                speed={2.5}
                color="#6a6a6a"
                shineColor="#FFFFFF"
                spread={60}
                delay={0.5}
                direction="left"
              />
            </div>

            {/* Right 4 cols: text + CTA */}
            <div className="col-span-12 sm:col-span-4 flex flex-col gap-4 sm:gap-5">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-primary/70 text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
              >
                {HERO_DESCRIPTION}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <a
                  href="#about"
                  className="group inline-flex items-center gap-2 bg-primary rounded-full pl-5 pr-2 py-2 text-black font-medium text-sm sm:text-base transition-all duration-300 hover:gap-3"
                >
                  <span>看看我在做啥</span>
                  <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#E1E0CC]" />
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
