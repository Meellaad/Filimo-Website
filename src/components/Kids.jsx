import React from "react";

import kid from "../../public/assets/images/kid.png";

const Kids = () => {
  return (
    <section id="kids">
      <div className="pt-[42px]">
        <div className="md:px-[60] px-[10px] py-0 max-w-[1440px] my-0 mx-auto">
          <div className="md:w-[85%] w-[90%] my-0 mx-auto flex md:flex-row flex-col-reverse justify-between items-center">
            <div className="md:max-w-[47%] max-w-[100%] text-center">
              <img src={kid} alt="" className="w-[90%]" />
            </div>

            <div className="md:max-w-[47%] max-w-[100%] text-right">
              <h2 className="text-[24px] pb-4">دنیایی متنوع از فیلم و کارتون‌های کودکانه</h2>
              <p className="font-extralight text-[16px] leading-5 opacity-50 text-right text-white pb-8">ساخت فیلیمو کودک این امکان را می‌دهد که با انتخاب سن فرزندتان، یک فضای امن برای تماشای کودک بسازید؛ یعنی محتوای مخصوص سن خودش را ببیند و به بقیه فیلم و سریال‌ها دسترسی نداشته‌باشد.</p>
              <div className="mb-6">
                <a href="" className="bg-[#ededed] text-[#151515] fill-[#151515] py-2.5 px-4 rounded-[8px] ml-3 font-normal text-[13px] hover:bg-[#d6d6d6]">فیلیمو کودک بساز</a>
                <a href="" className="bg-[#ededed] text-[#151515] fill-[#151515] py-2.5 px-4 rounded-[8px] font-normal text-[13px] hover:bg-[#d6d6d6]">تماشای فیلیمو کودک</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kids;
