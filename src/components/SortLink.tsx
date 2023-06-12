import { ControlOutlined } from "@ant-design/icons";
import React from "react";

const SortLink = () => {
  return (
    <div className="w-full p-5 border-b border-gray-600">
      <div className="flex gap-5">
        <div className="flex gap-3 items-center">
          <input type="checkbox" />
          <h1 className="font-bold">Date created</h1>
        </div>
        <div className="flex gap-3 my-5">
          <input type="checkbox" />
          <h1 className="font-bold">Top performing</h1>
        </div>
      </div>
      <div className="flex gap-20">
        <button className="bg-blue-500 p-3 rounded-2xl flex items-center gap-2 text-white font-bold">
          <ControlOutlined />
          <p>Filters</p>
        </button>
        <div className="flex items-center gap-5">
          <input type="checkbox" />
          <h1>Hidden links only</h1>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SortLink);
