import React from "react";
import Image from "next/image";
import Heading from "@/components/ui/Heading";

const SuccessComponent = () => {
  return (
    <div className="flex flex-col items-center px-6">
      <Image
        src="/arctern-logo.svg"
        alt="Arctern Logo"
        width={142}
        height={81}
        className="mb-[88px] mt-[98px]"
      />

      <Image
        src="/Verified.svg"
        alt="Verified Logo"
        width={180}
        height={180}
        className="mb-[36px]"
      />

      <Heading title="Account Request Submitted Successfully" description="" />
      <span className="font-primary text-[#9C9AA5] text-[20px] mt-[24px]">
        Your Credit Account Number: ABC12316
      </span>
      <span className="font-secondary text-[20px]">
        Status: <span className="text-[#FF811A]"> In-active</span>
      </span>
      <p className="text-center text-[16px] text-[9C9AA5] font-secondary mt-[14px]">
        Your account is under internal review. Our Operations and Finance
        departments are verifying your submitted details and documents. You will
        receive updates at each step of the process.
      </p>
    </div>
  );
};

export default SuccessComponent;
