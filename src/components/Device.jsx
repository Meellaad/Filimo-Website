import React from "react";

import { RxLaptop } from "react-icons/rx";
import { LuTablet } from "react-icons/lu";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineLiveTv } from "react-icons/md";

import device from "../../public/assets/images/device.png";

const Device = () => {
  return (
    <section>
      <div className="py-[64px] xl:px-[60px] px-[20px] max-w-[1440px] mx-auto">
        <div className="flex md:flex-row flex-col-reverse">
          <div className="w-[570px] ml-[24px]">
            <img src={device} alt="" className="w-[100%]" />
          </div>

          <div className="mr-[24px]">
            <h3 className="font-bold text-[18px] leading-[18px] mb-[16px]">تماشای فیلیمو با همه دستگاه‌ها</h3>
            <p className="font-light text-[14px] leading-[24px] text-[#d8d8d8] mb-[32px]">
              می‌توانید فیلیمو را به صورت هم‌زمان روی 3 دستگاه مختلف مثل موبایل،
              تبلت، لپ‌تاپ، تلویزیون و... تماشا کنید.
            </p>
            <div className="flex flex-row mb-[32px]">
              <div className="w-[27px] ml-[10px] text-[#a1a1a1]">
                <RxLaptop className="w-[100%] h-[50%]" />
              </div>
              <div className="pt-2">
                <p className="font-bold text-[16px] leading-[16px] text-[#d8d8d8] mb-[16px]">کامپیوتر و لپ‌تاپ</p>
                <p className="font-normal text-[11px] leading-[14px] text-[#a1a1a1]">windows PC - MacOS - Chorom OS</p>
              </div>
            </div>
            <div className="flex flex-row mb-[32px]">
              <div className="w-[27px] ml-[10px] text-[#a1a1a1]">
                <LuTablet className="w-[100%] h-[50%]" />
              </div>
              <div className="pt-2">
                <p className="font-bold text-[16px] leading-[16px] text-[#d8d8d8] mb-[16px]">موبایل و تبلت</p>
                <p className="font-normal text-[11px] leading-[14px] text-[#a1a1a1]">Android Phone & Tablets - Iphone and Ipad - Amazon Fire Tablets</p>
              </div>
            </div>
            <div className="flex flex-row mb-[32px]">
              <div className="w-[27px] ml-[10px] text-[#a1a1a1]">
                <IoGameControllerOutline className="w-[100%] h-[50%]" />
              </div>
              <div className="pt-2">
                <p className="font-bold text-[16px] leading-[16px] text-[#d8d8d8] mb-[16px]">کنسول‌های بازی (Browser)</p>
                <p className="font-normal text-[11px] leading-[14px] text-[#a1a1a1]">Xbox Series S - Xbox Seris X - PS5 - PS4</p>
              </div>
            </div>
            <div className="w-[160px] bg-[#1cb561] rounded-[8px] hover:bg-[#17924e] ml-[12px] md:mb-0 mb-8">
              <a href="" className="block py-[10px] px-[16px] text-[12px] font-ultrathin">
                <MdOutlineLiveTv className="inline-block w-[18px] h-[18px] mb-1 ml-2" />
                <span className="inline-block">خرید اشتراک و تماشا</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Device;
