import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

import { MdOutlineSmartDisplay } from "react-icons/md";

import "./FreeContent.css";

const FreeContent = ({ frees }) => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation]}
        onSwiper={setSwiperRef}
        slidesPerView={6}
        centeredSlides={false}
        spaceBetween={50}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        virtual
        id="free-content"
      >
        {frees?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="min-w-[130px] ml-10 relative rounded-[10px]">
                <a href="" className="inline-block w-[100%] h-[100%]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="inline-block w-[100%] h-[100%] rounded-[10px]"
                  />
                  <span className="absolute top-2 right-2 bg-[#1d2b1f] text-[#4dab56] rounded-[24px] px-[10px] py-[4px] text-[12px]">
                    <MdOutlineSmartDisplay className="inline-block ml-1 text-[16px]" />
                    رایگان
                  </span>
                  <div className="title">{item.title}</div>
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default FreeContent;
