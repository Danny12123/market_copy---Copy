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
import Product from "../../../../../public/images/products/jacket-2.jpg";
import Image from "next/image";
import TopProductHolder from "../TopItems";

export function CarouselProduct() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <Carousel plugins={[plugin.current]} className="w-full ">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="pl-1 basis-1/2 md:basis-1/4 lg:basis-1/5"
          >
            <div className="p-1">
              <TopProductHolder />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" absolute left-0" />
      <CarouselNext className=" absolute right-0" />
    </Carousel>
  );
}
