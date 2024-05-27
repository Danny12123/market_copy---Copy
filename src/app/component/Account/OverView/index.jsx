import { FanIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import Pic from "../../../../../public/images/logo/favicon.ico";
import AccountOverViewGrid from "../../Cards/GridHolder/AccountOverViewGrid";

const OverView = ({ setIsTab }) => {
  return (
    <div className="w-full mx-auto ">
      <div className="w-full min-h-[80vh] block md:flex justify-center  gap-2">
        <div className="md:w-1/3 w-full h-full p-5 ">
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
            <div className="flex items-center gap-1 my-1">
              <h5 className="text-base font-medium text-green-500">10.23</h5>
              <p className="text-sm">Coins</p>
            </div>

            <div className="my-2">
              <p>Shear with your friends</p>
            </div>
          </div>
        </div>
        <div className="w-full h-fit">
          <div className="w-full h-full">
            <AccountOverViewGrid>
              <div className="w-full h-fit bg-[#ededed] dark:bg-slate-900 rounded-md hover:shadow p-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium">Orders</h3>
                  <div className="w-fit px-3 py-1 bg-gray-600 rounded-full">
                    <h1 className="text-xs text-white">1</h1>
                  </div>
                </div>
                <hr className="my-1 bg-[#000]" />
                <div>
                  <h4 className="text-sm">
                    You ordered Men's Top.Your order has been received. We will
                    get back to you shortly
                  </h4>
                  <p
                    className="text-xs mt-3 cursor-pointer"
                    onClick={() => setIsTab(2)}
                  >
                    Click <span className="text-green-600">here</span> to view
                    order
                  </p>
                </div>
              </div>
              <div className="w-full h-fit bg-[#ededed] dark:bg-slate-900 rounded-md hover:shadow p-2">
                <h3 className="text-base font-medium">Coins</h3>
                <hr className="my-1 bg-[#000]" />
                <div className="w-full h-10 flex items-center justify-center">
                  <h1
                    className="
                  text-lg font-bold text-green-500"
                  >
                    10.23 <span className="text-sm font-normal">coins</span>
                  </h1>
                </div>
                <p className="text-xs my-1 text-center ">
                  Gain more coins to be able to negotiate on product. You can
                  get more coins when you keep buying product.
                </p>
              </div>
              <div className="w-full h-fit bg-[#ededed] dark:bg-slate-900 rounded-md hover:shadow p-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium">WishList</h3>
                  <div className="w-fit px-3 py-1 bg-gray-600 rounded-full">
                    <h1 className="text-xs text-white">0</h1>
                  </div>
                </div>
                <hr className="my-1 bg-[#000]" />
                <div className="w-full h-10 flex items-center justify-center">
                  <h1
                    className="
                  text-sm"
                  >
                    You have no product in your wishlist
                  </h1>
                </div>
              </div>
            </AccountOverViewGrid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
