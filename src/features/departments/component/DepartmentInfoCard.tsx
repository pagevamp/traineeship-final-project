"use client";

import React, { useEffect, useState } from "react";
import { useGetDepartmentById } from "../hooks"; // adjust path if needed

type DepartmentInfoProps = {
  departmentId: string;
};

const DepartmentInfoCard = ({ departmentId }: DepartmentInfoProps) => {
  const { data, isLoading, isError, error, refetch } =
    useGetDepartmentById(departmentId);

  const department = data?.data?.data;

  if (isLoading) {
    return (
      <div className="text-center py-8 text-gray-500 font-medium">
        Loading department details...
      </div>
    );
  }

  if (isError || !department) {
    return (
      <div className="text-center py-8 text-red-500 font-medium">
        Failed to load department.{" "}
        <button
          className="underline text-blue-500 ml-2"
          onClick={() => refetch()}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-[25px] shadow-md px-6 py-6 flex flex-col font-primary">
      <h2 className="text-[22px] text-[#404040] font-semibold mb-6">
        Department Details
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-x-10 md:gap-x-16">
        <InfoRow label="Name" value={department.name} />
        <InfoRow label="Contact Person" value={department.contactPerson} />
        <InfoRow label="Email Address" value={department.contactEmail} />
        <InfoRow label="Phone Number" value={department.contactPhone} />
      </div>
    </div>
  );
};

const InfoRow = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <div className="flex gap-3 flex-wrap items-center">
    <span className="text-[15px] sm:text-[16px] text-gray-700 font-semibold min-w-[130px]">
      {label}:
    </span>
    <span className="text-[15px] sm:text-[16px] text-gray-600 font-normal">
      {value || "N/A"}
    </span>
  </div>
);

export default DepartmentInfoCard;
