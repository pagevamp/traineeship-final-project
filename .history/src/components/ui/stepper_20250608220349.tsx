import React from "react";

interface Step {
  id: number;
  title: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  stepRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep, setCurrentStep, stepRefs }) => {
  return (
    <div className="flex gap-4 min-w-max">
      {steps.map((step, index) => (
        <div
          key={step.id}
          ref={(el) => {
            stepRefs.current[index] = el;
          }}
          className={`flex-shrink-0 cursor-pointer transition-opacity ${
            currentStep === step.id ? "opacity-100" : "opacity-50"
          }`}
          onClick={() => setCurrentStep(step.id)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setCurrentStep(step.id);
            }
          }}
          role="button"
          aria-current={currentStep === step.id ? "step" : undefined}
        >
          <div className="text-center px-4 py-2 rounded-md bg-white shadow border border-gray-200">
            <p className="text-sm font-medium text-gray-900">{step.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
