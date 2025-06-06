import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  firstCircleContent?: React.ReactNode | string;
  secondCircleContent?: React.ReactNode | string;
}

const GradientCircle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="p-[1px] rounded-full bg-gradient-to-b from-[#E06518] to-[#E3802A]">
    <div className="w-[43px] h-[43px] bg-white rounded-full flex items-center justify-center">
      {children}
    </div>
  </div>
);

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  className = "",
  firstCircleContent,
  secondCircleContent,
}) => {
  return (
    <div className={`flex items-center gap-[15px] ${className}`}>
      <div className="bg-gradient-to-r from-[#E06518] to-[#E3802A] p-[1px] h-[45px] rounded-full w-full">
        <div className="flex items-center gap-2 bg-white rounded-full px-4 h-full">
          <Image src="/Search.svg" alt="search" width={19} height={17} />
          <Input
            type="text"
            placeholder={placeholder}
            className="w-full h-full text-sm bg-transparent border-none shadow-none outline-none focus:ring-0 focus-visible:ring-transparent
          text-transparent bg-clip-text bg-gradient-to-r from-[#FF743C] to-[#B73601]
          placeholder:text-transparent placeholder:bg-clip-text placeholder:bg-gradient-to-r placeholder:from-[#FF743C] placeholder:to-[#B73601]"
          />
        </div>
      </div>

      {firstCircleContent && (
        <GradientCircle>{firstCircleContent}</GradientCircle>
      )}
      {secondCircleContent && (
        <GradientCircle>{secondCircleContent}</GradientCircle>
      )}
    </div>
  );
};

export default SearchBar;
