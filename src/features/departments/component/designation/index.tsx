"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useModal } from "@/hooks/useModal";
import Form from "./form";
import { CreateDesignationPayload } from "../../types";
import { useCreateDesignation } from "../../hooks";
import { Resolver, useForm } from "react-hook-form";
import { designationCreationValidationSchema } from "../../validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import { useParams } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
  onAddDesignation?: (newDesignation: any) => void;
};

const Index: React.FC<Props> = ({ onAddDesignation }) => {
  const { closeModal } = useModal();
  const queryClient = useQueryClient();
  const params = useParams();
  const departmentId = Array.isArray(params?.id) ? params.id[0] : params?.id;

  const {
    register,
    watch,
    setValue,
    trigger,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateDesignationPayload>({
    resolver: yupResolver(
      designationCreationValidationSchema
    ) as Resolver<CreateDesignationPayload>,
  });

  const defaultValues = watch();

  const { mutateAsync: createDesignation } = useCreateDesignation({
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Something went wrong!");
    },
    onSuccess: (data) => {
      toast.success("Designation Successfully Created!");
      queryClient.invalidateQueries({ queryKey: ["allDesignations"] });

      if (onAddDesignation) {
        onAddDesignation(data?.data?.data);
      }

      closeModal();
    },
  });

  const onSubmit = async (formData: CreateDesignationPayload) => {
    if (!departmentId || typeof departmentId !== "string") {
      toast.error("Invalid Department ID.");
      return;
    }

    try {
      const body = {
        name: formData.name.trim(),
        department: {
          id: departmentId,
        },
      };

      await createDesignation(body);
    } catch (error) {
      console.error("Error creating designation:", error);
    }
  };

  return (
    <div className="relative w-full">
     
      <button
        onClick={closeModal}
        aria-label="Close modal"
        className="absolute -top-2 -right-2 z-50 bg-white hover:bg-primary-light w-[45px] h-[45px] rounded-full text-2xl text-[#E06518] font-bold border-primary border cursor-pointer flex items-center justify-center"
        type="button"
      >
        <Icon icon="ic:baseline-close" width="24" height="24" />
      </button>

      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Form
          register={register}
          watch={watch}
          setValue={setValue}
          trigger={trigger}
          control={control}
          errors={errors}
          defaultValues={defaultValues}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </motion.div>
    </div>
  );
};

export default Index;
