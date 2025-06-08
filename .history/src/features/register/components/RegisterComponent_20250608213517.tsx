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
import { useEffect, useRef, useState } from "react";
import { steps, headings } from "../constant";

export const steps = [
  { id: 1, title: "Company Details" },
  { id: 2, title: "Directors" },
  { id: 3, title: "Referrals" },
  { id: 4, title: "Bank Details" },
  { id: 5, title: "Documents" },
  { id: 6, title: "Products" },
];

export const headings = [
  {
    id: 1,
    title: "Enter your Organization Details",
    description: "Enter accurate details to verify your company.",
  },

  {
    id: 2,
    title: "Enter your Directors Details",
    description: "Enter accurate details to verify your company.",
  },
  {
    id: 3,
    title: "Enter your Trade References Details",
    description: "Enter accurate details to verify your company.",
  },
  {
    id: 4,
    title: "Enter your Bank Details",
    description: "Enter accurate details to verify your company.",
  },
  {
    id: 4,
    title: "Upload your Documents",
    description: "Upload Valid Documents to verify your company ",
  },
  {
    id: 5,
    title: "Enter your Products - (Optional)",
    description: "Enter accurate details to verify your company.",
  },
];


const RegisterComponent = () => {
  const [currStep, setCurrStep] = useState<number>(1);
  const totalSteps = steps.length;

  const stepperContainerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  
  useEffect(() => {
    const currentStepElement = stepRefs.current[currStep - 1];
    if (currentStepElement && stepperContainerRef.current) {
      
      const container = stepperContainerRef.current;
      const stepRect = currentStepElement.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const offset = stepRect.left - containerRect.left - containerRect.width / 2 + stepRect.width / 2;

      container.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  }, [currStep]);

  const nextStep = () => {
    if (currStep < totalSteps) setCurrStep(currStep + 1);
  };

  const prevStep = () => {
    if (currStep > 1) setCurrStep(currStep - 1);
  };

  // Arrow click handlers to scroll steps left or right by 1
  const onArrowLeftClick = () => {
    if (currStep > 1) setCurrStep(currStep - 1);
  };
  const onArrowRightClick = () => {
    if (currStep < totalSteps) setCurrStep(currStep + 1);
  };

  const renderStep = () => {
    switch (currStep) {
      case 1:
        return <RegisterStep1 />;
      case 2:
        return <RegisterStep2 />;
      case 3:
        return <RegisterStep3 />;
      case 4:
        return <RegisterStep4 />;
      case 5:
        return <RegisterStep5 />;
      case 6:
        return <RegisterStep6 />;
      default:
        return <RegisterStep1 />;
    }
  };

  const currHeading = headings.find((heading) => heading.id === currStep);

  return (
    <section className="font-secondary max-w-[964px] mx-auto h-full flex flex-col items-center pt-[34px]">
      <Image
        src="/arctern-logo.svg"
        width={142}
        height={81}
        alt="company logo"
        className="mb-[22px]"
      />

      
      <div className="flex items-center w-full mb-6 relative">
       
        {currStep > 1 && (
          <button
            onClick={onArrowLeftClick}
            aria-label="Previous step"
            className="absolute left-0 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100"
          >
            <ChevronLeft size={24} />
          </button>
        )}

       
        <div
          ref={stepperContainerRef}
          className="overflow-x-auto scrollbar-hide w-full px-10"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="flex gap-4 min-w-max">
            {steps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className={`flex-shrink-0 cursor-pointer ${
                  currStep === step.id ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => setCurrStep(step.id)}
              >
                <Stepper
                  steps={[step]}
                  currentStep={step.id}
                  
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        {currStep < totalSteps && (
          <button
            onClick={onArrowRightClick}
            aria-label="Next step"
            className="absolute right-0 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      <Heading title={currHeading?.title} description={currHeading?.description} />

      {renderStep()}
      <ChangeStep nextStep={nextStep} prevStep={prevStep} />
    </section>
  );
};

export default RegisterComponent;




const ChangeStep = ({
  nextStep,
  prevStep,
}: {
  nextStep: () => void;
  prevStep: () => void;
}) => {
  return (
    <div className="font-primary -[775px] flex flex-col items-center gap-[31px] font-primary">
      <Button
        onClick={() => nextStep()}
        className=" rounded-[8px] w-[210px] h-[48px] py-[10px] px-5 bg-gradient-to-b from-[#CF5406] to-[#F87B18]"
      >
        Continue
      </Button>
      <Button
        onClick={() => prevStep()}
        className="font-primary text-lg bg-transparent  text-[#CF5406] mb-[48px] shadow-none hover:bg-transparent"
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
