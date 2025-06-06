import SearchBar from "/Users/stutiupreti/Arctern-Frontend/src/components/ui/searchbar.tsx";
import React from "react";
import Status from "./status";
import InfoBar from "./InfoBar";
import CustomerInputs from "./Financial";
import Image from "next/image";
import Operations from "./Operations";
import Rates from "./Rates";
import Header from "./header";
import InfoBox from "./InfoBox";
import Admin from "./upload";
import BankDetails from "./bankDetails";

const Customer = () => {
  return (
    <div className="bf-[#F9F2FD] ml-[40px]">
      <div className="my-[25px]">
        <InfoBox />
      </div>
      <SearchBar
        placeholder="Search for user"
        className="w-[822px]"
        firstCircleContent={
          <Image src="/Menu.svg" alt="Menu" width={20} height={20} />
        }
        secondCircleContent={
          <Image src="/Download.svg" alt="profile" width={20} height={18} />
        }
      />
      <div className="mt-[25px]">
        <Status />
      </div>
    </div>
  );
};

export default Customer;
