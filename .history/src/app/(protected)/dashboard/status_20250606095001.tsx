"use client";

import React, { useState } from "react";

export default function DepartmentInfo() {
  const [activeTab, setActiveTab] = useState("users");

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
    <div className="mt-6">
      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b pb-2">
        <button
          className={`text-lg font-semibold ${
            activeTab === "users"
              ? "text-orange-600 border-b-2 border-orange-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("users")}
        >
          Users
        </button>
        <button
          className={`text-lg font-semibold ${
            activeTab === "designations"
              ? "text-orange-600 border-b-2 border-orange-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("designations")}
        >
          Designations
        </button>
      </div>

      {/* Users Table */}
      {activeTab === "users" && (
        <table className="w-full text-left border border-gray-200 rounded-md overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Designation Table */}
      {activeTab === "designations" && (
        <table className="w-1/2 text-left border border-gray-200 rounded-md overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">Designation</th>
            </tr>
          </thead>
          <tbody>
            {designations.map((title, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4">{title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
