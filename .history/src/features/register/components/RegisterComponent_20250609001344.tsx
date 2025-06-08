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
import { ChevronLeft, ChevronRight, PlusCircleIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { steps, headings } from "../constant";
import { Icon } from "@iconify/react";
import addIcon from "@iconify-icons/mdi/plus";

const RegisterComponent = () => {
  const [currStep, setCurrStep] = useState<number>(1);
  const totalSteps = steps.length;

  const stepperContainerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const container = stepperContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft + container.clientWidth < container.scrollWidth
      );
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentStepElement = stepRefs.current[currStep - 1];
    const container = stepperContainerRef.current;

    if (currentStepElement && container) {
      const stepRect = currentStepElement.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const offset =
        stepRect.left -
        containerRect.left -
        containerRect.width / 2 +
        stepRect.width / 2;

      container.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  }, [currStep]);

  const nextStep = useCallback(() => {
    setCurrStep((prev) => (prev < totalSteps ? prev + 1 : prev));
  }, [totalSteps]);

  const prevStep = useCallback(() => {
    setCurrStep((prev) => (prev > 1 ? prev - 1 : prev));
  }, []);

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
    <section className="font-secondary max-w-[964px] mx-auto h-full flex flex-col items-center pt-[34px] relative">
      <Image
        src="/arctern-logo.svg"
        width={142}
        height={81}
        alt="company logo"
        className="mb-[22px]"
      />

      <div className="w-full flex justify-between items-center px-10 mb-2 relative">
        {showLeftArrow ? (
          <button
            onClick={() => {
              stepperContainerRef.current?.scrollBy({
                left: -200,
                behavior: "smooth",
              });
            }}
            aria-label="Scroll left"
            className="bg-gradient-to-b from-[#CF5406] to-[#F87B18] text-white p-1.5 rounded-full shadow"
          >
            <ChevronLeft size={10} />
          </button>
        ) : (
          <div style={{ width: 34 }} />
        )}

        {showRightArrow ? (
          <button
            onClick={() => {
              stepperContainerRef.current?.scrollBy({
                left: 200,
                behavior: "smooth",
              });
            }}
            aria-label="Scroll right"
            className="bg-gradient-to-b from-[#CF5406] to-[#F87B18] text-white p-1.5 rounded-full shadow"
          >
            <ChevronRight size={10} />
          </button>
        ) : (
          <div style={{ width: 34 }} />
        )}
      </div>

      <div
        ref={stepperContainerRef}
        className="overflow-x-auto scrollbar-hide w-full px-10 mb-6"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex gap-4 min-w-max" ref={stepperContainerRef}>
          <Stepper steps={steps} currentStep={currStep} />
        </div>
      </div>

      <Heading
        title={currHeading?.title}
        description={currHeading?.description}
      />

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
      <Button
        variant="outline"
        className="flex items-right mb-[26px] ml-[840px]  h-[40px]"
      >
        Add <Image src="/plus.svg" alt="plus" width={24} height={24} />
      </Button>
      <div className="relative mb-8 grid grid-cols-3 gap-y-[18px] gap-x-[10px] ">
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
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Email Id
          </Label>
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
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Phone Number
          </Label>
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
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Email Id
          </Label>
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
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Phone Number
          </Label>
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
        <div className="grid grid-cols-3 gap-[10px]">
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
            <Label
              htmlFor="company-type"
              className="text-[16px] font-primary text-[#26203B]"
            >
              Email Id
            </Label>
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
            <Label
              htmlFor="company-type"
              className="text-[16px] font-primary text-[#26203B]"
            >
              Phone Number
            </Label>
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
  return (
    <div className="text-[16px] w-full px-3 mt-[10px]">
      <Button
        variant="outline"
        className="flex items-right mb-[26px] ml-[840px]  h-[40px]"
      >
        Add <Image src="/plus.svg" alt="plus" width={24} height={24} />
      </Button>
      <div className="relative mb-8 grid grid-cols-4 gap-y-[18px] gap-x-[10px] ">
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Reference Name
          </Label>
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="director-name"
            name="director-name"
            placeholder="Enter Reference Name"
            type="text"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Business Association{" "}
          </Label>
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="director-email"
            name="director-email"
            placeholder="Enter Business Association"
            type="email"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Email Id
          </Label>
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="director-name"
            name="director-name"
            placeholder="Enter Email Id"
            type="text"
            required={true}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Phone Number
          </Label>
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
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Reference Name
          </Label>
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="director-name"
            name="director-name"
            placeholder="Enter Reference Name"
            type="text"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Business Association{" "}
          </Label>
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="director-email"
            name="director-email"
            placeholder="Enter Business Association"
            type="email"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Email Id
          </Label>
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="director-name"
            name="director-name"
            placeholder="Enter Email Id"
            type="text"
            required={true}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Phone Number
          </Label>
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
  );
};

