"use client";
import { useState } from "react";

const Carousel = ({ children: slider }) => {
  const [imageToShow, setImageToShow] = useState(0);

  const prev = () =>
    setImageToShow((cunn) =>
      imageToShow === 0 ? slider.length - 1 : imageToShow - 1
    );
  const next = () =>
    setImageToShow((cunn) =>
      imageToShow === slider.length - 1 ? 0 : imageToShow + 1
    );
  return (
    <div className="w-full h-auto overflow-hidden relative">
      <div
        className="w-full flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${imageToShow * 100}%)` }}
      >
        {slider}
      </div>
      <div className=" absolute inset-0 flex justify-between items-center p-4">
        <button className="bg-[#fff]" onClick={prev}>
          L
        </button>
        <button className="bg-[#fff]" onClick={next}>
          R
        </button>
      </div>
    </div>
  );
};

export default Carousel;
