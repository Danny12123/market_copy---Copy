"use client";
import { useState } from "react";
import Image from "next/image";
import hero1 from "../../../../../public/images/products/clothes-1.jpg";

import { RiHeart2Fill, RiHeartLine } from "@remixicon/react";
import { RiStarFill, RiStarHalfLine } from "@remixicon/react";
import Link from "next/link";

const MainProduct = () => {
  const [isLiked, setIsLiked] = useState(false);
  const handelLike = () => setIsLiked(!isLiked);
  return (
    <div className="w-full h-auto hover:bg-[#f5f5f5] rounded shadow p-2 cursor-pointer">
      <div className="w-full h-[26vh] md:h-[18vh] 2xl:h-[14vh] rounded relative">
        <Link href="detail/">
          <Image src={hero1} className="w-full h-full rounded" />
        </Link>
        <div className=" absolute top-2 right-2" onClick={handelLike}>
          {/* <Image
                  src={heartLine }
                  className=" text-green-500"
                /> */}
          {isLiked ? (
            <RiHeart2Fill className=" text-green-500" />
          ) : (
            <RiHeartLine className=" text-black" />
          )}
        </div>
      </div>
      <Link href="detail/">
        <div className="flex justify-between items-center py-1">
          <h4 className="truncate">Cloth </h4>
        </div>

        <div className="flex justify-between items-center ">
          <div className="flex items-center">
            <div className="flex items-center">
              <RiStarFill size={13} className=" text-green-500" />
              <RiStarFill size={13} className=" text-green-500" />
              <RiStarFill size={13} className=" text-green-500" />
              <RiStarHalfLine size={13} className=" text-green-500" />
              <RiStarHalfLine size={13} className=" text-green-500" />
            </div>
            <p className="text-xs text-gray-400">100+ sold</p>
          </div>
          <p className="text-xs text-gray-400 font-medium">Free shipping</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-baseline">
            <h3 className="text-xl font-black">
              <span className="text-sm font-normal">Ghc</span>120.00
            </h3>
            <p className="line-through text-[10px] text-gray-400">Ghc20.00</p>
          </div>
          <h6 className="text-xs font-semibold text-right mt-2 text-red-500 italic">
            Negotiable
          </h6>
        </div>
      </Link>
    </div>
  );
};

export default MainProduct;
