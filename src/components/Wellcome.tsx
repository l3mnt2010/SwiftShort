import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../assets/images/Logo.png";

import front from "../assets/images/image_replace.jpg";
import { DoubleRightOutlined, LinkOutlined } from "@ant-design/icons";
import wallet from "../assets/images/Wallet.png";
import vector from "../assets/images/Vector.png";
import control from "../assets/images/ITO.png";
import pen from "../assets/images/Edit_duotone_line.png";
import cer from "../assets/images/Calendar_fill.png";
import lock from "../assets/images/Lock_fill.png";
import PrApp from "@/components/PrApp";
import { useRouter } from "next/router";
const LeftItems = [
  {
    image: cer,
    title: "Self-hostable",
    color: "text-green-500",
  },
  {
    image: pen,
    title: "Fully Customizable",
    color: "text-purple-500",
  },
  {
    image: wallet,
    title: "Completely Free",
    color: "text-white",
  },
];
const RightItems = [
  {
    image: vector,
    title: "Blazing Fast",
    color: "text-yellow-500",
  },
  {
    image: lock,
    title: "Secure and Reliable",
    color: "text-white",
  },
  {
    image: control,
    title: "Total Control",
    color: "text-blue-500",
  },
];

export default function Wellcome() {
  const router = useRouter();
  return (
    <div className="w-full mb-5 sm:h-screen mx-auto mt-20 bg_earth flex sm:py-10 shadow-2xl bg-gradient-to-t text-white from-blue-950 to-black">
      <div className="w-2/3 mx-auto flex flex-col gap-20">
        <div className="sm:text-5xl text-2xl font-serif z-10">
          <p className="uppercase font-extrabold sm:text-5xl text-center ">
            <span className="font-bold">
              WELL COME! We can shorten your URL, Your Link Website and BIO-PAGE{" "}
            </span>
            <span className="text-transparent hover:animate-ping bg-gradient-to-r from-blue-500 to-purple-500 underline bg-clip-text">
              {" "}
              More than a free link shortener{" "}
            </span>

            <span className=" text-white">
              <LinkOutlined />
            </span>
          </p>
        </div>
        <div className="w-full h-min sm:h-max mx-auto flex justify-center gap-5 sm:bg_earth bg-rose-300 bg-opacity-0 hover:bg-purple-950 hover:bg-opacity-10 py-2 px-1">
          <div className="flex flex-col gap-5">
            {LeftItems.map((itm) => {
              return (
                <PrApp
                  image={itm.image}
                  title={itm.title}
                  key={itm.title}
                  color={itm.color}
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-5">
            {RightItems.map((itm) => {
              return (
                <PrApp
                  image={itm.image}
                  title={itm.title}
                  key={itm.title}
                  color={itm.color}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
