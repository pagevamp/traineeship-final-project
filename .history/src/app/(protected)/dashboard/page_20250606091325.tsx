"use client";

import SearchBar from "@/components/ui/searchbar";
import Image from "next/image";
import React from "react";
import DepartmentInfo from "./info";
import { PlusCircleIcon } from "lucide-react";
import DepartmentForm from "./modalInfo"; // your form to render in modal
import { useModalContext } from "@/providers/modal-context";

const Department = () => {
  const { openModal } = useModalContext();

  const handleCreateClick = () => {
    openModal({
      component: DepartmentForm,
      className: "rounded-lg bg-white px-[66px] py-[18px]",
      overlayClassName: "fixed inset-0 bg-black/60",
      style: {
        content: {
          width: "668px",
          height: "369px",
          inset: "50% auto auto 50%", // center modal vertically and horizontally
          transform: "translate(-50%, -50%)",
          padding: "18px 66px", // optional here if you want inline padding too
          borderRadius: "12px", // keep your rounded corners
        },
      },
    });
  };

  return (
    <>
      <div>
        <SearchBar
          placeholder="Search for Department"
          className="w-[822px] mt-[41px] mb-[26px] gap-[45px]"
          firstCircleContent={
            <Image src="/Menu.svg" alt="Menu" width={20} height={20} />
          }
          secondCircleContent={
            <div className="bg-gradient-to-r from-[#E06518] to-[#E3802A] p-[2px] rounded-[37px] w-fit h-fit">
              <button
                onClick={handleCreateClick}
                className="flex items-center justify-center gap-2 text-[#E06518] w-[122px] h-[45px] bg-white rounded-[37px] text-sm font-medium"
              >
                Create <PlusCircleIcon size={24} />
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
