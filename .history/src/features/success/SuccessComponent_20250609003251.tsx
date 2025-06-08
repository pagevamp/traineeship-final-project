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
        className="mb-[26px]"
      />

      <Image
        src="/Verified.svg"
        alt="Verified Logo"
        width={180}
        height={180}
        className="mb-[26px]"
      />

      <Heading title="Login" description="Enter your credentials to proceed." />
    </div>
  );
};

export default SuccessComponent;
