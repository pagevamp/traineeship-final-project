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
    <div className="min-h-screen bg-[#ffffff] px-[32px] py-[32px]">
      <div className="bg-white rounded-[20px] min-h-screen flex">
        <div
          className="pl-[49px] py-[55px] hidden lg:block"
          style={{ width: "610px" }}
        >
          {slider}
        </div>

        <div className="flex-1 flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
