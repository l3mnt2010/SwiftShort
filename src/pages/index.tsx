import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../assets/images/Logo.png";
import back from "../assets/images/wellcome_back.png";
import center from "../assets/images/Dashboard.png";
import front from "../assets/images/wellcome_front.png";
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
    color: "text-black",
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
    color: "text-black",
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
    <div className="w-screen h-screen flex fixed text-black shadow-2xl">
      <div className="w-1/2 pt-48 pl-32  flex flex-col gap-10">
        <div className="w-36 fixed top-24 h-max">
          <Image
            className="ml-20 bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl"
            src={logo}
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="text-5xl font-extrabold">
          <p className="uppercase font-extrabold text-5xl ">
            <span className="font-bold text-black">
              WELL COME! We can shorten your URL, Your Link Website and BIO-PAGE{" "}
            </span>
            <span className="text-transparent hover:animate-ping bg-gradient-to-r from-blue-500 to-purple-500 underline bg-clip-text">
              {" "}
              More than a free link shortener{" "}
            </span>

            <span className=" text-black">
              <LinkOutlined />
            </span>
          </p>
        </div>
        <div className="w-full flex gap-16">
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
      <div className="w-1/2 relative h-screen">
        <Image className="absolute h-screen w-full" src={back} alt="back" />
        <Image
          className="absolute h-4/6 bottom-0 z-30 w-full right-16"
          src={center}
          alt="front"
        />
        <Image
          className="absolute h-screen bottom-0 z-50 w-full"
          src={front}
          alt="front"
        />
      </div>

      <button
        onClick={() => {
          router.push("/home");
        }}
        className="flex fixed bottom-20 hover:text-green-400 hover:bg-pink-500 left-96 px-3 py-2 gap-2 bg-blue-500 rounded-2xl items-center text-white cursor-pointer"
      >
        <p className="font-bold text-xl hover:animate-pulse">Continue</p>
        <DoubleRightOutlined />
      </button>
    </div>
  );
}
