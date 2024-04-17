import { RiCarFill } from "@remixicon/react";
import hero1 from "../../../../public/images/banner-1.jpg";
import hero2 from "../../../../public/images/banner-2.jpg";
import hero3 from "../../../../public/images/banner-3.jpg";
import hero4 from "../../../../public/images/products/clothes-1.jpg";
import Carousel from "../Carousel/Carousel";
import Image from "next/image";

import { RiHeart2Fill, RiHeartLine } from "@remixicon/react";
import { RiStarFill, RiStarHalfLine, RiCheckFill } from "@remixicon/react";

const Hero = () => {
  const slider = [hero1, hero2, hero3];
  return (
    <div className="w-full lg:w-[90%] 2xl:w-[60%] flex justify-center items-center mx-auto h-auto">
      <div className="w-full flex md:h-[45vh] h-auto md:px-3 md:py-3 px-2 py-2 ">
        <div className=" max-[425px]:w-full w-[70%] h-auto  rounded-md shadow bg-white flex gap-2 p-2">
          <div className="w-1/2 xl:w-[30%] h-full flex flex-col gap-2">
            <h2 className="md:text-base text-sm font-bold italic ">
              <span className="text-red-400">Super</span> Deals
            </h2>
            {/* <hr /> */}
            <div className="w-full  md:h-[28vh] h-[20vh] xl:h-[30vh] bg-[#f5f5f5] rounded-md shadow">
              <Image src={hero4} className="w-full h-full object-cover" />
            </div>
            <div className="md:flex hidden items-center justify-center gap-2">
              <div className="w-[35px] md:w-[50px] h-[25px] rounded md:h-[35px] bg-slate-500"></div>
              <div className="w-[35px] md:w-[50px] h-[25px] rounded md:h-[35px] bg-slate-500"></div>
              <div className="w-[35px] md:w-[50px] h-[25px] rounded md:h-[35px] bg-slate-500"></div>
              <div className="w-[35px] md:w-[50px] h-[25px] rounded md:h-[35px] bg-slate-500"></div>
            </div>
            <div className="md:hidden block">
              <h3 className="md:text-xs text-[10px] font-medium mb-1">
                Coupon & Discount
              </h3>
              <div className="w-fit h-auto md:p-2 p-1 bg-[#f5f5f5] rounded-md">
                <h3 className="md:text-xs text-[10px] text-red-500 font-semibold">
                  GHc15.30 off
                </h3>
                <p className="md:text-xs text-[10px] font-light text-gray-400">
                  On orders over 3 quantity
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 xl:w-[70%] p-2">
            <div className="w-full overflow-hidden ">
              <label className="text-sm truncate ">
                Men's short sleeved polo, business casual shirt, tight fitting,
                fashionable, summer novelty, 2024
              </label>
              <div className="flex items-baseline justify-end text-end">
                <h1 className="text-lg font-[900] text-red-600 italic">
                  <span className="text-xs">Ghc</span>
                  58
                  <span className="text-xs">.99</span>
                </h1>
                <span className="line-through text-[10px] text-gray-500 ml-1">
                  Ghc20.00
                </span>
              </div>
              <div className="block md:flex justify-between items-center">
                <div className="flex items-baseline">
                  <RiStarFill size={13} />
                  <RiStarFill size={13} />
                  <RiStarFill size={13} />
                  <RiStarHalfLine size={13} />
                  <RiStarHalfLine size={13} />
                  <span className="ml-1 md:text-xs text-[10px] text-gray-400">
                    20k | Reviews
                  </span>
                </div>
                <p className="md:text-xs text-[10px] text-gray-400">
                  100+ sold
                </p>
              </div>
              <hr />
              <div className="block md:flex items-top justify-between my-2">
                <div className="md:block hidden">
                  <h3 className="md:text-xs text-[10px] font-medium mb-1">
                    Coupon & Discount
                  </h3>
                  <div className="w-fit h-auto md:p-2 p-1 bg-[#f5f5f5] rounded-md">
                    <h3 className="md:text-xs text-[10px] text-red-500 font-semibold">
                      GHc15.30 off
                    </h3>
                    <p className="md:text-xs text-[10px] font-light text-gray-400">
                      On orders over 3 quantity
                    </p>
                  </div>
                </div>

                <div className="">
                  <h1 className="md:text-xs text-[10px]">
                    Shop name |{" "}
                    <span className="text-gray-400">2k followers</span>
                  </h1>
                </div>
              </div>
              <div className="flex my-2 gap-2 overflow-auto">
                <div className="w-[40px] md:w-[35px] h-auto md:text-sm text-xs rounded md:h-[35px] bg-[#f5f5f5] flex justify-center items-center">
                  xl
                </div>
                <div className="w-[40px] md:w-[35px] h-auto md:text-sm text-xs rounded md:h-[35px] bg-[#f5f5f5] flex justify-center items-center">
                  xl
                </div>
                <div className="w-[40px] md:w-[35px] h-auto md:text-sm text-xs rounded md:h-[35px] bg-[#f5f5f5] flex justify-center items-center">
                  xl
                </div>
                <div className="w-[40px] md:w-[35px] h-auto md:text-sm text-xs rounded md:h-[35px] bg-[#f5f5f5] flex justify-center items-center">
                  xl
                </div>
                <div className="w-[40px] md:w-[35px] h-auto md:text-sm text-xs rounded md:h-[35px] bg-[#f5f5f5] flex justify-center items-center">
                  xl
                </div>
              </div>
              <button className="w-full md:w-2/4 p-2 text-xs bg-green-500 text-[#fff]  rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="w-[30%] max-[425px]:hidden h-auto ml-2 rounded-md shadow object-cover flex flex-col gap-2">
          <div className=" w-full h-auto">
            <Carousel>
              {slider.map((item, index) => (
                <Image
                  src={item}
                  key={index}
                  className="rounded-md w-full md:h-[22vh] h-[15vh] object-cover"
                  alt="img slider"
                />
              ))}
            </Carousel>
          </div>
          <div className="w-full h-full rounded-md flex items-center justify-center gap-2">
            <div className="w-full text-center  mx-auto">
              <RiCarFill className="mx-auto" />
              <h4 className="text-xs text-gray-500">Fast deliver</h4>
            </div>
            <div className="w-full text-center mx-auto">
              <RiCarFill className="mx-auto" />
              <h4 className="text-xs text-gray-500">Fast deliver</h4>
            </div>
            <div className="w-full text-center mx-auto">
              <RiCarFill className="mx-auto" />
              <h4 className="text-xs text-gray-500">Fast deliver</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
