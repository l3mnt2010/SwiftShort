import React from "react";
import logo from "../assets/images/Logo.png";
import Image from "next/image";
import { LoginOutlined } from "@ant-design/icons";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="w-screen sticky top-0 z-50 left-0 right-0 h-20 shadow-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <div className="w-full h-full flex justify-between items-center">
        <div className="ml-32">
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={120} height={120} />
          </Link>
        </div>
        <div className="flex gap-10 justify-between font-thin text-xl">
          <Link className="hover:underline" href={"/home"}>
            Home
          </Link>
          <Link className="hover:underline" href={"/update"}>
            Update to premium
          </Link>
          <Link className="hover:underline" href={"/help"}>
            Help to use
          </Link>
        </div>
        <div className="flex mr-16">
          <div className="px-5">
            <Link
              href={"/login"}
              className="flex items-center pl-5 rounded-xl gap-4 hover:animate-pulse hover:cursor-pointer bg-purple-500"
            >
              <div className="font-bold">Login</div>
              <LoginOutlined className="w-10 h-10 flex items-center" />
            </Link>
          </div>
          <Link
            href={"/register"}
            className="bg-blue-500 rounded-xl flex items-center justify-center hover:text-orange-500 hover:scale-95 hover:cursor-pointer px-3 font-bold"
          >
            Sign up free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
