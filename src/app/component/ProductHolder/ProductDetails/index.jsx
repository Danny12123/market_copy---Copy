import React from "react";
import SectionHolder from "../../Cards/SectionHolder";
import { RiStarFill, RiStarHalfLine, RiCheckFill } from "@remixicon/react";

const ProductDetails = () => {
  return (
    <div>
      <SectionHolder>
        <div className="flex">
          <div id="product_images" className="w-[30%]">
            <div className="w-full h-[40vh] bg-slate-400 rounded shadow"></div>
            <div
              id="small_image_holder"
              className="flex gap-2 justify-center items-center mt-2"
            >
              <div className="w-[50px] h-[50px] rounded bg-slate-400"></div>
              <div className="w-[50px] h-[50px] rounded bg-slate-400"></div>
              <div className="w-[50px] h-[50px] rounded bg-slate-400"></div>
              <div className="w-[50px] h-[50px] rounded bg-slate-400"></div>
            </div>
          </div>
          <div className="mx-2">
            <p>
              Men's short sleeved polo, business casual shirt, tight
              fitting,fashionable, summer novelty, 2024
            </p>
            <div className="my-2 ">
              <div id="product_amount" className="my-2 flex items-baseline">
                <h1 className="text-2xl font-bold text-green-700">
                  <span className="text-xs">Ghc</span>
                  100<span className="text-xs">.99</span>
                </h1>
                <p className="line-through text-[10px] text-gray-500 ml-1">
                  Ghc125.99
                </p>
                <h6 className="text-xs ml-2">200+ sold</h6>
              </div>
              <div className="flex items-baseline">
                <RiStarFill size={13} />
                <RiStarFill size={13} />
                <RiStarFill size={13} />
                <RiStarHalfLine size={13} />
                <RiStarHalfLine size={13} />
                <span className="ml-1 md:text-xs font-extrabold text-[10px] text-gray-600">
                  4.5 | 20k Reviews
                </span>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </SectionHolder>
    </div>
  );
};

export default ProductDetails;
