import React from "react";
import TeamsComponent from "@/features/teams";

export async function generateMetadata() {
  return {
    title: "Teams | Arctern Express",
  };
}
const Index = () => {
  return (
    <div>
      <TeamsComponent />
    </div>
  );
};

export default Index;
