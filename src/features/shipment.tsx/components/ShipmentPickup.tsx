import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ShipmentPickup = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <span className="font-primary text-[16px] text-[#1C2B38] text-start">
        Pickup Details
      </span>

      <div className="flex flex-row items-center justify-center gap-x-20 ">
        <div className="w-full sm:w-[442px]  p-[1px] rounded-[40px] bg-gradient-to-b from-[#E06518] to-[#E3802A]">
          <Input
            id="preferred_date"
            name="preferred_date"
            type="date"
            placeholder="Preferred Pickup Date"
            className="w-full h-full rounded-[40px] bg-white py-1.5 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] text-sm focus:outline-none"
          />
        </div>

        <div className="w-full sm:w-[442px] h-[40px] p-[1px]   rounded-[40px] bg-gradient-to-b from-[#E06518] to-[#E3802A]">
          <Select>
            <SelectTrigger
              id="net-term"
              className="w-full h-full rounded-[40px]  bg-white py-1.5 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] text-sm focus:outline-none"
            >
              <SelectValue placeholder="Preferred PickUp Address" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>PickUp Address</SelectLabel>
                <SelectItem value="Oman">Oman</SelectItem>
                <SelectItem value="Dubai">Dubai</SelectItem>
                <SelectItem value="Qatar">Qatar</SelectItem>
                <SelectItem value="Bahrain">Bahrain</SelectItem>
                <SelectItem value="Kuwait">Kuwait</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ShipmentPickup;
