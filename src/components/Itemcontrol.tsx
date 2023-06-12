import { useRouter } from "next/router";
import React from "react";

interface Item {
  children: JSX.Element;
  name: string;
  new?: string;
  href: string;
}
const Itemcontrol: React.FC<Item> = (props) => {
  const router = useRouter();
  return (
    <button
      title={props.name}
      onClick={() => {
        router.push(props.href);
      }}
      className="flex items-center hover:border-r-2 hover:border-cyan-300 gap-2 hover:bg-gray-700 h-11 text-white font-bold"
    >
      {props.children}
      <h1 className="font-bold hidden sm:block">{props.name}</h1>
      {props.new && (
        <div className="float-right hidden sm:block bg-green-400 text-white bg-opacity-75">
          {props.new}
        </div>
      )}
    </button>
  );
};

export default Itemcontrol;
