import React from "react";

const OrderProductHolder = ({ children }) => {
  return (
    <div
      className=" p-2 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:gap-6 gap-2"
      id="product_holder"
    >
      {children}
    </div>
  );
};

export default OrderProductHolder;
