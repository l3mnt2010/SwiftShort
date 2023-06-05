import React, { ChangeEvent, useCallback, useState } from "react";
import logo from "../../assets/images/LogoSwiftShort.png";
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
import Image from "next/image";
import { Register } from "@/interfaces/interface.global";
import { useAppDispatch } from "@/redux/store";
import { Register_User } from "@/redux/register.slice";

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showpass, setShowPass] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, handleSubmit, setValue } = useForm<Register>({});
  const onSubmit: SubmitHandler<Register> = (data) => {
    console.log(data);
    dispatch(Register_User({ ...data, roles: "user" }));
  };

  return (
    <div className="w-screen h-screen fixed">
      <div className="w-full sm:w-1/2 mx-auto mt-40 sm:mt-20">
        <h1 className="w-full font-bold text-center text-black text-4xl">
          Sign up and start shortening
        </h1>
        <div className="w-full flex gap-5 justify-center items-center">
          {" "}
          <p className="font-bold text-center my-5">Already have an account?</p>
          <Link className="text-blue-600 underline w-20" href={"/login"}>
            Login
          </Link>
        </div>

        <div className="w-full">
          <h1 className="w-full text-center font-thin">Sing up with:</h1>
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
            <label className="w-5/6 mx-auto font-bold">Username</label>
            <input
              type="text"
              className="w-5/6 mx-auto h-9 rounded-xl border-2 bg-gray-200 pl-5"
              placeholder="user name"
              {...register("name", {})}
            />
            {}
          </div>
          <div className="flex flex-col gap-5">
            {" "}
            <label className="w-5/6 mx-auto font-bold">Email address</label>
            <input
              type="text"
              className="w-5/6 mx-auto h-9 rounded-xl border-2 bg-gray-200 pl-5"
              placeholder="name@gmail.com"
              {...register("email", {})}
            />
            {}
          </div>
          <div className="flex flex-col gap-5">
            <div className="w-5/6 mx-auto flex justify-between">
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
              className="w-5/6 mx-auto h-9 rounded-xl border-2 bg-gray-200 pl-5 focus:border-0"
            />
          </div>

          <button
            className="w-1/3 h-10 rounded-xl mx-auto bg-green-600 hover:scale-110 font-bold text-white text-center"
            onClick={handleSubmit(onSubmit)}
          >
            Sign up
          </button>
        </form>
      </div>
      <Image
        className="fixed w-screen bottom-0 left-0 right-0"
        src={bg1}
        alt="bg-1"
      />
      <Image
        className="fixed bottom-0 w-screen left-0 right-0"
        src={bg2}
        alt="bg-2"
      />
    </div>
  );
};

export default login;
