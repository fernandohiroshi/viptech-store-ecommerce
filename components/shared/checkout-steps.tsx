import React from "react"

import { cn } from "@/lib/utils"

const CheckoutSteps = ({ current = 0 }) => {
  return (
    <div className="my-10 flex items-center justify-evenly gap-4">
      {["Login", "Address", "Payment", "Order"].map((step, index) => (
        <React.Fragment key={step}>
          <div
            className={cn(
              "rounded-full text-center text-xs md:text-sm",
              index === current
                ? "dark:bg-secondary animate-pulse bg-gray-200 px-2.5 py-1.5 md:px-4"
                : ""
            )}
          >
            {step}
          </div>
          {step !== "Order" && (
            <hr className="mx-2 w-full border-t border-gray-300 dark:border-gray-50/20" />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default CheckoutSteps
