"use client";

import SearchBar from "@/components/ui/searchbar";
import Image from "next/image";
import React from "react";
import DepartmentInfo from "./info";
import { PlusCircleIcon } from "lucide-react";
import DepartmentForm from "./modalInfo"; // your form to render in modal
import { useModalContext } from "@/providers/modal-context";

const Department = () => {
  const { openModal, closeModal } = useModalContext();

  const handleCreateClick = () => {
    openModal({
      component: () => (
        <div className="relative">
          <button
            onClick={closeModal} // <-- directly call closeModal here
            className="absolute top-3 right-3 text-2xl font-bold bg-transparent border-none cursor-pointer"
            aria-label="Close modal"
          >
            &times;
          </button>
          <DepartmentForm closeModal={closeModal} />
        </div>
      ),
      className:
        "bg-white rounded-lg w-[668px] min-h-[369px] px-[66px] py-[18px] relative overflow-y-auto",
      overlayClassName: "fixed inset-0 bg-black/60",
    });
  };

  return (
    <div className="mx-auto max-w-[900px] px-4">
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
    </div>
  );
};

export default Department;
