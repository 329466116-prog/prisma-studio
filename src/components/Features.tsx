import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle'

const FEATURE_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4'

const ICON_STORYBOARD =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85'

const ICON_CRITIQUES =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85'

const ICON_CAPSULE =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85'

interface FeatureCardProps {
  title: string
  number: string
  iconUrl?: string
  items: string[]
  delay: number
}

function FeatureCard({ title, number, iconUrl, items, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: '-100px' }}
      className="bg-[#212121] rounded-2xl p-5 sm:p-6 md:p-7 flex flex-col gap-4 sm:gap-5 min-h-[280px] sm:min-h-[360px] md:min-h-[420px] lg:min-h-[480px]"
    >
      {iconUrl && (
        <img
          src={iconUrl}
          alt=""
          className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
        />
      )}

      <h3 className="text-[#E1E0CC] text-lg sm:text-xl md:text-2xl font-normal">
        {title} <span className="text-gray-500">({number})</span>
      </h3>

      <ul className="flex-1 flex flex-col gap-2 sm:gap-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm"
          >
            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className="inline-flex items-center gap-1.5 text-[#E1E0CC] text-xs sm:text-sm hover:gap-2.5 transition-all duration-200"
      >
        Learn more
        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 -rotate-45" />
      </a>
    </motion.div>
  )
}

function VideoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: '-100px' }}
      className="relative rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[360px] md:min-h-[420px] lg:min-h-[480px] bg-[#212121] row-span-1"
    >
      <video
        src={FEATURE_VIDEO}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <p className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 md:bottom-7 md:left-7 text-[#E1E0CC] text-base sm:text-lg md:text-xl font-normal">
        Your creative canvas.
      </p>
    </motion.div>
  )
}

export function Features() {
  return (
    <section
      id="workshops"
      className="min-h-screen bg-black w-full px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32 relative"
    >
      {/* Subtle background noise */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-center mb-10 sm:mb-16 max-w-5xl mx-auto">
          <WordsPullUpMultiStyle
            segments={[
              {
                text: 'Studio-grade workflows for visionary creators.',
                className: 'text-[#E1E0CC] font-normal',
              },
              {
                text: 'Built for pure vision. Powered by art.',
                className: 'text-gray-500 font-normal',
              },
            ]}
          />
        </h2>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1">
          <VideoCard />

          <FeatureCard
            title="Project Storyboard."
            number="01"
            iconUrl={ICON_STORYBOARD}
            items={[
              'Drag-and-drop timeline editing',
              'Multi-track audio and color labeling',
              'Real-time collaboration with your team',
              'Version history with side-by-side compare',
            ]}
            delay={0.15}
          />

          <FeatureCard
            title="Smart Critiques."
            number="02"
            iconUrl={ICON_CRITIQUES}
            items={[
              'AI-assisted shot analysis and notes',
              'Creative direction comments on every frame',
              'Tool integrations with DaVinci and Premiere',
            ]}
            delay={0.3}
          />

          <FeatureCard
            title="Immersion Capsule."
            number="03"
            iconUrl={ICON_CAPSULE}
            items={[
              'Notification silencing for deep focus',
              'Ambient soundscapes curated to your taste',
              'Schedule syncing with team time zones',
            ]}
            delay={0.45}
          />
        </div>
      </div>
    </section>
  )
}
