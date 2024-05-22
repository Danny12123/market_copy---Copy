"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ProductImg from "../../../../../public/images/products/clothes-3.jpg";
import ProductImg2 from "../../../../../public/images/products/clothes-4.jpg";
import Image from "next/image";

import { RiHeart2Fill, RiHeartLine } from "@remixicon/react";
import { RiStarFill, RiStarHalfLine, RiCheckFill } from "@remixicon/react";

const product = [
  {
    type: "Super Deals",
    image: ProductImg,
    discountPrice: "15.30",
    orders_over: "10",
    desc: " Men's short sleeved polo, business casual shirt, tight fitting,fashionable, summer novelty, 2024",
    amount: 59.2,
    rat: 4,
    num_reviews: 2000,
    num_sold: 120,
    shop_name: "Shalom",
    num_shop_followers: 2000,
    size: ["40", "41", "42", "43", "44"],
  },
  {
    type: "Super Deals",
    image: ProductImg2,
    discountPrice: "15.30",
    orders_over: "10",
    desc: " Men's short sleeved polo, business casual shirt, tight fitting,fashionable, summer novelty, 2024",
    amount: 39.2,
    rat: 3,
    num_reviews: 100,
    num_sold: 120,
    shop_name: "Shalom",
    num_shop_followers: 2000,
    size: ["40", "41", "44"],
  },
  {
    type: "Super Deals",
    image: ProductImg,
    discountPrice: "15.30",
    orders_over: "10",
    desc: " Men's short sleeved polo, business casual shirt, tight fitting,fashionable, summer novelty, 2024",
    amount: 29.2,
    rat: 4,
    num_reviews: 5000,
    num_sold: 120,
    shop_name: "Shalom",
    num_shop_followers: 2000,
    size: ["40", "44"],
  },
];

const SuperDeals = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  return (
    <div className=" max-[425px]:w-full w-[70%] h-auto ">
      <Carousel plugins={[plugin.current]}>
        <CarouselContent className="-ml-1">
          {product?.map((item, index) => (
            <CarouselItem key={index} className="pl-1 ">
              <div className="   rounded-md shadow dark:bg-slate-800 bg-white flex gap-2 p-2">
                <div className="w-1/2 xl:w-[30%] h-full flex flex-col gap-2">
                  <h2 className="md:text-base text-sm font-bold italic ">
                    <span className="text-red-400">Super</span> Deals
                  </h2>
                  {/* <hr /> */}
                  <div className="w-full  md:h-[28vh] h-[20vh] xl:h-[30vh] dark:bg-slate-800 bg-[#f5f5f5] rounded-md shadow">
                    <Image
                      src={item.image}
                      className="w-full h-full object-cover"
                    />
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
                    <div className="w-fit h-auto md:p-2 p-1 dark:bg-slate-800 bg-[#f5f5f5] rounded-md">
                      <h3 className="md:text-xs text-[10px] text-red-500 font-semibold">
                        GHc{item.discountPrice} off
                      </h3>
                      <p className="md:text-xs text-[10px] font-light text-gray-400">
                        On orders over {item.orders_over} quantity
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 xl:w-[70%] p-2">
                  <div className="w-full overflow-hidden ">
                    <label className="text-sm truncate ">{item.desc}</label>
                    <div className="flex items-baseline justify-end text-end">
                      <h1 className="text-lg font-[900] text-red-600 italic">
                        <span className="text-xs">Ghc</span>
                        {item.amount}
                        {/* <span className="text-xs">.99</span> */}
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
                      {item.size.map((size, index) => (
                        <div
                          key={index}
                          className="w-[40px] md:w-[35px] h-auto md:text-sm text-xs rounded md:h-[35px] bg-[#f5f5f5] flex justify-center items-center"
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                    <button className="w-full md:w-2/4 p-2 text-xs bg-green-500 text-[#fff]  rounded-md">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg absolute left-0" />
        <CarouselNext className=" absolute right-0" />
      </Carousel>
    </div>
  );
};

export default SuperDeals;
