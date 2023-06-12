import React, { useEffect, useState } from "react";
import logo from "../assets/images/Logo.png";
import Image from "next/image";
import { LoginOutlined } from "@ant-design/icons";
import Link from "next/link";

const Menu = () => {
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
  let token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : null;
  return (
    <div
      className={`w-full mx-auto sticky ${
        scrollY > 2000
          ? "bg-cyan-600 bg-opacity-30"
          : "bg-purple-300 bg-opacity-10"
      } top-0 z-50 sm:h-20 shadow-2xl text-white `}
    >
      <div className="w-full h-full flex justify-between px-3 sm:flex sm:justify-between items-center">
        <div className="sm:ml-32">
          <Link href={"/"}>
            <Image
              className="w-auto h-auto"
              src={logo}
              alt="logo"
              width={120}
              height={120}
            />
          </Link>
        </div>
        <div className="sm:flex hidden sm:gap-10 gap-3 text-sm justify-between font-serif sm:text-lg button-primary shadow-2xl border border-purple-200 bg-neutral-700 bg-opacity-5 sm:px-5 sm:py-2 rounded-2xl">
          <Link className="hover:underline" href={"/home"}>
            Home
          </Link>
          <Link className="hover:underline" href={"/create"}>
            Create
          </Link>
          <Link className="hover:underline" href={"/help"}>
            Help to use
          </Link>
        </div>
        <div className="flex sm:mr-16">
          <div className="sm:px-5">
            <Link
              href={"/login"}
              className="flex items-center sm:pl-5 rounded-xl gap-4 hover:text-blue-300 hover:animate-pulse hover:cursor-pointer bg-opacity-0"
            >
              <div className="font-bold">Login</div>
              <LoginOutlined className="w-10 h-10 flex items-center" />
            </Link>
          </div>
          <Link
            href={"/register"}
            className="bg-opacity-5 bg-neutral-700 shadow-2xl border border-purple-200 rounded-xl flex items-center justify-center hover:text-orange-500 hover:scale-95 hover:cursor-pointer sm:px-3 font-bold"
          >
            Sign up free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
