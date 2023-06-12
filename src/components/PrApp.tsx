import Image, { StaticImageData } from "next/image";
import React from "react";

interface Items {
  image: StaticImageData;
  title: string;
  color: string;
}
const PrApp: React.FC<Items> = (props) => {
  const { image, title, color } = props;
  return (
    <div className="flex gap-2">
      <div>
        <Image src={image} alt={title} />
      </div>
      <div className={`font-sans text-xl ${color}`}>{title}</div>
    </div>
  );
};

export default PrApp;
