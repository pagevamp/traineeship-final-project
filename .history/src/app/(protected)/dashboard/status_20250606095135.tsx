"use client";

import React from "react";

export default function DepartmentInfo() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Manager" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "HR" },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "Developer",
    },
  ];

  const designations = ["Manager", "HR", "Developer", "Team Lead", "Intern"];

  return (
    <div style={{ padding: "24px", background: "#F8F8F8", minHeight: "100vh" }}>
      {/* Users Table */}
      <div style={{ marginBottom: "40px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "white",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <thead style={{ backgroundColor: "#F2F2F2", textAlign: "left" }}>
            <tr>
              <th style={{ padding: "12px 16px", fontWeight: 600 }}>Name</th>
              <th style={{ padding: "12px 16px", fontWeight: 600 }}>Email</th>
              <th style={{ padding: "12px 16px", fontWeight: 600 }}>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={{ borderTop: "1px solid #eee" }}>
                <td style={{ padding: "12px 16px" }}>{user.name}</td>
                <td style={{ padding: "12px 16px" }}>{user.email}</td>
                <td style={{ padding: "12px 16px" }}>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Designations Table (small) */}
      <div
        style={{
          width: 523,
          height: 313,
          backgroundColor: "white",
          border: "1px solid #E5E5E5",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: "#F2F2F2" }}>
            <tr>
              <th
                style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  fontWeight: 600,
                }}
              >
                S.N.
              </th>
              <th
                style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  fontWeight: 600,
                }}
              >
                Designation
              </th>
            </tr>
          </thead>
          <tbody>
            {designations.map((title, index) => (
              <tr key={index} style={{ borderTop: "1px solid #eee" }}>
                <td style={{ padding: "12px 16px" }}>{index + 1}</td>
                <td style={{ padding: "12px 16px" }}>{title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
