import React from "react";
import SectionHolder from "../../Cards/SectionHolder";
import { CarouselProduct } from "../../ProductHolder/CarouselProduct";

const SuggestedProduct = () => {
  return (
    <div>
      <SectionHolder>
        <h1 className="text-lg font-medium ">Suggested product</h1>
        <hr className="my-2" />
        <CarouselProduct />
      </SectionHolder>
    </div>
  );
};

export default SuggestedProduct;
