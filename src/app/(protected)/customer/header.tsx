"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

const headerDetails = [
  {
    img: "/pencil.svg",
    label: "Company Name:",
    value: "Everestwalk Groups Pvt. Ltd.",
  },
  {
    img: "/system_security_update.svg",
    label: "Employee Size:",
    value: " 50+",
  },
  {
    img: "/share_location.svg",
    label: "Company Type: ",
    value: "Private Limited",
  },
  {
    img: "/transgender.svg",
    label: "Nature of Business:",
    value: " Software Development",
  },
  { img: "/share_location.svg", label: "Estd. Year:", value: " 2020" },

  {
    img: "/document_scanner.svg",
    label: "Shipment Type:",
    value: " LTL, FTL, Both",
  },
  {
    img: "/pencil.svg",
    label: "Email ID:",
    value: "info@everetswalk.com",
  },
  {
    img: "/system_security_update.svg",
    label: "Phone Number:  ",
    value: "+91 9296654332",
  },
];

const Header = () => {
  return (
    <div className="w-[1110px] flex flex-col gap-6">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <span className="font-primary text-[20px] text-[#1C2B38]">
          Company Information
        </span>

        <div className="flex gap-[24px]">
          <button className="flex items-center px-4 h-[40px] bg-[#00B69B] text-white rounded">
            Transfer To{" "}
            <ChevronDown size={14} className="ml-2 bg-transparent" />
          </button>
          <button className="w-[110px] h-[40px] bg-[#FF6502] text-white rounded">
            Reject
          </button>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex gap-[24px] mt-[24px]">
        {/* Profile Image */}
        <Image
          src="/Ellipse 67.svg" // Replace with your actual image path
          alt="Company Avatar"
          width={165}
          height={165}
          className="rounded-full object-cover"
        />

        {/* Info Grid */}
        <div className="w-[823px] h-[156px] grid grid-cols-2 gap-x-12 gap-y-4 mr-[90px]">
          {headerDetails.map((detail, index) => (
            <div key={index} className="flex items-center gap-2">
              <Image
                src={detail.img}
                alt={`${detail.label} icon`}
                width={14}
                height={22}
              />
              <p className="text-[14px]">
                <span className="font-primary">{detail.label}: </span>
                <span className="font-secondary">{detail.value}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
