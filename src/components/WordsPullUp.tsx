import { motion, useInView, type Variants } from 'framer-motion'
import { useRef } from 'react'

interface WordsPullUpProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
  showAsterisk?: boolean
}

const wordVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export function WordsPullUp({
  text,
  className = '',
  delay = 0,
  stagger = 0.08,
  showAsterisk = false,
}: WordsPullUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  const words = text.split(' ')

  return (
    <motion.div
      ref={ref}
      className={`inline-flex flex-wrap ${className}`}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {words.map((word, wIdx) => {
        const isLastWord = wIdx === words.length - 1
        const showStar = showAsterisk && isLastWord && word.toLowerCase().endsWith('a')

        return (
          <span
            key={`${word}-${wIdx}`}
            className="relative inline-block pb-[0.1em] mr-[0.25em] last:mr-0"
          >
            {/* mask (clips the slide-up) */}
            <span className="inline-block overflow-hidden">
              <motion.span className="inline-block" variants={wordVariants}>
                {word}
              </motion.span>
            </span>
            {/* asterisk rendered OUTSIDE the mask so it isn't clipped */}
            {showStar && (
              <span
                className="absolute font-medium pointer-events-none select-none"
                style={{
                  top: '0.05em',
                  right: '-0.4em',
                  fontSize: '0.31em',
                  lineHeight: 1,
                }}
                aria-hidden
              >
                *
              </span>
            )}
          </span>
        )
      })}
    </motion.div>
  )
}
