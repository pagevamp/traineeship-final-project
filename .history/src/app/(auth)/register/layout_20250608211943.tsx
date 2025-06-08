"use client";

import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#F9F2FF] px-[32px] py-[32px]">
      <div className="bg-[#ffffff] rounded-[20px] min-h-screen">{children}</div>
    </div>
  );
};

export default Layout;
