"use client";
import { useState } from "react";
import SectionHolder from "../../Cards/SectionHolder";
import { RiStarFill, RiStarHalfLine, RiCheckFill } from "@remixicon/react";
import { RiHeart2Fill, RiHeartLine } from "@remixicon/react";
import Image from "next/image";
import Pic1 from "../../../../../public/images/products/clothes-1.jpg";
import Pic2 from "../../../../../public/images/products/clothes-2.jpg";
import Pic3 from "../../../../../public/images/products/clothes-3.jpg";
import ProductRateDetails from "./ProductRate";
import Descriptions from "./ProductDescription/Description";
import Specification from "./ProductDescription/Specification";
import RelatedProduct from "../../TopSections/RelatedProduts";
import SuggestedProduct from "../../TopSections/SuggestedProduct";
import Debate from "../../Modals/DebateOnProduct";
import { FileCheck } from "lucide-react";

const productImage = [Pic1, Pic2, Pic3];
const ProductDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDescOrSpec, setIsDescOrSpec] = useState(1);
  const [isDebateOnProduct, setIsDebateOnProduct] = useState(false);
  const [isSizeActive, setIsSizeActive] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantityHandler = () => {
    if (quantity === 1) {
      return;
    } else {
      setQuantity(...quantity, quantity + 1);
    }
  };

  const handleSmallImageClicked = (index) => setCurrentImageIndex(index);

  const handleNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productImage.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePrevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productImage.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className=" h-auto">
      {/* <SectionHolder> */}
      <div className="w-full h-full md:flex gap-2 py-2 md:px-3 px-2 md:pb-0 pb-[70px]">
        <div className="w-full sm:flex gap-2">
          {/* Product images */}
          <div
            id="product_images"
            className="sm:w-[35%] max-[450px]:w-full w-[70%] m-auto h-auto overflow-hidden"
          >
            <div className="relative">
              <div
                className="w-full h-[40vh] flex transition-all delay-75 ease-in-out rounded  object-cover"
                style={{
                  transform: `translateX(-${currentImageIndex * 100}%)`,
                }}
              >
                {productImage.map((item, index) => (
                  <Image
                    key={index}
                    src={item}
                    className="w-full h-full rounded"
                  />
                ))}
              </div>
              <div className="w-full px-3 flex justify-between items-center absolute translate-y-[-50%] top-[50%] ">
                <div onClick={handlePrevSlide}>L</div>
                <div onClick={handleNextSlide}>R</div>
              </div>
            </div>
            <div
              id="small_image_holder"
              className="flex gap-3 justify-center items-center mt-3"
            >
              {productImage.map((item, index) => (
                <div
                  key={index}
                  className={`w-[50px] h-[45px] rounded shadow object-cover ${
                    currentImageIndex === index && "border border-gray-400 "
                  }`}
                >
                  <Image
                    src={item}
                    className="w-full h-full rounded"
                    onClick={() => handleSmallImageClicked(index)}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* product details */}
          <div className="p-2 sm:w-[65%] sm:mt-0 mt-2 rounded dark:bg-slate-800 bg-[#fff] shadow w-full h-fit">
            <p className="text-sm text-gray-500 dark:text-gray-300 font-medium">
              Men's short sleeved polo, business casual shirt, tight
              fitting,fashionable, summer novelty, 2024
            </p>
            <div className="my-2 ">
              <div id="product_amount" className="my-2 flex items-baseline">
                <h1 className="text-2xl font-bold text-green-700">
                  <span className="text-xs">Ghc</span>
                  100<span className="text-xs">.99</span>
                </h1>
                <p className="line-through text-[10px] text-gray-500 ml-1">
                  Ghc125.99
                </p>
                <h6 className="text-xs ml-2">200+ sold</h6>
              </div>
              <div className="my-2">
                <p className="text-xs">
                  This product is negotiable. Click{" "}
                  <span
                    className="text-red-500 cursor-pointer"
                    onClick={() => setIsDebateOnProduct(true)}
                  >
                    here
                  </span>{" "}
                  to negotiate
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-baseline">
                  <RiStarFill size={13} className=" text-yellow-400" />
                  <RiStarFill size={13} className=" text-yellow-400" />
                  <RiStarFill size={13} className=" text-yellow-400" />
                  <RiStarHalfLine size={13} className=" text-yellow-400" />
                  <RiStarHalfLine size={13} className=" text-yellow-400" />
                  <a href="#rate">
                    <span className="ml-1 md:text-xs font-extrabold text-[10px] text-gray-600">
                      4.5 | 20k Reviews
                    </span>
                  </a>
                </div>
                <button>
                  <RiHeart2Fill />
                </button>
              </div>
            </div>

            <hr className="my-2" />
            <div>
              <h3 className="text-sm font-medium">Product size</h3>
              <div className="flex items-center gap-3 my-2">
                <div
                  className={`min-w-[32px] cursor-pointer w-fit  p-2 h-[30px]  hover:bg-slate-200 transition-all ease-in delay-75 flex justify-center items-center rounded border ${
                    isSizeActive
                      ? "dark:bg-slate-800 border-slate-300 bg-slate-200 hover:dark:bg-slate-900 dark:border-gray-500"
                      : "border-gray-300 dark:border-gray-500 bg-[#f5f5f5f5] dark:bg-slate-400 hover:dark:bg-slate-900"
                  }  `}
                >
                  <h4 className="text-sm">sm</h4>
                </div>
                <div className="min-w-[32px] cursor-pointer w-fit p-2 h-[30px] dark:bg-slate-800 bg-[#f5f5f5f5] hover:bg-slate-200 hover:dark:bg-slate-900 transition-all ease-in delay-75 flex justify-center items-center rounded border dark:border-gray-500 border-gray-300 ">
                  <h4 className="text-xs">lg</h4>
                </div>
                <div className="min-w-[32px] cursor-pointer w-fit p-2 h-[30px] dark:bg-slate-800 bg-[#f5f5f5f5] hover:bg-slate-200 hover:dark:bg-slate-900 transition-all ease-in delay-75 flex justify-center items-center rounded border dark:border-gray-500 border-gray-300 ">
                  <h4 className="text-xs">xl</h4>
                </div>
                <div className="min-w-[32px] cursor-pointer w-fit p-2 h-[30px] dark:bg-slate-800 bg-[#f5f5f5f5] hover:bg-slate-200 hover:dark:bg-slate-900 transition-all ease-in delay-75 flex justify-center items-center rounded border dark:border-gray-500 border-gray-300 ">
                  <h4 className="text-xs">xxl</h4>
                </div>
                <div className="min-w-[32px] cursor-pointer w-fit p-2 h-[30px] dark:bg-slate-800 bg-[#f5f5f5f5] hover:bg-slate-200 hover:dark:bg-slate-900 transition-all ease-in delay-75 flex justify-center items-center rounded border dark:border-gray-500 border-gray-300 ">
                  <h4 className="text-xs">xxxxl</h4>
                </div>
              </div>
              <h3 className="text-xs mt-3">
                <span className="text-red-400 font-medium">20%</span> off if you
                buy 10+
              </h3>
              <div className="flex justify-between items-center gap-2 mb-3 mt-1">
                <div className="flex items-center gap-3">
                  <button className="px-3 py-1 border border-gray-300 dark:border-gray-500 rounded hover:bg-slate-200 hover:dark:bg-slate-900  transition-all ease-in delay-75">
                    -
                  </button>
                  <h2 className="text-sm">{quantity}</h2>
                  <button
                    onClick={increaseQuantityHandler}
                    className="px-3 py-1 border border-gray-300 rounded dark:border-gray-500 hover:bg-slate-200 hover:dark:bg-slate-900  transition-all ease-in delay-75"
                  >
                    +
                  </button>
                </div>
                <div className="w-fit h-auto border border-[#eee] dark:border-gray-500 rounded-xl p-1 flex items-center gap-2">
                  <button
                    onClick={() => setIsDescOrSpec(1)}
                    className={`py-2 px-3  ${
                      isDescOrSpec === 1 && "bg-[#f5f5f5] dark:bg-slate-900"
                    } text-sm rounded-lg transition-all ease-in delay-75 border border-transparent  hover:border-gray-300`}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => setIsDescOrSpec(2)}
                    className={`py-2 px-3  ${
                      isDescOrSpec === 2 && "bg-[#f5f5f5] dark:bg-slate-900"
                    } text-sm rounded-lg transition-all ease-in delay-75 border border-transparent  hover:border-gray-300`}
                  >
                    Specification
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center gap-3">
              <button className="sm:w-2/3 w-full p-2 rounded-sm bg-green-600  hover:bg-green-700 transition-all ease-in delay-75 text-[#fff]  text-sm">
                Add to cart
              </button>
              <button className="sm:w-1/3 w-full p-2 rounded-sm border border-green-600 hover:bg-green-700 transition-all ease-in delay-75 text-[#000] hover:text-[#fff] text-sm">
                Buy now
              </button>
            </div>
          </div>
        </div>
        {/* display delivery details */}
        <div className="md:w-1/3 md:mt-0 my-4 w-full md:h-auto h-10 ">
          <div className="w-full h-auto p-2 bg-slate-50 border dark:bg-slate-800 border-gray-300 dark:border-gray-500 rounded-lg">
            <div className="w-full flex items-center justify-between">
              <h2 className="text-sm font-medium">Ship to</h2>
              <div>
                <p className="text-sm text-gray-400">Ghana</p>
              </div>
            </div>
            <hr className="my-2" />
            <div>
              <div className="w-full flex items-center justify-between">
                <h2 className="text-sm font-medium">Delivery</h2>
                <h4 className="text-sm font-medium py-1 text-red-500">
                  Free shipping
                </h4>
              </div>
              <p className="text-xs text-gray-400 ">
                Estimated delivery on June 12
              </p>
            </div>
            <hr className="my-2" />
            {/* About shop */}
            <div className="w-full">
              <h2 className="text-sm mb-2">Shop details</h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-[30px] h-[30px] object-cover rounded-full">
                    <Image
                      src={Pic2}
                      alt="profile"
                      width={100}
                      height={100}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <h1 className="text-sm text-gray-500 dark:text-gray-400">
                    Shalom's home |{" "}
                    <span className="text-xs">102 followers</span>
                  </h1>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-green-600 italic">Verified</p>
                  <FileCheck className="text-green-400" size={17} />
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <button className="text-xs w-[30%] py-1 px-2 border rounded-md dark:border-gray-500 mt-3">
                View shop
              </button>
              <button className="text-xs w-[20%] py-1 px-2 border rounded-md dark:border-gray-500 mt-3">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
      <SectionHolder>
        {/* display product specification and descriptions */}
        <div className="w-full h-auto  md:p-3">
          <h1 className="text-lg font-medium">Details about this product</h1>
          <hr className="my-2 text-black" />
          <div
            className={
              isDescOrSpec === 1
                ? "block transition-all ease-in delay-75"
                : "hidden transition-all ease-in delay-75"
            }
          >
            <Descriptions />
          </div>
          <div
            className={
              isDescOrSpec === 2
                ? "block transition-all ease-in delay-75"
                : "hidden transition-all ease-in delay-75"
            }
          >
            <Specification />
          </div>
        </div>
        {/* display product ratings */}
        <ProductRateDetails />
      </SectionHolder>

      {/* Display related product to the selected product */}
      <RelatedProduct />
      {/* Display suggested product to the selected product */}
      <SuggestedProduct />
      {isDebateOnProduct && (
        <Debate
          isDebateOnProduct={isDebateOnProduct}
          setIsDebateOnProduct={setIsDebateOnProduct}
        />
      )}
    </div>
  );
};

export default ProductDetails;
