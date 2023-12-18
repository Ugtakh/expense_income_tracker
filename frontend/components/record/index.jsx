import React from "react";
import { HomeIcon } from "../Logos";
import { getIcons } from "@/utils";

const Record = () => {
  return (
    <div className="border-b-2 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <div className={`rounded-full bg-[${transaction.iconcolor}]`}>
          {getIcons(transaction.iconname, "white")}
        </div>
        <div className="ml-3">
          <h2 className="font-medium">Lending & Renting</h2>
          <h3 className="text-gray-500 text-xs">3 hours ago</h3>
        </div>
      </div>

      <h4 className="text-lime-500 font-semibold">-1,000₮</h4>
    </div>
  );
};

export default Record;
