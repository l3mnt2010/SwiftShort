import Help from "../pages/help/helpyou";
import HomePage from "@/components/HomePage";
import Advance from "@/components/Advance";
import OurTeam from "@/components/OurTeam";
import AppFooter from "@/components/Footer";
import React from "react";

const Products = () => {
  return (
    <div className="">
      <HomePage />
      <Advance />
      <OurTeam />
      <AppFooter />
    </div>
  );
};

export default React.memo(Products);
