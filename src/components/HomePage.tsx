import {
  LineOutlined,
  LinkOutlined,
  LockOutlined,
  PlayCircleOutlined,
  ShrinkOutlined,
} from "@ant-design/icons";
import star from "../assets/images/Star.png";
import banner from "../assets/images/bg-image.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
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
      className={`w-full sm:px-5 transition-all ease-in-out mx-auto sm:flex justify-between h-auto sm:pb-56 ${
        scrollY > 500 && "bg_new_earth"
      } text-white`}
    >
      <div className="sm:w-1/2 p-5 w-full shadow-2xl bg-slate-50 bg-opacity-5 sm:p-20 rounded-2xl">
        <h1 className="w-full text-center sm:text-left text-2xl font-extrabold sm:text-5xl">
          Platform for faster SHORTENED YOUR LINK{" "}
          <span className="font-extrabold text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text hover:animate-ping underline">
            with a CLICK{" "}
          </span>
          <span className="">
            <LinkOutlined />
          </span>
        </h1>
        <div className="w-full my-5">
          <hr className="w-full h-7 font-bold" />
        </div>
        <div className="w-full flex justify-between">
          <button
            onClick={() => {
              router.push("/login");
            }}
            className="flex bg-orange-400 items-center gap-3 text-white rounded-xl px-2 hover:scale-105 hover:text-pink-100 transition-all h-16"
          >
            <p className="font-bold hover:animate-pulse">GET STARTED FREE</p>
            <PlayCircleOutlined className="hover:animate-ping" />
          </button>
          <div className="font-mono pl-5 text-xs my-5 text-left sm:mr-3">
            We make your link is shortest very fast
          </div>
        </div>
        <div className="shadow-2xl h-20 mt-10 flex items-center bg-gradient-to-t from-indigo-400 to-pink-400 rounded-lg">
          <div className="h-20 bg-opacity-10 w-4/6 sm:w-5/6 sm:ml-5 flex items-center justify-around">
            <input
              className="font-bold text-sm sm:text-xl bg-opacity-0 bg-white hover:text-purple-500"
              type="text"
              disabled
              defaultValue={"www.facebook.com/any..."}
            />
            <span className="hover:animate-ping">
              <LockOutlined title="LOCKED" />
            </span>
          </div>

          <button
            onClick={() => {
              confirm("Vui lòng đăng nhập để sử dụng");
            }}
            className="flex items-center pl-4 sm:pl-10 text-white gap-3 bg-blue-500 cursor-pointer w-2/6 h-full rounded-r-lg"
          >
            <p className="font-bold hover:animate-pulse">SHORTEN </p>
            <ShrinkOutlined />
          </button>
        </div>
        <div className="font-bold my-10 w-full text-right">
          <button
            onClick={() => {
              setShow(!show);
            }}
            className="underline text-xl text-blue-500 hover:animate-pulse"
          >
            {show ? (
              <p className="text-pink-700">Close advanced Options ↑</p>
            ) : (
              <div>Advanced Options ↓</div>
            )}
          </button>
        </div>
      </div>
      <div className="w-full sm:w-1/2">
        <div>
          <div className="float-left">
            <Image src={star} alt="star" width={50} height={50} />
          </div>
          <div className="w-full p-10">
            <Image src={banner} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
