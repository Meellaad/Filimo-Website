import React, { useEffect, useState } from "react";

import Intro from "../components/Sliders/Intro/Intro";

import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { MdOutlineLiveTv } from "react-icons/md";

const Banner = () => {
  const [slides, setSlides] = useState([]);

  const fetchSlides = async () => {
    try {
      let data = await fetch("https://meellaad.github.io/filimo-json/sliders.json");
      let res = await data.json();
      setSlides(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  return (
    <section className="">
      <div className="relative w-[100%] md:h-[70vh] h-[60vh] mt-[52px]">
        <div className="absolute 2xl:top-[-200px] top-[-100px] left-0 right-0 bottom-0">
          {slides && <Intro slides={slides} className="absolute top-0 left-0 right-0 bottom-0" />}
        </div>
        <div
          id="gradient1"
          className="absolute 2xl:top-[-200px] top-[-100px] left-0 right-0 bottom-[-10px] z-[2]"
        ></div>
        <div
          id="gradient2"
          className="absolute 2xl:top-[-200px] top-[-100px] left-0 right-0 bottom-[-10px] z-[2]"
        ></div>

        <div className=" xl:px-[60px] px-[20px] py-0 max-w-[1440px] my-0 mx-auto absolute z-[5] md:bottom-16 bottom-[10%] w-[100%] left-[50%] translate-x-[-50%]">
          <div className="flex flex-col justify-around">
            <div className=" mb-[32px] pb-[8px] text-center">
              <p className="font-bold text-sm text-[#f5b83f] mb-[16px]">
                با فیلیمو بی‌وقفه فیلم ببین
              </p>
              <p className="font-bold text-4xl">کنترل همیشه دست توست!</p>
            </div>
            <div className="mb-[64px] flex md:flex-row flex-col justify-evenly items-center">
              <div className="text-right items-center md:mx-8 md:mb-0 mb-3">
                <FaRegCircleCheck className="inline-block w-[20px] h-[20px] text-[#1cb561] bg-[rgba(28,181,97,0.240)] rounded-[50%] ml-2 mb-1" />
                <span className="xl:text-base text-sm inline-block text-[#c6c6c6]">
                  ۹۰ هزار اپیزود فیلم و سریال برای تماشا داری
                </span>
              </div>
              <div className="text-right items-center md:mx-8 md:mb-0 mb-3">
                <FaRegCircleCheck className="inline-block w-[20px] h-[20px] text-[#1cb561] bg-[rgba(28,181,97,0.240)] rounded-[50%] ml-2 mb-1" />
                <span className="xl:text-base text-sm inline-block text-[#c6c6c6]">
                  می‌تونی دانلود کنی بعد بدون اینترنت تماشا کنی
                </span>
              </div>
              <div className="text-right items-center md:mx-8 md:mb-0 mb-3">
                <FaRegCircleCheck className="inline-block w-[20px] h-[20px] text-[#1cb561] bg-[rgba(28,181,97,0.240)] rounded-[50%] ml-2 mb-1" />
                <span className="xl:text-base text-sm inline-block text-[#c6c6c6]">
                  می‌تونی یک عضو، مخصوص تماشا کودک بسازی
                </span>
              </div>
            </div>
            <div className="w-[285px] mx-auto bg-[#1cb561] rounded-[8px] hover:bg-[#17924e] text-center">
              <a href="" className="block py-[17px] px-0 text-base">
                <MdOutlineLiveTv className="inline-block w-[20px] h-[20px] mb-1 ml-2" />
                <span className="inline-block">خرید اشتراک و تماشا</span>
              </a>
            </div>
            <div className=" mt-[8px] text-xs text-center">
              <MdOutlineCardGiftcard className="inline-block ml-2 text-[#959ba2] w-[18px] h-[18px] mb-1" />
              <span className="text-[#959ba2] font-light">
                تخفیف ویژه برای کاربران جدید
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
