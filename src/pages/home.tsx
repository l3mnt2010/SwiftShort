import AppFooter from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Menu from "@/components/Menu";
import React from "react";
import Help from "./help/helpyou";
import Advance from "@/components/Advance";
import OurTeam from "@/components/OurTeam";

const home = () => {
  return (
    <div className="w-screen">
      <Menu />
      <div className="">
        <HomePage />
      </div>
      <div>
        <Advance />
      </div>
      <OurTeam />
      <AppFooter />
    </div>
  );
};

export default home;
