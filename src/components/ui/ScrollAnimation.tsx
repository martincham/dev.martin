import React from "react";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";

type ScrollAnimationProps = {
  children: React.ReactNode;
  className?: string;
};

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = "",
}) => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-transform  duration-700 ease-out will-change-transform ${
        isVisible ? "opacity-100 animate-fadeInUp" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
