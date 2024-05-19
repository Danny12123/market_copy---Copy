"use client";
import { useState } from "react";
import ViewAllOrders from "./component/View";
import ShippedOrders from "./component/Shipped";
import ProcessedOrders from "./component/Processed";

const MyOrders = () => {
  const [isTab, setIsTab] = useState(1);
  return (
    <div className="w-full min-h-[80vh]">
      <div>
        <ul className="my-0 p-0 flex items-center gap-4">
          <li
            onClick={() => setIsTab(1)}
            className={` border-b-2 ${
              isTab === 1 ? "border-b-green-500" : "border-b-[#fff]"
            } py-1 text-sm cursor-pointer`}
          >
            View all
          </li>
          <li
            onClick={() => setIsTab(2)}
            className={` border-b-2 ${
              isTab === 2 ? "border-b-green-500" : "border-b-[#fff]"
            } py-1 text-sm cursor-pointer`}
          >
            Shipped
          </li>
          <li
            onClick={() => setIsTab(3)}
            className={` border-b-2 ${
              isTab === 3 ? "border-b-green-500" : "border-b-[#fff]"
            } py-1 text-sm cursor-pointer`}
          >
            Processed
          </li>
        </ul>
      </div>
      <div>
        <div className={isTab === 1 ? "block py-3" : "hidden"}>
          <ViewAllOrders />
        </div>
        <div className={isTab === 2 ? "block py-3" : "hidden"}>
          <ShippedOrders />
        </div>
        <div className={isTab === 3 ? "block py-3" : "hidden"}>
          <ProcessedOrders />
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
