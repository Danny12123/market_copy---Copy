"use client";
import * as React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

const CarouselBanner = ({ slider }) => {
  const [imageToShow, setImageToShow] = useState(0)
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  )
  const prev = () =>
    setImageToShow((cunn) =>
      imageToShow === 0 ? slider.length - 1 : imageToShow - 1,
    )
  const next = () =>
    setImageToShow((cunn) =>
      imageToShow === slider.length - 1 ? 0 : imageToShow + 1,
    )
  return (
    <Carousel plugins={[plugin.current]} className="w-full h-full">
      <CarouselContent className="-ml-1">
        {slider.map((img, index) => (
          <CarouselItem key={index} className="pl-1 basis-1/1 w-full h-full">
            <Card>
              <Image
                src={img}
                alt="Banner"
                width={100}
                height={100}
                className="w-full h-full rounded-lg"
              />
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" absolute left-0" />
      <CarouselNext className=" absolute right-0" />
    </Carousel>
    // <div className="w-full h-auto overflow-hidden relative">
    //   <div
    //     className="w-full flex transition-transform ease-out duration-500"
    //     style={{ transform: `translateX(-${imageToShow * 100}%)` }}
    //   >
    //     {slider}
    //   </div>
    //   <div className=" absolute inset-0 flex justify-between items-center p-4">
    //     <button className="bg-[#fff]" onClick={prev}>
    //       L
    //     </button>
    //     <button className="bg-[#fff]" onClick={next}>
    //       R
    //     </button>
    //   </div>
    // </div>
  )
}

export default CarouselBanner
