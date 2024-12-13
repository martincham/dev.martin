import React, { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";

type ScrollAnimationProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = "",
  delay = 150,
}) => {
  const { ref, isVisible } = useIntersectionObserver({
    rootMargin: `0px 0px -${delay}px 0px`,
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible) setHasAnimated(true);
  }, [isVisible]);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-1000 ease-out transform will-change-transform ${
        hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
