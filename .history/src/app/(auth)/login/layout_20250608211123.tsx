"use client";

import ImageSlider from "@/features/login/Slider";
import React from "react";

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen max-w-screen bg-[#ffffff]">
        <div
          className="hidden lg:block ml-[49px] my-[55px]"
          style={{ width: "610px", height: "calc(100vh - 200px)" }}
        >
          <ImageSlider />
        </div>

       
        <div
          className="flex-1 "
          style={{ paddingLeft: 610 }}
        >
          {children}
        </div>

      </div>
    
  );
};

export default Layout;
