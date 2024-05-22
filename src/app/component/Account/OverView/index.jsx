import { FanIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import Pic from "../../../../../public/images/logo/favicon.ico";

const OverView = () => {
  return (
    <div className="w-full mx-auto ">
      <div className="w-full min-h-[80vh] flex justify-center  gap-2">
        <div className="w-1/3 h-full p-5 ">
          <div className="flex flex-col items-center justify-center">
            <div className=" relative">
              <div className="w-[100px] h-[100px] bg-slate-600 rounded-full shadow">
                <Image src={Pic} alt="user_image" width={100} height={100} />
              </div>
              <div className="absolute bottom-[-8px] right-0 w-9 h-9 rounded-full bg-[#fff] flex justify-center items-center">
                <FanIcon />
              </div>
            </div>
            <h5 className="text-base font-medium mt-3">Daniel Acquah</h5>
            <p className="text-xs text-gray-500">daniel@gmail.com</p>
            <div className="my-2">
              <p>Shear with your friends</p>
            </div>
          </div>
        </div>
        <div className="w-full h-fit"></div>
      </div>
    </div>
  );
};

export default OverView;
