import React from "react";

const HolderTransparent = ({ children }) => {
  return (
    <div className="w-full lg:w-[90%] 2xl:w-[60%] flex justify-center items-center mx-auto h-auto md:px-3 md:py-3 px-2 py-2">
      <div className="w-full h-auto  p-2  rounded ">{children}</div>
    </div>
  );
};

export default HolderTransparent;
