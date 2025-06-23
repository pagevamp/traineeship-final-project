import React from "react";
import OrdersComponent from "@/features/orders/components/OrderComponent";

export async function generateMetadata() {
  return {
    title: "Orders | Arctern Express",
  };
}
const Index = () => {
  return (
    <div>
      <OrdersComponent />
    </div>
  );
};

export default Index;
