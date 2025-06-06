"use client";

import { Input } from "@/components/ui/input";
import React from "react";

const fields = [
  {
    name: "departmentName",
    label: "Department Name",
    type: "text",
    placeholder: "Enter department name",
  },
  {
    name: "contactPerson",
    label: "Contact Person",
    type: "text",
    placeholder: "Enter contact person",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter email address",
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    type: "tel",
    placeholder: "Enter phone number",
  },
];

export default function DepartmentForm() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 256px)",
        gap: "26px",
      }}
    >
      {fields.map(({ name, label, type, placeholder }) => (
        <div key={name} style={{ width: 256 }}>
          <label
            htmlFor={name}
            style={{ display: "block", marginBottom: 6, fontWeight: 500 }}
          >
            {label}
          </label>
          <Input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            style={{
              height: 40,
              width: 256,
              backgroundColor: "#FFFFFF",
              border: "1px solid #EBEBEB",
              borderRadius: 4,
              padding: "0 12px",
              fontSize: 16,
              boxSizing: "border-box",
            }}
          />
        </div>
      ))}
    </div>
  );
}
