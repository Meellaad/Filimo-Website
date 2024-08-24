import React, { useEffect, useState } from "react";

import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";

import online from "../../public/assets/images/online.png";

const Online = () => {
  const [onlines, setOnlines] = useState([]);

  const fetchOnlines = async () => {
    try {
      let data = await fetch("https://meellaad.github.io/filimo-json/db.json/onlines");
      let res = await data.json();
      setOnlines(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchOnlines();
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${online})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="py-16">
        <div className="md:px-[60] px-[10px] py-0 max-w-[1440px] my-0 mx-auto">
          <div className="flex flex-col justify-between">
            <div className="w-[100%]">
              <h2 className="font-bold text-[20px] leading-5 text-center mb-8">
                سینما آنلاین فیلیمو
              </h2>
              <div className="mb-[64px] flex md:flex-row flex-col justify-evenly items-center">
                <div className="text-right items-center mx-8 md:mb-0 mb-3">
                  <FaRegCircleCheck className="inline-block w-[20px] h-[20px] text-[#1cb561] bg-[rgba(28,181,97,0.240)] rounded-[50%] ml-2 mb-1" />
                  <span className="text-base inline-block text-[#c6c6c6]">
                    فیلم‌های روز سینمای ایران
                  </span>
                </div>
                <div className="text-right items-center mx-8 md:mb-0 mb-3">
                  <FaRegCircleCheck className="inline-block w-[20px] h-[20px] text-[#1cb561] bg-[rgba(28,181,97,0.240)] rounded-[50%] ml-2 mb-1" />
                  <span className="text-base inline-block text-[#c6c6c6]">
                    ۸ ساعت زمان برای مشاهده فیلم در هر کجا
                  </span>
                </div>
                <div className="text-right items-center mx-8 md:mb-0 mb-3">
                  <FaRegCircleCheck className="inline-block w-[20px] h-[20px] text-[#1cb561] bg-[rgba(28,181,97,0.240)] rounded-[50%] ml-2 mb-1" />
                  <span className="text-base inline-block text-[#c6c6c6]">
                    خرید یک بلیت برای تماشا همراه با همه خانواده
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[100%]">
              <div className="max-h-[570px] overflow-y-auto flex flex-wrap justify-center">
                {onlines &&
                  onlines?.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="bg-[rgba(255,255,255,0.06)] border-[1px] border-solid border-[#33353d] shadow-[0_10px_36px_rgba(0,0,0,40)] backdrop-blur-[32px] rounded-[12px] p-[10px] min-w-[528px] relative flex flex-col m-[12px]"
                      >
                        <div className="flex justify-start">
                          <div className="bg-[rgba(0,0,0,0.3)] rounded-[16px] w-max py-1 px-1.5 absolute left-[25px] fill-white flex align-middle items-center font-medium text-[10px]">
                            <FaRegBookmark /> <span>اکران آنلاین</span>
                          </div>
                          <div className="ml-4 mb-1">
                            <a
                              href=""
                              className="inline-block w-[100%] h-[100%]"
                            >
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-[100%] rounded-[8px]"
                              />
                            </a>
                          </div>
                          <div className="flex flex-col justify-between">
                            <a
                              href=""
                              className="inline-block font-bold text-[16px] leading-6 text-white mb-3"
                            >
                              {item.title}
                            </a>
                            <p className="font-light text-[14px] leading-4 text-[#d8d8d8] mb-6">
                              کارگردان: {item.director}
                            </p>
                            <div className="flex mb-6">
                              {item.genre.map((elem, index) => {
                                return (
                                  <span
                                    key={index}
                                    className="bg-[rgba(0,0,0,0.2)] rounded-[16px] text-[12px] leading-4 text-center w-max py-[3px] px-[10px] ml-2"
                                  >
                                    {elem}
                                  </span>
                                );
                              })}
                            </div>
                            <div className="border-[1px] border-solid border-white w-[70px] rounded-[8px] ml-3 text-center">
                              <a
                                href=""
                                className="inline-block w-[100%] h-[100%] p-2.5 rounded-[8px] hover:bg-[#151515]"
                              >
                                خرید بلیت
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Online;
