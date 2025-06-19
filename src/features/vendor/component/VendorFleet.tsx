import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MultiSelect } from "@/components/ui/multi-select";
import { SelectedBadges } from "@/components/selected-badge/SelectedBadges";
import { companyType } from "../constant";

const VendorFleet = () => {
  const [selectedCompany, setSelectedCompany] = React.useState<string[]>([]);

  const handleRemoveFramework = (value: string) => {
    setSelectedCompany((prev) => prev.filter((item) => item !== value));
  };
  return (
    <div className="text-[14px] w-full grid grid-cols-3 gap-3 px-4 sm:px-6 md:px-8 lg:px-0 justify-items-stretch">
      <div className="flex flex-col gap-2 w-full">
        <MultiSelect
          options={companyType}
          selected={selectedCompany}
          onChange={setSelectedCompany}
          placeholder="Select Type of Vehicles Offered..."
          searchPlaceholder="Search..."
          label="Vehicle Type"
        />
        <SelectedBadges
          selected={selectedCompany}
          options={companyType}
          onRemove={handleRemoveFramework}
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <MultiSelect
          options={companyType}
          selected={selectedCompany}
          onChange={setSelectedCompany}
          placeholder="Select Type of Cargo Supported..."
          searchPlaceholder="Search..."
          label="Cargo Type"
        />
        <SelectedBadges
          selected={selectedCompany}
          options={companyType}
          onRemove={handleRemoveFramework}
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <MultiSelect
          options={companyType}
          selected={selectedCompany}
          onChange={setSelectedCompany}
          placeholder="Select Coverage Area / Route..."
          searchPlaceholder="Search..."
          label="Coverage Area"
        />
        <SelectedBadges
          selected={selectedCompany}
          options={companyType}
          onRemove={handleRemoveFramework}
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <MultiSelect
          options={companyType}
          selected={selectedCompany}
          onChange={setSelectedCompany}
          placeholder="Select Operational Days..."
          searchPlaceholder="Search..."
          label="Operational Days"
        />
        <SelectedBadges
          selected={selectedCompany}
          options={companyType}
          onRemove={handleRemoveFramework}
        />
      </div>
      <Input
        id="emergencyResponseSLA"
        name="emergencyResponseSLA"
        type="number"
        labelName="Emergency Response SLA"
        placeholder="Enter Emergency Response SLA"
        className="w-full h-[40px] px-3 rounded text-[14px] bg-white gap-2"
        required={false}
      />
    </div>
  );
};

export default VendorFleet;
