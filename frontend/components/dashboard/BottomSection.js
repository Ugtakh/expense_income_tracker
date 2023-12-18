import React from "react";
import Record from "../record";

const BottomSection = () => {
  return (
    <div className="w-full h-full bg-base-100 border-y-rounded rounded-t-xl p-5">
      <h1 className="">Last Records</h1>
      <Record />
      <Record />
    </div>
  );
};

export default BottomSection;
