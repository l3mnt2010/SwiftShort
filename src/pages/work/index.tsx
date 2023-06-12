import LetfControl from "@/components/LetfControl";
import MenuLogin from "@/components/MenuLogin";
import React from "react";

const work = () => {
  return (
    <div className="flex">
      <div className="w-1/6 border-r border-gray-800">
        <LetfControl />
      </div>
      <div className="w-5/6">
        <MenuLogin />
        <div className="flex w-full px-10 flex-col gap-10 pt-32 text-white justify-center items-center sm:text-3xl">
          <div className="text-center font-bold">
            Every click tells a story you must update to see
          </div>
          <p className="font-thin text-center sm:text-xl">
            See all your link data in one dashboard. View click metrics by
            location, device, referrers and more.
          </p>
          <div>
            <button className="bg-green-700 sm:text-xl rounded-2xl w-40 h-11 text-white">
              View All Of Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default work;
