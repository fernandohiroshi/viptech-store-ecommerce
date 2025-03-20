import React from "react";
import { cn } from "@/lib/utils";

const CheckoutSteps = ({ current = 0 }) => {
  return (
    <div className="flex-between flex-col md:flex-row gap-4 my-10">
      {["Login", "Address", "Payment", "Order"].map((step, index) => (
        <React.Fragment key={step}>
          <div
            className={cn(
              "rounded-full text-center text-sm",
              index === current ? "bg-gray-200 dark:bg-secondary px-6 py-1" : ""
            )}
          >
            {step}
          </div>
          {step !== "Order" && (
            <hr className="w-full border-t border-gray-300 dark:border-secondary mx-2" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CheckoutSteps;
