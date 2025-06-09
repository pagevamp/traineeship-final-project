"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface StepProps {
  title: string;
  stepNumber?: number;
  isCompleted?: boolean;
  isActive?: boolean;
}

const Step = React.forwardRef<HTMLDivElement, StepProps>(
  ({ title, stepNumber, isCompleted, isActive }, ref) => {
    return (
      <div ref={ref} className="flex items-center h-8">
        <div className="relative flex items-center justify-center">
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center",
              isCompleted || isActive
                ? "text-primary-foreground bg-gradient-to-r from-[#CF5406] to-[#F87B18]"
                : "border-[1px] border-[#DFDFDF]"
            )}
          >
            {isCompleted ? (
              <span className="text-sm font-medium">{stepNumber}</span>
            ) : (
              <span className="text-sm font-medium text-[#DFDFDF]">
                {stepNumber}
              </span>
            )}
          </div>
        </div>
        <div className="ml-4">
          <p
            className={cn(
              "text-[16px]",
              isCompleted || isActive
                ? "font-normal inline-block bg-gradient-to-r from-[#CF5406] to-[#F87B18] bg-clip-text text-transparent"
                : "text-muted-foreground text-[#DFDFDF]"
            )}
          >
            {title}
          </p>
        </div>
      </div>
    );
  }
);

Step.displayName = "Step";

interface StepperProps {
  steps: Array<{ title: string; description?: string }>;
  currentStep: number;
}

export function Stepper({ steps, currentStep }: StepperProps) {
  const stepRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className="w-full mx-auto">
      <div className="flex flex-row justify-between items-center gap-4 mb-8">
        {steps.map((step, index) => (
          <Step
            key={step.title}
            title={step.title}
            stepNumber={index + 1}
            isCompleted={index < currentStep}
            isActive={index + 1 === currentStep}
            ref={(el) => {
              stepRefs.current[index] = el;
            }}
          />
        ))}
      </div>
    </div>
  );
}
