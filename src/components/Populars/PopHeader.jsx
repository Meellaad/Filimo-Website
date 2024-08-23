import React from "react";
import { NavLink } from "react-router-dom";

const PopHeader = () => {
  return (
    <div className="flex flex-row mb-[24px] pt-[15px] pr-[8px] pb-[25px] pl-0">
      <h2 className="ml-[16px] font-bold text-base">محبوب‌ترین‌های فیلیمو</h2>
      <div className="border-[1px] border-solid border-[#ffffff1f] rounded-[35px] p-[1px] w-[120px]">
        <NavLink
          to="/"
          className={(navDate) =>
            navDate.isActive
              ? "inline-block w-[50%] text-center font-bold text-[12px] leading-6 bg-[#ffffff1f] rounded-[16px]"
              : "inline-block w-[50%] text-center font-bold text-[12px] leading-6"
          }
        >
          سریال
        </NavLink>

        <NavLink
          to="/movies"
          className={(navDate) =>
            navDate.isActive
              ? "inline-block w-[50%] text-center font-bold text-[12px] leading-6 bg-[#ffffff1f] rounded-[16px]"
              : "inline-block w-[50%] text-center font-bold text-[12px] leading-6"
          }
        >
          فیلم
        </NavLink>
      </div>
    </div>
  );
};

export default PopHeader;
