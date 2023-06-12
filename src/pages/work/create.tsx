import LetfControl from "@/components/LetfControl";
import MenuLogin from "@/components/MenuLogin";
import YouCanCreate from "@/components/YouCanCreate";
import React from "react";

const work = () => {
  return (
    <div className="flex">
      <div className="w-1/6 border-r border-gray-800">
        <LetfControl />
      </div>
      <div className="w-5/6">
        <MenuLogin />
        <YouCanCreate />
      </div>
    </div>
  );
};
export default work;
