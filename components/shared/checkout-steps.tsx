import React from "react";
import { cn } from "@/lib/utils";

const CheckoutSteps = ({ current = 0 }) => {
  return (
    <div className="flex items-center justify-evenly gap-4 my-10">
      {["Login", "Address", "Payment", "Order"].map((step, index) => (
        <React.Fragment key={step}>
          <div
            className={cn(
              "rounded-full text-center text-xs md:text-sm",
              index === current
                ? "bg-gray-200 dark:bg-secondary px-2.5 md:px-4 py-1.5 animate-pulse"
                : ""
            )}
          >
            {step}
          </div>
          {step !== "Order" && (
            <hr className="w-full border-t border-gray-300 dark:border-gray-50/20 mx-2" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CheckoutSteps;
