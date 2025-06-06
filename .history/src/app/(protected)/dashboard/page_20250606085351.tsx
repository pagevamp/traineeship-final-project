import SearchBar from "@/components/ui/searchbar";
import Image from "next/image";
import React from "react";
import DepartmentInfo from "./info";
import { PlusCircleIcon } from "lucide-react";

const Department = () => {
  return (
    <>
      <div>
        <SearchBar
          placeholder="Search for Department"
          className="w-[822px] mt-[41px] mb-[26px] gap-[40px]"
          firstCircleContent={
            <Image src="/Menu.svg" alt="Menu" width={20} height={20} />
          }
          secondCircleContent={
            <div className="bg-gradient-to-r from-[#E06518] to-[#E3802A] p-[2px] rounded-[37px] w-fit h-fit ">
              <button className="flex items-center justify-center gap-2 text-[#E06518] w-[122px] h-[45px] bg-white rounded-[37px] text-sm font-medium">
                Create <PlusCircleIcon className="w-4 h-4" />
              </button>
            </div>
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
