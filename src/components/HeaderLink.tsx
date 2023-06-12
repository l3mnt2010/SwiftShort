import React from "react";

const HeaderLink = () => {
  return (
    <div className="flex items-center justify-between py-5 border-b border-gray-700 px-8">
      <div className="sm:font-thin sm:text-3xl text-xl font-bold text-white">
        Links
      </div>
      <div>
        <button className="bg-green-500 p-3 mr-60 text-xs rounded-2xl text-white font-bold">
          Upgrade for custom your link
        </button>
      </div>
    </div>
  );
};

export default React.memo(HeaderLink);
