import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle'

const ABOUT_HEADING = [
  { text: '我是钱多多,', className: 'font-normal' },
  { text: '一个国网人 + AI 折腾爱好者。', className: 'font-serif italic' },
  {
    text: '擅长 PPT 制作、信息图设计、AI 工具链整合。',
    className: 'font-normal',
  },
]

const ABOUT_BODY =
  '过去几年在国网做配电网数智化运维相关工作,日常离不开 PPT 制作、汇报材料、公众号文章。养成了用 AI 工具和脚本提效的习惯:从 last30days 调研社区反馈,到 react-ppt 框架做演示文稿,到 remotion 写视频,再到价格猎人跑比价。折腾不停,记录不止。'

function CharSpan({ char, index, inView }: { char: string; index: number; inView: boolean }) {
  const delay = index * 0.003
  const display = char === ' ' ? '\u00A0' : char
  return (
    <motion.span
      className="inline-block"
      initial={{ opacity: 0.2 }}
      animate={inView ? { opacity: 1 } : { opacity: 0.2 }}
      transition={{ delay, duration: 0.4, ease: 'easeOut' }}
    >
      {display}
    </motion.span>
  )
}

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLParagraphElement>(null)

  const headingInView = useInView(headingRef, { once: true, margin: '-50px' })
  const bodyInView = useInView(bodyRef, { once: true, margin: '-100px' })

  const chars = ABOUT_BODY.split('')

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-black w-full px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#101010] rounded-2xl md:rounded-[2rem] p-6 sm:p-10 md:p-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block text-primary text-[10px] sm:text-xs tracking-wider uppercase mb-6 sm:mb-10"
          >
            关于我
          </motion.span>

          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-10 sm:mb-16"
          >
            <WordsPullUpMultiStyle segments={ABOUT_HEADING} />
          </h2>

          <p
            ref={bodyRef}
            className="text-[#DEDBC8] text-xs sm:text-sm md:text-base max-w-3xl mx-auto"
            style={{ lineHeight: 1.6 }}
          >
            {chars.map((c, i) => (
              <CharSpan key={i} char={c} index={i} inView={bodyInView} />
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
