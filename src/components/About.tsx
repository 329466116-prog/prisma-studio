import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle'

const ABOUT_HEADING = [
  { text: 'I am Marcus Chen,', className: 'font-normal' },
  { text: 'a self-taught director.', className: 'font-serif italic' },
  {
    text: 'I have skills in color grading, visual effects, and narrative design.',
    className: 'font-normal',
  },
]

const ABOUT_BODY =
  'Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.'

function CharSpan({ char, index, inView }: { char: string; index: number; inView: boolean }) {
  // Stagger: ~3ms per char so a 250-char paragraph takes ~0.75s
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
      id="our-story"
      ref={sectionRef}
      className="bg-black w-full px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#101010] rounded-2xl md:rounded-[2rem] p-6 sm:p-10 md:p-16 text-center">
          {/* Top label */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block text-primary text-[10px] sm:text-xs tracking-wider uppercase mb-6 sm:mb-10"
          >
            Visual arts
          </motion.span>

          {/* Multi-style pull-up heading */}
          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-10 sm:mb-16"
          >
            <WordsPullUpMultiStyle segments={ABOUT_HEADING} />
          </h2>

          {/* Character-stagger fade-in body */}
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