const RegisterStep4 = () => {
  return (
    <div className="text-[16px] w-full px-3 mt-[10px]">
      <Button
        variant="outline"
        className="flex items-right mb-[26px] ml-[840px]  h-[40px]"
      >
        Add <Image src="/plus.svg" alt="plus" width={24} height={24} />
      </Button>
      <div className="relative mb-8 grid grid-cols-4 gap-y-[18px] gap-x-[10px] ">
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Account Holder Name
          </Label>
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="director-name"
            name="director-name"
            placeholder="Enter Account Holder Name"
            type="text"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Bank Name
          </Label>
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="director-email"
            name="director-email"
            placeholder="Enter Bank Name"
            type="email"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Bank Branch Name & Location
          </Label>
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="director-phone-no"
            name="director-phone-no"
            placeholder="Enter Bank Branch Name & Location"
            type="text"
            required={true}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Account Number
          </Label>
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="director-name"
            name="director-name"
            placeholder="Enter Account Number"
            type="text"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            IBAN{" "}
            <span className="text-[8px]">
              (International Bank Account Number)
            </span>
          </Label>
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="director-email"
            name="director-email"
            placeholder="Enter IBAN"
            type="email"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Swift/BIC Code
          </Label>
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="director-phone-no"
            name="director-phone-no"
            placeholder="Enter Swift/BIC Code"
            type="text"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Currency
          </Label>
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="director-phone-no"
            name="director-phone-no"
            placeholder="Enter Currency"
            type="text"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Bank Country
          </Label>
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="director-phone-no"
            name="director-phone-no"
            placeholder="Enter Bank Country"
            type="text"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Beneficiary Address
          </Label>
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="director-phone-no"
            name="director-phone-no"
            placeholder="Enter Beneficiary Address"
            type="text"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Bank Address
          </Label>
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="director-phone-no"
            name="director-phone-no"
            placeholder="Enter Bank Address"
            type="text"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            VAT/TRN Number{" "}
          </Label>
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="director-phone-no"
            name="director-phone-no"
            placeholder="Enter VAT/TRN Number"
            type="text"
            required={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="company-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Upload Cancelled Cheque
          </Label>
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="director-phone-no"
            name="director-phone-no"
            placeholder="Enter Phone Number"
            type="file"
            required={true}
          />
        </div>
      </div>
    </div>
  );
};

const RegisterStep5 = () => {
  return (
    <div className="text-[16px] min-w-[442px] flex flex-col gap-[21px]">
      <div className="relative mb-[80px] mt-[87px]">
        <Image
          src="Ellipse 1.svg"
          alt="ellipse"
          width={163}
          height={163}
          className="absolute inset-0 m-auto"
        />
        <Image
          src="Work.svg"
          alt="work"
          width={50}
          height={50}
          className="absolute inset-0 m-auto"
        />
      </div>
      {/* Row 1 */}
      <div className="flex items-center gap-[24px]">
        <div className="flex flex-col gap-2 flex-1">
          <Label
            htmlFor="company-name"
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
          />
        </div>

        <div className="w-[1px] h-[62px] bg-[#DFDFDF] self-center" />

        <div className="flex flex-col gap-2 flex-1">
          <Label
            htmlFor="company-mail"
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
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex items-center  gap-[24px]">
        <div className="flex flex-col gap-2 flex-1">
          <Label
            htmlFor="years-incorporated"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Years Since Incorporated
          </Label>
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="years-incorporated"
            name="years-incorporated"
            placeholder="Enter date"
            type="date"
          />
        </div>

        <div className="w-[1px] h-[62px] bg-[#DFDFDF]" />

        <div className="flex flex-col gap-2 flex-1">
          <Label
            htmlFor="employee-size"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Employer Site
          </Label>
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="employee-size"
            name="employee-size"
            placeholder="Enter your company size"
            type="text"
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex items-center gap-[24px]">
        <div className="flex flex-col gap-2 flex-1">
          <Label
            htmlFor="another-field"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Another Field
          </Label>
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="another-field"
            name="another-field"
            placeholder="Enter something"
            type="text"
          />
        </div>

        <div className="w-[1px] h-[62px] bg-[#DFDFDF]" />

        <div className="flex flex-col gap-2 flex-1">
          <Label
            htmlFor="last-field"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Last Field
          </Label>
          <Input
            className="py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            id="last-field"
            name="last-field"
            placeholder="Enter something else"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

const RegisterStep6 = () => {
  return (
    <div className="text-[16px] max-w-[960px] px-2 mt-[10px]">
      <div className="flex justify-end mb-[26px] gap-[10px]">
        <Button variant="outline" className="flex items-center  h-[40px]">
          Add <Image src="/plus.svg" alt="plus" width={24} height={24} />
        </Button>
        <div className="border border-[#D55B09] rounded-[7px] h-[40px] w-[40px]">
          <Image
            src="PaperClip.svg"
            alt="paperclip"
            width={26}
            height={26}
            className="mx-auto mt-[px]"
          />
        </div>
      </div>

      <div className="relative mb-8 grid grid-cols-2 gap-x-[38px]">
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="nature-of-business"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Nature of Business
          </Label>
          <Select>
            <SelectTrigger
              id="nature-of-business"
              className="w-[442px] py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            >
              <SelectValue placeholder="Select the Nature of Business" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Nature of Business</SelectLabel>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="wholesale">Wholesale</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="service">Service</SelectItem>
                <SelectItem value="import-export">Import / Export</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="agriculture">Agriculture</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="shipment-type"
            className="text-[16px] font-primary text-[#26203B]"
          >
            Shipment Type
          </Label>
          <Select>
            <SelectTrigger
              id="shipment-type"
              className="w-[442px] py-2 px-4 placeholder:text-sm placeholder:text-[#9C9AA5] h-12"
            >
              <SelectValue placeholder="Select Shipment Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Shipment Type</SelectLabel>
                <SelectItem value="air-freight">Air Freight</SelectItem>
                <SelectItem value="sea-freight">Sea Freight</SelectItem>
                <SelectItem value="road-freight">Road Freight</SelectItem>
                <SelectItem value="rail-freight">Rail Freight</SelectItem>
                <SelectItem value="express-courier">Express Courier</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
