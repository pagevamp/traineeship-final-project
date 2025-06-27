"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import TableComponent from "@/components/table";
import { DEPARTMENT_COLUMN } from "../constant";
import { useDeleteDepartment } from "../hooks";
import { useModalContext } from "@/providers/modal-context";
import Index from "../create";

type DepartmentInfoProps = {
  departments: any[];
  isLoading: boolean;
  isEdit: boolean;
  currentPage?: any;
};

const DepartmentInfo = ({
  departments,
  isLoading,
  currentPage,
}: DepartmentInfoProps) => {
  const { openModal } = useModalContext();
  const router = useRouter();
  const { mutate: deleteDepartment } = useDeleteDepartment();

  const { closeModal } = useModalContext();
  const handleEditClick = (row: any) => {
    closeModal();
    openModal({
      component: Index,
      props: { id: row.id, isEdit: true },
      className:
        "lg:h-fit bg-white max-w-[90%] lg:max-w-max rounded-[39px] h-[310px] sm:h-[360px]",
    });
  };

  const actions = [
    {
      label: (
        <Icon
          icon="heroicons:eye-16-solid"
          width="20"
          height="20"
          color="#FF811A"
        />
      ),
      title: "View",
      onClick: (row: any) => router.push(`/departments/${row.id}`),
    },
    {
      label: (
        <Icon
          icon="material-symbols:edit-outline-rounded"
          width="20"
          height="20"
          color="#FF811A"
        />
      ),
      title: "Edit",
      onClick: handleEditClick,
    },

    {
      label: (
        <Icon
          icon="material-symbols:delete-outline-rounded"
          width="20"
          height="20"
          color="#FF811A"
        />
      ),

      title: "Delete",

      onClick: (row: any) => {
        deleteDepartment(row.id);
      },
    },
  ];

  return (
    <div className="flex flex-col gap-[15px]">
      <div>
        <TableComponent
          currentPage={currentPage.page}
          columns={DEPARTMENT_COLUMN}
          data={departments}
          isLoading={isLoading}
          actions={actions}
        />
      </div>
    </div>
  );
};

export default DepartmentInfo;
