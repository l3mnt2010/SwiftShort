import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  GithubOutlined,
  GoogleOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

export interface Team {
  avatar: StaticImageData;
  name: string;
  job: string;
  about: string;
}
const TeamMember: React.FC<Team> = (props) => {
  return (
    <div className="w-full rounded-lg shadow-2xl text-white mt-5 bg-cyan-500 bg-opacity-5">
      <Image
        className="w-1/3 mx-auto"
        src={props.avatar}
        alt="this is avatar"
      />
      <div className="p-3">
        <h1 className="w-full text-center uppercase font-bold text-xl">
          {props.name}
        </h1>
        <h1 className="w-full text-center uppercase text-sm my-2 text-yellow-500">
          {props.job}
        </h1>
        <p className="w-fill text-center">{props.about}</p>
      </div>
      <div className="w-5/6 mx-auto flex justify-evenly py-5">
        <div>
          <GithubOutlined />
        </div>
        <div>
          <GoogleOutlined />
        </div>
        <div>
          <InstagramOutlined />
        </div>
        <div>
          <TwitterOutlined />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TeamMember);
