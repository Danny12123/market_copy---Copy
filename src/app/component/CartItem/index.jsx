import React from "react";
import Image from "next/image";
import Pic1 from "../../../../public/images/products/jacket-2.jpg";

const CartItem = () => {
  return (
    <div className="w-full h-auto md:p-2 p-1 transition-all ease-in delay-75 hover:shadow border border-[#eee] rounded-md mb-3">
      <div className="w-full flex gap-3">
        <div className="w-1/4">
          <div className="md:w-[110px] md:h-[110px] w-[60px] h-[60px] bg-slate-500 object-cover rounded-sm">
            <Image
              src={Pic1}
              className="w-full h-full rounded-sm"
              width={100}
              height={100}
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
            <div className="flex items-center gap-3">
              <button className="px-3 py-1 text-xs border border-gray-300 rounded hover:bg-slate-200 transition-all ease-in delay-75">
                +
              </button>
              <h2 className="text-xs">20</h2>
              <button className="px-3 py-1 text-xs border border-gray-300 rounded hover:bg-slate-200 transition-all ease-in delay-75">
                -
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="md:my-3 my-1">
        <h4 className="text-xs text-green-500">
          <span className="">FreeFree</span> shipping
        </h4>
        <p className="text-xs text-gray-400">
          Estimated delivery on{" "}
          <span className="text-xs text-[#000]">June 15</span>
        </p>
      </div> */}
      <div className="md:hidden flex items-center justify-between my-1">
        <h4 className="text-xs text-gray-400">
          12 pair | <span className="text-[#000] text-sm">GHc 10.00</span>
        </h4>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1 text-xs border border-gray-300 rounded hover:bg-slate-200 transition-all ease-in delay-75">
            +
          </button>
          <h2 className="text-xs">12</h2>
          <button className="px-3 py-1 text-xs border border-gray-300 rounded hover:bg-slate-200 transition-all ease-in delay-75">
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
