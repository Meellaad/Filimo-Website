import React from "react";

import logo from "../../public/assets/images/logo.png";

import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineLiveTv } from "react-icons/md";

const Subscription = () => {
  return (
    <section>
      <div className="relative">
        <div
          id="subscription"
          className="absolute top-0 bottom-0 left-0 right-0"
        ></div>

        <div className="relative">
          <div className="flex flex-col justify-around py-16">
            <div className="w-[190px] my-0 mx-auto text-center pb-16">
              <img src={logo} alt="" />
            </div>
            <div className="flex justify-center mb-8 pb-3">
              <div className="mb-[64px] flex md:flex-row flex-col justify-evenly items-center">
                <div className="text-right items-center mx-8">
                  <FaRegCircleCheck className="inline-block w-[20px] h-[20px] text-[#1cb561] bg-[rgba(28,181,97,0.240)] rounded-[50%] ml-2 mb-1" />
                  <span className="text-base inline-block text-[#c6c6c6]">
                    هزاران فیلم و سریال خارجی (دوبله و زیرنویس)
                  </span>
                </div>
                <div className="text-right items-center mx-8">
                  <FaRegCircleCheck className="inline-block w-[20px] h-[20px] text-[#1cb561] bg-[rgba(28,181,97,0.240)] rounded-[50%] ml-2 mb-1" />
                  <span className="text-base inline-block text-[#c6c6c6]">
                    هزاران انیمیشن و کارتون برای کودکان
                  </span>
                </div>
                <div className="text-right items-center mx-8">
                  <FaRegCircleCheck className="inline-block w-[20px] h-[20px] text-[#1cb561] bg-[rgba(28,181,97,0.240)] rounded-[50%] ml-2 mb-1" />
                  <span className="text-base inline-block text-[#c6c6c6]">
                    پشتیبانی 24 ساعته برای راهنمایی شما
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[285px] my-0 mx-auto rounded-[8px] bg-[#1cb561] text-white  hover:bg-[#17924e] text-center">
              <a href="" className="block py-[17px] px-0 text-base">
                <MdOutlineLiveTv className="inline-block w-[20px] h-[20px] mb-1 ml-2" />
                <span className="inline-block">خرید اشتراک و تماشا</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
