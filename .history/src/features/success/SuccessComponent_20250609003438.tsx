import React from "react";
import Image from "next/image";
import Heading from "@/components/ui/Heading";

const SuccessComponent = () => {
  return (
    <div
      className="flex flex-col items-center px-6"
      style={{ marginTop: "65px" }}
    >
      <Image
        src="/arctern-logo.svg"
        alt="Arctern Logo"
        width={142}
        height={81}
        className="mb-[88px]"
      />

      <Image
        src="/Verified.svg"
        alt="Verified Logo"
        width={180}
        height={180}
        className="mb-[36px]"
      />

      <Heading title="Account Request Submitted Successfully" description="" />
      <span className="font-primary text-[#9C9AA5] text-[20px]">
        Your Credit Account Number: ABC12316
      </span>
    </div>
  );
};

export default SuccessComponent;
