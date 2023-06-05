import Menu from "@/components/Menu";
import React from "react";
import Help from "./helpyou";
import AppFooter from "@/components/Footer";
import OurTeam from "@/components/OurTeam";

const helpyou = () => {
  return (
    <div className="w-screen">
      <Menu />
      <Help />
      <OurTeam />
      <AppFooter />
    </div>
  );
};

export default helpyou;
