import React from "react";
import {
  MdChildFriendly,
  MdOutlineShoppingBag,
  MdHomeFilled,
  MdBadge,
  MdHourglassTop,
} from "react-icons/md";
import {
  FaTaxi,
  FaIdBadge,
  FaMicrophone,
  FaCalendar,
  FaHome,
  FaRoad,
  FaPeace,
  FaToiletPaper,
  FaBusAlt,
  FaAirFreshener,
} from "react-icons/fa";
import { BiPencil } from "react-icons/bi";
import { BsGlobe, BsIntersect, BsMenuAppFill } from "react-icons/bs";
import { GiDeliveryDrone } from "react-icons/gi";
import {
  PiExamFill,
  PiIntersectFill,
  PiLadderFill,
  PiLeafFill,
  PiNumberCircleSevenFill,
  PiNumberFiveFill,
  PiOrangeSliceFill,
  PiQuestionFill,
  PiWatchFill,
} from "react-icons/pi";
import { RiImageFill } from "react-icons/ri";
import { categoryIcons, getIcons } from "@/utils";

const CategoryIcons = ({ IsColor, colored, setIsColor, setColored }) => {
  const icons = categoryIcons();
  return (
    <div>
      <div className="grid grid-cols-6 w-full border-b-2  ">
        {console.log("KK", icons)}
        {Object.keys(icons).map((ic) => (
          <li className="inline-block">
            <span>{icons[ic]}</span>
          </li>
        ))}
      </div>

      <ul className="flex justify-center py-6 gap-4 ">
        <button
          className=" w-9 h-9 rounded-full bg-[#0166ff]"
          onClick={() => setIsColor("#0166ff")}
        ></button>
        <button
          className=" w-9 h-9 rounded-full bg-[#01B3FF]"
          onClick={() => setIsColor("#01B3FF")}
        ></button>
        <button
          className=" w-9 h-9 rounded-full bg-[#41CC00]"
          onClick={() => setIsColor("#41CC00")}
        ></button>
        <button
          className=" w-9 h-9 rounded-full bg-[#F9D100]"
          onClick={() => setIsColor("#F9D100")}
        ></button>
        <button
          className=" w-9 h-9 rounded-full bg-[#ff7b01]"
          onClick={() => setIsColor("#ff7b01")}
        ></button>
        <button
          className=" w-9 h-9 rounded-full bg-[#Ae01ff]"
          onClick={() => setIsColor("#Ae01ff")}
        ></button>
        <button
          className=" w-9 h-9 rounded-full bg-[#ff0101]"
          onClick={() => setIsColor("#ff0101")}
        ></button>
      </ul>
    </div>
  );
};

export default CategoryIcons;
