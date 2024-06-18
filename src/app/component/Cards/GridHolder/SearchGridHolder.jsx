import React from "react";

const SearchGridHolder = ({ children }) => {
  return (
    <div
      className=" w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-4  gap-2"
      id="product_holder"
    >
      {children}
    </div>
  )
};

export default SearchGridHolder;
