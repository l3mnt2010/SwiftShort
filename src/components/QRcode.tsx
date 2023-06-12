import Image from "next/image";
import React from "react";
import qrcode from "../assets/images/qrcode.png";

const QRcode = () => {
  return (
    <div>
      <div className="w-full sm:w-5/6 sm:bg_eye sm:flex gap-10 mx-auto pt-16 backdrop-blur-3xl text-white shadow-2xl">
        <div className="w-full sm:w-1/2 p-10 flex flex-col gap-5">
          <h1 className="text-5xl font-thin">Create a QR Code</h1>
          <form className="flex flex-col gap-7">
            <label className="font-bold text-xl">
              Enter your QR Code destination
            </label>
            <input
              type="text"
              placeholder="Enter your link"
              className="w-full h-11 border pl-5 border-gray-400 bg-white bg-opacity-0 rounded-2xl"
            />
            <button className="bg-green-600  sm:w-1/3 h-11 rounded-2xl">
              Make my QR code
            </button>
          </form>
        </div>
        <div className="w-full px-5 sm:w-1/2">
          <Image src={qrcode} alt="image" />
        </div>
      </div>
      <div className="text-center font-thin text-xs sm:text-xl text-white sm:font-bold my-10">
        No credit card required. Your free plan includes: Short links && QR
        Codes
      </div>
    </div>
  );
};

export default QRcode;
