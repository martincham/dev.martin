import { useEffect, useState, useRef } from "react";

type UseIntersectionObserverOptions = {
  threshold?: number;
  root?: HTMLElement | null;
  rootMargin?: string;
};

export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {},
) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: options.threshold || 0.1,
        root: options.root || null,
        rootMargin: options.rootMargin || "0px",
      },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return { ref, isVisible };
};
