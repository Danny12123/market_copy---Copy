"use client";
import { useState } from "react";
import SectionHolder from "../Cards/SectionHolder";
import GridHolder from "../Cards/GridHolder/GridHolder";
import Image from "next/image";
import hero1 from "../../../../public/images/products/clothes-1.jpg";
import hero2 from "../../../../public/images/banner-2.jpg";
import heartFill from "../../../../public/images/icons/heart-fill.svg";
import heartLine from "../../../../public/images/icons/heart-line.svg";
import { RiHeart2Fill, RiHeartLine } from "@remixicon/react";
import { RiStarFill, RiStarHalfLine } from "@remixicon/react";
import MainProduct from "../ProductHolder/MainProduct";
import { products } from '@/app/utilites/products'
const AllProduct = () => {
  const [isLiked, setIsLiked] = useState(false)
  const handelLike = () => setIsLiked(!isLiked)
  return (
    <div className="">
      <SectionHolder>
        <div>
          <h1 className="text-lg font-medium py-2">All product</h1>
          <hr />
        </div>
        <GridHolder>
          {products.map((item, index) => (
            <MainProduct key={index} product={item} />
          ))}
        </GridHolder>
      </SectionHolder>
    </div>
  )
}

export default AllProduct;
