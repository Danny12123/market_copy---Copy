import { Input } from "@/components/ui/input";
import React from "react";

const Debate = ({ isDebateOnProduct, setIsDebateOnProduct }) => {
  return (
    <div
      className={`fixed ${
        !isDebateOnProduct ? "hidden" : "flex"
      }  top-0 left-0 right-0 bottom-0 z-[1000] bg-[rgba(0,0,0,0.15)] backdrop-blur-sm  items-center justify-center p-2`}
    >
      <div
        onClick={() => setIsDebateOnProduct(false)}
        className="w-full h-full absolute top-0 left-0"
      ></div>
      <div className="rounded-lg w-full sm:w-[480px] h-fit p-5 bg-white z-[1000]">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">Add new address</h1>
          <h3 className="text-sm">
            You have <span className="text-green-400">40 point</span>
          </h3>
        </div>
        <hr className="my-2" />
        <p className="text-xs text-gray-400">
          To talk about product, you need to have 10 ordvel point.
          <span className="text-green-400 cursor-pointer">
            {" "}
            Learn more about ordvel point.
          </span>
        </p>
        <p className="text-sm my-3 text-gray-600">
          You only have 3 attempt to talk about product.
        </p>
        <form>
          <label>How much can you pay for this product?</label>
          <div className="flex items-center gap-2">
            <Input className="my-2" placeHolder="10.00" type="number" />
            <button className="px-3 py-2 rounded-sm text-xs bg-green-500 hover:bg-green-600 text-[#fff]">
              Talk
            </button>
          </div>
        </form>
        <p className="text-xs text-gray-400">
          By clicking on save you agree to buy this product at{" "}
          <span className="text-green-500">10.00</span>
        </p>
        <div className="flex justify-end items-end gap-3 mt-5">
          <button
            onClick={() => setIsDebateOnProduct(false)}
            className="px-2 py-1 rounded-lg border text-xs border-[#eee] hover:border-[#777] text-[#000]"
          >
            Cancel
          </button>
          <button className="px-3 py-1 rounded-lg text-xs bg-green-500 hover:bg-green-600 text-[#fff]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Debate;
