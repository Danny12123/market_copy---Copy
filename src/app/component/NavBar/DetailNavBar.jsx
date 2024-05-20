import React from "react";

const DetailNavBar = () => {
  return (
    <div className="w-full py-2 px-5 dark:bg-slate-800 bg-white block md:flex justify-between items-center">
      <div className="flex items-center">
        <div className="w-[40px] h-[40px] rounded-full bg-slate-500 mr-2"></div>
        <div>
          <h3 className="text-sm">Shalom official shop</h3>
        </div>
      </div>
      <div className="flex items-center md:justify-center justify-between">
        <h3 className="text-sm mr-2">200 followers</h3>
        <button className="text-sm text-[#000000db] px-2 py-1 rounded-2xl bg-gray-300">
          + follow
        </button>
      </div>
    </div>
  );
};

export default DetailNavBar;
