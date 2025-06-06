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
          className="w-[822px] mt-[41px] mb-[26px]"
          firstCircleContent={
            <Image src="/Menu.svg" alt="Menu" width={20} height={20} />
          }
          secondCircleContent={
            <button className="text-white bg-blue-600 px-3 py-1 rounded-md text-sm hover:bg-blue-700">
              Create <PlusCircleIcon />
            </button>
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
