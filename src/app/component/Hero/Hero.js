import { RiCarFill } from "@remixicon/react";
import hero1 from "../../../../public/images/banner-1.jpg";
import hero2 from "../../../../public/images/banner-2.jpg";
import hero3 from "../../../../public/images/banner-3.jpg";
import hero4 from "../../../../public/images/products/clothes-1.jpg";
import Carousel from "../Carousel/Carousel";
import Image from "next/image";

import { RiHeart2Fill, RiHeartLine } from "@remixicon/react";
import { RiStarFill, RiStarHalfLine, RiCheckFill } from "@remixicon/react";
import SuperDeals from "../TopSections/SuperDeals";

const Hero = () => {
  const slider = [hero1, hero2, hero3];
  return (
    <div className="w-full lg:w-[90%] 2xl:w-[60%] flex justify-center items-center mx-auto h-auto">
      <div className="w-full flex md:h-[45vh] h-auto md:px-3 md:py-3 px-2 py-2 ">
        <SuperDeals />
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
