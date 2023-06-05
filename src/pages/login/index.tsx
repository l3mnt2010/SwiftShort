import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import logo from "../../assets/images/LogoSwiftShort.png";
import { useDispatch } from "react-redux";
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
import { Login, Login_new } from "@/interfaces/interface.global";
import { useAppDispatch } from "@/redux/store";
import { Login_user } from "@/redux/login.slide";

const login = () => {
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
  const [darkMode, setDarkMode] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
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
    let token =
      typeof window !== "undefined"
        ? localStorage.getItem("access_token")
        : null;
    if (token !== null) {
      alert("Thành công !!!");
      router.push("/");
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/rules-of-hooks
  const hadlerRemember = useCallback(() => {
    isRemember(!remember);
  }, [remember]);

  return (
    <div className="w-screen h-screen fixed">
      <div className=" w-full sm:w-1/2 mx-auto mt-40 sm:mt-20 ">
        <h1 className="w-full font-bold text-center text-black text-4xl">
          Log in and start changing your world
        </h1>
        <div className="w-full flex gap-5 justify-center items-center">
          <p className="font-bold text-center my-5">Not have account ?</p>
          <Link className="text-blue-600 underline w-20" href={"/register"}>
            Sign up
          </Link>
        </div>

        <div className="w-full">
          <h1 className="w-full text-center font-thin">Log in with:</h1>
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
            <label className="w-5/6 mx-auto font-bold">
              Email address or username
            </label>
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
              {...register("password", {})}
              className="w-5/6 mx-auto h-9 rounded-xl border-2 bg-gray-200 pl-5 focus:border-0"
            />
          </div>
          <div className="w-5/6 mx-auto flex justify-between">
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
            Log in
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
      <button
        onClick={toggleDarkMode}
        className="fixed left-10 bottom-10 w-16 h-16 rounded-full bg-pink-700 text-emerald-200"
      >
        Dark
      </button>
    </div>
  );
};

export default login;
