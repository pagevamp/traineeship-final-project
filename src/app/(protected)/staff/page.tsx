import React from "react";
import StaffComponent from "@/features/staff";

export async function generateMetadata() {
  return {
    title: "Staff | Arctern Express",
  };
}
const Index = () => {
  return (
    <div>
      <StaffComponent />
    </div>
  );
};

export default Index;
