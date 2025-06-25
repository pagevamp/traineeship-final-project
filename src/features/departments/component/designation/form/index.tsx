import React from "react";
import { Icon } from "@iconify/react";
import { Input } from "@/components/ui/input";
import { DesignationInformationProps } from "@/features/departments/types";

const Form: React.FC<DesignationInformationProps> = ({
  register,
  setValue,
  trigger,
  errors,
  defaultValues,
  handleSubmit,
  onSubmit,
  isPending,
}) => {
  return (
    <div className="relative p-6">
      <h2 className="font-primary text-[20px] text-[#111D35] mb-6">
        Create Designation
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex gap-6">
          <div className="flex flex-col flex-1">
            <Input
              type="text"
              name="name"
              register={register}
              id="name"
              labelName="Designation Name"
              placeholder="Enter Designation Name"
              className="w-full h-[40px] px-3 rounded border border-[#ccc] text-[14px] bg-white"
              error={errors.name?.message}
              aria-invalid={!!errors.name}
              aria-describedby="name-error"
            />
            {errors.name && (
              <span id="name-error" className="text-red-600 text-sm mt-1">
                {errors.name.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-7">
          <button
            type="submit"
            className="w-[191px] h-[40px] rounded text-white font-medium text-[14px] flex items-center justify-center gap-2 disabled:opacity-70"
            style={{
              background: "linear-gradient(90deg, #E06518 0%, #E3802A 100%)",
            }}
            disabled={isPending}
            aria-busy={isPending}
          >
            {isPending ? (
              <>
                <Icon
                  icon="codex:loader"
                  className="text-[20px] animate-spin"
                />
                Creating...
              </>
            ) : (
              "Create"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
