"use client";
import { useState } from "react";
import SectionHolder from "@/app/component/Cards/SectionHolder";
import CartItem from "@/app/component/CartItem";
import DetailNavBar from "@/app/component/NavBar/DetailNavBar";
import ProductDetails from "@/app/component/ProductHolder/ProductDetails";
import { Input } from "@/components/ui/input";
import React from "react";
import AddNewAddressModal from "@/app/component/Modals/AddNewAddress";

const CartPage = () => {
  const [isAddNewAddress, setIsAddNewAddress] = useState(false);
  return (
    <div className=" relative">
      <SectionHolder>
        <div className="w-full h-auto md:flex gap-3 ">
          <div className="w-full h-fit">
            <CartItem />
            <CartItem />
            {/* <div className="w-full h-auto md:p-2 p-1 border border-[#eee] rounded-md">
            </div> */}
            <div className="w-full h-auto md:p-2 p-1 transition-all ease-in delay-75 hover:shadow border border-[#eee] rounded-md mb-3">
              <h1 className="text-base">Shipping Address</h1>
              <div>
                <h2 className="text-xs text-gray-500">Contact name: Danny</h2>
                <h2 className="text-xs text-gray-500">Contact phone: Danny</h2>
                <h2 className="text-xs text-gray-500">Country: Ghana</h2>
                <h2 className="text-xs text-gray-500">State/rigion: Accra</h2>
                <h2 className="text-xs text-gray-500">Address: 2sd Accra </h2>
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
          <div className="md:w-1/3 w-full md:mt-0 mt-3 h-fit md:p-2 p-1 border border-[#eee] rounded-md">
            <h1 className="text-base font-medium mb-3">Summary</h1>
            <div className="w-full mb-2 flex items-center justify-between">
              <h3 className="text-xs text-gray-500">Total item cost</h3>
              <h3 className="text-xs text-gray-500">Ghs 100.00</h3>
            </div>
            <div className="w-full mb-2 flex items-center justify-between">
              <h3 className="text-xs text-gray-500">Promo code</h3>
              <input
                type="text"
                placeholder="Enter your promo code"
                className="w-fit outline-none border-none text-xs text-end"
              />
            </div>
            <div className="w-full mb-2 flex items-center justify-between">
              <h3 className="text-xs text-gray-500">Total shipping</h3>
              <h3 className="text-xs text-gray-500">Ghs 10.00</h3>
            </div>
            <hr className="my-3" />
            <div className="w-full mb-2 flex items-center justify-between">
              <h3 className="text-base font-medium">Total </h3>
              <div className=" text-end">
                <h3 className="text-lg font-medium">Ghs 10.00</h3>
                <h3 className="text-xs text-gray-500">US$10.00</h3>
              </div>
            </div>
            <div className="md:my-3 my-1">
              <h4 className="text-xs text-green-500">Shipping details</h4>
              <p className="text-xs text-gray-400">
                Estimated delivery on{" "}
                <span className="text-xs text-[#000]">June 15</span>
              </p>
            </div>
            <div className="my2">
              <div className="flex items-center">
                {/* safe icon */}
                <h1 className="text-base font-semibold">
                  <span className="text-green-600">Ordvel</span>Express
                </h1>
              </div>
              <p className="text-xs text-gray-400">
                We keep your information and payment safe
              </p>
              {/* payment icons */}
            </div>
            <div className="my2">
              <button className="w-full px-3 py-2 my-3 text-sm transition-all ease-in delay-75 hover:bg-green-600 rounded-full bg-green-500 text-[#fff]">
                Place order
              </button>
              <p className="text-xs text-gray-500 text-center">
                Upon clicking Place order, I confirm I have read and
                acknowledged{" "}
                <a className="text-red-500">all teams and conditions.</a>
              </p>
            </div>
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
  );
};

export default CartPage;
