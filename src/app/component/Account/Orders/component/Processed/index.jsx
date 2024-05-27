import { Input } from "@/components/ui/input";
import React from "react";

const ProcessedOrders = () => {
  return (
    <div>
      {" "}
      <div className="w-full h-auto justify-center items-center">
        <Input
          placeholder="Search for your order..."
          className="w-[70%] mx-auto"
        />
      </div>
    </div>
  );
};

export default ProcessedOrders;
