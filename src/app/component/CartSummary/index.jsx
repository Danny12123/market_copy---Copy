import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
// import PaystackPop from "@paystack/inline-js";

const CartSummary = () => {
  // const pay = async () => {
  //   const paystack = new PaystackPop();
  //   paystack.newTransaction({
  //     // key: "pk_live_e286893e885cd92c8d302bd811d9e23e6ef14642",
  //     key: "sk_test_2a2f1a669390d6a32eb312bab23018868297f5b0",
  //     amount: 10 * 100,
  //     FullName: "Danny",
  //     Phone: "0923557676",
  //     email: "dan@gmail.com",
  //     onSuccess(transaction) {
  //       let message = `Payment Complete! Reference ${transaction.reference}`;
  //       //  setDoc(doc(db, "donate", donateData.id), donateData);
  //       alert(message);
  //     },
  //     onCancel() {
  //       alert("You are about to cancel transaction");
  //     },
  //   });
  // };
  return (
    <div>
      <div className="w-full mb-2 flex items-center justify-between">
        <h3 className="text-xs text-gray-500">Total item cost</h3>
        <h3 className="text-xs text-gray-500">Ghs 100.00</h3>
      </div>
      <div className="w-full mb-2 flex items-center justify-between">
        <h3 className="text-xs text-gray-500">Promo code</h3>
        <Input placeholder="Enter code" className="w-[30%] p-2" />
      </div>
      <div className="w-full mb-2 flex items-center justify-between">
        <h3 className="text-xs text-gray-500">Total shipping</h3>
        <h3 className="text-xs text-gray-500">Ghs 10.00</h3>
      </div>
      <hr className="my-2" />
      <div className="w-full mb-2 flex items-center justify-between">
        <h3 className="text-base font-medium">Total </h3>
        <div className=" text-end">
          <h3 className="text-lg font-medium">Ghs 10.00</h3>
          <h3 className="text-xs text-gray-500">US$10.00</h3>
        </div>
      </div>
      <div className="my-1">
        <h4 className="text-xs text-green-500">Shipping details</h4>
        <p className="text-xs text-gray-400">
          Estimated delivery on{" "}
          <span className="text-xs text-[#000]">June 15</span>
        </p>
      </div>
      <div className="">
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
        <button
          // onClick={pay}
          className="w-full px-3 py-2 my-3 text-sm transition-all ease-in delay-75 hover:bg-green-600 rounded-full bg-green-500 text-[#fff]"
        >
          <Link href="/checkout">Place order</Link>
        </button>
        <p className="text-xs text-gray-500 text-center">
          Upon clicking Place order, I confirm I have read and acknowledged{" "}
          <a className="text-red-500">all teams and conditions.</a>
        </p>
      </div>
    </div>
  );
};

export default CartSummary;
