import React from "react";
import { Layout } from "antd";
import {
  CopyrightOutlined,
  GithubOutlined,
  GoogleOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <div className=" py-5 box-content font-bold text-xl mx-auto w-full bg-gray-700 text-white">
      <div className="w-full text-center">
        {" "}
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
      <div className="flex gap-5 text-white ml-40">
        <div>
          <GithubOutlined />
        </div>
        <div>
          <GoogleOutlined />
        </div>
        <div>
          <InstagramOutlined />
        </div>
        <div>
          <TwitterOutlined />
        </div>
      </div>
      <div className="w-full text-white pb-10">
        <div className="w-full mx-auto p-10 text-white  sm:grid sm:grid-cols-3 gap-5">
          <div className="flex flex-col gap-5">
            <h1 className="w-full text-left uppercase font-bold text-xl">
              LOGO
            </h1>
            <p className="w-full text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
            <div className="w-full flex py-1 my-5 sm:w-1/2"></div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <h1 className="w-full text-left uppercase font-bold text-xl">
              quick link
            </h1>
            <div className="w-full text-left flex flex-col underline gap-1">
              <Link href="">About us</Link>
              <Link href="">Features</Link>
              <Link href="">Screenshot</Link>
              <Link href="">Help</Link>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full my-5">
              <h1 className="w-full text-left font-bold text-xl uppercase">
                news letter
              </h1>
              <p className="w-full text-left ">
                Subscribe our newsletter to get our latest update & news
              </p>
            </div>
            <input
              className="w-full px-5 h-9 border-2 border-orange-400 sm:bg-gray-700 sm:w-1/2 rounded-lg"
              placeholder="Sent your email to us :3"
            />
            <button className="bg-blue rounded-md bg-blue-500 px-3 mx-auto sm:ml-10 sm:w-20 mt-5">
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
