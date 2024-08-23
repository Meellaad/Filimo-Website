import React from "react";

import Accordion from "./Accordion/Accordion";

const FAQ = () => {
  return (
    <section id="faq">
      <div className="px-0 py-[80px] w-[100%]">
        <div className="py-0 px-20px max-w-[1440px] my-0 mx-auto">
          <div className="text-center font-normal mb-8">
            <h2 className="m-0 text-[18px]">سوالات متداول</h2>
            <p className=" mt-2.5 text-[14px] text-[rgb(158,158,158)]">سوال شایع دیگر کاربران شاید برای شما پیش آمده باشد</p>
          </div>

          <div className="w-[80%] my-0 mx-auto">
            <Accordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
