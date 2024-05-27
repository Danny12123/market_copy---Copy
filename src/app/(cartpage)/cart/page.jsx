"use client";
import { useState } from "react";
import SectionHolder from "@/app/component/Cards/SectionHolder";
import CartItem from "@/app/component/CartItem";
import DetailNavBar from "@/app/component/NavBar/DetailNavBar";
import ProductDetails from "@/app/component/ProductHolder/ProductDetails";
import { Input } from "@/components/ui/input";
import React from "react";
import AddNewAddressModal from "@/app/component/Modals/AddNewAddress";
import { TextInput } from "@tremor/react";
import CartSummary from "@/app/component/CartSummary";
import NavigationBar from "@/app/component/NavBar/NavigationBar";

const CartPage = () => {
  const [isAddNewAddress, setIsAddNewAddress] = useState(false);
  return (
    <>
      <NavigationBar />

      <div className="w-full min-h-screen bg-bg_secondary dark:bg-bg_dark_secondary relative">
        <SectionHolder>
          <div className="w-full h-auto md:flex gap-3 ">
            <div className="w-full h-fit">
              <CartItem />
              <CartItem />
              {/* <div className="w-full h-auto md:p-2 p-1 border border-[#eee] rounded-md">
            </div> */}
              <div className="w-full h-auto md:p-2 p-1 transition-all ease-in delay-75 hover:shadow border border-[#eee] dark:border-gray-500 rounded-md mb-3">
                <h1 className="text-base">Shipping Address</h1>
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-3 gap-2">
                  <div className="my-1">
                    <label className="text-sm">Contact name</label>
                    <TextInput
                      disabled
                      value="Danny"
                      className="text-gray-400 text-xs"
                    />
                  </div>
                  <div className="my-1">
                    <label className="text-sm">Contact phone</label>
                    <TextInput
                      disabled
                      value="0392397847"
                      className="text-gray-400 text-xs"
                    />
                  </div>
                  <div className="my-1">
                    <label className="text-sm">Country</label>
                    <TextInput
                      disabled
                      value="Ghana"
                      className="text-gray-400 text-xs"
                    />
                  </div>
                  <div className="my-1">
                    <label className="text-sm">State/City</label>
                    <TextInput
                      disabled
                      value="Accra"
                      className="text-gray-400 text-xs"
                    />
                  </div>
                  <div className="my-1">
                    <label className="text-sm">Address</label>
                    <TextInput
                      disabled
                      value="2sd accra"
                      className="text-gray-400 placeholder:text-xs"
                    />
                  </div>
                </div>
                <h1
                  className="text-sm my-2 text-blue-500 cursor-pointer"
                  onClick={() => setIsAddNewAddress(true)}
                >
                  + Add new address
                </h1>
              </div>
              {/* <div className="w-full h-auto md:p-2 p-1 transition-all ease-in delay-75 hover:shadow border border-[#eee] rounded-md mb-3"></div> */}
            </div>
            <div className="md:w-1/3 w-full md:mt-0 mt-3 h-fit md:p-2 p-1 border border-[#eee] dark:border-gray-500 rounded-md">
              <h1 className="text-base font-medium mb-3">Summary</h1>
              <CartSummary />
            </div>
          </div>
        </SectionHolder>
        {isAddNewAddress && (
          <AddNewAddressModal
            isAddNewAddress={isAddNewAddress}
            setIsAddNewAddress={setIsAddNewAddress}
          />
        )}
      </div>
    </>
  );
};

export default CartPage;
