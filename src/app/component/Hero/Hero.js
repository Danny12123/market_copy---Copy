import { RiCarFill } from "@remixicon/react";
import hero1 from "../../../../public/images/banner-1.jpg";
import hero2 from "../../../../public/images/banner-2.jpg";
import hero3 from "../../../../public/images/banner-3.jpg";
import hero4 from '../../../../public/images/blog-1.jpg'
import CarouselBanner from '../Carousel/Carousel'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

import { RiHeart2Fill, RiHeartLine } from '@remixicon/react'
import { RiStarFill, RiStarHalfLine, RiCheckFill } from '@remixicon/react'
import SuperDeals from '../TopSections/SuperDeals'

const Hero = () => {
  const slider = [hero4, hero4, hero4]
  return (
    <div className="w-full lg:w-[90%] 2xl:w-[60%] flex justify-center items-center mx-auto h-auto">
      <div className="w-full flex  h-full md:px-3 md:py-3 px-2 py-2 ">
        <SuperDeals />
        <div className="w-full max-[425px]:hidden h-full ml-2 rounded-md shadow object-cover ">
          <div className=" w-full h-full">
            <CarouselBanner slider={slider} />
          </div>
        </div>
      </div>
      {/* <CarouselBanner slider={slider} /> */}
    </div>
  )
}

export default Hero;
