import React from "react";

const GridHolder = ({ children }) => {
  return (
    <div
      className=" w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-6 gap-2"
      id="product_holder"
    >
      {children}
    </div>
  );
};

export default GridHolder;
