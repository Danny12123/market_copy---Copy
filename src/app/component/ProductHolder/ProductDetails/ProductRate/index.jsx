import React from "react";
import { RiStarFill, RiStarHalfLine, RiCheckFill } from "@remixicon/react";

const ProductRateDetails = () => {
  return (
    <div className="w-full h-auto" id="rate">
      <div className="mb-2">
        <h2 className="text-lg font-medium">Customer Reviews (200)</h2>
        <hr className="my-2" />
      </div>
      <div className="w-full h-auto md:flex gap-2">
        <div className="w-full sm:flex gap-3">
          <div className="md:w-1/3 w-full md:block flex gap-4">
            <div>
              <h1 className="text-[50px] font-black">4.3</h1>
              <div className="flex items-center gap-1">
                <RiStarFill size={20} className=" text-yellow-400" />
                <RiStarFill size={20} className=" text-yellow-400" />
                <RiStarFill size={20} className=" text-yellow-400" />
              </div>
              <p className="text-sm text-gray-500">
                All from verified customers
              </p>
            </div>
            <div className="my-3 w-full">
              <div className="flex items-center justify-center w-full gap-2 my-2">
                <h3 className="flex-none text-sm text-gray-500">5 star</h3>
                <div className="w-full h-auto bg-slate-300 rounded-md">
                  <div className="w-[80%] h-2 bg-green-600 rounded-md"></div>
                </div>
                <h3 className="flex-none text-sm text-gray-500">200</h3>
              </div>
              <div className="flex items-center justify-center w-full gap-2 my-2">
                <h3 className="flex-none text-sm text-gray-500">4 star</h3>
                <div className="w-full h-auto bg-slate-300 rounded-md">
                  <div className="w-[60%] h-2 bg-green-600 rounded-md"></div>
                </div>
                <h3 className="flex-none text-sm text-gray-500">100</h3>
              </div>
              <div className="flex items-center justify-center w-full gap-2 my-2">
                <h3 className="flex-none text-sm text-gray-500">3 star</h3>
                <div className="w-full h-auto bg-slate-300 rounded-md">
                  <div className="w-[40%] h-2 bg-green-600 rounded-md"></div>
                </div>
                <h3 className="flex-none text-sm text-gray-500">80</h3>
              </div>
            </div>
          </div>
          <div
            className="w-full h-[27vh] overflow-y-auto"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            s
          >
            <div className="w-full h-auto  flex items-center justify-between">
              <h2 className="text-sm text-gray-400">Sell all</h2>
              <div></div>
            </div>
            <div className="w-full h-auto md:p-3 my-2 md:my-0 rounded-md bg-white dark:bg-slate-800">
              <div className="w-full flex gap-3 mb-2">
                <div className="w-[30px] h-[30px] bg-slate-400 rounded-full shadow"></div>
                <div>
                  <div className="flex items-center gap-3">
                    <h1 className="text-sm font-medium">Danny</h1>
                    <div className="flex items-center gap-1">
                      <RiStarFill size={15} className=" text-yellow-400" />
                      <RiStarFill size={15} className=" text-yellow-400" />
                      <RiStarFill size={15} className=" text-yellow-400" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    This product was every good
                  </p>
                </div>
              </div>
              <hr className="my-3" />
              <div className="w-full flex gap-3 mb-2">
                <div className="w-[35px] h-[35px] bg-slate-400 rounded-full shadow"></div>
                <div>
                  <div className="flex items-center gap-3">
                    <h1 className="text-base font-medium">Danny</h1>
                    <div className="flex items-center gap-1">
                      <RiStarFill size={15} className=" text-yellow-400" />
                      <RiStarFill size={15} className=" text-yellow-400" />
                      <RiStarFill size={15} className=" text-yellow-400" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    This product was every good
                  </p>
                </div>
              </div>
              <hr className="my-3" />
              <div className="w-full flex gap-3 mb-2">
                <div className="w-[35px] h-[35px] bg-slate-400 rounded-full shadow"></div>
                <div>
                  <div className="flex items-center gap-3">
                    <h1 className="text-base font-medium">Danny</h1>
                    <div className="flex items-center gap-1">
                      <RiStarFill size={15} className=" text-yellow-400" />
                      <RiStarFill size={15} className=" text-yellow-400" />
                      <RiStarFill size={15} className=" text-yellow-400" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    This product was every good
                  </p>
                </div>
              </div>
              <hr className="my-3" />
              <div className="w-full flex gap-3 mb-2">
                <div className="w-[35px] h-[35px] bg-slate-400 rounded-full shadow"></div>
                <div>
                  <div className="flex items-center gap-3">
                    <h1 className="text-base font-medium">Danny</h1>
                    <div className="flex items-center gap-1">
                      <RiStarFill size={15} className=" text-yellow-400" />
                      <RiStarFill size={15} className=" text-yellow-400" />
                      <RiStarFill size={15} className=" text-yellow-400" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    This product was every good
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 md:mt-0 my-4 w-full md:h-auto h-10">
          {' '}
          Top product...
        </div>
      </div>
    </div>
  )
};

export default ProductRateDetails;
