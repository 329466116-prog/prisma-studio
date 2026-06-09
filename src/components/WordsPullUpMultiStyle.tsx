import { motion, useInView, type Variants } from 'framer-motion'
import { useRef } from 'react'

export interface TextSegment {
  text: string
  className?: string
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[]
  className?: string
  stagger?: number
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

export function WordsPullUpMultiStyle({
  segments,
  className = '',
  stagger = 0.08,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  // Flatten all words, preserving per-word className
  const words: { text: string; className?: string; key: string }[] = []
  segments.forEach((seg, sIdx) => {
    seg.text.split(' ').forEach((w, wIdx) => {
      if (w.length === 0) return
      words.push({
        text: w,
        className: seg.className,
        key: `s${sIdx}-w${wIdx}-${w}`,
      })
    })
  })

  return (
    <motion.div
      ref={ref}
      className={`inline-flex flex-wrap justify-center ${className}`}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {words.map((w) => (
        <span
          key={w.key}
          className="inline-block overflow-hidden pb-[0.1em] mr-[0.25em]"
        >
          <motion.span
            className={`inline-block ${w.className ?? ''}`}
            variants={wordVariants}
          >
            {w.text}
          </motion.span>
        </span>
      ))}
    </motion.div>
  )
}
