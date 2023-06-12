import Image from "next/image";
import logo from "../assets/images/Logo.png";
import Link from "next/link";
import React from "react";
import {
  DashboardOutlined,
  LeftCircleOutlined,
  LinkOutlined,
  QrcodeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Itemcontrol from "./Itemcontrol";
import { useRouter } from "next/router";

const Item = [
  {
    children: <DashboardOutlined />,
    name: "Dashboard",
    href: "/work",
  },
  {
    children: <LinkOutlined />,
    name: "Link",
    href: "/work/link",
  },
  {
    children: <QrcodeOutlined />,
    name: "QR Codes",
    new: "new",
    href: "/work/qr_code",
  },
];

const LetfControl = () => {
  const router = useRouter();
  return (
    <div className="w-full h-screen sm:px-5 text-white shadow-2xl bg-slate-950">
      <div className="flex flex-col gap-10 pt-10 mb-10">
        {" "}
        <Link href={"/work"}>
          <Image src={logo} alt="logo" width={120} height={120} />
        </Link>
        {/* <LeftCircleOutlined className="float-right text-white" /> */}
        <button
          onClick={() => {
            router.push("/work/create");
          }}
          className="sm:bg-blue-500 text-xs w-full sm:w-2/3 h-11 rounded-2xl text-white font-bold"
        >
          CREATE NEW
        </button>
      </div>
      <hr className="sm:mr-10 my-5" />
      <div className="flex px-5 sm:px-0 flex-col gap-5">
        {Item.map((itm, key) => {
          // eslint-disable-next-line react/no-children-prop
          return (
            <Itemcontrol
              // eslint-disable-next-line react/no-children-prop
              children={itm.children}
              name={itm.name}
              key={key}
              new={itm.new}
              href={itm.href}
            />
          );
        })}
      </div>
      <hr className="sm:mr-10 my-5" />
      <button className="flex font-bold w-5/6 px-5 sm:px-0 gap-2 h-10 items-center hover:bg-gray-500">
        <SettingOutlined title={"settings"} />
        <p className="hidden sm:block">Settings</p>
      </button>
    </div>
  );
};

export default LetfControl;
