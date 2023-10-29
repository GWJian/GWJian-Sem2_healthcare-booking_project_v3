import React from "react";
import { IconReportMedical } from "@tabler/icons-react";
import { IconCash } from "@tabler/icons-react";

export default function Border() {
  return (
    <div className="border-2 border-blue-900 rounded-tl-3xl rounded-br-3xl flex flex-col justify-between w-full h-full md:flex-row md:h-5/6">
      <div className="w-full md:w-1/2 text-blue-800 px-6 md:px-12 py-6 md:py-12">
        <div className="flex justify-left">
          <IconCash className="w-1/2 md:w-24 h-auto" />
        </div>
        <h2 className="text-sm md:text-lg font-bold my-4">
          TRANSPARENT PRICING
        </h2>
        <h3 className="text-xl md:text-3xl font-bold my-4">No hidden fees</h3>
        <p className="md:text-2xl my-4">
          Our team believes in accessible dental care. We offer straightforward
          pricing, clear estimates, and an unprecedented dental warranty. Keep
          up with your routine 6-month checkups and if something needs fixing,
          we'll handle it at no cost to you.
        </p>
      </div>
      <div className="w-full md:w-1/2 text-white bg-blue-900 px-6 md:px-12 py-6 md:py-12 rounded-br-2xl">
        <h2 className="text-base md:text-3xl font-bold my-4">INSURANCE</h2>
        <p className="md:text-2xl my-4">
          Our office is in-network with Delta Premier and bills all other
          providers. Our team will explain how your specific dental benefits
          apply to the cost of treatment.
        </p>
        <div className="mt-auto flex justify-center">
          <IconReportMedical className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 h-auto" />
        </div>
      </div>
    </div>
  );
}
