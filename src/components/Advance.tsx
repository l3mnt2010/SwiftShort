import { FormatPainterOutlined, ScissorOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import ModalCustom from "./ModalCustom";
import { Toastcontainer } from "@/toastify/toastify";

const Advance = () => {
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
    <div>
      <hr className="w-4/6 mx-auto" />
      <div className="w-full sm:w-5/6 bg_test animate-pulse-slow sm:flex sm:gap-10 mx-auto backdrop-blur-3xl text-white shadow-2xl">
        <div
          className={`w-full sm:w-1/2 transition-all ease-in-out duration-75 scroll-element ${
            scrollY > 1200 ? "scroll-element-visible" : ""
          } shadow-2xl flex flex-col p-10 gap-5`}
        >
          <div className="">
            <div className="w-full items-center flex gap-3">
              <FormatPainterOutlined />
              <h1 className="font-thin text-3xl">SWITFSHORT a long URL</h1>
            </div>
          </div>
          <form className="flex flex-col gap-8">
            <input
              placeholder="ENTER YOUR LINK HERE"
              className="w-full h-11 pl-5 border  bg-white bg-opacity-0 border-gray-400 rounded-xl"
            />
            <div className="w-full flex gap-1 items-center my-3">
              <ScissorOutlined />
              <label className="font-bold text-2xl" htmlFor="">
                Customize your link
              </label>
            </div>
            <div className="w-full flex gap-5 h-11">
              <input
                placeholder=""
                defaultValue={"swirfshort.com"}
                className="pl-5 w-4/6 h-11 border bg-white bg-opacity-0 border-gray-400 rounded-xl"
              />
              <input
                className="w-2/6 h-11 px-3 border  bg-white bg-opacity-0 border-gray-400 rounded-xl"
                type="text"
                placeholder="Enter your favorite alias"
              />
            </div>
            <button
              onClick={() => {
                Toastcontainer("", "bạn cần đăng nhập để thực hiện");
              }}
              className="bg-green-500 hover:animate-pulse hover:text-cyan-300 h-12 w-1/2 mx-auto text-white cursor-pointer rounded-2xl"
            >
              Sign in to Short
            </button>
          </form>
          <div className="font-mono text-xl bg-cyan-500 bg-opacity-5 hover:scale-105 transition-all text-white">
            By clicking Shorten URL, I agree to the Terms of Service, Privacy
            Policy and Use of Cookies.
          </div>
        </div>
        <div
          className={`w-full sm:w-1/2 flex flex-col gap-10 font-serif text-xl p-10 sm:p-5 scroll-element ${
            scrollY > 1200 ? "scroll-element-visible" : ""
          }`}
        >
          <h1 className="font-bold text-3xl">The Original URL Shortener</h1>
          <p>Create shorter URLs with SwirtShort.</p>
          <p>
            Want more out of your link shortener? Track link analytics, use
            branded domains for fully custom links, and manage your links with
            our paid plans.
          </p>
          <button className="text-white px-2 py-1 bg-cyan-500 bg-opacity-0 border-2 hover:bg-white hover:text-black font-bold">
            View our Plan
          </button>
        </div>
      </div>
      <div className="w-4/6 sm:w-full mx-auto text-center text-lg sm:text-3xl text-white font-bold my-2 sm:my-5">
        No credit card required. Your free plan includes: Short links && QR
        Codes
      </div>
      <hr className="w-4/6 mx-auto sm:hidden" />
    </div>
  );
};

export default Advance;
