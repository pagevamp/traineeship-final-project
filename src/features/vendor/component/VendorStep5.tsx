import React from "react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { format } from "date-fns";

const Vendor5 = ({ control }: { control: any }) => {
  const createdBy = "user";
  const dateCreated = new Date();
  return (
    <motion.div
      className="text-[16px] max-w-[500px] w-full px-4 sm:px-6 md:px-8 lg:px-0 justify-items flex flex-col gap-4"
      initial={{ x: 50, opacity: 0.1 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
    >
      <Input
        className="w-full py-2 px-4 placeholder:text-xs placeholder:text-[#9C9AA5] h-12"
        id="vendorId"
        name="vendorId"
        labelName="Vendor Id"
        placeholder="Enter your Vendor Id"
        type="text"
        required={true}
      />

      <Input
        id="status"
        name="status"
        type="tel"
        labelName="Phone Number"
        placeholder="+91"
        className="w-full h-[40px] px-3 rounded border border-[#ccc] text-[14px] bg-white"
        required={true}
      />

      <Input
        id="createdBy"
        name="createdBy"
        type="text"
        labelName="Created By"
        value={createdBy}
        readOnly
        className="w-full h-[40px] px-3 rounded border border-[#ccc] text-[14px] bg-white"
        required={true}
      />

      <Input
        id="dateCreated"
        name="dateCreated"
        type="text"
        labelName="Created By"
        value={format(dateCreated, "PPpp")}
        readOnly
        className="w-full h-[40px] px-3 rounded border border-[#ccc] text-[14px] bg-white"
        required={true}
      />
    </motion.div>
  );
};

export default Vendor5;
