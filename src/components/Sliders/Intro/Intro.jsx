import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import "./Intro.css";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const Intro = ({ slides }) => {
  return (
    <>
      <Swiper
        spaceBetween={1000}
        effect={"fade"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          stopOnLastSlide: true,
        }}
        navigation={false}
        pagination={{
          clickable: false,
        }}
        modules={[Autoplay, EffectFade]}
        id="intro"
      >
        {slides?.map((item) => {
          return (
            <SwiperSlide key={item.id} className="bg-center bg-cover">
              <img
                src={item.image}
                alt={item.alt}
                className="block w-[100%] h-[100%]"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Intro;
