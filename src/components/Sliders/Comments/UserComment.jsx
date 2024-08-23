import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import comment1 from "../../../../public/assets/images/comment1.png";
import comment2 from "../../../../public/assets/images/comment2.png";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

import "./UserComment.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const UserComment = ({ comments }) => {
  const [swiperRef, setSwiperRef] = useState(null);

  // let appendNumber = 4;
  // let prependNumber = 1;

  // const prepend2 = () => {
  //   swiperRef.prependSlide([
  //     '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
  //     '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
  //   ]);
  // };

  // const prepend = () => {
  //   swiperRef.prependSlide(
  //     '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
  //   );
  // };

  // const append = () => {
  //   swiperRef.appendSlide(
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
  //   );
  // };

  // const append2 = () => {
  //   swiperRef.appendSlide([
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
  //   ]);
  // };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          stopOnLastSlide: false,
        }}
        spaceBetween={15}
        navigation={true}
        modules={[Autoplay, Navigation]}
        id="comments"
      >
        {comments?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <div className="flex ml-2">
                    <img src={comment1} alt="avatar" className="w-[100%]" />
                  </div>
                  <span className="text-[#959ba2] text-[15px] align-middle">
                    {item.userName}
                  </span>
                </div>
                <div className="w-[40px]">
                  <img src={comment2} alt="qoutation" className="w-[100%]" />
                </div>
              </div>
              <div className="mb-4 text-right font-normal leading-4.5 h-[75px] text-[14px] text-[#f9f9f9] overflow-hidden overflow-y-auto">
                {item.comment}
              </div>
            </SwiperSlide>
          );
        })}
        {/* <SwiperSlide>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="flex ml-2">
                <img src={comment1} alt="avatar" className="w-[100%]" />
              </div>
              <span className="text-[#959ba2] text-[15px] align-middle">
                fatemehfarahmandfar6
              </span>
            </div>
            <div className="w-[40px]">
              <img src={comment2} alt="qoutation" className="w-[100%]" />
            </div>
          </div>
          <div className="mb-4 text-right font-normal leading-4.5 h-[75px] text-[14px] text-[#f9f9f9] overflow-hidden overflow-y-auto">
            فیلیمو عالی من از فیلیمو رازی هستم❤❤😍🤩😘❤🍓
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="flex ml-2">
                <img src={comment1} alt="avatar" className="w-[100%]" />
              </div>
              <span className="text-[#959ba2] text-[15px] align-middle">
                ابوالفضل خورسی
              </span>
            </div>
            <div className="w-[40px]">
              <img src={comment2} alt="qoutation" className="w-[100%]" />
            </div>
          </div>
          <div className="mb-4 text-right font-normal leading-4.5 h-[75px] text-[14px] text-[#f9f9f9] overflow-hidden overflow-y-auto">
            بسیار خوب و مناسب برای فیلم دیدن و انجام کارهای روزمره، نسبت به سایر
            اندروید باکس‌ها و نسبت به قیمتش خیلی مناسبه
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="flex ml-2">
                <img src={comment1} alt="avatar" className="w-[100%]" />
              </div>
              <span className="text-[#959ba2] text-[15px] align-middle">
                TahaDamghani
              </span>
            </div>
            <div className="w-[40px]">
              <img src={comment2} alt="qoutation" className="w-[100%]" />
            </div>
          </div>
          <div className="mb-4 text-right font-normal leading-4.5 h-[75px] text-[14px] text-[#f9f9f9] overflow-hidden overflow-y-auto">
            عالی، می‌تونی هر فیلمی رو با دوبله و زیرنویس فارسی تماشا کنی. تازه
            فیلیمو کیفیت پخش آنلاین رو با سرعت اینترنت تنظیم می‌کنه تا بدون توقف
            فیلم ببینی. دسته‌بندی هم داره و قیمت اشتراکش نسبت به برنامه‌های
            مشابه خارجی خیلی ارزونتره و ساخت حساب کاربری هم رایگانه. پیشنهاد
            می‌کنم
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="flex ml-2">
                <img src={comment1} alt="avatar" className="w-[100%]" />
              </div>
              <span className="text-[#959ba2] text-[15px] align-middle">
                ستایش
              </span>
            </div>
            <div className="w-[40px]">
              <img src={comment2} alt="qoutation" className="w-[100%]" />
            </div>
          </div>
          <div className="mb-4 text-right font-normal leading-4.5 h-[75px] text-[14px] text-[#f9f9f9] overflow-hidden overflow-y-auto">
            عالیییبیبیییییییی پیشنهاد میکنم نصب کنید فیلم های رایگان هم داره پس
            نصب کنید 🤗🤗
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="flex ml-2">
                <img src={comment1} alt="avatar" className="w-[100%]" />
              </div>
              <span className="text-[#959ba2] text-[15px] align-middle">
                آوا
              </span>
            </div>
            <div className="w-[40px]">
              <img src={comment2} alt="qoutation" className="w-[100%]" />
            </div>
          </div>
          <div className="mb-4 text-right font-normal leading-4.5 h-[75px] text-[14px] text-[#f9f9f9] overflow-hidden overflow-y-auto">
            خیلی خوب بود من راحت فیِلمی را که دوست داشتمو دانلود میکردم وغیر از
            دانلود راحت میتونستم فیلموببینم درهرحال راضیم ازاین برنامه.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="flex ml-2">
                <img src={comment1} alt="avatar" className="w-[100%]" />
              </div>
              <span className="text-[#959ba2] text-[15px] align-middle">
                F.A
              </span>
            </div>
            <div className="w-[40px]">
              <img src={comment2} alt="qoutation" className="w-[100%]" />
            </div>
          </div>
          <div className="mb-4 text-right font-normal leading-4.5 h-[75px] text-[14px] text-[#f9f9f9] overflow-hidden overflow-y-auto">
            خیلی خوبه تازه فیلم های 2021 رو هم با دوبله داره
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="flex ml-2">
                <img src={comment1} alt="avatar" className="w-[100%]" />
              </div>
              <span className="text-[#959ba2] text-[15px] align-middle">
                RAMTIN
              </span>
            </div>
            <div className="w-[40px]">
              <img src={comment2} alt="qoutation" className="w-[100%]" />
            </div>
          </div>
          <div className="mb-4 text-right font-normal leading-4.5 h-[75px] text-[14px] text-[#f9f9f9] overflow-hidden overflow-y-auto">
            عالیه خیلی فیلم و سریال های قشنگی داره
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="flex ml-2">
                <img src={comment1} alt="avatar" className="w-[100%]" />
              </div>
              <span className="text-[#959ba2] text-[15px] align-middle">
                Manidriver
              </span>
            </div>
            <div className="w-[40px]">
              <img src={comment2} alt="qoutation" className="w-[100%]" />
            </div>
          </div>
          <div className="mb-4 text-right font-normal leading-4.5 h-[75px] text-[14px] text-[#f9f9f9] overflow-hidden overflow-y-auto">
            فیلیمو راضیوم ازت😍😍
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default UserComment;
