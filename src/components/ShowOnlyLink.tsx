import { RootState } from "@/redux/store";
import {
  AccountBookOutlined,
  DashOutlined,
  EditOutlined,
} from "@ant-design/icons";
import React from "react";
import { useSelector } from "react-redux";

const ShowOnlyLink_Short = () => {
  const is_premium = false;
  const onlylink = useSelector(
    (state: RootState) => state.showonlylink.data_link
  );
  console.log(onlylink);
  return (
    <div>
      {onlylink == null ? (
        <div className="w-full h-full pt-52 flex justify-center items-center font-bold text-white text-5xl">
          No selected link now
        </div>
      ) : (
        <div className="w-full p-5 text-white">
          <div className="flex gap-10">
            <div>
              <h1>
                <AccountBookOutlined /> {onlylink.id}
              </h1>
            </div>
            <div className="flex">
              <button className="flex gap-3 rounded-xl bg-green-500 items-center">
                <EditOutlined />
                <p>Edit</p>
              </button>
              <div>
                <DashOutlined />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowOnlyLink_Short;
