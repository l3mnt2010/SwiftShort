import { FormatPainterOutlined, ScissorOutlined } from "@ant-design/icons";
import React from "react";

const Advance = () => {
  return (
    <div className="w-5/6 flex gap-10 p-5 mx-auto bg-gradient-to-b from-cyan-500 to-slate-50">
      <div className="w-1/2 bg-white z-40 flex flex-col p-5 gap-5">
        <div className="">
          <div className="w-full items-center flex gap-3">
            <FormatPainterOutlined />
            <h1 className="font-thin text-3xl">SWITFSHORT a long URL</h1>
          </div>
        </div>
        <form className="flex flex-col gap-8">
          <input
            placeholder="ENTER YOUR LINK HERE"
            className="w-full h-11 pl-5 border border-gray-400 rounded-xl"
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
              className="pl-5 w-4/6 h-11 border border-gray-400 rounded-xl"
            />
            <input
              className="w-2/6 h-11 px-3 border border-gray-400 rounded-xl"
              type="text"
              placeholder="Enter your favorite alias"
            />
          </div>
          <button className="bg-green-500 hover:animate-pulse hover:text-cyan-300 h-12 w-1/2 mx-auto text-white cursor-pointer rounded-2xl">
            Shorten URL
          </button>
        </form>
        <div className="font-mono text-xl bg-cyan-500 text-white">
          By clicking Shorten URL, I agree to the Terms of Service, Privacy
          Policy and Use of Cookies.
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-10 font-serif text-xl p-5">
        <h1 className="font-bold text-3xl">The Original URL Shortener</h1>
        <p>Create shorter URLs with SwirtShort.</p>
        <p>
          Want more out of your link shortener? Track link analytics, use
          branded domains for fully custom links, and manage your links with our
          paid plans.
        </p>
        <button className="text-white px-2 py-1 bg-cyan-500 bg-opacity-0 border-2 hover:bg-white hover:text-black font-bold">
          View our Plan
        </button>
      </div>
    </div>
  );
};

export default Advance;
