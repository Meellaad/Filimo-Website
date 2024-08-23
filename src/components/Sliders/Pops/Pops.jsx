import React, { useEffect, useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

import { MdOutlineSmartDisplay } from "react-icons/md";
import { FaLock } from "react-icons/fa";

import "./Pops.css";

const Pops = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  let { id } = useParams();
  let [episodes, setEpisodes] = useState(null);

  const fetchEpisodes = async () => {
    try {
      let data = await fetch(`http://localhost:1000/series/${id}`);
      let res = await data.json();
      setEpisodes(res.episodes);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchEpisodes();
  }, [id]);

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation]}
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={50}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        virtual
        id="popular-series"
      >
        {episodes?.map((item) => {
          return (
            <SwiperSlide>
              <div className="w-[315px] ml-[20px]">
                <a href="" className="inline-block w-[100%]">
                  <div className="relative mb-[8px]">
                    <img
                      src={item.image}
                      alt=""
                      className="w-[100%] rounded-[10px] blur-sm"
                    />
                    <span className="absolute top-[50%] left-[50%] w-[48px] h-[48px] translate-x-[-50%] translate-y-[-50%] bg-[#00000088] rounded-[50%] p-[14px]">
                      <FaLock className="h-[100%] w-[100%]" />
                    </span>
                  </div>
                  <p className="font-bold text-[13px] leading-[15px] text-[#f6f6f6] truncate">
                    فصل {item.season} قسمت {item.episode}
                  </p>
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Pops;
