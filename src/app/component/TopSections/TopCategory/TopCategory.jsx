"use client";
import SectionHolder from "../../Cards/SectionHolder";
import { useState, useEffect } from "react";

import product1 from "../../../../../public/images/products/clothes-1.jpg";
import product2 from "../../../../../public/images/products/clothes-2.jpg";
import product3 from "../../../../../public/images/products/clothes-3.jpg";

import Image from "next/image";
import { CarouselProduct } from "../../ProductHolder/CarouselProduct";

const products = [product1, product2, product3, product1, product2, product3];
const TopCategory = () => {
  return (
    <div>
      <SectionHolder>
        <h1 className="text-lg font-medium py-2">Top category</h1>
        <hr />
        <CarouselProduct />
      </SectionHolder>
    </div>
  );
};

export default TopCategory;
