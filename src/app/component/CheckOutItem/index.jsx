import React from "react";
import Image from "next/image";
import Pic1 from "../../../../public/images/products/jacket-2.jpg";

const CheckOutItem = () => {
  return (
    <div className="w-full h-auto md:p-2 p-1 transition-all ease-in delay-75 hover:shadow border border-[#eee] dark:border-gray-500 rounded-md mb-3">
      <div className="w-full flex gap-3">
        <div className="w-1/4">
          <div className="md:w-[110px] md:h-[110px] w-[60px] h-[60px] bg-slate-500 object-cover rounded-sm">
            <Image
              src={Pic1}
              className="w-full h-full rounded-sm"
              width={100}
              height={100}
              alt="product image"
            />
          </div>
        </div>
        <div>
          <h4 className="md:text-sm text-xs text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          </h4>
          <div className="hidden md:flex items-center justify-between my-3">
            <h4 className="text-xs text-gray-400">
              12 pair | <span className="text-[#000] text-sm">GHc 10.00</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutItem;
