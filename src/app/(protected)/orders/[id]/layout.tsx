import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen md:bg-transparent lg:bg-[#F9F2FF]">
      <div className="min-h-screen  md:bg-transparent lg:bg-[#F9F2FF] p-3 sm:p-4">
        <div className="bg-[#ffffff] rounded-[20px] min-h-screen py-4 lg:py-6 px-4 lg:px-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
