import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { MultiSelect } from "@/components/ui/multi-select";
import { companyType, getCompanyTypeOptions } from "../constant";
import { SelectedBadges } from "@/components/selected-badge/SelectedBadges";
import { DatePicker } from "@/components/ui/date-picker";
import { CustomerRegisterProps } from "../types";
import { Controller } from "react-hook-form";
import { Selectbox } from "@/components/ui/select-box";
import { Icon } from "@iconify/react/dist/iconify.js";

const Register1 = (props: CustomerRegisterProps) => {
  const { register, control, setValue, trigger, errors } = props;
  const [selectedCompany, setSelectedCompany] = React.useState<string[]>([]);
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  const handleRemoveFramework = (value: string) => {
    setSelectedCompany((prev) => prev.filter((item) => item !== value));
  };
  return (
    <motion.div
      className="text-[16px] max-w-[500px] w-full px-4 sm:px-6 md:px-8 lg:px-0 justify-items flex flex-col gap-4"
      initial={{ x: 10, opacity: 0.1 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
    >
      <div>
        <Input
          type="text"
          name="companyName"
          register={register}
          placeholder="Enter Company Name"
          labelName="Company Name"
          required
          error={errors?.companyName?.message}
        />
      </div>

      <div>
        <Input
          type="text"
          name="companyEmail"
          register={register}
          placeholder="Enter Company Mail"
          labelName="Company Mail"
          required
          error={errors?.companyEmail?.message}
        />
      </div>

      <div>
        <Controller
          name="companyType"
          control={control}
          render={({ field, fieldState: { error } }: any) => {
            return (
              <div>
                <Selectbox
                  options={getCompanyTypeOptions()}
                  value={field?.value}
                  onChange={(value) => {
                    setValue("companyType", value?.value);
                    trigger("companyType");
                  }}
                  placeholder="Select Company Type"
                  emptyText="No data found."
                  className="w-full bg-transparent h-12 font-secondary text-sm font-[300]"
                  label="Company Type"
                  error={error?.value?.message}
                />
                {error && (
                  <p className="mt-1 text-xs text-destructive font-secondary font-[300] flex items-center gap-1">
                    <Icon
                      icon="solar:close-square-bold"
                      width="14"
                      height="14"
                      className="text-destructive"
                    />
                    <span className="mt-0">{error.value?.message}</span>
                  </p>
                )}
              </div>
            );
          }}
        />
      </div>

      {/* <div>
        <MultiSelect
          options={companyType}
          selected={selectedCompany}
          onChange={setSelectedCompany}
          placeholder="Select Company Type..."
          searchPlaceholder="Search..."
          label="Company Type"
        />
        <SelectedBadges
          selected={selectedCompany}
          options={companyType}
          onRemove={handleRemoveFramework}
        />
      </div> */}

      <div>
        <Input
          type="text"
          name="yearOfEstablishment"
          register={register}
          placeholder="Enter Year"
          labelName="Years Since Incorporated"
          required
          numberType
          maxLength={4}
          error={errors?.yearOfEstablishment?.message}
        />
        {/* <Input
          className="w-full  bg-white py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5]"
          id="years-incorporated"
          name="years-incorporated"
          labelName=" Years Since Incorporated"
          placeholder="Enter date"
          type="date"
          required={true}
        /> */}
        {/* <DatePicker
          selected={date}
          onSelect={setDate}
          placeholder="Enter Date"
          label="Years Since Incorporated"
          className="w-full text-xs"
        /> */}
      </div>

      <div className="flex flex-col gap-2">
        <Label
          className="text-[14px] font-primary text-[#26203B]"
          required={true}
        >
          Employee Size
        </Label>
        <Select>
          <SelectTrigger
            id="company-type"
            className="w-full py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
          >
            <SelectValue placeholder="Select Team Strength" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel
                required={true}
                className="text-[16px] font-primary text-[#26203B]"
              >
                Employee Size
              </SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </motion.div>
  );
};

export default Register1;
