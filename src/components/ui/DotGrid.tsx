import { useEffect, useState } from "react";

const DotGrid = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="absolute top-0 left-0 w-full h-[200vh] z-0"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(0, 229, 255, .8) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
        backgroundPosition: `0px ${scrollY * 0.5}px`, // Moves slower for parallax
      }}
    ></div>
  );
};

export default DotGrid;
