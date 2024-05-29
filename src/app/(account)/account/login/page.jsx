import React from "react";
import Image from "next/image";
import BgImage from "../../../../../public/images/loginBg.jpeg";
import Link from "next/link";
import { TextInput } from "@tremor/react";
const LoginPage = () => {
  return (
    <div className="w-full min-h-screen bg-bg_secondary dark:bg-bg_dark_secondary flex p-2">
      <div className="hidden md:block w-full h-full rounded-md">
        <div className="w-full h-full relative">
          <Image
            src={BgImage}
            className="w-full h-full rounded-md"
            alt="loginBg"
          />
          <div className=" absolute top-0 left-0 right-0 bottom-0 bg-[#00000062] pt-5 px-5">
            <h1 className="text-2xl text-[#fff]">Welcome to Ordvel</h1>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-full md:mx-8 mx-4">
          <div className="mb-4">
            <h1 className="text-lg font-semibold ">Login into your Account</h1>
            <p className="text-xs text-gray-400">
              Your details are safe with us
            </p>
          </div>
          <form>
            <div className="my-2 w-full">
              <label className="text-sm">Email</label>
              <TextInput type="email" placeholder="Enter your name" />
            </div>
            <div className="my-2 w-full">
              <label className="text-sm ">Password</label>
              <TextInput type="password" placeholder="Enter your name" />
            </div>
            <button className="w-full p-2 bg-green-600 text-[#fff] rounded-md mt-2">
              Submit
            </button>
          </form>
          <p className="mt-4 text-xs text-center text-gray-400">
            Already have an account?{" "}
            <Link href="/account/signUp" className="text-red-500">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
