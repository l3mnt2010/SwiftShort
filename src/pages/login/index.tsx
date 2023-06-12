import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import logo from "../../assets/images/LogoSwiftShort.png";
import { useDispatch, useSelector } from "react-redux";
import bg1 from "../../assets/images/image-bg1.png";
import bg2 from "../../assets/images/image-bg2.png";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import {
  AppleOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import { Login, Login_new } from "@/interfaces/interface.global";
import { RootState, useAppDispatch } from "@/redux/store";
import { Login_user } from "@/redux/login.slide";
import { Toastcontainer } from "@/toastify/toastify";
import { Spin } from "antd";
import { ToastContainer } from "react-toastify";

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isload_ding = useSelector((state: RootState) => state.login);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [remember, isRemember] = useState(false);
  console.log(remember);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showpass, setShowPass] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, setValue } = useForm<Login>({
    defaultValues: {
      email: "test123@gmail.com",
      password: "testUser123",
    },
  });
  const onSubmit: SubmitHandler<Login> = (data) => {
    console.log(data);
    dispatch(Login_user(data));
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    let token =
      typeof window !== "undefined"
        ? localStorage.getItem("access_token")
        : null;
    if (
      token !== null &&
      isload_ding.isLoading == false &&
      isload_ding.error == null
    ) {
      router.push("/work");
      Toastcontainer("success", "đăng nhập !");
    }
  }, [dispatch, onSubmit, isload_ding]);
  // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/rules-of-hooks
  const hadlerRemember = useCallback(() => {
    isRemember(!remember);
  }, [remember]);

  return (
    <div className="w-screen pt-32 sm:pt-0 sm:bg-none sm:flex h-screen bg_eye fixed">
      <div className="w-full sm:h-screen sm:bg_eye">
        <div className="h-full bg_eye flex justify-center items-center text-2xl sm:text-5xl text-white font-serif">
          Well come back
        </div>
      </div>

      <div className="w-full text-white sm:pt-32">
        <div className="flex w-full justify-center gap-2">
          <p className="font-bold text-white sm:text-2xl font-mono">
            Not have account ?
          </p>
          <Link
            className="text-blue-600 underline w-20 text-xl"
            href={"/register"}
          >
            Sign up
          </Link>
        </div>

        <div className="w-full">
          <h1 className="w-full text-center font-thin text-lg">Log in with:</h1>
          <div className="flex gap-5 justify-center items-center my-3">
            <button className="bg-blue-600 hover:bg-pink-400 transition-all rounded-xl w-32 flex justify-center items-center h-8">
              <GoogleOutlined className="hover:animate-spin" />
            </button>
            <button className="bg-blue-600 hover:bg-purple-400  rounded-xl w-32 flex justify-center items-center h-8">
              <AppleOutlined className="hover:animate-spin" />
            </button>
          </div>
          <div className="flex justify-center items-center gap-2">
            <hr className="w-50" /> <div className="font-thin">OR</div>
            <hr className="w-50" />
          </div>
        </div>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            {" "}
            <label className="w-4/6 mx-auto font-bold">
              Email address or username
            </label>
            <input
              type="text"
              className="w-4/6 mx-auto h-14 rounded-xl border-2 bg-gray-200 bg-opacity-0 pl-5"
              placeholder="name@gmail.com"
              {...register("email", {})}
            />
            {}
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-4/6 mx-auto flex justify-between">
              <label className="font-bold">Password</label>
              <div
                onClick={() => setShowPass(!showpass)}
                className="float-right"
              >
                {showpass ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              </div>
            </div>

            <input
              type={showpass ? "text" : "password"}
              placeholder="password"
              {...register("password", {})}
              className="w-4/6 mx-auto h-14 rounded-xl border-2 bg-gray-200 bg-opacity-0 pl-5 focus:border-0"
            />
          </div>
          <div className="w-4/6 mx-auto flex justify-between">
            <div className="flex gap-2">
              <input type="checkbox" name="" id="" onClick={hadlerRemember} />
              <p className="font-serif text-sm">Remember me</p>
            </div>

            <Link
              className="text-right text-blue-500 underline font-mono"
              href={"/"}
            >
              Forgot password ?
            </Link>
          </div>

          <button
            className="w-1/3 h-10 rounded-xl mx-auto bg-green-600 hover:scale-110 font-bold text-white text-center"
            onClick={handleSubmit(onSubmit)}
          >
            <span>
              {isload_ding.isLoading == true && <Spin className="text-white" />}
            </span>
            Log in
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default login;
