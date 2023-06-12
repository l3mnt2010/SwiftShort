import { SearchOutlined } from "@ant-design/icons";
import React from "react";

const NoResults = () => {
  return (
    <div className="text-white w-full p-6">
      <div className="text-left"> 0 result</div>
      <div>
        <SearchOutlined />
        <div className="text-center">
          <h1 className="font-bold text-xl">No Results</h1>
          <p className="font-thin">Try broadening your search</p>
        </div>
      </div>
    </div>
  );
};

export default NoResults;
