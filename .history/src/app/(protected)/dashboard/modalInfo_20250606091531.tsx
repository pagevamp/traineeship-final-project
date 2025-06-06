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
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 256px)",
          gap: "26px",
          justifyContent: "center",
          marginBottom: 24,
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
                height: 80,
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

      <button
        style={{
          width: 191,
          height: 40,
          background: "linear-gradient(90deg, #E06518 0%, #E3802A 100%)",
          border: "none",
          borderRadius: 4,
          color: "white",
          fontWeight: "600",
          fontSize: 16,
          cursor: "pointer",
          display: "block",
          margin: "0 auto",
          userSelect: "none",
        }}
      >
        Create
      </button>
    </div>
  );
}
