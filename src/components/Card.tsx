import { CheckCircleOutlined } from "@ant-design/icons";
import React, { JSXElementConstructor } from "react";

interface Customer {
  name: string;
  title: string;
  service: string;
  one: string;
  two: string;
  three: string;
  four: string;
  children: JSX.Element;
}

const Card: React.FC<Customer> = (props) => {
  return (
    <div className="border border-white bg-white bg-opacity-0">
      <div className="w-full text-white">
        <div className="w-full flex">
          {props.children}
          <h1>{props.name}</h1>
        </div>
        <div>{props.title}</div>
      </div>
      <hr />
      <div>
        <h1>{props.service}</h1>
        <div className="flex">
          <CheckCircleOutlined />
          <p>{props.one}</p>
        </div>
        <div className="flex">
          <CheckCircleOutlined />
          <p>{props.two}</p>
        </div>
        <div className="flex">
          <CheckCircleOutlined />
          <p>{props.three}</p>
        </div>
        <div className="flex">
          <CheckCircleOutlined />
          <p>{props.four}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
