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
    <div className="w-full h-auto hover:dark:bg-slate-900 transition-all ease-in delay-75 rounded hover:shadow p-2 cursor-pointer">
      <div className="w-full h-[20vh] [375px]:h-[20vh] md:h-[22vh] 2xl:h-[16vh] rounded-lg relative border border-[#eee]">
        <Link href="/detail/">
          <Image src={hero1} className="w-full h-full rounded-lg" />
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
          <h4 className="truncate dark:text-gray-200 text-xs [&>span]:line-clamp-1">
            Cloth Men's short sleeved polo, business casual s
          </h4>
        </div>

        <div className="sm:flex justify-between items-center ">
          <div className="flex items-center md:justify-start justify-between">
            <div className="flex items-center">
              <span className="text-sm">4.5</span>
              <RiStarFill size={14} className=" text-green-500" />
              {/* <RiStarFill size={13} className=" text-green-500" />
              <RiStarFill size={13} className=" text-green-500" />
              <RiStarHalfLine size={13} className=" text-green-500" />*/}
              <RiStarHalfLine size={13} className=" text-green-500" />
            </div>
            <p className="text-xs text-gray-400">100+ sold</p>
          </div>
          <p className="text-xs text-gray-400 font-medium">Free shipping</p>
        </div>
        <div className="md:flex justify-between items-center md:mt-2 mt-1">
          <div className="flex items-baseline">
            <h3 className="mb:text-xl text-lg font-black">
              <span className="text-sm font-normal">Ghc</span>120.00
            </h3>
            <p className="line-through text-[10px] text-gray-400">Ghc20.00</p>
          </div>
          <h6 className="text-xs font-semibold text-right md:mt-2 mt-0 text-red-500 italic">
            Negotiable
          </h6>
        </div>
      </Link>
      {/* <div className="flex items-center">
        <button>Add to cart</button>
        <button>Buy now</button>
      </div> */}
    </div>
  );
};

export default MainProduct;
