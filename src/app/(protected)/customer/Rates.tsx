"use client";

import { RateCardTable } from "@/components/ui/rateCards";
import { useState } from "react";

const rateData = [
  {
    destination: "QATAR",
    truckType: "40FT Closed Box",
    charges: 3400,
  },
  {
    destination: "BAHRAIN",
    truckType: "40FT Closed Box",
    charges: 3500,
  },
  {
    destination: "KUWAIT",
    truckType: "40FT Closed Box",
    charges: 4200,
  },
  {
    destination: "DMM",
    truckType: "40FT Closed Box",
    charges: 3200,
  },
  {
    destination: "RUH",
    truckType: "40FT Closed Box",
    charges: 3300,
  },
  {
    destination: "JED",
    truckType: "40FT Closed Box",
    charges: 4900,
  },
  {
    destination: "Muscat, Oman",
    truckType: "40FT Closed Box",
    charges: 2750,
  },
];

const Rates = () => {
  const [activeTab, setActiveTab] = useState<"FTL" | "LTL">("FTL");

  return (
    <div className="flex flex-col items-start gap-4 ">
      <div className="flex gap-8 mt-6 border-b border-[#D3A8FF] w-fit">
        {["FTL", "LTL"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "FTL" | "LTL")}
            className={`relative text-[16px] font-medium text-[#540F86] pb-2 ${
              activeTab === tab ? "border-b border-[#540F86]" : ""
            }`}
            style={{
              borderRadius: activeTab === tab ? "8px 8px 0 0" : undefined,
              borderBottomWidth: activeTab === tab ? "1px" : undefined,
            }}
          >
            Rate card for {tab}
          </button>
        ))}
      </div>

      <div className="text-center w-[1110px] bg-[#ffffff] rounded-[25px] font-primary">
        <div className="h-[54px]  pt-[14px] mb-[23px] text-[14px] font-primary text-[#0B0704] ">
          Bonded FTL to GCC Freight only (excluding clearance)
        </div>
        <RateCardTable data={rateData} />
      </div>
    </div>
  );
};

export default Rates;
