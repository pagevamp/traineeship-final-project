import React from "react";
import DepartmentDetails from "./infoCard";
import SearchBar from "@/components/ui/searchbar";
import Image from "next/image";
import DepartmentStatus from "./status";

const page = () => {
  return (
    <>
      <div className="bf-[#F9F2FD] ml-[43px]">
        <div className="mt-[33px] mb-[43px]">
          <DepartmentDetails />
        </div>
        <div>
          <SearchBar
            placeholder="Search for Department"
            className="w-[822px]"
            firstCircleContent={
              <Image src="/Menu.svg" alt="Menu" width={20} height={20} />
            }
          />
        </div>
        <div className="mb-[11px]">
          <div>
            <DepartmentStatus />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
