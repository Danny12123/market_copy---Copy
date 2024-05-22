import GridHolder from "@/app/component/Cards/GridHolder/GridHolder";
import SectionHolder from "@/app/component/Cards/SectionHolder";
import MainProduct from "@/app/component/ProductHolder/MainProduct";
import { Input } from "@/components/ui/input";
import React from "react";

const ProductSearchedPage = () => {
  return (
    <div className="md:p-5 p-2">
      <div className="w-full md:flex gap-3">
        <div className="md:w-1/5 w-full h-fit">
          <div className="w-full h-auto bg-[#fff] p-2 rounded">
            <div>
              <div>
                <h1 className="text-sm">Free shipping & services</h1>
              </div>
              <div className="my-3">
                <div className="w-full flex items-center gap-3">
                  <input type="checkbox" />
                  <p className="text-sm text-gray-500">Free shipping</p>
                </div>
              </div>
            </div>
            <hr className="my-2" />
            <div>
              <div className="flex items-center justify-between">
                <h1 className="text-sm">Price</h1>
                {/* Arrow icons */}
              </div>
              <div className="my-3">
                <div className="w-full flex items-center gap-3">
                  <div className="flex gap-2 items-center border border-[#eee] -1 rounded-md">
                    <h1 className="text-sm font-medium">Ghs</h1>
                    <input
                      type="number"
                      className="border-none outline-none w-10"
                    />
                  </div>
                  <span>-</span>
                  <div className="flex gap-2 items-center border border-[#eee] p-1 rounded-md">
                    <h1 className="text-sm font-medium">Ghs</h1>
                    <input
                      type="number"
                      className="border-none outline-none w-10"
                    />
                  </div>
                  <button className="p-2 text-xs bg-green-500 hover:bg-green-600 rounded-lg text-[#fff]">
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto">
          {/* <div className="w-full flex items-end justify-end">
            <div className="flex items-center gap-3">
              <h3 className="text-sm">View</h3>
              <div className="w-fit p-2 rounded-xl flex items-center gap-2">
                <h3 className="py-1 px-2 text-red-500 border text-xs cursor-pointer rounded-lg">
                  Gallery
                </h3>
                <h3 className="py-1 px-2 text-gray-500 border text-xs cursor-pointer rounded-lg">
                  List
                </h3>
              </div>
            </div>
          </div> */}
          <div className="w-full h-auto bg-white p-2 rounded-md">
            {/* <SectionHolder> */}
            <GridHolder>
              <MainProduct />
              <MainProduct />
              <MainProduct />
              <MainProduct />
              <MainProduct />
              <MainProduct />
              <MainProduct />
              <MainProduct />
              <MainProduct />
              <MainProduct />
              <MainProduct />
            </GridHolder>
            {/* </SectionHolder> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSearchedPage;
