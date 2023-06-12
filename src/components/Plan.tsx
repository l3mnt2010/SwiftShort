import React from "react";
interface Plan {
  name: string;
  isPopular: boolean;
  title: string;
  price: number;
  environment: string;
  isinput: boolean;
  max_input: number;
}

const Plan: React.FC<Plan> = (props) => {
  const { environment, isPopular, isinput, max_input, name, price, title } =
    props;
  return (
    <div>
      <div></div>
    </div>
  );
};

export default Plan;
