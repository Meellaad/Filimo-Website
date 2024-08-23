import React from "react";

import { NavLink } from "react-router-dom";

import tag from "../../../public/assets/images/tag.svg";

const PopSeriesCards = ({ series }) => {
  return (
    <div className="flex flex-row justify-center items-center overflow-hidden overflow-x-auto pt-[15px] pr-[8px] pb-[25px] pl-0">
      {series?.map((item) => {
        return (
          <NavLink
            key={item.id}
            to={`/${item.id}`}
            className={(navDate) =>
              navDate.isActive
                ? "min-w-[130px] mx-5 relative border-[2px] border-solid scale-[1.1] border-[#ffffffb3] rounded-[10px]"
                : "relative min-w-[130px] mx-5"
            }
          >
            <img
              src={item.image}
              alt={item.title}
              className="inline-block w-[100%] h-[100%] rounded-[8px] opacity-[0.65] hover:opacity-[1]"
            />
            <span className="inline-block absolute left-[50%] bottom-[8px] translate-x-[-50%]">
              <img src={tag} alt="" className="" />
            </span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default PopSeriesCards;
