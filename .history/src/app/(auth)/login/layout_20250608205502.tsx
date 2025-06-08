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
    <div className="min-h-screen w-full bg-[#ffffff] px-[32px] py-[32px]">
      <div className="relative bg-white rounded-[20px] min-h-screen flex">
        
        <div
          className="hidden lg:block absolute left-[49px] top-[55px] z-10"
          style={{ width: "610px", height: "calc(100vh - 110px)" }} 
        >
          {slider}
        </div>

       
        <div className="flex-1 flex items-center justify-center ml-[610px] lg:ml-[659px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
