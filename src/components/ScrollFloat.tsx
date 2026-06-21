import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollFloat.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  /** 切分方式：'char' 逐字符（默认，标题用）/ 'line' 按 \n 切行（长正文用，避免几百 span） */
  splitBy?: 'char' | 'line';
}

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03,
  splitBy = 'char'
}: ScrollFloatProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    if (splitBy === 'line') {
      // 按 \n 切分；空行用 \u00A0 保持高度不塌陷
      return text.split('\n').map((line, index) => (
        <span className="line" key={index}>
          {line.length > 0 ? line : '\u00A0'}
        </span>
      ));
    }
    return text.split('').map((char, index) => (
      <span className="char" key={index}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, [children, splitBy]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    // char 和 line 两种 class 都选
    const animatedElements = el.querySelectorAll('.char, .line');

    gsap.fromTo(
      animatedElements,
      {
        willChange: 'opacity, transform',
        // 初始始终可见：标题在位、正常透明度、不变形。
        // 原版默认是 yPercent 120 / opacity 0，会让标题初始不可见（"从下方飞入"）。
        // 改后：标题一直在，但滚动时会"轻微上浮+缩放拉伸"作为动效反馈。
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        transformOrigin: '50% 0%'
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: -20,
        scaleY: 1.1,
        scaleX: 0.92,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
        }
      }
    );
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger, splitBy]);

  return (
    <div ref={containerRef} className={`scroll-float ${containerClassName}`}>
      <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
    </div>
  );
};

export default ScrollFloat;
