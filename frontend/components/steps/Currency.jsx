import React, { useContext } from "react";
import { LogoCurrency } from "../Logos";
import { StepContext } from "@/context/StepProvider";

const Currency = () => {
  const { changeStepData } = useContext(StepContext);

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <LogoCurrency />
      <h2 className="font-semibold text-xl">Select base currency</h2>
      <select
        name="currency_type"
        className="select select-bordered w-full max-w-xs"
        onChange={(e) => {
          console.log(e.target.name);
          console.log(e.target.value);
          changeStepData(e.target.name, e.target.value);
        }}
      >
        <option disabled selected>
          Select currency
        </option>
        <option value="MNT">MNT - Mongolian Tugrik</option>
        <option value="USD">USD - US Dollar</option>
        <option value="CNY">CNY - China Yuan</option>
      </select>
      <h3 className="text-xs text-[#334155]">
        Your base currency should be the one you use most often. All transaction
        in other currencies will be calculated based on this one
      </h3>
    </div>
  );
};

export default Currency;
