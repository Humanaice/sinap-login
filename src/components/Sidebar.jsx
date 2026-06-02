import React from "react";

const Sidebar = ({ children }) => {
  return (
    <div className="rounded-s-2xl bg-white shadow-lg flex flex-col px-15  w-full lg:w-auto">
      {children}
    </div>
  );
};

export default Sidebar;
