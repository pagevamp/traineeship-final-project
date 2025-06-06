import React from "react";
import Header from "../../header";
import InfoBar from "../../InfoBar";
import Financial from "../../Financial";
import Rates from "../../Rates";
import Admin from "../../upload";

const page = () => {
  return (
    <>
      <div className="bf-[#F9F2FD] ml-[40px]">
        <div className="mt-[32px] mb-[48px]">
          <Header />
        </div>
        <div className="mb-[16px]">
          <InfoBar />
        </div>
        <div className="mb-[19px]">
          <Financial />
        </div>
        <div className="mb-[19px]">
          <Rates />
        </div>
        <div className="mb-[15px]">
          <Admin />
        </div>
      </div>
    </>
  );
};

export default page;
