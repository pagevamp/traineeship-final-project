"use client";

import React from "react";

const Layout = ({
  children,
  slider,
}: {
  children: React.ReactNode;
  slider: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <div className="bg-white rounded-[20px] min-h-screen flex">

        
        <div
          className="hidden lg:block ml-[49px] mr-[215px]"
          style={{ width: "610px", height: "calc(100vh - 200px)"}}
        >
          {slider}
        </div>

        
        <div
          className="flex-1 flex items-center justify-center"
          style={{ paddingLeft: 610 }}
        >
          {children}
        </div>

      </div>
    </div>
  );
};

export default Layout;
