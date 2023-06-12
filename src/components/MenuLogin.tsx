import {
  CaretDownOutlined,
  ContactsOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import React, { useState } from "react";
import MenuControl from "./MenuControl";

const MenuLogin = () => {
  const [showmenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-16 border-b border-gray-700 p-1 ">
      <div className="w-full flex items-center justify-end text-white gap-5">
        <button className="bg-blue-500 sm:h-10 px-2 rounded-2xl font-bold text-white">
          Upgrade
        </button>
        <Link href={"/help"}>
          <ContactsOutlined title="help" />
        </Link>

        <div
          onClick={() => {
            setShowMenu(!showmenu);
          }}
          className="relative"
        >
          <button className="rounded-full">
            <UserOutlined />
          </button>
          <div className="flex gap-2 w-32 h-full">
            <p className="font-bold">Tên của</p>
            <CaretDownOutlined />
          </div>
          {showmenu && <MenuControl />}
        </div>
      </div>
    </div>
  );
};

export default MenuLogin;
