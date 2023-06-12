import HeaderLink from "@/components/HeaderLink";
import LetfControl from "@/components/LetfControl";
import MenuLogin from "@/components/MenuLogin";
import SortLink from "@/components/SortLink";
import React, { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "@/redux/store";
import { getLink } from "@/redux/getlink.slice";
import { useSelector } from "react-redux";
import OnlyLink from "@/components/OnlyLink";
import NoResults from "@/components/NoResults";
import ShowOnlyLink from "@/components/ShowOnlyLink";

const link = () => {
  let token =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

  // // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [access_token, get_access_Token] = useState<string | null>();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const data = useSelector((state: RootState) => state.getlink.data_link);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const login = useSelector((state: RootState) => state.login.user);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const res = dispatch(getLink());
  }, [dispatch, token]);

  return (
    <div className={token != null ? "hidden" : "flex text-white"}>
      <div className="w-1/6 border-r border-gray-800">
        <LetfControl />
      </div>
      <div className="w-5/6">
        <MenuLogin />
        <HeaderLink />
        <SortLink />
        <div className="sm:flex">
          <div className="w-full sm:w-1/3 border-r border-gray-500 pt-5">
            {data == null && <NoResults />}
            <div className="overflow-auto max-h-hei">
              {data != null &&
                data.map((itm) => {
                  return (
                    <div className="" key={itm.id}>
                      <OnlyLink
                        Address={itm.Address}
                        clickCount={itm.clickCount}
                        id={itm.id}
                        createAt={itm.createAt}
                        originalLinks={itm.originalLinks}
                        shorterLinks={itm.shorterLinks}
                        key={itm.id}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="hidden sm:block sm:w-2/3">
            <ShowOnlyLink />
          </div>
        </div>
      </div>
    </div>
  );
};
export default link;
