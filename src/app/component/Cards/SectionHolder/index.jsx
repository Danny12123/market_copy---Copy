import React from "react";

const SectionHolder = ({ children }) => {
  return (
    <div className="w-full lg:w-[90%] 2xl:w-[60%] flex justify-center items-center mx-auto h-auto md:px-3 md:py-3 px-2 py-2">
      <div className="w-full h-auto bg-[#fff] p-2 shadow rounded ">
        {children}
      </div>
    </div>
  );
};

export default SectionHolder;
