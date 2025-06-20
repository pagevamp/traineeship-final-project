import React from "react";
import OrderHeading from "./OrderHeading";
import OrderLead from "./OrderLead";
import OrderCustomer from "./OrderCustomer";
import OrderProducts from "./OrderProducts";
import { Button } from "@/components/ui/button";

const OrderId = () => {
  return (
    <div className="flex flex-col">
      <OrderHeading />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="grid grid-cols-1">
          <OrderLead />
          <OrderCustomer />
        </div>
        <OrderProducts />
      </div>
    </div>
  );
};

export default OrderId;
