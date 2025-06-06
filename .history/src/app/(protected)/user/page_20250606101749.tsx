import SearchBar from "@/components/ui/searchbar";
import Image from "next/image";
import React from "react";
import SliderModal from "./SliderModal";
import InfoBox from "./InfoBox";

const User = () => {
  return (
    <div>
      <div className="mb-[15px]">
        <InfoBox />
      </div>
      <div className="mb-[18px]">
        <SearchBar
          placeholder="Search for Department"
          className="w-[822px]"
          firstCircleContent={
            <Image src="/Menu.svg" alt="Menu" width={20} height={20} />
          }
        />
      </div>
      <div>
        <SliderModal />
      </div>
    </div>
  );
};

export default User;
