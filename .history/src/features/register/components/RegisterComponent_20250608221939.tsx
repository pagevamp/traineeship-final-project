"use client";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/Heading";
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
import { Stepper } from "@/components/ui/stepper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { steps, headings } from "../constant";

import React from "react";

interface Step {
  id: number;
  // any other properties you have for steps
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  stepRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep, stepRefs }) => {
  return (
    <>
      {steps.map((step, index) => (
        <div
          key={step.id}
          ref={(el) => (stepRefs.current[index] = el)}
          className={`flex items-center justify-center w-10 h-10 rounded-full border-2 
            ${
              currentStep === step.id
                ? "bg-[#CF5406] border-[#CF5406] text-white font-bold"
                : "bg-white border-gray-300 text-gray-500"
            }
            select-none
          `}
          aria-current={currentStep === step.id ? "step" : undefined}
          // Remove pointer cursor and click handlers to disable direct step clicking
          style={{ cursor: "default" }}
        >
          {step.id}
        </div>
      ))}
    </>
  );
};

export default Stepper;





const ChangeStep = ({
  nextStep,
  prevStep,
}: {
  nextStep: () => void;
  prevStep: () => void;
}) => {
  return (
    <div className="font-primary flex flex-col items-center gap-[31px]">
      <Button
        onClick={nextStep}
        className="rounded-[8px] w-[210px] h-[48px] py-[10px] px-5 bg-gradient-to-b from-[#CF5406] to-[#F87B18]"
      >
        Continue
      </Button>
      <Button
        onClick={prevStep}
        className="font-primary text-lg bg-transparent text-[#CF5406] mb-[48px] shadow-none hover:bg-transparent flex items-center justify-center"
      >
        <ChevronLeft className="mr-2" size={18} />
        <span>Back</span>
      </Button>
    </div>
  );
};


const RegisterStep1 = () => {
  return (
    <div className="text-[16px] min-w-[442px] flex flex-col gap-[21px]">
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="company-type"
          className="text-[16px] font-primary text-[#26203B]"
        >
          Company Name
        </Label>
        <Input
          className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
          id="company-name"
          name="company-name"
          placeholder="Enter your company name"
          type="text"
          required={true}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="company-type"
          className="text-[16px] font-primary text-[#26203B]"
        >
          Company Mail
        </Label>
        <Input
          className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
          id="company-mail"
          name="company-mail"
          placeholder="Enter your company mail"
          type="email"
          required={true}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="company-type"
          className="text-[16px] font-primary text-[#26203B]"
        >
          Company Type
        </Label>
        <Select>
          <SelectTrigger
            id="company-type"
            className="w-full py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
          >
            <SelectValue placeholder="Select your company type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Company Type</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="company-type"
          className="text-[16px] font-primary text-[#26203B]"
        >
          Years Since Incorporated
        </Label>
        <Input
          className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
          id="years-incorporated"
          name="years-incorporated"
          placeholder="Enter date"
          type="text"
          required={true}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="company-type"
          className="text-[16px] font-primary text-[#26203B]"
        >
          Employer Site
        </Label>
        <Input
          className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
          id="employee-size"
          name="employee-size"
          placeholder="Enter your company size"
          type="number"
        />
      </div>
    </div>
  );
};

const RegisterStep2 = () => {
  return (
    <div className="text-[16px] w-full px-3 mt-[10px]">
      <div className="relative mb-8 grid grid-cols-3 gap-y-[18px] gap-x-[10px] ">
        <Button className="absolute right-0">Add</Button>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Company Type
          </Label>
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="director-name"
            name="director-name"
            placeholder="Enter Director Name"
            type="text"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="director-email"
            name="director-email"
            placeholder="Enter Email Id"
            type="email"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="director-phone-no"
            name="director-phone-no"
            placeholder="Enter Phone Number"
            type="text"
            required={true}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="director-name"
            name="director-name"
            placeholder="Enter Director Name"
            type="text"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="director-email"
            name="director-email"
            placeholder="Enter Email Id"
            type="email"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="director-phone-no"
            name="director-phone-no"
            placeholder="Enter Phone Number"
            type="text"
            required={true}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-[22px]">
        <h3 className="text-center font-primary text-xl">
          Finance Manager Information
        </h3>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 min-w-[292px]">
            <Input
              className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
              id="director-name"
              name="director-name"
              placeholder="Enter Director Name"
              type="text"
              required={true}
            />
          </div>
          <div className="flex flex-col gap-2  min-w-[292px]">
            <Input
              className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
              id="director-email"
              name="director-email"
              placeholder="Enter Email Id"
              required={true}
            />
          </div>
          <div className="flex flex-col gap-2  min-w-[292px]">
            <Input
              className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
              id="director-phone-no"
              name="director-phone-no"
              placeholder="Enter Phone Number"
              type="text"
              required={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const RegisterStep3 = () => {
  return <h1>Step 3 </h1>;
};

const RegisterStep4 = () => {
  return <h1>Step 4 </h1>;
};

const RegisterStep5 = () => {
  return <h1>Step 5 </h1>;
};

const RegisterStep6 = () => {
  return <h1>Step 6 </h1>;
};
