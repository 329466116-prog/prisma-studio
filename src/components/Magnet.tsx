import { useRef, useState, type ReactNode, type CSSProperties, type MouseEvent } from "react";

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Magnet: Mouse-following magnetic hover effect.
 * Wraps an element. When the cursor enters the padding area around the element,
 * the element tracks the cursor (divided by strength factor) with smooth transitions.
 */
export default function Magnet({
  children,
  padding = 100,
  strength = 2,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className,
  style,
}: MagnetProps) {
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [transform, setTransform] = useState("translate3d(0px, 0px, 0px)");

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!innerRef.current) return;
    const rect = innerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    // Check if cursor is within padding area
    const isWithinPadding =
      Math.abs(e.clientX - rect.left) < padding ||
      Math.abs(e.clientX - rect.right) < padding ||
      Math.abs(e.clientY - rect.top) < padding ||
      Math.abs(e.clientY - rect.bottom) < padding;

    if (isWithinPadding) {
      setIsActive(true);
      setTransform(
        `translate3d(${offsetX / strength}px, ${offsetY / strength}px, 0px)`
      );
    }
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setTransform("translate3d(0px, 0px, 0px)");
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ willChange: "transform", ...style }}
    >
      <div
        ref={innerRef}
        style={{
          transform,
          transition: isActive ? activeTransition : inactiveTransition,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
