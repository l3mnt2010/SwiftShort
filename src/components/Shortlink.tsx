import { FormatPainterOutlined, ScissorOutlined } from "@ant-design/icons";
import { useForm, SubmitHandler } from "react-hook-form";
import React, { useEffect, useState } from "react";
import ModalCustom from "./ModalCustom";
import { Toastcontainer } from "@/toastify/toastify";
import { ShortLink } from "@/interfaces/interface.global";
import { useAppDispatch } from "@/redux/store";
import { shortLink_Data } from "@/redux/shortlink.slide";

const ShortLink = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, setValue } = useForm<ShortLink>({});
  const onSubmit: SubmitHandler<ShortLink> = (data) => {
    console.log(data);
    dispatch(shortLink_Data(data));
  };
  return (
    <div>
      <div className="w-full sm:w-5/6 bg_eye sm:flex gap-10 mx-auto backdrop-blur-3xl text-white shadow-2xl">
        <div
          className={`sm:w-1/2 transition-all ease-in-out duration-75  shadow-2xl flex flex-col p-10 gap-5`}
        >
          <div className="">
            <div className="w-full items-center flex gap-3">
              <FormatPainterOutlined />
              <h1 className="font-thin text-3xl">SWITFSHORT a long URL</h1>
            </div>
          </div>
          <form className="flex flex-col gap-3">
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
                disabled
                placeholder=""
                defaultValue={"You must upgrade to use"}
                className="pl-5 w-4/6 text-red-600 h-11 border bg-red-400 bg-opacity-0  rounded-xl"
              />
            </div>
            <button
              onClick={() => {
                // Toastcontainer("", "bạn cần đăng nhập để thực hiện");
                handleSubmit(onSubmit);
              }}
              className="bg-green-500 mt-6 hover:animate-pulse hover:text-cyan-300 h-12 w-1/2 mx-auto text-white cursor-pointer rounded-2xl"
            >
              Shorten URL
            </button>
          </form>
          <div className="font-mono text-xl bg-cyan-500 bg-opacity-5 hover:scale-105 transition-all text-white">
            By clicking Shorten URL, I agree to the Terms of Service, Privacy
            Policy and Use of Cookies.
          </div>
        </div>
        <div
          className={`sm:w-1/2 flex flex-col gap-10 font-serif text-xl px-5 sm:p-5`}
        >
          <h1 className="font-thin text-2xl">The Original URL Shortener</h1>
          <p>Create shorter URLs with SwirtShort.</p>
          <p className="text-yellow-50">
            Want more out of your link shortener? Track link analytics, use
            branded domains for fully custom links, and manage your links with
            our paid plans.
          </p>
          <button className="text-white px-2 py-1 bg-cyan-500 bg-opacity-0 border-2 hover:bg-white hover:text-black font-bold">
            View our Plan
          </button>
        </div>
      </div>
      <div className="text-center sm:text-xl text-white font-bold my-5">
        No credit card required. Your free plan includes: Short links && QR
        Codes
      </div>
    </div>
  );
};

export default ShortLink;
