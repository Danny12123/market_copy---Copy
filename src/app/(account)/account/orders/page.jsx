import Link from "next/link";
import React from "react";

const Order = () => {
  return (
    <div className="w-full min-h-screen bg-bg_secondary dark:bg-bg_dark_secondary flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-lg font-medium ">Thanks for shopping with us!</h1>
        <p className="text-sm">Your order has been placed successfully.</p>
        <p className="text-xs text-center">
          You have won <strong className="text-lg text-green-500">0.50</strong>{" "}
          coins.
          <br /> Buy more on Ordvel to get more coins to be able to negotiate on
          product
        </p>
        <button className="mt-3 w-fit py-2 px-3 bg-green-500 text-white rounded-full text-xs">
          <Link href="/account">Track your order</Link>
        </button>
      </div>
    </div>
  );
};

export default Order;
