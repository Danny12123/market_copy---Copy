import React from "react";
import Image from "next/image";
import BgImage from "../../../../../public/images/loginBg.jpeg";

import { TextInput } from "@tremor/react";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="w-full min-h-screen bg-bg_secondary dark:bg-bg_dark_secondaryflex p-2">
      <div className="hidden md:block w-full h-full rounded-md">
        <div className="w-full h-full relative rounded-md">
          <Image
            src={BgImage}
            className="w-full h-full rounded-md"
            alt="loginBg"
          />
          <div className=" absolute top-0 left-0 right-0 bottom-0 bg-[#00000062] pt-5 px-5 rounded-md">
            <h1 className="text-2xl text-[#fff]">Welcome to Ordvel</h1>
          </div>
        </div>
      </div>
      <div className=" w-full md:w-1/2 flex justify-center items-center">
        <div className="w-full md:mx-8 mx-4">
          <div className="mb-4 mx-auto w-full">
            <h1 className="text-lg font-semibold ">Create Account</h1>
            <p className="text-xs text-gray-400">
              Your details are safe with us
            </p>
          </div>
          <form>
            <div className="my-2 w-full">
              <label className="text-sm">Full name</label>
              <TextInput placeholder="Enter your name" />
            </div>
            <div className="my-2 w-full">
              <label className="text-sm">Email</label>
              <TextInput type="email" placeholder="Enter your name" />
            </div>
            <div className="my-2 w-full">
              <label className="text-sm ">Password</label>
              <TextInput type="password" placeholder="Enter your name" />
            </div>
            <button className="w-full p-2 bg-green-600 text-[#fff] text-sm rounded-md mt-2">
              Submit
            </button>
          </form>
          <p className="mt-4 text-xs text-gray-400 text-center">
            Already have an account?{" "}
            <Link href="/account/login" className="text-red-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
