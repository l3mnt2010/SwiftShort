import React, { useEffect, useState } from "react";
import Menu from "@/components/Menu";
import Products from "../../components/products";
import Help from "./helpyou";
import AppFooter from "@/components/Footer";

const HelpYou = () => {
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

  console.log(scrollY);

  return (
    <div className="w-full">
      <Menu />
      <Help />
      <AppFooter />
    </div>
  );
};

export default HelpYou;
