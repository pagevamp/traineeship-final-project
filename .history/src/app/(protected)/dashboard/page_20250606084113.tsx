import SearchBar from "@/components/ui/searchbar";
import Image from "next/image";
import React from "react";
import DepartmentInfo from "./info";

const Department = () => {
  return (
    <>
      <div>
        <SearchBar
          placeholder="Search for Department"
          className="w-[822px] mt-[41px] mb-[26px]"
          firstCircleContent={
            <Image src="/Menu.svg" alt="Menu" width={20} height={20} />
          }
          secondCircleContent={
            <Image src="/Download.svg" alt="profile" width={20} height={18} />
          }
        />
      </div>
      <div>
        <DepartmentInfo />
      </div>
    </>
  );
};

export default Department;
