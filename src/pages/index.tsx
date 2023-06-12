import AppFooter from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Menu from "@/components/Menu";
import React, { useEffect, useState } from "react";
import Advance from "@/components/Advance";
import OurTeam from "@/components/OurTeam";
import Wellcome from "@/components/Wellcome";
import { ToastContainer } from "react-toastify";
import YouCanCreate from "@/components/YouCanCreate";
import QRcode from "@/components/QRcode";

const home = () => {
  let token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : null;
  return (
    <div className="">
      <Menu />
      <Wellcome />
      <HomePage />
      <Advance />
      <ToastContainer />
      <QRcode key={""} />
      <OurTeam />
      <AppFooter />
    </div>
  );
};

export default home;
