import SectionHolder from "@/app/component/Cards/SectionHolder";
import CartItem from "@/app/component/CartItem";
import CheckOutItem from "@/app/component/CheckOutItem";
import NavigationBar from "@/app/component/NavBar/NavigationBar";
import Link from "next/link";
import React from "react";

const CheckOut = () => {
  return (
    <div className="w-full min-h-screen bg-bg_secondary dark:bg-bg_dark_secondary">
      <NavigationBar />
      <SectionHolder>
        <CheckOutItem />
        <CheckOutItem />
        <CheckOutItem />
        <div className="w-full h-auto flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-base">Total amount - Ghs 1200.35</h1>
            <div className="my2">
              <button
                // onClick={pay}
                className="w-full px-3 py-2 my-3 text-sm transition-all ease-in delay-75 hover:bg-green-600 rounded-full bg-green-500 text-[#fff]"
              >
                <Link href="/account/orders">Confirm order</Link>
              </button>
              <p className="text-xs text-gray-500 text-center">
                Upon clicking Confirm order, I confirm I have read and
                acknowledged{" "}
                <a className="text-red-500">all teams and conditions.</a>
              </p>
            </div>
          </div>
        </div>
      </SectionHolder>
    </div>
  );
};

export default CheckOut;
