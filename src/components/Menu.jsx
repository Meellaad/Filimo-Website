import React from "react";

import { HiFire } from "react-icons/hi";
import { MdOutlineLiveTv } from "react-icons/md";
import { VscSearch } from "react-icons/vsc";

import brand from "../../public/assets/images/brand.png";
import school from "../../public/assets/images/school.png";

const Menu = () => {
  return (
    <header className="block w-[100vw]">
      <div className="w-[100%] z-[35] fixed top-0 right-0">
        <div className="w-[100%] relative text-[0.8rem] bg-[#030303]">
          <div className="py-0 xl:px-[60px] px-[20px] max-w-[1440px] my-0 mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex flex-row justify-start h-[52px] items-center">
                  <div className="">
                    <a
                      href="/"
                      className="inline-block leading-[0px] md:ml-10 md:border-l-[1px] border-solid border-[#ffffff4d] pl-10"
                    >
                      <img
                        src={brand}
                        alt="filimo-logo"
                        className="h-[25px] inline-block max-w-[none]"
                      />
                    </a>
                  </div>
                  <div className="hover:text-[#f5b83f] md:flex hidden">
                    <a
                      href=""
                      className="leading-[0px] pl-5 flex flex-row items-center"
                    >
                      <HiFire className="text-[#f5b83f] text-lg ml-1 mb-1" />
                      <span>فیلیموتور</span>
                    </a>
                  </div>
                  <div className="w-[140px] bg-[#f5b83f60] rounded-[30px] hover:bg-[#f5b83f87] md:flex hidden">
                    <a href="" className="block py-[4px] px-[8px]">
                      <img
                        src={school}
                        alt="filimo-school"
                        className="inline-block"
                      />
                      <span className="text-[#f5b83f]">مدرسه</span>
                      <span className="inline-block bg-white text-black rounded-[30px] mr-1 p-1 text-[10px] text-center">
                        ویژه امتحانات
                      </span>
                    </a>
                  </div>
                  <div className="mr-4 md:flex hidden">
                    <a
                      href=""
                      className="leading-[0px] flex flex-row items-center hover:text-[#f5b83f]"
                    >
                      <VscSearch className="text-base ml-1" />
                      <span className="">جستجو</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-row text-left">
                  <div className="md:hidden inline-block ml-4 py-[10px] align-middle">
                    <VscSearch className="inline-block text-base w-[24px] h-[24px]" />
                  </div>
                  <div className="bg-[#1cb561] rounded ml-4 hover:bg-[#17924e]">
                    <a href="" className="block py-[10px] px-[16px]">
                      <MdOutlineLiveTv className="inline-block text-base ml-1 mb-1" />
                      <span className="inline-block">خرید اشتراک</span>
                    </a>
                  </div>
                  <div className="bg-[#ffffff33] rounded hover:bg-[#ffffff55]">
                    <a href="" className="block py-[10px] px-[16px]">
                      ورود
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Menu;
