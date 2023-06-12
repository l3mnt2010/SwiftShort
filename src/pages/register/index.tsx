import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import logo from "../../assets/images/LogoSwiftShort.png";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import {
  AppleOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import { ToastContainer } from "react-toastify";
import { Register } from "@/interfaces/interface.global";
import { RootState, useAppDispatch } from "@/redux/store";
import { Register_User } from "@/redux/register.slice";
import { useSelector } from "react-redux";
import { Toastcontainer } from "@/toastify/toastify";
import { Spin } from "antd";

const register = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const response = useSelector((state: RootState) => state.register);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showpass, setShowPass] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, setValue } = useForm<Register>({});
  const onSubmit: SubmitHandler<Register> = async (data) => {
    console.log(data);
    await dispatch(Register_User({ ...data, roles: "user" }));
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   if (response != null) {
  //     Toastcontainer("success", "đăng ký !!!!");
  //     router.push("/login");
  //   }
  // }, [onSubmit, response.response]);
  return (
    <div className="w-screen bg_eye sm:bg-none pt-32 sm:pt-0 sm:flex h-screen sm:fixed text-white">
      <div className="sm:w-1/2 sm:h-screen sm:bg_image">
        <div className="sm:h-full bg_eye sm:text-center flex justify-center items-center text-2xl sm:text-5xl text-white font-serif">
          COME ON
        </div>
      </div>
      <div className="w-full sm:w-1/2 mx-auto sm:mt-20 ">
        <h1 className="w-full font-bold text-center text-white sm:text-3xl">
          Sign up and start shortening
        </h1>
        <div className="w-full flex gap-5 justify-center items-center">
          {" "}
          <p className="font-bold text-center text-white my-5">
            Already have an account?
          </p>
          <Link className="text-blue-600 underline w-20" href={"/login"}>
            Login
          </Link>
        </div>

        <div className="w-full">
          <h1 className="w-full text-center font-thin">Sign up with:</h1>
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
            <label className="w-4/6 mx-auto font-bold">Username</label>
            <input
              type="text"
              className="w-4/6 mx-auto h-14 rounded-xl border-2 bg-opacity-0 bg-gray-200 pl-5"
              placeholder="user name"
              {...register("name", {})}
            />
            {}
          </div>
          <div className="flex flex-col gap-5">
            {" "}
            <label className="w-4/6 mx-auto font-bold">Email address</label>
            <input
              type="text"
              className="w-4/6 mx-auto h-14 rounded-xl border-2 bg-opacity-0 bg-gray-200 pl-5"
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
              {...register("password", { minLength: 5, maxLength: 20 })}
              className="w-4/6 mx-auto h-14 rounded-xl border-2 bg-opacity-0 bg-gray-200 pl-5 focus:border-0"
            />
          </div>

          <button
            className="w-1/3 h-10 rounded-xl mx-auto bg-green-600 hover:scale-110 font-bold text-white text-center"
            onClick={handleSubmit(onSubmit)}
          >
            <span>{response.isLoading && <Spin />}</span>
            Sign up
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default register;
