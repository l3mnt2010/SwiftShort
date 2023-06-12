import { showUser } from "@/redux/action";
import { getLinkOnly } from "@/redux/showUser.slice";
import { useAppDispatch } from "@/redux/store";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface InfomationLink {
  id: number;
  originalLinks: string;
  shorterLinks: string;
  createAt: string;
  clickCount: number;
  Address: string | null;
}
const OnlyLink: React.FC<InfomationLink> = (props) => {
  const dispatch = useDispatch();
  const [month, getMonth] = useState("");
  const [date, getDate] = useState(0);
  const { createAt, originalLinks, shorterLinks } = props;
  useEffect(() => {
    let date = parseInt(createAt.slice(8, 11));
    getDate(date);
    let month = createAt.slice(5, 7);
    getMonth(month);
  }, []);

  return (
    <div
      onClick={() => {
        dispatch(getLinkOnly(props));
      }}
      className="flex text-left gap-3 items-center p-5 hover:bg-gray-400 hover:bg-opacity-10"
    >
      <div>
        <input type="checkbox" />
      </div>
      <div>
        <h1 className="font-bold">
          Date : {month} {date}
        </h1>
        <p className="text-xs" title={originalLinks}>
          {originalLinks.slice(0, 30)}...
        </p>
        <Link
          href={shorterLinks}
          className="text-sm underline text-red-200"
          title={shorterLinks}
        >
          {shorterLinks}
        </Link>
      </div>
    </div>
  );
};

export default OnlyLink;
