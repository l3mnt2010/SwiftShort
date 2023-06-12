import React, { useState, useEffect } from "react";

const ScrollEffect = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-element ${
        scrollY > 10 ? "scroll-element-visible" : ""
      }`}
    ></div>
  );
};

export default ScrollEffect;
