import { PaperClipOutlined, QrcodeOutlined } from "@ant-design/icons";
import React, { lazy, useState } from "react";
import Advance from "./Advance";
import ShortLink from "./Shortlink";
import QRcode from "./QRcode";

const YouCanCreate = () => {
  const [chose, setChose] = useState(false);
  return (
    <div className="w-full mx-auto text-white backdrop-blur-2xl">
      <div className="text-center font-serif text-pink-600 text-xl sm:text-5xl my-10">
        What would you like to create?
      </div>
      <div className="sm:w-full w-5/6 mx-auto">
        <div className="sm:w-1/6 w-full h-full mx-auto flex text-xl">
          <button
            onClick={() => {
              setChose(false);
            }}
            className={`text-white rounded-t-xl px-2 flex ${
              !chose && "bg-gray-400"
            } gap-3 text-xl hover:bg-gray-500 hover:text-blue-600 py-3`}
          >
            <PaperClipOutlined />
            <p>Short link</p>
          </button>
          <button
            onClick={() => {
              setChose(true);
            }}
            className={`text-white px-2 rounded-t-xl ${
              chose && "bg-gray-400"
            } flex gap-3 text-xl py-3 hover:bg-gray-500 hover:text-blue-600`}
          >
            <QrcodeOutlined />
            <p>QR code</p>
          </button>
        </div>
        <div className="w-full sm:w-5/6 mx-auto bg_eye">
          {!chose ? <ShortLink /> : <QRcode />}
        </div>
      </div>
    </div>
  );
};

export default YouCanCreate;
