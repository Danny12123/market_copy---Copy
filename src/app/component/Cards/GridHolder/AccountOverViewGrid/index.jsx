import React from "react";

const AccountOverViewGrid = ({ children }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {children}
    </div>
  );
};

export default AccountOverViewGrid;
