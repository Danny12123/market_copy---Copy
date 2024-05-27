import GridHolder from "@/app/component/Cards/GridHolder/GridHolder";
import SearchGridHolder from "@/app/component/Cards/GridHolder/SearchGridHolder";
import SectionHolder from "@/app/component/Cards/SectionHolder";
import NavigationBar from "@/app/component/NavBar/NavigationBar";
import MainProduct from "@/app/component/ProductHolder/MainProduct";
import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react";
import React from "react";

const ProductSearchedPage = () => {
  return (
    <div className="w-full min-h-screen bg-bg_secondary dark:bg-bg_dark_secondary">
      <NavigationBar />
      <div className="md:p-5 p-2">
        <div className="w-full ">
          <div className="w-full md:flex gap-3">
            <div className="md:w-1/5 w-full h-full">
              <div className="w-full h-fit bg-[#fff] dark:bg-slate-800 p-2 rounded">
                <div className="flex justify-between items-center w-full">
                  <h2 className="text-base font-medium">Filter</h2>
                  <Filter size={15} />
                </div>
                <hr className="my-2" />
                <div className="mt-2">
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
                    <h1 className="text-sm">Enter price range</h1>
                    {/* Arrow icons */}
                  </div>
                  <div className="my-3">
                    <div className="flex items-center gap-3">
                      <div>
                        <label className="text-xs">Min</label>
                        <Input placeholder="10.00" className="text-xs" />
                      </div>

                      <div>
                        <label className="text-xs">Max</label>
                        <Input placeholder="100.00" className="text-xs" />
                      </div>
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
              <div className="w-full h-auto bg-white dark:bg-slate-800 p-2 rounded-md">
                {/* <SectionHolder> */}
                <SearchGridHolder>
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
                </SearchGridHolder>
                {/* </SectionHolder> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSearchedPage;
