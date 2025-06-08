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
    <div className="min-h-screen max-w-ecreen  bg-[#ffffff]">
      <div className="bg-white  rounded-[20px] min-h-screen flex">

        
        <div
          className="hidden lg:block ml-[49px] my-[55px]"
          style={{ width: "610px", height: "calc(100vh - 200px)"}}
        >
          {slider}
        </div>

        
        <div
          className="px-[215px]"
          style={{ paddingLeft: 610 }}
        >
          {children}
        </div>

      </div>
    </div>
  );
};

export default Layout;
