import { useEffect, useState } from "react";

const DotGrid = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full z-0"
      style={{
        height: "100vh",
        backgroundImage:
          "radial-gradient(circle, rgba(0, 255, 255, 0.3) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        backgroundPosition: `0px ${scrollY * -0.2}px`,
      }}
    ></div>
  );
};

export default DotGrid;
