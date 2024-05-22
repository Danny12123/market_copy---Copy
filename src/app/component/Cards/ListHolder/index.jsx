import React from "react";

const ListHolder = ({ children }) => {
  return (
    <div className=" w-full grid grid-cols-2 gap-2" id="product_holder">
      {children}
    </div>
  );
};

export default ListHolder;
