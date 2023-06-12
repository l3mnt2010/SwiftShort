import React from "react";
import authlogin from "@/services/services.auth";
import { useRouter } from "next/router";
import { Toastcontainer } from "@/toastify/toastify";
const MenuControl = () => {
  const router = useRouter();
  return (
    <div className="w-52 h-min border bg-gray-600 bg-opacity-75 border-gray-600 absolute top-20 right-6 p-3">
      <div className="hover:bg-gray-500 ">Name</div>
      <div className="hover:bg-gray-500 ">
        Free account {"  "} <span className="bg-green-500">upgrade</span>
      </div>
      <div className="hover:bg-gray-500 ">Helps</div>
      <button
        onClick={() => {
          authlogin.logout();
          router.push("/login");
          Toastcontainer("success", "đăng xuất");
        }}
        className="hover:bg-gray-500 "
      >
        Log out
      </button>
    </div>
  );
};

export default MenuControl;
