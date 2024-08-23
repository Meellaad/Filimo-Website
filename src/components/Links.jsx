import React from "react";

import { IoMdTv } from "react-icons/io";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { SiAparat } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Links = () => {
  return (
    <footer className="w-[100%] fixed flex justify-between bottom-0 z-20 bg-[#191919] text-[#959595] text-[12px] min-h-7">
      <ul className="flex items-center">
        <li className="relative flex cursor-pointer hover:text-white">
          <a href="" className="px-2 py-1 items-center">
            <IoMdTv className="inline-block w-[18px] h-[18px] ml-1" />
            تماشا با تلویزیون
          </a>
        </li>
        <li className="relative flex cursor-pointer hover:text-white">
          <a href="" className="px-2 py-1 items-center">
            اپلیکیشن‌ها
          </a>
        </li>
        <li className="relative flex cursor-pointer hover:text-white">
          <a href="" className="px-2 py-1 items-center">
            تماس و پشتیبانی
          </a>
        </li>
        <li className="relative flex cursor-pointer hover:text-white">
          <a href="" className="px-2 py-1 items-center">
            فروشگاه
          </a>
        </li>
        <li className="dropdown relative flex cursor-pointer hover:text-white">
          <a href="" className="px-2 py-1 items-center">
            <TbTriangleInvertedFilled className="inline-block w-[10px] h-[10px] ml-1" />
            سایر لینک‌ها
          </a>
          <div className="dropdown-content flex flex-col invisible absolute min-w-[150px] z-[40] bg-[red] opacity-0 translate-y-[-10px] left-auto">
            <div className="w-[100%] absolute bottom-0 h-2"></div>
            <ul className="dropdown-card absolute opacity-100 bg-[#191919] bottom-[6px] min-w-[160px] text-[#959595]">
              <li className="hover:text-white hover:bg-[#404040]">
                <a href="" className="p-2 flex">
                  قوانین
                </a>
              </li>
              <li className="hover:text-white hover:bg-[#404040]">
                <a href="" className="p-2 flex">
                  به ما بپیوندید
                </a>
              </li>
              <li className="hover:text-white hover:bg-[#404040]">
                <a href="" className="p-2 flex">
                  تبلیغات در فیلیمو
                </a>
              </li>
              <li className="hover:text-white hover:bg-[#404040]">
                <a href="" className="p-2 flex">
                  لوگو
                </a>
              </li>
              <li className="hover:text-white hover:bg-[#404040]">
                <a href="" className="p-2 flex">
                  دانلود فیلم و سریال
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      <ul className="flex items-center">
        <li className="dropdown relative flex cursor-pointer hover:text-white">
          <a href="" className="px-2 py-1 items-center">
            <TbTriangleInvertedFilled className="inline-block w-[10px] h-[10px] ml-1" />
            شبکه‌های اجتماعی
          </a>
          <div className="dropdown-content flex flex-col invisible absolute min-w-[150px] z-[40] bg-[red] opacity-0 translate-y-[-10px] left-auto">
            <div className="w-[100%] absolute bottom-0 h-2"></div>
            <ul className="dropdown-card absolute opacity-100 bg-[#191919] bottom-[6px] min-w-[160px] text-[#959595] left-4">
              <li className="hover:text-white hover:bg-[#404040]">
                <a href="" className="p-2 flex items-center">
                  <SiAparat className="h-[20px] w-[20px] ml-2 align-middle leading-0 inline-block" />
                  آپارات
                </a>
              </li>
              <li className="hover:text-white hover:bg-[#404040]">
                <a href="" className="p-2 flex items-center">
                  <FaTelegramPlane className="h-[20px] w-[20px] ml-2 align-middle leading-0 inline-block" />
                  تلگرام
                </a>
              </li>
              <li className="hover:text-white hover:bg-[#404040]">
                <a href="" className="p-2 flex items-center">
                  <FaTwitter className="h-[20px] w-[20px] ml-2 align-middle leading-0 inline-block" />
                  توئیتر
                </a>
              </li>
              <li className="hover:text-white hover:bg-[#404040]">
                <a href="" className="p-2 flex items-center">
                  <FaInstagram className="h-[20px] w-[20px] ml-2 align-middle leading-0 inline-block" />
                  اینستاگرام
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Links;
