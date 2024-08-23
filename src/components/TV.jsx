import React from "react";

import { IoChevronBack } from "react-icons/io5";

import tv from "../../public/assets/images/tv.png";
import tvicon from "../../public/assets/images/tvicon.png";
import atvicon from "../../public/assets/images/androidtvicon.png";

const TV = () => {
  return (
    <section className="bg-[#00000066]">
      <div className="md:relative py-[60px] px-0 flex-col-reverse">
        <div className="md:absolute md:left-0 md:bottom-0 md:z-0 md:w-[785px]">
          <img src={tv} alt="" className="w-[100%]" />
        </div>

        <div className="relative py-0 xl:px-[60px] px-[20px] max-w-[1440px] mx-auto">
          <h3 className="font-bold text-[18px] leading-[18px] mb-[25px]">چطور با تلویزیون، فیلیمو تماشا کنم؟</h3>
          <p className="font-normal text-[13px] leading-[22px] text-[#d8d8d8] max-w-[400px] pb-[16px] mb-[32px]">
            ما برای راحتی شما و تماشای فیلیمو روی تلویزیون‌های مختلف 6 روش را
            فراهم کردیم. هرکدام از این 6 روش یک ویدیو آموزشی دارند که می‌توانید
            از لینک زیر، آن‌ها را تماشا کنید و روشی که با تلویزیون شما سازگار
            است را انتخاب کنید.
          </p>
          <div>
            <div className="flex flex-row items-start mb-[32px]">
              <div className="w-[27px] ml-[10px]">
                <img src={tvicon} alt="" className="w-[100%] leading-0" />
              </div>
              <div>
                <p className="font-bold text-[16px] leading-[15px] text-[#d8d8d8] mb-[16px]">تلویزیون</p>
                <p className="font-normal text-[11px] leading-[14px] text-[#a1a1a1]">
                  Amazon Fire TV - LG TVs - Chrome Cast - Apple TV - Android TV
                  devices - Samsung
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start mb-[64px]">
              <div className="w-[27px] ml-[10px]">
                <img src={atvicon} alt="" className="w-[100%] leading-0" />
              </div>
              <div>
                <p className="font-bold text-[16px] leading-[15px] text-[#d8d8d8] mb-[16px]">اندروید تی‌وی</p>
                <p className="font-normal text-[11px] leading-[14px] text-[#a1a1a1]">
                  NVIDIA - amazon - xiaomi - minix - skystream - turewell -
                  ematic - humax - matricom
                </p>
              </div>
            </div>
          </div>
          <div className="inline-block rounded-[8px] ml-[12px] bg-[#606060] font-normal text-[13px] hover:bg-[#737373]">
            <a href="" className="inline-block w-[100%] h-[100%] py-[10px] px-[16px]">
              <span>ویدیوهای آموزشی تماشا با تلویزیون</span>
              <IoChevronBack className="inline-block mr-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TV;
